// /api/decide — secure serverless backend for the DD app, running on Google's
// free-tier Gemini API instead of a paid model.
//
// The browser never sees an API key. It POSTs { prompt, images, enableSearch, cache }
// here, this function calls Gemini (via the official @google/genai SDK) using
// GEMINI_API_KEY (read from the server environment, never sent to the client),
// optionally turns on Gemini's built-in Google Search grounding tool, and returns
// { data, searched } — the exact same shape src/app.js already expects, so nothing
// on the front end needs to change.

const { GoogleGenAI } = require('@google/genai');

const MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

// Same instruction the app always sent its model: JSON-only, no fences, no chatter.
// Keeping this identical is what lets src/app.js's existing prompt builders
// (decidePrompt / challengePrompt / extractPrompt / mirrorPrompt — all still
// unchanged, still describing the user's profile and the exact JSON schema to
// return) work without any modification.
const SYSTEM_INSTRUCTION =
  'You must respond with ONLY a single valid JSON object that matches the schema described ' +
  'in the prompt. No markdown formatting, no code fences, no commentary before or after the JSON.';

let client = null;
function getClient() {
  if (!client) client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  return client;
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  if (!process.env.GEMINI_API_KEY) {
    return res.status(500).json({ error: 'server_missing_api_key' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (e) { body = {}; }
  }
  body = body || {};

  const prompt = String(body.prompt || '').slice(0, 20000);
  if (!prompt) return res.status(400).json({ error: 'missing_prompt' });

  const images = Array.isArray(body.images) ? body.images.slice(0, 4) : [];
  const enableSearch = !!body.enableSearch;

  // Multimodal input, same images the browser already base64-encodes before
  // sending (unchanged in src/app.js) — just translated into Gemini's part shape.
  const parts = [];
  for (const img of images) {
    if (img && img.data) {
      parts.push({ inlineData: { mimeType: img.mediaType || 'image/jpeg', data: img.data } });
    }
  }
  parts.push({ text: prompt });

  const config = {
    systemInstruction: SYSTEM_INSTRUCTION,
    maxOutputTokens: 2048,
  };
  // Gemini's Google Search grounding is a built-in server-side tool: when it's on,
  // Gemini decides on its own whether to search and does so inside the same call —
  // there's no manual tool-execute loop to write (unlike a custom function tool).
  if (enableSearch) config.tools = [{ googleSearch: {} }];

  try {
    const ai = getClient();
    const response = await ai.models.generateContent({
      model: MODEL,
      contents: [{ role: 'user', parts }],
      config,
    });

    const candidate = response.candidates && response.candidates[0];
    const text =
      typeof response.text === 'string'
        ? response.text
        : extractText(candidate);

    const grounding = candidate && candidate.groundingMetadata;
    const searched = !!(
      grounding &&
      ((grounding.webSearchQueries && grounding.webSearchQueries.length) ||
        (grounding.groundingChunks && grounding.groundingChunks.length))
    );

    const parsed = parseJsonLoose(text);
    return res.status(200).json({ data: parsed, searched });
  } catch (e) {
    const status = e && (e.status || (e.response && e.response.status));
    if (status === 429) return res.status(429).json({ error: 'rate_limited' });
    return res.status(500).json({ error: 'server_error', detail: String((e && e.message) || e).slice(0, 300) });
  }
};

function extractText(candidate) {
  const parts = candidate && candidate.content && candidate.content.parts;
  if (!Array.isArray(parts)) return '';
  return parts.map((p) => p.text || '').join('');
}

function parseJsonLoose(text) {
  if (!text) return null;
  let t = String(text).trim();
  // Strip ```json ... ``` or ``` ... ``` fences if the model added them despite instructions.
  const fence = t.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  if (fence) t = fence[1];
  try {
    return JSON.parse(t);
  } catch (e) {
    // Last resort: grab the outermost {...} span.
    const start = t.indexOf('{');
    const end = t.lastIndexOf('}');
    if (start !== -1 && end > start) {
      try { return JSON.parse(t.slice(start, end + 1)); } catch (e2) { return null; }
    }
    return null;
  }
}

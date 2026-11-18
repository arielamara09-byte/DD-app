{
'use strict';
const LANGS={
  he:{n:'עברית',dir:'rtl',ai:'natural, modern Israeli Hebrew',let:['א','ב','ג','ד','ה'],loc:'he-IL'},
  en:{n:'English',dir:'ltr',ai:'English',let:['A','B','C','D','E'],loc:'en-GB'},
  ar:{n:'العربية',dir:'rtl',ai:'clear, simple Modern Standard Arabic',let:['أ','ب','ج','د','هـ'],loc:'ar'},
  ru:{n:'Русский',dir:'ltr',ai:'natural Russian',let:['А','Б','В','Г','Д'],loc:'ru-RU'}
};
const T={
en:{
tab_decide:'Decide',tab_hist:'History',tab_me:'Me',
ob1_t:'Hi, I’m DD',ob1_s:'For small choices I decide for you. For big ones I help you find your own answer. A few details about you help me get it right.',
f_lang:'Language',f_name:'What’s your name?',f_gender:'How should I address you?',g_f:'Feminine',g_m:'Masculine',g_x:'Doesn’t matter',
ob2_t:'A little about you',ob2_s:'All optional. It helps with things like sizes, gifts and food.',
f_age:'Age',f_h:'Height (cm)',f_w:'Weight (kg)',f_bg:'Background or origin',f_bg_ph:'e.g. Moroccan, Russian, Ethiopian, Arab',f_bg_hint:'Used only when it truly matters, like food, holidays or colours. Never for generalisations.',
ob3_t:'Your life',f_loc:'Where you live',f_loc_ph:'e.g. Haifa',f_job:'Occupation',f_job_ph:'e.g. nurse, developer, student',
f_fam:'Family',fam_single:'Single',fam_partner:'In a relationship',fam_married:'Married',fam_kids:'Parent',
f_budget:'Spending style',b_save:'Saver',b_bal:'Balanced',b_treat:'Likes a treat',
f_vals:'What matters most to you?',s_vals:'Cares about',v_price:'Price',v_quality:'Quality',v_health:'Health',v_family:'Family',v_time:'Time',v_career:'Career',v_exp:'Experiences',v_stable:'Stability',v_style:'Looks & style',v_env:'Environment',
next:'Next',back:'Back',skip:'Skip',start:'Let’s start',save:'Save',cancel:'Cancel',ok:'OK',
private_db:'Saved privately to your account.',private_local:'Saved on this device only.',private_mem:'Kept only until you close this page.',
hi:'Hi {name},',hi0:'Hi,',ask:'What are you torn about?',q_ph:'e.g. Which TV should I buy for the living room?',
options:'The options',opt_ph:'Option {n}',add_opt:'Add an option',photo_add:'Add a photo',photo_off:'Photos can’t be sent to the AI in this view, but they’re kept with the decision.',
more:'Anything else I should know?',more_ph:'Budget, limits, what you’ve tried',
mode_auto:'Auto',mode_decide:'Decide for me',mode_reflect:'Help me think',
h_auto:'I’ll tell whether it’s an everyday choice or a life decision.',h_decide:'I’ll pick one and tell you why. No hedging.',h_reflect:'We’ll build your pros and cons step by step, until the answer comes from you.',
go_decide:'Decide!',go_reflect:'Let’s think it through',examples:'Try an example',
need_q:'First tell me what you’re deciding',need_two:'Add at least two options',
draft_t:'You have an open reflection',cont:'Continue',discard:'Discard',
noai_banner:'Preview mode: DD can only decide when it’s opened inside Claude.',
th_decide:'DD is deciding…',th_img:'Looking at your photos and deciding…',th_sub:'Usually a few seconds, a little longer with photos.',th_sort:'Organising what you said…',th_mirror:'Listening to what you said…',stop:'Stop',
verdict:'DD’s decision',stamp:'DECIDED',conf:'Confidence',why:'Why this one',trade:'What you give up',change_if:'What would change my mind',nstep:'Next step',not_chosen:'Not chosen',
locked:'This decision is locked. It only changes if there’s new information.',
going:'I’m going with it',going_badge:'You went with it',
sure:'Are you sure?',sure_r:['Yes. Nothing has changed since I decided, so neither has my answer.','Sure. Doubt is normal, but doubt isn’t new information.','Still {opt}. If there’s something you haven’t told me, tell me and I’ll reconsider.'],
changed:'Something changed',new_ph:'What’s new? e.g. The LG just dropped by ₪1,000',send:'Send',kept:'Decision stands',updated:'Decision updated',
same_before:'You asked me this on {date}. My answer hasn’t changed.',
sug_t:'This sounds like a big decision',sug_s:'With decisions like this, it’s better if the answer comes from you. I’ll help you think it through, step by step.',sug_go:'Help me think',sug_any:'Decide anyway',
new_dec:'New decision',
r_good:'Tell me why {opt} is a good option.',r_good_h:'Don’t filter. Every reason counts, even small ones.',r_bad:'Now tell me why {opt} is a bad option.',r_bad_h:'Small worries count too.',
r_lean:'Which way are you leaning right now?',r_lean_h:'Gut feeling. You can change it later.',r_nolean:'I don’t know yet',
r_why:'Why do you think {opt} is the right move?',r_why0:'What makes it hardest to choose?',
r_feel:'If you chose {opt}, how would it make you feel?',r_feel0:'Imagine you’ve already decided. What feeling comes up?',
feels:['Relief','Excitement','Calm','Pride','Worry','Sadness','Guilt','Pressure'],feel_ph:'In your own words, if you like',
r_q:'One deeper question',ans_ph:'Your answer',
r_board:'Your board',r_board_s:'These are your words. Use +/- to set how much each one matters.',pros:'For',cons:'Against',net:'Net',leading:'Leading',wless:'Less weight',wmore:'More weight',searched:'Checked online for current facts',
r_mirror:'What does DD hear from me?',r_mirror_t:'What I hear from you',r_tension:'Worth noticing',
r_final:'So, what’s your decision?',r_peace:'How at peace are you with it?',r_peace_s:'At peace',r_peace_low:'What would make it a 10?',r_save:'This is my decision',
r_yours:'Your decision',r_stamp:'YOURS',r_done:'You decided for yourself. That’s what makes it yours.',r_answers:'Your answers',
a_lean:'Leaning',a_why:'Why',a_feel:'Feelings',
local_lean:'By the weights you gave, you’re leaning towards {opt}.',local_even:'By the weights you gave, it’s genuinely balanced.',
empty_ans:'Even one short sentence is fine',
h_title:'Your decisions',h_empty:'No decisions yet. The first one is waiting.',tag_d:'Quick decision',tag_r:'Guided reflection',chose:'Chose',
out_q:'How did it turn out?',out_good:'Good',out_ok:'Okay',out_bad:'Regret it',
del:'Delete',del_q:'Delete this decision?',del_yes:'Yes, delete',
me_t:'My profile',edit:'Edit',learned:'What DD has learned about you',learned_0:'After a few decisions, things I learn about you will appear here. You can delete any of them.',stats:'{n} decisions',
clear:'Delete all my data',clear_q:'This deletes your profile and every decision. It can’t be undone.',
e_title:'Something went wrong',e_grant:'To decide, DD needs permission to use Claude. Allow it and try again.',e_rate:'Too many requests at once. Try again in a minute.',e_refused:'I can’t help with that one. Try phrasing it differently.',e_json:'The answer came back garbled. Try again.',e_img:'One of the photos isn’t supported. Try another one.',e_gen:'Connection problem. Try again.',e_noai:'This view has no access to Claude, so DD can’t decide here. Open DD inside Claude.',e_save:'Couldn’t save. The change is kept until you reload.',retry:'Try again',
c_t:'I’m here with you',c_s:'It sounds like you’re going through something hard. This isn’t something to decide alone, and you can talk to someone right now:',c_1:'ERAN emotional first aid: 1201 (24/7)',c_2:'SAHAR online chat support: sahar.org.il',c_3:'Emergency: MDA 101, Police 100',c_4:'Outside Israel: your local emergency number',
option:'Option',
ex:[{l:'TV',q:'Which TV should I buy for the living room?',o:['LG OLED 55"','Samsung QLED 65"'],c:'Budget up to ₪6,000. The room is very bright in the day and we mostly watch sport.'},{l:'Wedding outfit',q:'What should I wear to a friend’s Friday-afternoon garden wedding?',o:['Long green dress','Black trouser suit'],c:'It will be hot and I’ll be on my feet a lot.'},{l:'Dinner',q:'What should I order tonight?',o:['Sushi','Pizza'],c:'I had a heavy lunch.'},{l:'Career',q:'Leave a stable tech job to open a ceramics studio?',o:['Stay at my job','Open the studio'],c:''}]
},
he:{
tab_decide:'החלטה',tab_hist:'היסטוריה',tab_me:'אני',
ob1_t:'נעים מאוד, אני DD',ob1_s:'בהחלטות הקטנות אני מחליט בשבילך. בגדולות אני עוזר לך להגיע לתשובה בעצמך. כמה פרטים עליך יעזרו לי לדייק.',
f_lang:'שפה',f_name:'איך קוראים לך?',f_gender:'איך לפנות אליך?',g_f:'בלשון נקבה',g_m:'בלשון זכר',g_x:'לא משנה לי',
ob2_t:'קצת עליך',ob2_s:'הכול רשות. זה עוזר בדברים כמו מידות, מתנות ואוכל.',
f_age:'גיל',f_h:'גובה (ס״מ)',f_w:'משקל (ק״ג)',f_bg:'מוצא או רקע',f_bg_ph:'למשל: מרוקאי, רוסי, אתיופי, ערבי',f_bg_hint:'משמש רק כשזה באמת רלוונטי, כמו אוכל, חגים או התאמת צבעים. אף פעם לא להכללות.',
ob3_t:'החיים שלך',f_loc:'מקום מגורים',f_loc_ph:'למשל: חיפה',f_job:'עיסוק',f_job_ph:'למשל: אחות, מתכנת, סטודנטית',
f_fam:'מצב משפחתי',fam_single:{m:'רווק',f:'רווקה',n:'רווק/ה'},fam_partner:'בזוגיות',fam_married:{m:'נשוי',f:'נשואה',n:'נשוי/אה'},fam_kids:'הורה לילדים',
f_budget:'סגנון הוצאות',b_save:{m:'חסכן',f:'חסכנית',n:'חסכני/ת'},b_bal:{m:'מאוזן',f:'מאוזנת',n:'מאוזן/ת'},b_treat:{m:'אוהב לפנק',f:'אוהבת לפנק',n:'אוהב/ת לפנק'},
f_vals:'מה הכי חשוב לך?',s_vals:'חשוב לי',v_price:'מחיר',v_quality:'איכות',v_health:'בריאות',v_family:'משפחה',v_time:'זמן',v_career:'קריירה',v_exp:'חוויות',v_stable:'יציבות',v_style:'מראה וסטייל',v_env:'סביבה',
next:'המשך',back:'חזרה',skip:'דילוג',start:{m:'בוא נתחיל',f:'בואי נתחיל',n:'בואו נתחיל'},save:'שמירה',cancel:'ביטול',ok:'הבנתי',
private_db:'הפרטים נשמרים באופן פרטי בחשבון שלך.',private_local:'הפרטים נשמרים רק במכשיר הזה.',private_mem:'הפרטים נשמרים רק עד שהדף ייסגר.',
hi:'היי {name},',hi0:'היי,',ask:'על מה מתלבטים?',q_ph:'למשל: איזו טלוויזיה לקנות לסלון',
options:'האפשרויות',opt_ph:'אפשרות {n}',add_opt:'הוספת אפשרות',photo_add:'הוספת תמונה',photo_off:'בתצוגה הזו אי אפשר לשלוח תמונות לבינה המלאכותית, אבל הן נשמרות עם ההחלטה.',
more:'עוד משהו שכדאי שאדע?',more_ph:'תקציב, מגבלות, מה כבר ניסית',
mode_auto:'אוטומטי',mode_decide:'תחליט בשבילי',mode_reflect:'עזרה לחשוב',
h_auto:'אזהה לבד אם זו התלבטות יומיומית או החלטת חיים.',h_decide:'אבחר אפשרות אחת ואסביר למה. בלי היסוסים.',h_reflect:'נבנה יחד רשימת בעד ונגד, צעד אחר צעד, עד שהתשובה תגיע ממך.',
go_decide:'תחליט!',go_reflect:{m:'בוא נחשוב על זה',f:'בואי נחשוב על זה',n:'בואו נחשוב על זה'},examples:'דוגמאות לניסיון',
need_q:'קודם כתבו על מה מתלבטים',need_two:'צריך לפחות שתי אפשרויות',
draft_t:'יש לך התלבטות פתוחה',cont:'להמשיך',discard:'למחוק',
noai_banner:'מצב תצוגה: DD מחליט רק כשהוא פתוח בתוך Claude.',
th_decide:'DD מחליט…',th_img:'מסתכל על התמונות ומחליט…',th_sub:'בדרך כלל כמה שניות, עם תמונות קצת יותר.',th_sort:'מסדר את מה שאמרת…',th_mirror:'מקשיב למה שאמרת…',stop:'עצירה',
verdict:'ההחלטה של DD',stamp:'הוחלט',conf:'ביטחון',why:'למה דווקא זה',trade:'על מה מוותרים',change_if:'מה ישנה את ההחלטה',nstep:'הצעד הבא',not_chosen:'לא נבחר',
locked:'ההחלטה נעולה. היא משתנה רק אם יש מידע חדש.',
going:{m:'הולך על זה',f:'הולכת על זה',n:'הולכים על זה'},going_badge:'בחרת בזה',
sure:'בטוח?',sure_r:['כן. שום דבר לא השתנה מאז שהחלטתי, אז גם התשובה לא.','בטוח. ספק זה טבעי, אבל ספק הוא לא מידע חדש.',{m:'עדיין {opt}. אם יש משהו שלא סיפרת לי, ספר ואשקול מחדש.',f:'עדיין {opt}. אם יש משהו שלא סיפרת לי, ספרי ואשקול מחדש.',n:'עדיין {opt}. אם יש משהו שלא סיפרתם לי, ספרו ואשקול מחדש.'}],
changed:'משהו השתנה',new_ph:'מה חדש? למשל: ה-LG ירד ב-1,000 ש״ח',send:'שליחה',kept:'ההחלטה נשארת',updated:'ההחלטה עודכנה',
same_before:'כבר שאלת אותי את זה ב-{date}. התשובה שלי לא השתנתה.',
sug_t:'זו נשמעת כמו החלטה גדולה',sug_s:'בהחלטות כאלה עדיף שהתשובה תגיע ממך. אעזור לך לחשוב עליה צעד אחר צעד.',sug_go:'עזרה לחשוב',sug_any:'בכל זאת תחליט',
new_dec:'החלטה חדשה',
r_good:{m:'ספר לי למה {opt} זו אפשרות טובה.',f:'ספרי לי למה {opt} זו אפשרות טובה.',n:'ספרו לי למה {opt} זו אפשרות טובה.'},r_good_h:'בלי לסנן. כל סיבה נחשבת, גם קטנה.',
r_bad:{m:'עכשיו ספר לי למה {opt} זו אפשרות לא טובה.',f:'עכשיו ספרי לי למה {opt} זו אפשרות לא טובה.',n:'עכשיו ספרו לי למה {opt} זו אפשרות לא טובה.'},r_bad_h:'גם חששות קטנים נחשבים.',
r_lean:{m:'לאיזה כיוון אתה נוטה כרגע?',f:'לאיזה כיוון את נוטה כרגע?',n:'לאיזה כיוון אתם נוטים כרגע?'},r_lean_h:'תחושת בטן. אפשר לשנות אחר כך.',r_nolean:{m:'עוד לא יודע',f:'עוד לא יודעת',n:'עוד לא יודעים'},
r_why:{m:'למה אתה חושב ש{optp} זה הצעד הנכון?',f:'למה את חושבת ש{optp} זה הצעד הנכון?',n:'למה אתם חושבים ש{optp} זה הצעד הנכון?'},r_why0:'מה הכי מקשה עליך לבחור?',
r_feel:{m:'אם היית מחליט על {opt}, איך היית מרגיש?',f:'אם היית מחליטה על {opt}, איך היית מרגישה?',n:'אם הייתם מחליטים על {opt}, איך הייתם מרגישים?'},r_feel0:{m:'דמיין שכבר החלטת. איזו תחושה עולה?',f:'דמייני שכבר החלטת. איזו תחושה עולה?',n:'דמיינו שכבר החלטתם. איזו תחושה עולה?'},
feels:['הקלה','התרגשות','שקט','גאווה','חשש','עצב','אשמה','לחץ'],feel_ph:'במילים שלך, אם בא לך',
r_q:'שאלה לעומק',ans_ph:'התשובה שלך',
r_board:'הלוח שלך',r_board_s:'אלה המילים שלך. אפשר לשנות עם +/- כמה כל דבר שוקל.',pros:'בעד',cons:'נגד',net:'משקל נטו',leading:'מוביל',wless:'משקל נמוך יותר',wmore:'משקל גבוה יותר',searched:'נבדק אונליין מול מידע עדכני',
r_mirror:'מה DD שומע ממני?',r_mirror_t:'מה שאני שומע ממך',r_tension:'שווה לשים לב',
r_final:'אז מה ההחלטה שלך?',r_peace:{m:'כמה אתה שלם עם ההחלטה?',f:'כמה את שלמה עם ההחלטה?',n:'כמה אתם שלמים עם ההחלטה?'},r_peace_s:'שלמות',r_peace_low:'מה היה הופך את זה ל-10?',r_save:'זו ההחלטה שלי',
r_yours:'ההחלטה שלך',r_stamp:{m:'החלטת',f:'החלטת',n:'החלטתם'},r_done:{m:'החלטת בעצמך. זה מה שהופך את ההחלטה לשלך.',f:'החלטת בעצמך. זה מה שהופך את ההחלטה לשלך.',n:'החלטתם בעצמכם. זה מה שהופך את ההחלטה לשלכם.'},r_answers:'התשובות שלך',
a_lean:'נטייה',a_why:'למה',a_feel:'תחושות',
local_lean:{m:'לפי המשקלות שנתת, אתה נוטה ל{optp}.',f:'לפי המשקלות שנתת, את נוטה ל{optp}.',n:'לפי המשקלות שנתתם, אתם נוטים ל{optp}.'},local_even:'לפי המשקלות, הכפות באמת מאוזנות.',
empty_ans:'אפשר גם משפט אחד קצר',
h_title:'ההחלטות שלך',h_empty:'עוד אין כאן החלטות. הראשונה מחכה.',tag_d:'החלטה מהירה',tag_r:'חשיבה מודרכת',chose:'נבחר',
out_q:'איך זה יצא בסוף?',out_good:'טוב',out_ok:'בסדר',out_bad:{m:'מתחרט',f:'מתחרטת',n:'מתחרטים'},
del:'מחיקה',del_q:'למחוק את ההחלטה הזו?',del_yes:'כן, למחוק',
me_t:'הפרופיל שלי',edit:'עריכה',learned:'מה DD למד עליך',learned_0:'אחרי כמה החלטות יופיעו כאן דברים שלמדתי עליך. אפשר למחוק כל אחד מהם.',stats:'{n} החלטות',
clear:'מחיקת כל הנתונים שלי',clear_q:'הפרופיל וכל ההחלטות יימחקו. אי אפשר לבטל.',
e_title:'משהו השתבש',e_grant:'כדי להחליט, DD צריך אישור להשתמש ב-Claude. אשרו ונסו שוב.',e_rate:'יותר מדי בקשות בבת אחת. נסו שוב בעוד דקה.',e_refused:'בזה אני לא יכול לעזור. נסו לנסח אחרת.',e_json:'התשובה הגיעה משובשת. נסו שוב.',e_img:'אחת התמונות לא נתמכת. נסו תמונה אחרת.',e_gen:'בעיית חיבור. נסו שוב.',e_noai:'בתצוגה הזו אין גישה ל-Claude, אז DD לא יכול להחליט כאן. פתחו את DD בתוך Claude.',e_save:'השמירה נכשלה. השינוי יישאר עד לרענון הדף.',retry:'לנסות שוב',
c_t:'אני כאן איתך',c_s:'נשמע שעובר עליך משהו קשה. על זה לא מחליטים לבד, ואפשר לדבר עם מישהו כבר עכשיו:',c_1:'ער״ן, עזרה ראשונה נפשית: 1201 (24/7)',c_2:'סה״ר, תמיכה בצ׳אט: sahar.org.il',c_3:'בחירום: מד״א 101, משטרה 100',c_4:'מחוץ לישראל: מספר החירום המקומי',
option:'אפשרות',
ex:[{l:'טלוויזיה',q:'איזו טלוויזיה לקנות לסלון?',o:['LG OLED 55 אינץ׳','Samsung QLED 65 אינץ׳'],c:'תקציב עד 6,000 ש״ח. הסלון מואר מאוד ביום ורואים אצלנו בעיקר ספורט.'},{l:'מה ללבוש לחתונה',q:'מה ללבוש לחתונה של חברה, שישי בצהריים בגן אירועים?',o:['שמלה ירוקה ארוכה','חליפת מכנסיים שחורה'],c:'צפוי חם, ואהיה הרבה על הרגליים.'},{l:'ארוחת ערב',q:'מה להזמין הערב?',o:['סושי','פיצה'],c:'אכלתי ארוחת צהריים כבדה.'},{l:'קריירה',q:'לעזוב עבודה יציבה בהייטק כדי לפתוח סטודיו לקרמיקה?',o:['להישאר בעבודה','לפתוח את הסטודיו'],c:''}]
},
ar:{
tab_decide:'قرار',tab_hist:'السجل',tab_me:'أنا',
ob1_t:'أهلاً، أنا DD',ob1_s:'في الخيارات الصغيرة أقرر عنك. وفي الكبيرة أساعدك على الوصول إلى إجابتك بنفسك. بعض التفاصيل عنك تساعدني على الدقة.',
f_lang:'اللغة',f_name:'ما اسمك؟',f_gender:'كيف أخاطبك؟',g_f:'بصيغة المؤنث',g_m:'بصيغة المذكر',g_x:'لا يهم',
ob2_t:'قليلاً عنك',ob2_s:'كل الحقول اختيارية. تساعد في أمور مثل المقاسات والهدايا والطعام.',
f_age:'العمر',f_h:'الطول (سم)',f_w:'الوزن (كغ)',f_bg:'الأصل أو الخلفية',f_bg_ph:'مثلاً: مغربي، روسي، إثيوبي، عربي',f_bg_hint:'يُستخدم فقط عندما يهم فعلاً، مثل الطعام أو الأعياد أو الألوان. ولا يُستخدم أبداً للتعميم.',
ob3_t:'حياتك',f_loc:'مكان السكن',f_loc_ph:'مثلاً: الناصرة',f_job:'المهنة',f_job_ph:'مثلاً: ممرضة، مبرمج، طالب',
f_fam:'الحالة العائلية',fam_single:{m:'أعزب',f:'عزباء',n:'أعزب/عزباء'},fam_partner:'في علاقة',fam_married:{m:'متزوج',f:'متزوجة',n:'متزوج/ة'},fam_kids:'لدي أطفال',
f_budget:'أسلوب الإنفاق',b_save:{m:'مقتصد',f:'مقتصدة',n:'مقتصد/ة'},b_bal:{m:'متوازن',f:'متوازنة',n:'متوازن/ة'},b_treat:'أحب أن أدلل نفسي',
f_vals:'ما الأهم بالنسبة لك؟',s_vals:'يهمني',v_price:'السعر',v_quality:'الجودة',v_health:'الصحة',v_family:'العائلة',v_time:'الوقت',v_career:'المسيرة المهنية',v_exp:'التجارب',v_stable:'الاستقرار',v_style:'المظهر والأناقة',v_env:'البيئة',
next:'التالي',back:'رجوع',skip:'تخطٍّ',start:'لنبدأ',save:'حفظ',cancel:'إلغاء',ok:'حسناً',
private_db:'تُحفظ التفاصيل بشكل خاص في حسابك.',private_local:'تُحفظ على هذا الجهاز فقط.',private_mem:'تُحفظ فقط حتى إغلاق الصفحة.',
hi:'مرحباً {name}،',hi0:'مرحباً،',ask:{m:'ما الذي تحتار فيه؟',f:'ما الذي تحتارين فيه؟',n:'ما الذي تحتار فيه؟'},q_ph:'مثلاً: أي تلفاز أشتري لغرفة الجلوس؟',
options:'الخيارات',opt_ph:'خيار {n}',add_opt:'إضافة خيار',photo_add:'إضافة صورة',photo_off:'لا يمكن إرسال الصور إلى الذكاء الاصطناعي في هذا العرض، لكنها تُحفظ مع القرار.',
more:'هل هناك شيء آخر يجب أن أعرفه؟',more_ph:'الميزانية، القيود، ما جربته',
mode_auto:'تلقائي',mode_decide:'قرر عني',mode_reflect:'ساعدني أفكر',
h_auto:'سأعرف وحدي إن كان خياراً يومياً أم قرار حياة.',h_decide:'سأختار واحداً وأشرح السبب. بلا تردد.',h_reflect:'سنبني معاً قائمة الإيجابيات والسلبيات خطوة بخطوة، حتى تأتي الإجابة منك.',
go_decide:'قرر!',go_reflect:'لنفكر في الأمر',examples:'جرّب مثالاً',
need_q:'اكتب أولاً ما الذي تحتار فيه',need_two:'أضف خيارين على الأقل',
draft_t:'لديك تفكير مفتوح لم يكتمل',cont:'متابعة',discard:'حذف',
noai_banner:'وضع العرض: يستطيع DD اتخاذ القرارات فقط داخل Claude.',
th_decide:'DD يقرر…',th_img:'أنظر إلى الصور وأقرر…',th_sub:'عادةً بضع ثوانٍ، وأطول قليلاً مع الصور.',th_sort:'أرتب ما قلته…',th_mirror:'أصغي لما قلته…',stop:'إيقاف',
verdict:'قرار DD',stamp:'تقرّر',conf:'الثقة',why:'لماذا هذا بالذات',trade:'ما الذي تتنازل عنه',change_if:'ما الذي قد يغير رأيي',nstep:'الخطوة التالية',not_chosen:'لم يُختر',
locked:'هذا القرار مقفل. يتغير فقط إذا ظهرت معلومة جديدة.',
going:'سأمضي به',going_badge:'اخترت هذا',
sure:'متأكد؟',sure_r:['نعم. لم يتغير شيء منذ أن قررت، لذلك لم تتغير إجابتي.','متأكد. الشك طبيعي، لكنه ليس معلومة جديدة.',{m:'ما زلت أختار {opt}. إن كان هناك شيء لم تخبرني به، أخبرني وسأعيد التفكير.',f:'ما زلت أختار {opt}. إن كان هناك شيء لم تخبريني به، أخبريني وسأعيد التفكير.',n:'ما زلت أختار {opt}. إن كان هناك شيء لم تخبرني به، أخبرني وسأعيد التفكير.'}],
changed:'شيء ما تغيّر',new_ph:'ما الجديد؟ مثلاً: سعر LG انخفض 1,000 شيكل',send:'إرسال',kept:'القرار باقٍ',updated:'تم تحديث القرار',
same_before:'سألتني هذا في {date}. إجابتي لم تتغير.',
sug_t:'يبدو هذا قراراً كبيراً',sug_s:'في قرارات كهذه، الأفضل أن تأتي الإجابة منك. سأساعدك على التفكير فيها خطوة بخطوة.',sug_go:'ساعدني أفكر',sug_any:'قرر على أي حال',
new_dec:'قرار جديد',
r_good:{m:'أخبرني لماذا {opt} خيار جيد.',f:'أخبريني لماذا {opt} خيار جيد.',n:'أخبرني لماذا {opt} خيار جيد.'},r_good_h:'بلا تصفية. كل سبب مهم، حتى الصغير.',
r_bad:{m:'والآن أخبرني لماذا {opt} خيار سيئ.',f:'والآن أخبريني لماذا {opt} خيار سيئ.',n:'والآن أخبرني لماذا {opt} خيار سيئ.'},r_bad_h:'المخاوف الصغيرة مهمة أيضاً.',
r_lean:{m:'إلى أي اتجاه تميل الآن؟',f:'إلى أي اتجاه تميلين الآن؟',n:'إلى أي اتجاه تميل الآن؟'},r_lean_h:'إحساس داخلي. يمكن تغييره لاحقاً.',r_nolean:'لا أعرف بعد',
r_why:{m:'لماذا تعتقد أن {opt} هو الخطوة الصحيحة؟',f:'لماذا تعتقدين أن {opt} هو الخطوة الصحيحة؟',n:'لماذا تعتقد أن {opt} هو الخطوة الصحيحة؟'},r_why0:'ما أصعب شيء في الاختيار؟',
r_feel:{m:'لو اخترت {opt}، كيف ستشعر؟',f:'لو اخترتِ {opt}، كيف ستشعرين؟',n:'لو اخترت {opt}، كيف ستشعر؟'},r_feel0:{m:'تخيّل أنك قررت بالفعل. ما الشعور الذي يظهر؟',f:'تخيّلي أنك قررتِ بالفعل. ما الشعور الذي يظهر؟',n:'تخيّل أنك قررت بالفعل. ما الشعور الذي يظهر؟'},
feels:['ارتياح','حماس','هدوء','فخر','قلق','حزن','ذنب','ضغط'],feel_ph:'بكلماتك، إن أردت',
r_q:'سؤال أعمق',ans_ph:'إجابتك',
r_board:'لوحتك',r_board_s:'هذه كلماتك. استخدم +/- لتحديد أهمية كل سبب.',pros:'مع',cons:'ضد',net:'الصافي',leading:'الأقرب للفوز',wless:'أهمية أقل',wmore:'أهمية أكثر',searched:'تم التحقق عبر الإنترنت من معلومات حالية',
r_mirror:'ماذا يسمع DD مني؟',r_mirror_t:'ما أسمعه منك',r_tension:'يستحق الانتباه',
r_final:'إذن، ما قرارك؟',r_peace:{m:'إلى أي حد أنت مرتاح لهذا القرار؟',f:'إلى أي حد أنتِ مرتاحة لهذا القرار؟',n:'إلى أي حد أنت مرتاح لهذا القرار؟'},r_peace_s:'الارتياح',r_peace_low:'ما الذي يجعله 10؟',r_save:'هذا قراري',
r_yours:'قرارك',r_stamp:'قرارك',r_done:'قررت بنفسك. وهذا ما يجعل القرار قرارك.',r_answers:'إجاباتك',
a_lean:'الميل',a_why:'لماذا',a_feel:'المشاعر',
local_lean:'حسب الأوزان التي أعطيتها، أنت تميل إلى {opt}.',local_even:'حسب الأوزان التي أعطيتها، الكفتان متوازنتان فعلاً.',
empty_ans:'جملة قصيرة واحدة تكفي',
h_title:'قراراتك',h_empty:'لا قرارات بعد. القرار الأول ينتظر.',tag_d:'قرار سريع',tag_r:'تفكير موجَّه',chose:'الاختيار',
out_q:'كيف كانت النتيجة؟',out_good:'جيدة',out_ok:'لا بأس',out_bad:{m:'نادم',f:'نادمة',n:'نادم/ة'},
del:'حذف',del_q:'حذف هذا القرار؟',del_yes:'نعم، احذف',
me_t:'ملفي',edit:'تعديل',learned:'ما تعلّمه DD عنك',learned_0:'بعد بعض القرارات ستظهر هنا أشياء تعلمتها عنك. يمكنك حذف أي منها.',stats:'{n} قرارات',
clear:'حذف كل بياناتي',clear_q:'سيُحذف ملفك وكل القرارات. لا يمكن التراجع.',
e_title:'حدث خطأ',e_grant:'ليقرر، يحتاج DD إلى إذن لاستخدام Claude. اسمح بذلك وحاول مجدداً.',e_rate:'طلبات كثيرة في وقت واحد. حاول بعد دقيقة.',e_refused:'لا أستطيع المساعدة في هذا. جرّب صياغة أخرى.',e_json:'وصلت الإجابة مشوشة. حاول مجدداً.',e_img:'إحدى الصور غير مدعومة. جرّب صورة أخرى.',e_gen:'مشكلة في الاتصال. حاول مجدداً.',e_noai:'لا يتوفر Claude في هذا العرض، لذلك لا يستطيع DD أن يقرر هنا. افتح DD داخل Claude.',e_save:'تعذّر الحفظ. سيبقى التغيير حتى إعادة التحميل.',retry:'حاول مجدداً',
c_t:'أنا هنا معك',c_s:'يبدو أنك تمر بشيء صعب. هذا ليس أمراً تقرره وحدك، ويمكنك التحدث مع أحد الآن:',c_1:'عيران، إسعاف نفسي أولي: 1201 (على مدار الساعة)',c_2:'سهر، دعم عبر الدردشة: sahar.org.il',c_3:'في الطوارئ: نجمة داود الحمراء 101، الشرطة 100',c_4:'خارج إسرائيل: رقم الطوارئ المحلي',
option:'خيار',
ex:[{l:'تلفاز',q:'أي تلفاز أشتري لغرفة الجلوس؟',o:['LG OLED 55 إنش','Samsung QLED 65 إنش'],c:'الميزانية حتى 6,000 شيكل. الغرفة مضيئة جداً في النهار ونشاهد الرياضة غالباً.'},{l:'ملابس العرس',q:'ماذا ألبس لعرس صديقتي يوم الجمعة ظهراً في حديقة؟',o:['فستان أخضر طويل','بدلة سوداء'],c:'سيكون الجو حاراً وسأقف كثيراً.'},{l:'عشاء',q:'ماذا أطلب الليلة؟',o:['سوشي','بيتزا'],c:'تناولت غداءً ثقيلاً.'},{l:'مهنة',q:'هل أترك وظيفة مستقرة في الهايتك لأفتح مرسماً للخزف؟',o:['البقاء في الوظيفة','فتح المرسم'],c:''}]
},
ru:{
tab_decide:'Решение',tab_hist:'История',tab_me:'Я',
ob1_t:'Привет, я DD',ob1_s:'В мелочах я решаю за вас. В больших вопросах помогаю прийти к ответу самостоятельно. Немного информации о вас поможет мне быть точнее.',
f_lang:'Язык',f_name:'Как вас зовут?',f_gender:'Как к вам обращаться?',g_f:'В женском роде',g_m:'В мужском роде',g_x:'Неважно',
ob2_t:'Немного о вас',ob2_s:'Всё необязательно. Это помогает с размерами, подарками и едой.',
f_age:'Возраст',f_h:'Рост (см)',f_w:'Вес (кг)',f_bg:'Происхождение',f_bg_ph:'например: марокканское, русское, эфиопское, арабское',f_bg_hint:'Используется только когда это действительно важно: еда, праздники, цвета. Никогда для обобщений.',
ob3_t:'Ваша жизнь',f_loc:'Где вы живёте',f_loc_ph:'например: Хайфа',f_job:'Род занятий',f_job_ph:'например: медсестра, программист, студент',
f_fam:'Семья',fam_single:{m:'Холост',f:'Не замужем',n:'Без пары'},fam_partner:'В отношениях',fam_married:{m:'Женат',f:'Замужем',n:'В браке'},fam_kids:'Есть дети',
f_budget:'Стиль трат',b_save:'Экономлю',b_bal:'Сбалансированно',b_treat:'Люблю себя баловать',
f_vals:'Что для вас важнее всего?',s_vals:'Важно',v_price:'Цена',v_quality:'Качество',v_health:'Здоровье',v_family:'Семья',v_time:'Время',v_career:'Карьера',v_exp:'Впечатления',v_stable:'Стабильность',v_style:'Внешний вид',v_env:'Экология',
next:'Далее',back:'Назад',skip:'Пропустить',start:'Начнём',save:'Сохранить',cancel:'Отмена',ok:'Понятно',
private_db:'Данные хранятся приватно в вашем аккаунте.',private_local:'Данные хранятся только на этом устройстве.',private_mem:'Данные хранятся только до закрытия страницы.',
hi:'Привет, {name}!',hi0:'Привет!',ask:'Что вы не можете решить?',q_ph:'например: какой телевизор купить в гостиную?',
options:'Варианты',opt_ph:'Вариант {n}',add_opt:'Добавить вариант',photo_add:'Добавить фото',photo_off:'В этом режиме фото нельзя отправить ИИ, но они сохранятся вместе с решением.',
more:'Что ещё мне стоит знать?',more_ph:'Бюджет, ограничения, что уже пробовали',
mode_auto:'Авто',mode_decide:'Реши за меня',mode_reflect:'Помоги подумать',
h_auto:'Я сам пойму, бытовой это выбор или жизненное решение.',h_decide:'Выберу один вариант и объясню почему. Без колебаний.',h_reflect:'Шаг за шагом составим список за и против, пока ответ не придёт от вас.',
go_decide:'Решай!',go_reflect:'Давайте подумаем',examples:'Попробуйте пример',
need_q:'Сначала напишите, что вы решаете',need_two:'Нужно хотя бы два варианта',
draft_t:'У вас есть незавершённое размышление',cont:'Продолжить',discard:'Удалить',
noai_banner:'Режим просмотра: DD принимает решения только внутри Claude.',
th_decide:'DD решает…',th_img:'Смотрю на фото и решаю…',th_sub:'Обычно несколько секунд, с фото чуть дольше.',th_sort:'Привожу в порядок ваши ответы…',th_mirror:'Вслушиваюсь в ваши ответы…',stop:'Стоп',
verdict:'Решение DD',stamp:'РЕШЕНО',conf:'Уверенность',why:'Почему именно это',trade:'Чем вы жертвуете',change_if:'Что изменит моё решение',nstep:'Следующий шаг',not_chosen:'Не выбрано',
locked:'Решение зафиксировано. Оно изменится только при новой информации.',
going:'Беру это',going_badge:'Вы выбрали это',
sure:'Точно?',sure_r:['Да. С тех пор как я решил, ничего не изменилось, значит и ответ тот же.','Точно. Сомневаться нормально, но сомнение не новая информация.','По-прежнему {opt}. Если есть что-то, о чём вы не сказали, расскажите, и я подумаю снова.'],
changed:'Что-то изменилось',new_ph:'Что нового? например: LG подешевел на 1000 шекелей',send:'Отправить',kept:'Решение в силе',updated:'Решение обновлено',
same_before:'Вы уже спрашивали меня об этом {date}. Мой ответ не изменился.',
sug_t:'Похоже, это большое решение',sug_s:'В таких решениях лучше, чтобы ответ пришёл от вас. Я помогу всё обдумать шаг за шагом.',sug_go:'Помоги подумать',sug_any:'Всё равно реши',
new_dec:'Новое решение',
r_good:'Расскажите, почему {opt} это хороший вариант.',r_good_h:'Не фильтруйте. Любая причина важна, даже маленькая.',r_bad:'А теперь расскажите, почему {opt} это плохой вариант.',r_bad_h:'Маленькие опасения тоже считаются.',
r_lean:'К чему вы склоняетесь прямо сейчас?',r_lean_h:'По ощущению. Потом можно передумать.',r_nolean:'Пока не знаю',
r_why:'Почему вы думаете, что {opt} это правильный шаг?',r_why0:'Что мешает выбрать больше всего?',
r_feel:'Если бы вы выбрали {opt}, что бы вы почувствовали?',r_feel0:'Представьте, что вы уже решили. Какое чувство возникает?',
feels:['Облегчение','Радость','Спокойствие','Гордость','Тревога','Грусть','Вина','Давление'],feel_ph:'Своими словами, если хотите',
r_q:'Вопрос поглубже',ans_ph:'Ваш ответ',
r_board:'Ваша доска',r_board_s:'Это ваши слова. Используйте +/-, чтобы задать важность.',pros:'За',cons:'Против',net:'Итог',leading:'Лидирует',wless:'Меньше веса',wmore:'Больше веса',searched:'Проверено онлайн по актуальным данным',
r_mirror:'Что DD слышит от меня?',r_mirror_t:'Что я слышу от вас',r_tension:'Обратите внимание',
r_final:'Итак, какое ваше решение?',r_peace:'Насколько вы спокойны за это решение?',r_peace_s:'Спокойствие',r_peace_low:'Что сделало бы это десяткой?',r_save:'Это моё решение',
r_yours:'Ваше решение',r_stamp:'ВАШЕ',r_done:'Вы решили сами. Именно поэтому это решение ваше.',r_answers:'Ваши ответы',
a_lean:'Склонность',a_why:'Почему',a_feel:'Чувства',
local_lean:'Судя по весам, которые вы поставили, вы склоняетесь к варианту {opt}.',local_even:'Судя по весам, чаши действительно уравновешены.',
empty_ans:'Достаточно одного короткого предложения',
h_title:'Ваши решения',h_empty:'Решений пока нет. Первое уже ждёт.',tag_d:'Быстрое решение',tag_r:'Размышление',chose:'Выбор',
out_q:'Чем всё закончилось?',out_good:'Хорошо',out_ok:'Нормально',out_bad:'Жалею',
del:'Удалить',del_q:'Удалить это решение?',del_yes:'Да, удалить',
me_t:'Мой профиль',edit:'Изменить',learned:'Что DD узнал о вас',learned_0:'После нескольких решений здесь появится то, что я о вас узнал. Любой пункт можно удалить.',stats:'Решений: {n}',
clear:'Удалить все мои данные',clear_q:'Профиль и все решения будут удалены. Отменить нельзя.',
e_title:'Что-то пошло не так',e_grant:'Чтобы решать, DD нужно разрешение на использование Claude. Разрешите и попробуйте снова.',e_rate:'Слишком много запросов сразу. Попробуйте через минуту.',e_refused:'С этим я помочь не могу. Попробуйте сформулировать иначе.',e_json:'Ответ пришёл искажённым. Попробуйте снова.',e_img:'Одно из фото не поддерживается. Попробуйте другое.',e_gen:'Проблема со связью. Попробуйте снова.',e_noai:'Здесь нет доступа к Claude, поэтому DD не может решать. Откройте DD внутри Claude.',e_save:'Не удалось сохранить. Изменение сохранится до перезагрузки.',retry:'Попробовать снова',
c_t:'Я рядом',c_s:'Похоже, вам сейчас очень тяжело. Такое не решают в одиночку, и поговорить с кем-то можно прямо сейчас:',c_1:'ЭРАН, эмоциональная первая помощь: 1201 (круглосуточно)',c_2:'САХАР, поддержка в чате: sahar.org.il',c_3:'Экстренно: скорая МАДА 101, полиция 100',c_4:'За пределами Израиля: местный номер экстренной помощи',
option:'Вариант',
ex:[{l:'Телевизор',q:'Какой телевизор купить в гостиную?',o:['LG OLED 55"','Samsung QLED 65"'],c:'Бюджет до 6000 шекелей. Днём в комнате очень светло, смотрим в основном спорт.'},{l:'Наряд на свадьбу',q:'Что надеть на свадьбу подруги в пятницу днём в саду?',o:['Длинное зелёное платье','Чёрный брючный костюм'],c:'Будет жарко, и придётся много стоять.'},{l:'Ужин',q:'Что заказать сегодня вечером?',o:['Суши','Пиццу'],c:'Днём был плотный обед.'},{l:'Карьера',q:'Уйти со стабильной работы в хайтеке, чтобы открыть керамическую студию?',o:['Остаться на работе','Открыть студию'],c:''}]
}
};

const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const clone=o=>o==null?o:JSON.parse(JSON.stringify(o));
const nid=()=>'d'+Date.now().toString(36)+Math.random().toString(36).slice(2,7);
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const sgn=n=>(n>0?'+':'')+n;
function hashStr(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return (h>>>0).toString(36)}
function lsGet(k){try{return localStorage.getItem(k)}catch(e){return null}}
function lsSet(k,v){try{localStorage.setItem(k,typeof v==='string'?v:JSON.stringify(v));return true}catch(e){return false}}
function lsDel(k){try{localStorage.removeItem(k)}catch(e){}}
function canLS(){try{localStorage.setItem('dd_t','1');localStorage.removeItem('dd_t');return true}catch(e){return false}}

const VALS=['price','quality','health','family','time','career','exp','stable','style','env'];
const VALS_EN={price:'price',quality:'quality',health:'health',family:'family',time:'time',career:'career',exp:'experiences',stable:'stability',style:'looks and style',env:'the environment'};

let lang=LANGS[lsGet('dd_lang')]?lsGet('dd_lang'):'he';
let P=null,D=[];
let db=null,uid=null,sample=null,imgOK=false,maxImgs=4,store='mem';
const newDraft=()=>({q:'',ctx:'',mode:'auto',opts:[{label:'',img:null},{label:'',img:null}]});
const S={boot:true,view:'home',tab:'decide',draft:newDraft(),pd:null,obStep:0,cur:null,same:false,showNew:false,newInfo:'',cbusy:false,busy:null,err:null,R:null,sug:null,crisis:'',editing:false,justSaved:false};

const gnd=()=>(S.pd&&S.pd.gender)||(P&&P.gender)||'';
function pickG(s){if(s&&typeof s==='object'&&!Array.isArray(s)){const g=gnd();return s[g==='f'?'f':g==='m'?'m':'n']??s.m}return s}
function fill(s,v){return v?String(s).replace(/\{(\w+)\}/g,(_,x)=>v[x]??''):s}
function t(k,v){let s=T[lang]&&T[lang][k];if(s==null)s=T.en[k];if(s==null)return k;s=pickG(s);return typeof s==='string'?fill(s,v):s}
const LET=i=>LANGS[lang].let[i]||String(i+1);
const optp=l=>lang==='he'&&!/^[֐-׿]/.test(l)?'-'+l:l;
const ov=l=>({opt:l,optp:optp(l)});
const fmtD=ms=>{try{return new Intl.DateTimeFormat(LANGS[lang].loc,{day:'numeric',month:'short'}).format(ms)}catch(e){return new Date(ms).toLocaleDateString()}};
const cur=()=>D.find(x=>x.id===S.cur);
const dirOf=x=>{x=String(x||'');const r=(x.match(/[\u0590-\u08FF]/g)||[]).length,l=(x.match(/[A-Za-z\u0400-\u04FF]/g)||[]).length;return r>l?'rtl':l>r?'ltr':LANGS[lang].dir};

const sv=(p,c)=>`<svg viewBox="0 0 24 24" class="ic ${c||''}" aria-hidden="true">${p}</svg>`;
const I={
  coin:sv('<circle cx="12" cy="12" r="9"/><path class="fill" d="M12 3a9 9 0 0 0 0 18z"/>'),
  clock:sv('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
  user:sv('<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>'),
  cam:sv('<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>'),
  plus:sv('<path d="M12 5v14M5 12h14"/>'),
  x:sv('<path d="M6 6l12 12M18 6L6 18"/>'),
  lock:sv('<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>'),
  globe:sv('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"/>'),
  next:sv('<path d="M9 5l7 7-7 7"/>','fx'),
  trash:sv('<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>'),
  check:sv('<path d="M5 12l5 5 9-10"/>'),
  info:sv('<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>')
};
const COIN='<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="17" fill="#18151a"/><path d="M20 3a17 17 0 0 0 0 34z" fill="var(--blue)"/><circle cx="20" cy="20" r="17" fill="none" stroke="var(--ink)" stroke-width="2.5"/></svg>';
const COIN2='<svg viewBox="0 0 40 40" class="coin" aria-hidden="true"><circle cx="20" cy="20" r="18" fill="var(--blue)"/><path d="M20 2a18 18 0 0 0 0 36z" fill="var(--coral)"/></svg>';
const TAG='DECIDE OR DIE';
function LOGO(lg){
  const mark=`<svg class="lmark" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
<rect x="1.75" y="1.75" width="44.5" height="44.5" rx="13.5" fill="#060405"/>
<rect x="1.75" y="1.75" width="44.5" height="44.5" rx="13.5" fill="none" stroke="var(--blue)" stroke-width="2"/>
<text x="24" y="30.5" text-anchor="middle" font-family="Rubik,sans-serif" font-weight="800" font-size="19" letter-spacing="-.5" fill="var(--blue)">DD</text>
<rect x="15" y="34.5" width="18" height="2.2" rx="1.1" fill="var(--blue)"/>
</svg>`;
  if(!lg)return `<div class="lockup">${mark}</div>`;
  return `<div class="lockup lg">${mark}<div class="lword"><b>DD</b><i dir="ltr">${TAG}</i></div></div>`;
}

/* ---------- images ---------- */
function toBlob(c,type,q){return new Promise(r=>c.toBlob(r,type,q))}
async function loadImg(file){
  if(window.createImageBitmap){try{return await createImageBitmap(file,{imageOrientation:'from-image'})}catch(e){}}
  const url=URL.createObjectURL(file);
  try{return await new Promise((res,rej)=>{const i=new Image();i.onload=()=>res(i);i.onerror=rej;i.src=url})}
  finally{setTimeout(()=>URL.revokeObjectURL(url),3000)}
}
function drawTo(src,max){const w=src.width,h=src.height,s=Math.min(1,max/Math.max(w,h));const c=document.createElement('canvas');c.width=Math.max(1,Math.round(w*s));c.height=Math.max(1,Math.round(h*s));c.getContext('2d').drawImage(src,0,0,c.width,c.height);return c}
async function prepImage(file){
  const src=await loadImg(file);
  const blob=await toBlob(drawTo(src,1280),'image/jpeg',.86);
  const thumb=drawTo(src,240).toDataURL('image/jpeg',.72);
  if(!blob)throw new Error('img');
  return {blob,thumb,hash:hashStr(thumb)};
}

/* ---------- web grounding: executed server-side in /api/decide, this just flags intent ---------- */
function searchTool(onUsed){
  return {name:'web_search',onUsed};
}

/* ---------- storage: private per-person db, with device fallback ---------- */
const profRef=()=>db.doc('data/users/'+uid+'/profile');
const decCol=()=>profRef().collection('decisions');
const Q={};
function persistLocal(){if(store!=='local')return;lsSet('dd_p',JSON.stringify(P));lsSet('dd_d',D.slice(0,60))}
function enqueue(k,fn){
  const p=(Q[k]||Promise.resolve()).then(fn);
  Q[k]=p.catch(()=>{});
  p.catch(e=>{console.warn('DD save',e);if(e&&e.code==='invalid_argument'&&store==='db'&&canLS()){store='local';persistLocal()}else toast(t('e_save'))});
  return p;
}
function saveProfile(){if(!P)return;if(store==='db')enqueue('p',()=>profRef().set(clone(P)));else persistLocal()}
function saveDec(d){if(store==='db')enqueue(d.id,()=>decCol().doc(d.id).set(clone(d)));else persistLocal()}
function removeDec(id){D=D.filter(x=>x.id!==id);if(store==='db')enqueue(id,()=>decCol().doc(id).delete());else persistLocal()}
async function wipe(){
  const ids=D.map(d=>d.id);P=null;D=[];
  if(store==='db'){for(const id of ids){await enqueue(id,()=>decCol().doc(id).delete()).catch(()=>{})}await enqueue('p',()=>profRef().delete()).catch(()=>{})}
  lsDel('dd_p');lsDel('dd_d');lsDel('dd_r');
}
function withTimeout(p,ms){return Promise.race([p,new Promise((_,rej)=>setTimeout(()=>rej({code:'timeout'}),ms))])}
async function loadData(){
  if(store==='db'){
    try{
      const [ps,qs]=await withTimeout(Promise.all([profRef().get(),decCol().orderBy('createdAt','desc').limit(300).get()]),10000);
      P=ps.exists?clone(ps.data()):null;D=qs.docs.map(x=>clone(x.data()));return;
    }catch(e){console.warn('DD load',e);store=canLS()?'local':'mem'}
  }
  if(store==='local'){
    try{P=JSON.parse(lsGet('dd_p')||'null')}catch(e){P=null}
    try{D=JSON.parse(lsGet('dd_d')||'[]')||[]}catch(e){D=[]}
  }
}
let rT;
function saveR(){if(S.R)lsSet('dd_r',S.R);else lsDel('dd_r')}
function saveRSoon(){clearTimeout(rT);rT=setTimeout(saveR,500)}
function learn(a){
  if(!P||!Array.isArray(a))return;P.learned=P.learned||[];let ch=false;
  for(const x of a){const s=String(x||'').trim().slice(0,140);if(s&&!P.learned.some(y=>y.toLowerCase()===s.toLowerCase())){P.learned.push(s);ch=true}}
  if(ch){P.learned=P.learned.slice(-30);saveProfile()}
}

/* ---------- prompts ---------- */
const today=()=>new Date().toISOString().slice(0,10);
function genderRule(){const g=P&&P.gender;return g==='f'?'Address the user in the feminine grammatical form.':g==='m'?'Address the user in the masculine grammatical form.':'Address the user with gender-neutral or plural forms.'}
function profileText(skip){
  const p=P||{},L=[];const add=(k,v)=>{if(v)L.push(k+': '+v)};
  add('Name',p.name);add('Age',p.age);add('Height',p.h&&p.h+' cm');add('Weight',p.w&&p.w+' kg');
  add('Background/origin (self-described)',p.bg);add('Lives in',p.loc);add('Occupation',p.job);
  add('Family',{single:'single',partner:'in a relationship',married:'married',kids:'has children'}[p.fam]);
  add('Spending style',{save:'frugal',bal:'balanced',treat:'likes to treat themselves'}[p.budget]);
  if(p.vals&&p.vals.length)add('Cares most about',p.vals.map(v=>VALS_EN[v]||v).join(', '));
  if(p.learned&&p.learned.length)L.push('Learned from earlier dilemmas:\n'+p.learned.slice(-15).map(x=>'- '+x).join('\n'));
  const past=D.filter(d=>d.id!==skip).slice(0,8).map(d=>{const o=d.opts&&d.result&&d.opts[d.result.choice];return '- '+new Date(d.createdAt).toISOString().slice(0,10)+': '+(d.title||d.q)+' -> '+(o?o.label:'?')+(d.mode==='reflect'?' (their own choice)':' (DD decided)')+(d.outcome?'; outcome: '+{good:'happy with it',ok:'okay',bad:'regrets it'}[d.outcome]:'')});
  if(past.length)L.push('Recent decisions:\n'+past.join('\n'));
  return L.length?L.join('\n'):'(no profile details given)';
}
const optList=opts=>opts.map((o,i)=>(i+1)+'. '+o.label).join('\n');
function decidePrompt(dr,mode,imgIdx){
  return `You are DD, the decision-maker inside a mobile app for people who struggle to decide. The user wants you to choose for them, clearly and confidently, so they can stop going round in circles.

Today: ${today()}

USER PROFILE
${profileText()}

DILEMMA
Question: ${dr.q||'(no question text; infer it from the options)'}
Options:
${dr.opts.length?optList(dr.opts):'(none given)'}
${dr.ctx?'Extra context from the user: '+dr.ctx:''}
${imgIdx.length?`IMAGES: ${imgIdx.length} photo(s) are attached in this order: ${imgIdx.map((n,k)=>'image '+(k+1)+' = option '+(n+1)).join(', ')}. Study them closely (style, colour, fit, condition, materials, visible specs or prices) and use what you see in your reasons.`:''}

RULES
1. Choose exactly one option. Never answer "it depends" and never hand the choice back. If the options are close, still choose, and show it with a confidence of 55-65.
2. Make the reasons specific to this person and these options, never generic. Use a profile detail only where it truly matters: height and weight only for size or fit; background only for clearly cultural matters such as food, holidays or colours that suit them; never stereotype.
3. If fewer than two options were given, infer the two most natural options from the question and put them in "options".
${mode==='auto'?'4. If this is a major life decision (career change, relationship, marriage or divorce, having children, moving home or country, a serious health choice, or a large financial commitment), do not decide: set "mode" to "reflect", fill "options", and explain in "reflect_why" in one warm sentence why it deserves their own reflection.':'4. The user explicitly asked you to decide, so decide even if it is a big decision, and add a one-sentence "caveat" if it is a major life choice.'}
5. If the user's words suggest a risk of suicide, self-harm, abuse or danger, set "safety" to "crisis", write a brief, caring "message", and do not decide.
6. For health, legal or large money questions add a one-sentence "caveat" recommending the right professional.
7. "learned": 0-2 short, lasting facts about the user's tastes, needs or situation that this dilemma clearly reveals. Not the choice itself and nothing sensitive. Empty array if nothing new.
8. You have a web_search tool. Call it whenever the dilemma names real, specific products, brands, models, places or current events (e.g. comparing two named TV models) and you are not fully sure of the facts — do not guess at specs, release dates or other checkable facts when you can check. It searches an encyclopedia, so it has background and general specs but not live prices or this week's news; if it returns nothing useful, say so plainly in "caveat" instead of inventing numbers.
9. Write every text value in ${LANGS[lang].ai}, in short, plain, friendly sentences. ${genderRule()}

Reply with only this JSON:
{"mode":"decide","safety":"ok","message":"","title":"2-5 word title for this dilemma","options":["option 1 name","option 2 name"],"choice":0,"headline":"one-sentence verdict that names the choice","confidence":78,"reasons":["reason","reason","reason"],"tradeoff":"what they honestly give up with this choice","change_if":"the specific new fact that would make you change your mind","next_step":"one concrete next action","caveat":"","learned":[],"reflect_why":""}
"choice" is the 0-based index into "options".`;
}
function challengePrompt(d,msg){
  const r=d.result,o=d.opts[r.choice];
  return `You are DD, the decision-maker inside a mobile app. Earlier you made a decision for this user, and you stand behind your decisions: you do not flip-flop.

Today: ${today()}

USER PROFILE
${profileText(d.id)}

DILEMMA
Question: ${d.q||d.title}
Options:
${optList(d.opts)}
${d.ctx?'Context: '+d.ctx:''}

YOUR DECISION
Chose: ${o?o.label:'?'}
Verdict: ${r.headline}
Reasons: ${r.reasons.join(' | ')}
You said this would change your mind: ${r.change_if||'-'}
${(d.thread||[]).length?'CONVERSATION SINCE\n'+d.thread.slice(-8).map(m=>(m.r==='me'?'User: ':'DD: ')+m.t).join('\n'):''}

THE USER NOW SAYS
"${msg}"

RULES
1. Doubt, pressure, asking again, wanting reassurance, or restating facts you already had are NOT new information. In that case keep the decision: "changed": false, and reply kindly and firmly in 1-2 sentences.
2. Change only if the message adds a real new fact that shifts the balance (a new price, a new constraint, a new option, something you misunderstood). Then set "changed": true and fill in the full new decision. A newly mentioned option may be appended to "options" and chosen.
3. You have a web_search tool. If the user names a new real product, brand or model you are not sure about, you may check it instead of guessing. It draws on an encyclopedia, so treat it as background, not live prices.
4. If the message suggests a risk of suicide, self-harm, abuse or danger, set "safety" to "crisis" and write a brief, caring "message".
5. Write every text value in ${LANGS[lang].ai}. ${genderRule()}

Reply with only this JSON:
{"changed":false,"reply":"","safety":"ok","message":"","options":["current option names in order, plus any new one"],"choice":0,"headline":"","confidence":0,"reasons":[],"tradeoff":"","change_if":"","next_step":"","learned":[]}`;
}
function answersText(R){
  return R.opts.map((o,i)=>`Option ${i+1} "${o.label}"\n- Why it's good: ${R.good[i]||'-'}\n- Why it's bad: ${R.bad[i]||'-'}`).join('\n')+
  `\nLeaning towards: ${R.lean>=0?R.opts[R.lean].label:'not sure yet'}\n${R.lean>=0?'Why that is the right move':'What makes it hard'}: ${R.why||'-'}\nFeelings: ${[...R.feel,R.feelText].filter(Boolean).join(', ')||'-'}`;
}
function extractPrompt(R){
  return `You are DD, a gentle guide inside a decision app. In this mode you do NOT decide for the user: you help them hear their own reasons.

USER PROFILE
${profileText()}

DILEMMA
Question: ${R.q||'(not given)'}
Options:
${optList(R.opts)}
${R.ctx?'Context: '+R.ctx:''}

THE USER'S OWN ANSWERS
${answersText(R)}

TASKS
1. Turn their answers into short pros and cons for each option, keeping their own words (at most 9 words each, at most 5 per list). Split combined reasons. Do not add reasons they did not give.
2. For every pro and con, assign "w": a 1-10 weight for how much it should impact the decision, based on its real impact and on the user's profile (what they said matters most to them, their situation). 10 = decisive, 1 = barely matters. Judge impact yourself; do not just copy the order they were said in.
3. Write exactly 2 short, open, non-leading questions that help them notice something they have not said yet: a value conflict, the fear underneath, what they would tell a friend, how they would feel in five years, or what they would regret.
4. If anything suggests a risk of suicide, self-harm, abuse or danger, set "safety" to "crisis" and write a brief, caring "message".
5. "title": a 2-5 word title for this dilemma. "learned": 0-2 short, lasting facts about the user that their answers clearly reveal, nothing sensitive.
6. Write all text in ${LANGS[lang].ai}. ${genderRule()}

Reply with only this JSON, where pros[i] and cons[i] belong to option i+1:
{"title":"","pros":[[{"t":"...","w":7}],[{"t":"...","w":4}]],"cons":[[{"t":"...","w":5}],[{"t":"...","w":6}]],"questions":["...","..."],"safety":"ok","message":"","learned":[]}`;
}
function mirrorPrompt(R,sc){
  return `You are DD, a gentle guide inside a decision app. You do NOT decide for the user. Your job now is to reflect back what their own words and weights show, so they reach the conclusion themselves and feel at peace with it.

USER PROFILE
${profileText()}

DILEMMA
Question: ${R.q||'(not given)'}

THEIR BOARD (weights 1-10, impact-scored; net = pros minus cons)
${R.opts.map((o,i)=>`Option ${i+1} "${o.label}" (net ${sgn(sc[i])})\n  For: ${(R.pros[i]||[]).map(x=>x.t+' ['+x.w+']').join('; ')||'-'}\n  Against: ${(R.cons[i]||[]).map(x=>x.t+' ['+x.w+']').join('; ')||'-'}`).join('\n')}

THEIR ANSWERS
${answersText(R)}
${R.questions.map((q,j)=>`Q: ${q}\nA: ${R.qa[j]||'-'}`).join('\n')}

TASK
- "mirror": 3-4 short sentences, in second person, reflecting back what they care about most and which option their own answers point to (or that it is genuinely balanced). Echo their words. Add no new arguments.
- "lean": 0-based index of the option their own answers point to, or -1 if genuinely balanced.
- "tension": one sentence naming a gap between their weights and their feelings, or between what they say and where they lean; "" if none.
- "question": one short question that helps them commit.
- Never tell them what to do. If anything suggests a risk of suicide, self-harm, abuse or danger, set "safety" to "crisis" and write a brief, caring "message".
- Write in ${LANGS[lang].ai}. ${genderRule()}

Reply with only this JSON:
{"mirror":"","lean":0,"tension":"","question":"","safety":"ok","message":""}`;
}

/* ---------- views ---------- */
const letOrImg=(o,i,cls)=>o&&o.thumb?`<img src="${o.thumb}" alt="">`:`<span class="let ${cls||''}">${LET(i)}</span>`;
const privNote=()=>`<p class="note">${t(store==='db'?'private_db':store==='local'?'private_local':'private_mem')}</p>`;
const langChips=()=>Object.entries(LANGS).map(([k,v])=>`<button class="chip ${lang===k?'on':''}" data-a="lang" data-v="${k}" lang="${k}" aria-pressed="${lang===k}">${v.n}</button>`).join('');
function vTabs(){
  return [['decide',I.coin,'tab_decide'],['hist',I.clock,'tab_hist'],['me',I.user,'tab_me']].map(([k,ic,l])=>`<button data-a="tab" data-v="${k}" class="${S.tab===k?'on':''}" ${S.tab===k?'aria-current="page"':''}><i class="ti">${ic}</i><span>${t(l)}</span></button>`).join('');
}
function inp(k,o){o=o||{};return `<label class="f"><span>${t('f_'+k)}</span><input class="fi" id="p_${k}" data-p="${k}" type="text" ${o.num?'inputmode="numeric"':''} dir="auto" maxlength="${o.num?3:80}" autocomplete="off" value="${esc(S.pd[k]??'')}" placeholder="${o.ph?esc(t(o.ph)):''}">${o.hint?`<small>${t(o.hint)}</small>`:''}</label>`}
function chipset(k,vals,pre,multi){
  return `<div class="f"><span>${t('f_'+k)}</span><div class="chips">${vals.map(v=>{const on=multi?(S.pd[k]||[]).includes(v):S.pd[k]===v;return `<button type="button" class="chip ${on?'on':''}" data-a="pick" data-k="${k}" data-v="${v}" ${multi?'data-m="1"':''} aria-pressed="${on}">${esc(t(pre+v))}</button>`}).join('')}</div></div>`;
}
const gBasic=()=>inp('name')+chipset('gender',['f','m','x'],'g_');
const gBody=()=>`<div class="g3">${inp('age',{num:1})}${inp('h',{num:1})}${inp('w',{num:1})}</div>${inp('bg',{ph:'f_bg_ph',hint:'f_bg_hint'})}`;
const gLife=()=>inp('loc',{ph:'f_loc_ph'})+inp('job',{ph:'f_job_ph'})+chipset('fam',['single','partner','married','kids'],'fam_')+chipset('budget',['save','bal','treat'],'b_')+chipset('vals',VALS,'v_',true);

function vOb(){
  const st=S.obStep;let hero,body;
  if(st===0){hero=`<section class="hero ob">${LOGO(true)}<h1>${t('ob1_t')}</h1><p>${t('ob1_s')}</p></section>`;body=`<div class="f"><span>${t('f_lang')}</span><div class="chips">${langChips()}</div></div>${gBasic()}`}
  else if(st===1){hero=`<section class="hero ob"><h1>${t('ob2_t')}</h1><p>${t('ob2_s')}</p></section>`;body=gBody()}
  else{hero=`<section class="hero ob"><h1>${t('ob3_t')}</h1></section>`;body=gLife()}
  return `${hero}<section class="pad">${body}${privNote()}<div class="obnav">${st>0?`<button class="sec sm" data-a="obback">${t('back')}</button>`:''}<button class="ghost" data-a="obskip">${t('skip')}</button><button class="cta" data-a="obnext">${st<2?t('next'):t('start')}${I.next}</button></div><div class="dotsr">${[0,1,2].map(i=>`<i class="${i===st?'on':''}"></i>`).join('')}</div></section>`;
}

function optRow(o,i,n){
  const ph=esc(t('opt_ph',{n:LET(i)}));
  return `<div class="opt"><span class="let">${LET(i)}</span><input class="oi" id="o${i}" data-o="${i}" dir="auto" maxlength="120" autocomplete="off" value="${esc(o.label)}" placeholder="${ph}" aria-label="${ph}"><span class="ph ${o.img?'has':''}">${o.img?`<img src="${o.img.thumb}" alt="">`:I.cam}<input type="file" accept="image/*" data-f="${i}" aria-label="${esc(t('photo_add'))}">${o.img?`<button class="phx" data-a="rmphoto" data-i="${i}" aria-label="${esc(t('del'))}">${I.x}</button>`:''}</span>${n>2?`<button class="ib" data-a="rmopt" data-i="${i}" aria-label="${esc(t('del'))}">${I.x}</button>`:''}</div>`;
}
function vHome(){
  const d=S.draft,m=d.mode,anyImg=d.opts.some(o=>o.img);
  return `<section class="hero"><p class="hi">${esc(P&&P.name?t('hi',{name:P.name}):t('hi0'))}</p><h1>${t('ask')}</h1><textarea class="qbox" id="dq" data-d="q" rows="3" dir="auto" maxlength="600" placeholder="${esc(t('q_ph'))}" aria-label="${esc(t('ask'))}">${esc(d.q)}</textarea></section>
<section class="pad">
${!sample?`<p class="banner">${I.info}<span>${t('noai_banner')}</span></p>`:''}
${S.R?`<div class="draft"><b>${t('draft_t')}</b><span class="hint">${esc(S.R.q||S.R.opts.map(o=>o.label).join(' / '))}</span><div class="row"><button class="sec sm" data-a="rcont">${t('cont')}</button><button class="ghost danger" data-a="rdiscard">${t('discard')}</button></div></div>`:''}
<h2 class="sh">${t('options')}</h2>
${d.opts.map((o,i)=>optRow(o,i,d.opts.length)).join('')}
${d.opts.length<4?`<button class="add" data-a="addopt">${I.plus}${t('add_opt')}</button>`:''}
${anyImg&&!imgOK?`<p class="hint">${t('photo_off')}</p>`:''}
<label class="f" style="margin-top:20px"><span>${t('more')}</span><textarea class="ta" id="dctx" data-d="ctx" rows="2" style="min-height:80px" dir="auto" maxlength="800" placeholder="${esc(t('more_ph'))}">${esc(d.ctx)}</textarea></label>
<div class="seg" role="radiogroup">${['auto','decide','reflect'].map(k=>`<button role="radio" aria-checked="${m===k}" class="${m===k?'on':''}" data-a="mode" data-v="${k}">${t('mode_'+k)}</button>`).join('')}</div>
<p class="hint">${t('h_'+m)}</p>
<button class="cta" data-a="go">${I.coin}${m==='reflect'?t('go_reflect'):t('go_decide')}</button>
<div class="ex"><h2 class="sh">${t('examples')}</h2><div class="chips">${t('ex').map((x,i)=>`<button class="chip" data-a="ex" data-i="${i}">${esc(x.l)}</button>`).join('')}</div></div>
</section>`;
}

function vBusy(){
  const b=S.busy,o=b.opts||[];
  const vs=o.length===2?`<div class="vs"><div class="vo">${letOrImg(o[0],0)}<span dir="${dirOf(o[0].label)}">${esc(o[0].label)}</span></div><div class="flip" aria-hidden="true"></div><div class="vo">${letOrImg(o[1],1)}<span dir="${dirOf(o[1].label)}">${esc(o[1].label)}</span></div></div>`
    :`<div class="flip" aria-hidden="true" style="margin-bottom:14px"></div>${o.length?`<div class="vs">${o.map((x,i)=>`<div class="vo">${letOrImg(x,i)}<span dir="${dirOf(x.label)}">${esc(x.label)}</span></div>`).join('')}</div>`:''}`;
  return `<section class="think" aria-busy="true">${vs}<h2>${esc(b.label)}</h2>${b.sub?`<p class="hint">${esc(b.sub)}</p>`:''}<button class="ghost" data-a="stop">${t('stop')}</button></section>`;
}
function vErr(){
  return `<section class="pad"><div class="card"><h2>${t('e_title')}</h2><p>${esc(S.err.msg)}</p>${S.err.retry?`<button class="cta" data-a="retry">${t('retry')}</button>`:''}<button class="sec" style="margin-top:10px" data-a="errback">${t('back')}</button></div></section>`;
}
function vCrisis(){
  return `<section class="pad"><div class="card"><h2>${t('c_t')}</h2>${S.crisis?`<p>${esc(S.crisis)}</p>`:''}<p>${t('c_s')}</p><ul><li dir="auto">${t('c_1')}</li><li dir="auto">${t('c_2')}</li><li dir="auto">${t('c_3')}</li><li dir="auto">${t('c_4')}</li></ul><button class="cta" data-a="tohome">${t('ok')}</button></div></section>`;
}
function vSuggest(){
  const s=S.sug||{};
  return `<section class="pad"><div class="card sug">${COIN2}<h2>${t('sug_t')}</h2>${s.why?`<p>${esc(s.why)}</p>`:''}<p class="hint">${t('sug_s')}</p><button class="cta" data-a="sugguide">${t('sug_go')}</button><button class="sec" style="margin-top:10px" data-a="sugany">${t('sug_any')}</button><button class="ghost" style="margin-top:8px" data-a="tohome">${t('back')}</button></div></section>`;
}
function vOutcome(d){
  return `<div class="out"><p>${t('out_q')}</p><div class="chips">${['good','ok','bad'].map(k=>`<button class="chip ${d.outcome===k?'on':''}" data-a="out" data-v="${k}" aria-pressed="${d.outcome===k}">${t('out_'+k)}</button>`).join('')}</div></div>
<div class="foot"><button class="ghost" data-a="newdec">${I.plus}${t('new_dec')}</button><button class="ghost danger" data-a="del">${I.trash}${t('del')}</button></div>`;
}
const blk=(h,v)=>`<div class="blk"><b>${h}</b><span dir="${dirOf(v)}">${esc(v)}</span></div>`;
function vResult(){
  const d=cur();if(!d){S.view='home';return vHome()}
  if(d.mode==='reflect')return vRsum(d);
  const r=d.result,c=r.choice,o=d.opts[c]||{label:'?'},th=d.thread||[];
  const others=d.opts.filter((x,i)=>i!==c).map(x=>x.label);
  return `<section class="pad">
${S.same?`<p class="banner">${I.lock}<span>${t('same_before',{date:fmtD(d.createdAt)})}</span></p>`:''}
${d.q?`<p class="qline" dir="${dirOf(d.q)}">${esc(d.q)}</p>`:''}
<article class="tk">
<div class="tk-hd"><span>${t('verdict')}<small>${fmtD(d.createdAt)}</small></span><span class="stamp">${t('stamp')}</span></div>
<div class="tk-ch">${letOrImg(o,c)}<h1 dir="${dirOf(o.label)}">${esc(o.label)}</h1></div>
<p class="tk-hl" dir="${dirOf(r.headline)}">${esc(r.headline)}</p>
<div class="cf"><span>${t('conf')}</span><div class="mt"><i style="width:${r.confidence}%"></i></div><b dir="ltr">${r.confidence}%</b></div>
${r.searched?`<p class="srch" style="margin:0 18px 10px">${I.globe}${t('searched')}</p>`:''}
<div class="tk-cut"></div>
<div class="tk-bd">
${r.reasons.length?`<h3>${t('why')}</h3><ol class="rs">${r.reasons.map(x=>`<li><span dir="${dirOf(x)}">${esc(x)}</span></li>`).join('')}</ol>`:''}
<div class="pair">${r.tradeoff?blk(t('trade'),r.tradeoff):''}${r.change_if?blk(t('change_if'),r.change_if):''}</div>
${r.next_step?`<div class="blk" style="margin-top:10px"><b>${t('nstep')}</b><span dir="${dirOf(r.next_step)}">${esc(r.next_step)}</span></div>`:''}
${r.caveat?`<p class="cav" dir="${dirOf(r.caveat)}">${esc(r.caveat)}</p>`:''}
</div>
${others.length?`<p class="oth">${t('not_chosen')}: ${others.map(esc).join(', ')}</p>`:''}
</article>
<p class="lock">${I.lock}<span>${t('locked')}</span></p>
<div class="thread">${th.map(m=>`<div class="b ${m.r}" dir="${dirOf(m.t)}">${m.tag?`<em class="${m.tag==='updated'?'up':''}">${t(m.tag)}</em>`:''}${esc(m.t)}</div>`).join('')}${S.cbusy?'<div class="b dd typing" aria-label="…"><i></i><i></i><i></i></div>':''}</div>
${S.showNew?`<div class="newin"><textarea class="ta" data-n="" rows="3" dir="auto" maxlength="800" style="min-height:90px" placeholder="${esc(t('new_ph'))}" aria-label="${esc(t('changed'))}">${esc(S.newInfo)}</textarea><button class="cta" data-a="sendnew" ${S.cbusy?'disabled':''}>${t('send')}</button></div>`:''}
${d.status==='going'?`<div class="done">${I.check}${t('going_badge')}</div>`:`<button class="cta" data-a="going">${I.check}${t('going')}</button>`}
<div class="two"><button class="sec" data-a="sure" ${S.cbusy?'disabled':''}>${t('sure')}</button><button class="sec" data-a="newinfo" ${S.cbusy?'disabled':''}>${t('changed')}</button></div>
${vOutcome(d)}
</section>`;
}

/* reflection */
function rSteps(R){const s=[];R.opts.forEach((o,i)=>{s.push({k:'good',i},{k:'bad',i})});s.push({k:'lean'},{k:'why'},{k:'feel'});(R.questions||[]).forEach((q,j)=>s.push({k:'q',j}));s.push({k:'board'},{k:'final'});return s}
const otag=(R,i)=>`<span class="otag">${letOrImg(R.opts[i],i)}<span dir="${dirOf(R.opts[i].label)}">${esc(R.opts[i].label)}</span></span>`;
const rta=(path,val,ph)=>`<textarea class="ta" id="r_${path.replace('.','_')}" data-r="${path}" rows="5" dir="auto" maxlength="1500" placeholder="${esc(ph||t('ans_ph'))}">${esc(val||'')}</textarea>`;
const rnav=(R,next)=>`<div class="rnav">${R.i>0?`<button class="sec sm" data-a="rback">${t('back')}</button>`:''}${next||`<button class="cta" data-a="rnext">${t('next')}${I.next}</button>`}</div>`;
const pickBtn=(R,i,act,on)=>`<button class="pick ${on?'on':''}" data-a="${act}" data-i="${i}" aria-pressed="${on}">${letOrImg(R.opts[i],i)}<span dir="${dirOf(R.opts[i].label)}">${esc(R.opts[i].label)}</span></button>`;
function scores(x,n){return Array.from({length:n},(_,i)=>((x.pros&&x.pros[i])||[]).reduce((a,b)=>a+b.w,0)-((x.cons&&x.cons[i])||[]).reduce((a,b)=>a+b.w,0))}
function scaleGeo(sc){
  const rtl=LANGS[lang].dir==='rtl',s0=rtl?1:-1,a=clamp((sc[0]-sc[1])*3,-16,16),ang=s0*a,rad=ang*Math.PI/180,ex=104*Math.cos(rad),ey=104*Math.sin(rad);
  const Rp={x:160+ex,y:30+ey},Lp={x:160-ex,y:30-ey};
  return {ang,p:s0>0?[Rp,Lp]:[Lp,Rp],lead:sc[0]===sc[1]?-1:sc[0]>sc[1]?0:1};
}
function scaleSVG(sc){
  const g=scaleGeo(sc);
  const pan=i=>`<g class="pan${g.lead===i?' lead':''}" id="pan${i}" style="transform:translate(${g.p[i].x.toFixed(1)}px,${g.p[i].y.toFixed(1)}px)"><path class="str" d="M0 0L-30 52M0 0L30 52"/><path class="bowl" d="M-38 52H38A38 16 0 0 1-38 52Z"/></g>`;
  return `<svg class="scale" viewBox="0 0 320 160" aria-hidden="true"><path class="st" d="M160 30V146"/><path class="base" d="M116 154H204L192 142H128Z"/><g class="beam" id="beam" style="transform:rotate(${g.ang.toFixed(1)}deg)"><rect class="base" x="52" y="27" width="216" height="6" rx="3"/></g><circle class="base" cx="160" cy="30" r="7"/>${pan(0)}${pan(1)}</svg>`;
}
const bw=(s,mn,mx)=>Math.max(4,Math.round((s-mn)/((mx-mn)||1)*100));
function boardPic(opts,sc){
  if(opts.length===2)return `<div class="bwrap">${scaleSVG(sc)}<div class="snames">${opts.map((o,i)=>`<div><span dir="${dirOf(o.label)}">${esc(o.label)}</span><b id="sc${i}" dir="ltr">${sgn(sc[i])}</b></div>`).join('')}</div></div>`;
  const mn=Math.min(0,...sc),mx=Math.max(1,...sc);
  return `<div class="bwrap"><div class="bars">${opts.map((o,i)=>`<div class="bar"><span dir="${dirOf(o.label)}">${esc(o.label)}</span><span class="tr"><i id="bar${i}" style="width:${bw(sc[i],mn,mx)}%"></i></span><b id="sc${i}" dir="ltr">${sgn(sc[i])}</b></div>`).join('')}</div></div>`;
}
function bcol(opts,i,x,ro){
  const items=k=>((x[k]&&x[k][i])||[]).map((it,j)=>{
    const badge=`<span class="wnum" id="w_${k}_${i}_${j}">${it.w}</span>`;
    if(ro)return `<div class="it"><span dir="${dirOf(it.t)}">${esc(it.t)}</span>${badge}</div>`;
    const btn=(d,lab)=>`<button class="wbtn" type="button" data-a="w" data-o="${i}" data-k="${k}" data-j="${j}" data-dir="${d}" aria-label="${esc(lab)}">${d<0?'−':'+'}</button>`;
    return `<div class="it"><span dir="${dirOf(it.t)}">${esc(it.t)}</span><div class="wctl">${btn(-1,t('wless'))}${badge}${btn(1,t('wmore'))}</div></div>`;
  }).join('');
  return `<div class="bcol"><div class="bh">${letOrImg(opts[i],i)}<span dir="${dirOf(opts[i].label)}">${esc(opts[i].label)}</span></div><div class="bl pro"><span class="bt">+ ${t('pros')}</span>${items('pros')}</div><div class="bl con"><span class="bt">− ${t('cons')}</span>${items('cons')}</div></div>`;
}
function optTotals(x,i){
  const p=((x.pros&&x.pros[i])||[]).reduce((a,b)=>a+b.w,0),c=((x.cons&&x.cons[i])||[]).reduce((a,b)=>a+b.w,0);
  return {p,c,net:p-c};
}
function scoreTable(opts,x){
  const tot=opts.map((o,i)=>optTotals(x,i)),mx=Math.max(...tot.map(v=>v.net)),tie=tot.filter(v=>v.net===mx).length>1;
  return `<div class="stbl" id="stbl">
<div class="st-row st-head"><span></span><span dir="ltr">${t('pros')}</span><span dir="ltr">${t('cons')}</span><span dir="ltr">${t('net')}</span></div>
${opts.map((o,i)=>{const win=!tie&&tot[i].net===mx;return `<div class="st-row${win?' win':''}">
<span class="st-name">${letOrImg(o,i)}<span dir="${dirOf(o.label)}">${esc(o.label)}</span>${win?`<span class="st-win">${I.check}${t('leading')}</span>`:''}</span>
<b dir="ltr">${tot[i].p}</b><b dir="ltr">${tot[i].c}</b><b class="net" dir="ltr">${sgn(tot[i].net)}</b>
</div>`}).join('')}
</div>`;
}
const mirrorHTML=m=>`<div class="mir" id="mir"><h3>${t('r_mirror_t')}</h3><p dir="${dirOf(m.mirror)}">${esc(m.mirror)}</p>${m.tension?`<p><b>${t('r_tension')}:</b> <span dir="${dirOf(m.tension)}">${esc(m.tension)}</span></p>`:''}${m.question?`<p class="tq" dir="${dirOf(m.question)}">${esc(m.question)}</p>`:''}</div>`;
function vReflect(){
  const R=S.R;if(!R){S.view='home';return vHome()}
  const st=rSteps(R);R.i=clamp(R.i,0,st.length-1);const s=st[R.i],pct=Math.round((R.i+1)/st.length*100),lo=R.lean>=0?R.opts[R.lean].label:'';
  let body='';
  if(s.k==='good'||s.k==='bad')body=`${otag(R,s.i)}<h2 class="rh">${t('r_'+s.k,ov(R.opts[s.i].label))}</h2><p class="hint">${t('r_'+s.k+'_h')}</p><div style="margin-top:14px">${rta(s.k+'.'+s.i,R[s.k][s.i])}</div>${rnav(R)}`;
  else if(s.k==='lean')body=`<h2 class="rh">${t('r_lean')}</h2><p class="hint">${t('r_lean_h')}</p><div class="picks">${R.opts.map((o,i)=>pickBtn(R,i,'rlean',R.lean===i)).join('')}<button class="pick soft ${R.lean===-2?'on':''}" data-a="rlean" data-i="-2" aria-pressed="${R.lean===-2}">${t('r_nolean')}</button></div>${rnav(R)}`;
  else if(s.k==='why')body=`${R.lean>=0?otag(R,R.lean):''}<h2 class="rh">${R.lean>=0?t('r_why',ov(lo)):t('r_why0')}</h2><div style="margin-top:14px">${rta('why',R.why)}</div>${rnav(R)}`;
  else if(s.k==='feel')body=`${R.lean>=0?otag(R,R.lean):''}<h2 class="rh">${R.lean>=0?t('r_feel',ov(lo)):t('r_feel0')}</h2><div class="chips" style="margin:16px 0 14px">${t('feels').map(f=>`<button class="chip ${R.feel.includes(f)?'on':''}" data-a="rfeel" data-v="${esc(f)}" aria-pressed="${R.feel.includes(f)}">${esc(f)}</button>`).join('')}</div>${rta('feelText',R.feelText,t('feel_ph'))}${rnav(R)}`;
  else if(s.k==='q')body=`<p class="hint" style="margin:0 0 6px;font-weight:600">${t('r_q')}</p><h2 class="rh" dir="${dirOf(R.questions[s.j])}">${esc(R.questions[s.j])}</h2><div style="margin-top:14px">${rta('qa.'+s.j,R.qa[s.j])}</div>${rnav(R)}`;
  else if(s.k==='board'){const sc=scores(R,R.opts.length);body=`<h2 class="rh">${t('r_board')}</h2><p class="hint">${t('r_board_s')}</p>${boardPic(R.opts,sc)}${scoreTable(R.opts,R)}${R.opts.map((o,i)=>bcol(R.opts,i,R,false)).join('')}${R.mirror?mirrorHTML(R.mirror)+rnav(R):`<button class="cta" data-a="mirror">${t('r_mirror')}</button>${rnav(R,`<button class="ghost" style="margin-inline-start:auto" data-a="rnext">${t('skip')}${I.next}</button>`)}`}`}
  else body=`<h2 class="rh">${t('r_final')}</h2><div class="picks">${R.opts.map((o,i)=>pickBtn(R,i,'rpick',R.final===i)).join('')}</div>${R.final>=0?`<div class="f" style="margin-top:22px"><span>${t('r_peace')}</span><div class="peace"><input type="range" id="peace" min="1" max="10" step="1" value="${R.peace}" data-r="peace" aria-label="${esc(t('r_peace'))}"><output id="pv" dir="ltr">${R.peace}</output></div></div>${R.peace<6?`<label class="f"><span>${t('r_peace_low')}</span>${rta('peaceNote',R.peaceNote)}</label>`:''}`:''}${rnav(R,`<button class="cta" data-a="rsave" ${R.final<0?'disabled':''}>${I.check}${t('r_save')}</button>`)}`;
  return `<section class="pad"><div class="rtop"><button class="ib" data-a="rquit" aria-label="${esc(t('back'))}">${I.x}</button><div class="prog"><i style="width:${pct}%"></i></div><span class="pn" dir="ltr">${R.i+1}/${st.length}</span></div>${R.q?`<p class="qline" dir="${dirOf(R.q)}">${esc(R.q)}</p>`:''}${body}</section>`;
}
function topReasons(x,i,n){return ((x.pros&&x.pros[i])||[]).slice().sort((a,b)=>b.w-a.w).slice(0,n||3).map(p=>p.t)}
function topCon(x,i){const arr=((x.cons&&x.cons[i])||[]).slice().sort((a,b)=>b.w-a.w);return arr.length?arr[0].t:''}
function vRsum(d){
  const x=d.reflect||{},c=d.result.choice,o=d.opts[c]||{label:'?'},n=d.opts.length;
  const why=x.pros?topReasons(x,c,3):[],trd=x.cons?topCon(x,c):'';
  const row=(k,v)=>v?`<dt>${esc(k)}</dt><dd dir="${dirOf(v)}">${esc(v)}</dd>`:'';
  const ans=d.opts.map((op,i)=>row(op.label+' · '+t('pros'),x.good&&x.good[i])+row(op.label+' · '+t('cons'),x.bad&&x.bad[i])).join('')+row(t('a_lean'),x.lean>=0&&d.opts[x.lean]?d.opts[x.lean].label:'')+row(t('a_why'),x.why)+row(t('a_feel'),[...(x.feel||[]),x.feelText].filter(Boolean).join(', '))+(x.questions||[]).map((q,j)=>row(q,x.qa&&x.qa[j])).join('');
  return `<section class="pad">
${S.justSaved?`<p class="banner ok">${I.check}<span>${t('r_done')}</span></p>`:''}
${d.q?`<p class="qline" dir="${dirOf(d.q)}">${esc(d.q)}</p>`:''}
<article class="tk"><div class="tk-hd"><span>${t('r_yours')}<small>${fmtD(d.createdAt)}</small></span><span class="stamp">${t('r_stamp')}</span></div><div class="tk-ch">${letOrImg(o,c)}<h1 dir="${dirOf(o.label)}">${esc(o.label)}</h1></div>
<div class="cf"><span>${t('r_peace_s')}</span><div class="mt"><i style="width:${(x.peace||0)*10}%"></i></div><b dir="ltr">${x.peace||'-'}/10</b></div>
${x.peaceNote?`<p class="tk-hl">${esc(x.peaceNote)}</p>`:''}
${why.length?`<div class="tk-cut"></div><div class="tk-bd"><h3>${t('why')}</h3><ol class="rs">${why.map(r=>`<li><span dir="${dirOf(r)}">${esc(r)}</span></li>`).join('')}</ol>${trd?`<div class="blk"><b>${t('trade')}</b><span dir="${dirOf(trd)}">${esc(trd)}</span></div>`:''}</div>`:''}
</article>
${x.pros?`<h2 class="sh">${t('r_board')}</h2>${boardPic(d.opts,scores(x,n))}${scoreTable(d.opts,x)}${d.opts.map((op,i)=>bcol(d.opts,i,x,true)).join('')}`:''}
${x.mirror&&x.mirror.mirror?mirrorHTML(x.mirror):''}
${ans?`<details class="ans"><summary>${t('r_answers')}</summary><dl>${ans}</dl></details>`:''}
${vOutcome(d)}
</section>`;
}
function vHist(){
  if(!D.length)return `<section class="pad"><div class="empty">${COIN2}<p>${t('h_empty')}</p><button class="cta" data-a="newdec">${I.plus}${t('new_dec')}</button></div></section>`;
  return `<section class="pad"><h1 class="pt">${t('h_title')}</h1><div class="hl">${D.map(d=>{const c=(d.result&&d.result.choice)||0,o=(d.opts&&d.opts[c])||{label:''};return `<button class="hit" data-a="open" data-id="${esc(d.id)}">${letOrImg(o,c)}<span><b dir="${dirOf(d.title||d.q)}">${esc(d.title||d.q)}</b><small>${t('chose')}: ${esc(o.label)}</small><small>${d.mode==='reflect'?t('tag_r'):t('tag_d')}, ${fmtD(d.createdAt)}</small></span>${d.outcome?`<span class="pill ${d.outcome}">${t('out_'+d.outcome)}</span>`:'<span></span>'}</button>`}).join('')}</div></section>`;
}
function facts(p){
  const F=[],add=(lab,v)=>{if(v!==''&&v!=null)F.push(`<span class="fact"><span>${esc(lab)}:</span> ${esc(v)}</span>`)};
  add(t('f_age'),p.age);add(t('f_h'),p.h);add(t('f_w'),p.w);add(t('f_bg'),p.bg);add(t('f_loc'),p.loc);add(t('f_job'),p.job);
  if(p.fam)add(t('f_fam'),t('fam_'+p.fam));if(p.budget)add(t('f_budget'),t('b_'+p.budget));if(p.vals&&p.vals.length)add(t('s_vals'),p.vals.map(v=>t('v_'+v)).join(', '));
  return F.join('');
}
function vMe(){
  if(S.editing)return `<section class="pad"><h1 class="pt">${t('me_t')}</h1>${gBasic()}${gBody()}${gLife()}<div class="rnav"><button class="sec sm" data-a="editcancel">${t('cancel')}</button><button class="cta" data-a="editsave">${I.check}${t('save')}</button></div></section>`;
  const p=P||{},fs=facts(p),lr=p.learned||[];
  return `<section class="hero"><div class="mehd"><span class="av">${esc(((p.name||'D').trim().charAt(0)||'D').toUpperCase())}</span><div><h1 dir="${dirOf(p.name||t('me_t'))}">${esc(p.name||t('me_t'))}</h1><p>${t('stats',{n:D.length})}</p></div></div></section>
<section class="pad">
<h2 class="sh">${t('me_t')}</h2>${fs?`<div class="facts">${fs}</div>`:''}<button class="sec" style="margin-top:12px" data-a="edit">${t('edit')}</button>
<h2 class="sh">${t('learned')}</h2>${lr.length?`<div class="lr">${lr.map((x,i)=>`<div class="lrn"><span dir="${dirOf(x)}">${esc(x)}</span><button class="ib" data-a="unlearn" data-i="${i}" aria-label="${esc(t('del'))}">${I.x}</button></div>`).join('')}</div>`:`<p class="hint">${t('learned_0')}</p>`}
<h2 class="sh">${t('f_lang')}</h2><div class="chips">${langChips()}</div>
${privNote()}
<button class="ghost danger" style="margin-top:18px" data-a="clear">${I.trash}${t('clear')}</button>
</section>`;
}
const VIEWS={ob:vOb,home:vHome,result:vResult,suggest:vSuggest,crisis:vCrisis,reflect:vReflect,hist:vHist,me:vMe};
function render(){
  const h=document.documentElement;h.lang=lang;h.dir=LANGS[lang].dir;
  $('#top').innerHTML=`${LOGO(false)}${S.boot?'':`<button class="lb" data-a="langs" aria-label="${esc(t('f_lang'))}">${I.globe}<span>${LANGS[lang].n}</span></button>`}`;
  let v;
  if(S.boot)v=`<div class="splash">${LOGO(true)}</div>`;
  else if(S.busy)v=vBusy();
  else if(S.err)v=vErr();
  else v=(VIEWS[S.view]||vHome)();
  $('#main').innerHTML=v;
  $('#nav').innerHTML=(S.boot||S.view==='ob')?'':vTabs();
}
const toTop=()=>{$('#main').scrollTop=0};
const toEnd=()=>{const m=$('#main');m.scrollTop=m.scrollHeight};
let tt;
function toast(m){const el=$('#toast');el.textContent=m;el.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>el.classList.remove('show'),2800)}
function modal(h){const m=$('#modal');m.innerHTML=`<div class="sheet" role="dialog" aria-modal="true">${h}</div>`;m.classList.add('show')}
function closeModal(){const m=$('#modal');m.classList.remove('show');m.innerHTML=''}

/* ---------- AI calls ---------- */
function errMsg(e){
  const c=e&&e.code;
  if(['not_granted','sampling_disabled','not_declared','capability_disabled','capability_removed'].includes(c))sample=null;
  const m={not_granted:'e_grant',sampling_disabled:'e_noai',not_declared:'e_noai',capability_disabled:'e_noai',capability_removed:'e_noai',rate_limited:'e_rate',refused:'e_refused',invalid_json:'e_json',empty_completion:'e_json',image_rejected:'e_img'};
  return t(m[c]||'e_gen');
}
function busy(label,opts,sub){const ctl=new AbortController();S.busy={label,sub:sub||'',ctl,opts:(opts||[]).map(o=>({label:o.label,thumb:o.thumb||(o.img&&o.img.thumb)||''}))};render();return ctl.signal}
function crisis(msg){S.busy=null;S.cbusy=false;S.crisis=String(msg||'');S.view='crisis';render();toTop()}
function readDraft(){const d=S.draft;return {q:d.q.trim(),ctx:d.ctx.trim(),opts:d.opts.map((o,i)=>({label:(o.label||'').trim()||(o.img?t('option')+' '+LET(i):''),img:o.img})).filter(o=>o.label)}}
const fpOf=dr=>hashStr([dr.q,dr.ctx].concat(dr.opts.map(o=>o.label+'|'+(o.img?o.img.hash:''))).map(s=>String(s||'').trim().toLowerCase().replace(/\s+/g,' ')).join('§'));
function normDecision(r,given){
  const opts=given.length>=2?given.slice():(Array.isArray(r.options)&&r.options.length>=2?r.options.slice(0,4).map(String):(given.length?given.slice():['?']));
  let c=Number(r.choice);if(!Number.isInteger(c)||c<0||c>=opts.length)c=0;
  const arr=a=>(Array.isArray(a)?a:[]).map(x=>String(x||'').trim()).filter(Boolean).slice(0,5);
  return {opts,res:{choice:c,headline:String(r.headline||''),confidence:clamp(Math.round(Number(r.confidence)||70),1,99),reasons:arr(r.reasons),tradeoff:String(r.tradeoff||''),change_if:String(r.change_if||''),next_step:String(r.next_step||''),caveat:String(r.caveat||'')}};
}
async function decide(dr,mode){
  if(!sample){S.err={msg:t('e_noai')};render();return}
  const withImg=dr.opts.map((o,i)=>({o,i})).filter(x=>x.o.img);
  const send=imgOK?withImg.slice(0,maxImgs):[];
  const signal=busy(send.length?t('th_img'):t('th_decide'),dr.opts,t('th_sub'));
  let searched=false;
  const opts={signal,modelTier:'default',tools:[searchTool(()=>{searched=true})]};if(send.length)opts.images=send.map(x=>x.o.img.blob);
  try{
    const r=await sample.json(decidePrompt(dr,mode,send.map(x=>x.i)),opts);
    S.busy=null;
    if(!r||typeof r!=='object')throw {code:'invalid_json'};
    if(r.safety==='crisis')return crisis(r.message);
    if(r.mode==='reflect'&&mode==='auto'){
      if(dr.opts.length<2&&Array.isArray(r.options))dr.opts=r.options.slice(0,4).map(l=>({label:String(l),img:null}));
      S.sug={dr,why:String(r.reflect_why||'')};S.view='suggest';render();toTop();return;
    }
    if(!r.headline)throw {code:'invalid_json'};
    const n=normDecision(r,dr.opts.map(o=>o.label));
    n.res.searched=searched;
    const d={id:nid(),createdAt:Date.now(),mode:'decide',title:String(r.title||dr.q||n.opts.join(' / ')).slice(0,80),q:dr.q,ctx:dr.ctx,fp:fpOf(dr),
      opts:n.opts.map((l,i)=>({label:l,thumb:(dr.opts[i]&&dr.opts[i].img&&dr.opts[i].img.thumb)||''})),result:n.res,thread:[],revs:[],status:'open',outcome:''};
    D.unshift(d);saveDec(d);learn(r.learned);
    S.draft=newDraft();S.cur=d.id;S.same=false;S.showNew=false;S.view='result';S.tab='decide';render();toTop();
  }catch(e){
    S.busy=null;
    if(e&&e.code==='cancelled'){render();return}
    if(e&&e.code==='images_unavailable'&&imgOK){imgOK=false;return decide(dr,mode)}
    S.err={msg:errMsg(e),retry:()=>decide(dr,mode)};render();
  }
}
async function challenge(){
  const d=cur(),msg=(S.newInfo||'').trim();if(!d||!msg)return;
  if(!sample){toast(t('e_noai'));return}
  d.thread=d.thread||[];d.thread.push({r:'me',t:msg});S.newInfo='';S.showNew=false;S.cbusy=true;render();toEnd();
  let searched=false;
  try{
    const r=await sample.json(challengePrompt(d,msg),{modelTier:'default',cache:false,tools:[searchTool(()=>{searched=true})]});
    if(r&&r.safety==='crisis'){d.thread.pop();return crisis(r.message)}
    if(r&&r.changed===true&&r.headline){
      const labels=Array.isArray(r.options)&&r.options.length>=d.opts.length?r.options.slice(0,5).map(String):d.opts.map(o=>o.label);
      const n=normDecision(r,labels),prev=d.result.choice;
      n.res.searched=searched;
      d.opts=labels.map((l,i)=>({label:l,thumb:(d.opts[i]&&d.opts[i].thumb)||''}));
      d.result=n.res;d.revs=d.revs||[];d.revs.push({at:Date.now(),from:prev,to:n.res.choice,why:msg});d.status='open';
      d.thread.push({r:'dd',t:String(r.reply||r.headline),tag:'updated'});
    }else d.thread.push({r:'dd',t:String((r&&r.reply)||t('sure_r')[0]),tag:'kept'});
    learn(r&&r.learned);saveDec(d);
  }catch(e){d.thread.pop();S.newInfo=msg;S.showNew=true;toast(errMsg(e))}
  S.cbusy=false;render();toEnd();
}
function startReflect(dr){
  S.R={id:nid(),q:dr.q,ctx:dr.ctx,opts:dr.opts.slice(0,4).map(o=>({label:o.label,thumb:(o.img&&o.img.thumb)||o.thumb||''})),good:[],bad:[],lean:-1,why:'',feel:[],feelText:'',questions:[],qa:[],pros:null,cons:null,mirror:null,final:-1,peace:7,peaceNote:'',i:0,title:'',sig:''};
  S.draft=newDraft();S.view='reflect';S.tab='decide';saveR();render();toTop();
}
const splitR=s=>String(s||'').split(/[\n.!?;؛،]+|,\s+/).map(x=>x.trim()).filter(x=>x.length>1).slice(0,6);
function rSig(R){return hashStr(JSON.stringify([R.good,R.bad,R.lean,R.why,R.feel,R.feelText]))}
async function rExtract(){
  const R=S.R;
  const fb=()=>{R.pros=R.opts.map((o,i)=>splitR(R.good[i]).map(x=>({t:x,w:5})));R.cons=R.opts.map((o,i)=>splitR(R.bad[i]).map(x=>({t:x,w:5})));R.questions=[];R.qa=[]};
  const advance=()=>{S.busy=null;R.mirror=null;R.i=rSteps(R).findIndex(s=>s.k==='feel')+1;saveR();render();toTop()};
  if(!sample){fb();return advance()}
  const signal=busy(t('th_sort'),R.opts);
  try{
    const r=await sample.json(extractPrompt(R),{signal,modelTier:'default'});
    if(r&&r.safety==='crisis')return crisis(r.message);
    const lst=(a,i,f)=>{
      const raw=Array.isArray(a)&&Array.isArray(a[i])?a[i]:[];
      const v=raw.map(x=>x&&typeof x==='object'?{t:String(x.t||'').trim(),w:clamp(Math.round(Number(x.w))||5,1,10)}:{t:String(x||'').trim(),w:5}).filter(x=>x.t).slice(0,6);
      return v.length?v:splitR(f).map(x=>({t:x,w:5}));
    };
    R.pros=R.opts.map((o,i)=>lst(r&&r.pros,i,R.good[i]));R.cons=R.opts.map((o,i)=>lst(r&&r.cons,i,R.bad[i]));
    R.questions=(r&&Array.isArray(r.questions)?r.questions:[]).map(x=>String(x||'').trim()).filter(Boolean).slice(0,2);R.qa=[];
    if(r&&r.title)R.title=String(r.title).slice(0,80);
    learn(r&&r.learned);
  }catch(e){
    if(e&&e.code==='cancelled'){S.busy=null;R.sig='';render();return}
    fb();toast(errMsg(e));
  }
  advance();
}
async function rMirror(){
  const R=S.R,sc=scores(R,R.opts.length);
  const local=()=>{const mx=Math.max(...sc),lead=sc.filter(x=>x===mx).length>1?-1:sc.indexOf(mx);R.mirror={mirror:lead<0?t('local_even'):t('local_lean',ov(R.opts[lead].label)),lean:lead,tension:'',question:''}};
  const show=()=>{saveR();render();setTimeout(()=>{const m=$('#mir');if(m)m.scrollIntoView({behavior:'smooth',block:'start'})},40)};
  if(!sample){local();return show()}
  const signal=busy(t('th_mirror'),R.opts);
  try{
    const r=await sample.json(mirrorPrompt(R,sc),{signal,modelTier:'default',cache:false});S.busy=null;
    if(r&&r.safety==='crisis')return crisis(r.message);
    R.mirror={mirror:String((r&&r.mirror)||''),lean:Number.isInteger(r&&r.lean)?r.lean:-1,tension:String((r&&r.tension)||''),question:String((r&&r.question)||'')};
    if(!R.mirror.mirror)local();
  }catch(e){S.busy=null;if(e&&e.code==='cancelled'){render();return}local();toast(errMsg(e))}
  show();
}
function updBoard(o,k,j){
  const R=S.R,badge=$(`#w_${k}_${o}_${j}`);
  if(badge)badge.textContent=R[k][o][j].w;
  const sc=scores(R,R.opts.length);sc.forEach((s,i)=>{const el=$('#sc'+i);if(el)el.textContent=sgn(s)});
  if(R.opts.length===2){const g=scaleGeo(sc),beam=$('#beam');if(beam)beam.style.transform=`rotate(${g.ang.toFixed(1)}deg)`;[0,1].forEach(i=>{const p=$('#pan'+i);if(p){p.style.transform=`translate(${g.p[i].x.toFixed(1)}px,${g.p[i].y.toFixed(1)}px)`;p.classList.toggle('lead',g.lead===i)}})}
  else{const mn=Math.min(0,...sc),mx=Math.max(1,...sc);sc.forEach((s,i)=>{const b=$('#bar'+i);if(b)b.style.width=bw(s,mn,mx)+'%'})}
  const stbl=$('#stbl');if(stbl)stbl.outerHTML=scoreTable(R.opts,R);
}
function setR(p,v){const R=S.R;if(!R)return;const [a,b]=p.split('.');if(b!==undefined){(R[a]=R[a]||[])[+b]=v}else R[a]=v;saveRSoon()}
function obFinish(){
  const p=S.pd||{};['age','h','w'].forEach(k=>{if(p[k]!=null)p[k]=String(p[k]).replace(/[^\d]/g,'').slice(0,3)});
  P=Object.assign({},P||{},p,{lang,learned:(P&&P.learned)||[],onboarded:true,createdAt:(P&&P.createdAt)||Date.now()});
  S.pd=null;saveProfile();S.view='home';S.tab='decide';render();toTop();
}
async function addPhoto(i,file){
  const slot=document.querySelector(`[data-f="${i}"]`);if(slot&&slot.parentElement)slot.parentElement.classList.add('busy');
  try{const im=await prepImage(file);if(S.draft.opts[i])S.draft.opts[i].img=im}catch(e){toast(t('e_img'))}
  render();
}

/* ---------- actions ---------- */
const A={
  tab({v}){S.tab=v;S.err=null;S.same=false;S.showNew=false;S.justSaved=false;S.editing=false;S.pd=null;S.view=v==='decide'?'home':v;render();toTop()},
  langs(){modal(`<h2>${t('f_lang')}</h2><div class="picks">${Object.entries(LANGS).map(([k,v])=>`<button class="pick ${lang===k?'on':''}" data-a="lang" data-v="${k}" lang="${k}" aria-pressed="${lang===k}">${v.n}</button>`).join('')}</div><button class="sec" data-a="mclose">${t('cancel')}</button>`)},
  lang({v}){if(!LANGS[v])return;lang=v;lsSet('dd_lang',v);if(S.pd)S.pd.lang=v;if(P&&P.lang!==v){P.lang=v;saveProfile()}closeModal();render()},
  mclose(){closeModal()},
  pick({k,v,m}){const p=S.pd;if(!p)return;if(m){const a=p[k]=Array.isArray(p[k])?p[k]:[];const i=a.indexOf(v);if(i<0)a.push(v);else a.splice(i,1)}else p[k]=p[k]===v?'':v;render()},
  obnext(){if(S.obStep<2){S.obStep++;render();toTop()}else obFinish()},
  obback(){if(S.obStep>0){S.obStep--;render();toTop()}},
  obskip(){obFinish()},
  mode({v}){S.draft.mode=v;render()},
  addopt(){if(S.draft.opts.length>=4)return;S.draft.opts.push({label:'',img:null});render();const n=S.draft.opts.length-1;setTimeout(()=>{const el=$('#o'+n);if(el)el.focus()},30)},
  rmopt({i}){S.draft.opts.splice(+i,1);render()},
  rmphoto({i}){if(S.draft.opts[+i])S.draft.opts[+i].img=null;render()},
  ex({i}){const x=t('ex')[+i];if(!x)return;S.draft={q:x.q,ctx:x.c,mode:'auto',opts:x.o.map(l=>({label:l,img:null}))};render();toTop()},
  go(){
    const dr=readDraft();if(!dr.q&&dr.opts.length<2)return toast(t('need_q'));
    const m=S.draft.mode;
    if(m==='reflect'){if(dr.opts.length<2)return toast(t('need_two'));return startReflect(dr)}
    const fp=fpOf(dr),old=D.find(x=>x.mode==='decide'&&x.fp===fp);
    if(old){S.draft=newDraft();S.cur=old.id;S.same=true;S.showNew=false;S.view='result';render();toTop();return}
    decide(dr,m);
  },
  stop(){if(S.busy)S.busy.ctl.abort()},
  retry(){const f=S.err&&S.err.retry;S.err=null;if(f)f();else render()},
  errback(){S.err=null;render()},
  going(){const d=cur();if(!d)return;d.status='going';saveDec(d);render()},
  sure(){
    const d=cur();if(!d)return;d.thread=d.thread||[];
    const arr=t('sure_r'),k=d.thread.filter(m=>m.sure).length%arr.length,o=d.opts[d.result.choice];
    d.thread.push({r:'me',t:t('sure')},{r:'dd',t:fill(pickG(arr[k]),ov(o?o.label:'')),sure:1,tag:'kept'});saveDec(d);render();toEnd();
  },
  newinfo(){S.showNew=!S.showNew;render();if(S.showNew)setTimeout(()=>{const el=document.querySelector('[data-n]');if(el)el.focus();toEnd()},30)},
  sendnew(){challenge()},
  out({v}){const d=cur();if(!d)return;d.outcome=d.outcome===v?'':v;saveDec(d);render()},
  del(){modal(`<h2>${t('del_q')}</h2><button class="cta dz" data-a="delyes">${I.trash}${t('del_yes')}</button><button class="sec" data-a="mclose">${t('cancel')}</button>`)},
  delyes(){const id=S.cur;closeModal();removeDec(id);S.cur=null;S.view='hist';S.tab='hist';render();toTop()},
  newdec(){S.tab='decide';S.view='home';S.same=false;S.justSaved=false;S.showNew=false;render();toTop()},
  open({id}){S.cur=id;S.view='result';S.same=false;S.showNew=false;S.justSaved=false;render();toTop()},
  tohome(){S.view='home';S.tab='decide';render();toTop()},
  sugguide(){const dr=S.sug&&S.sug.dr;if(!dr)return;if(dr.opts.length<2){S.draft.q=dr.q;S.draft.ctx=dr.ctx;S.draft.mode='reflect';S.view='home';render();return toast(t('need_two'))}startReflect(dr)},
  sugany(){if(S.sug)decide(S.sug.dr,'decide')},
  rcont(){S.view='reflect';render();toTop()},
  rdiscard(){S.R=null;saveR();render()},
  rquit(){saveR();S.view='home';render();toTop()},
  rnext(){
    const R=S.R,st=rSteps(R),s=st[R.i];
    if((s.k==='good'||s.k==='bad')&&!String(R[s.k][s.i]||'').trim())return toast(t('empty_ans'));
    if(s.k==='feel'){const sig=rSig(R);if(!R.pros||R.sig!==sig){R.sig=sig;return rExtract()}}
    R.i=Math.min(R.i+1,rSteps(R).length-1);saveR();render();toTop();
  },
  rback(){if(S.R&&S.R.i>0){S.R.i--;saveR();render();toTop()}},
  rlean({i}){S.R.lean=+i;saveR();render()},
  rfeel({v}){const f=S.R.feel,k=f.indexOf(v);if(k<0)f.push(v);else f.splice(k,1);render()},
  w({o,k,j,dir}){const it=S.R[k]&&S.R[k][+o]&&S.R[k][+o][+j];if(!it)return;it.w=clamp(it.w+(+dir||1),1,10);updBoard(+o,k,+j);saveRSoon()},
  mirror(){rMirror()},
  rpick({i}){S.R.final=+i;render()},
  rsave(){
    const R=S.R;if(!R||R.final<0)return;
    const d={id:R.id,createdAt:Date.now(),mode:'reflect',title:String(R.title||R.q||R.opts.map(o=>o.label).join(' / ')).slice(0,80),q:R.q,ctx:R.ctx,opts:R.opts,result:{choice:R.final},
      reflect:{good:R.good,bad:R.bad,lean:R.lean,why:R.why,feel:R.feel,feelText:R.feelText,questions:R.questions,qa:R.qa,pros:R.pros,cons:R.cons,mirror:R.mirror,peace:R.peace,peaceNote:R.peaceNote},status:'going',outcome:''};
    D.unshift(d);saveDec(d);S.R=null;saveR();S.cur=d.id;S.view='result';S.justSaved=true;render();toTop();
  },
  edit(){S.pd=clone(P)||{};S.editing=true;render();toTop()},
  editcancel(){S.pd=null;S.editing=false;render();toTop()},
  editsave(){const p=S.pd||{};['age','h','w'].forEach(k=>{if(p[k]!=null)p[k]=String(p[k]).replace(/[^\d]/g,'').slice(0,3)});P=Object.assign({},P||{},p,{lang});S.pd=null;S.editing=false;saveProfile();render();toTop()},
  unlearn({i}){if(!P||!P.learned)return;P.learned.splice(+i,1);saveProfile();render()},
  clear(){modal(`<h2>${t('clear')}</h2><p>${t('clear_q')}</p><button class="cta dz" data-a="clearyes">${I.trash}${t('del_yes')}</button><button class="sec" data-a="mclose">${t('cancel')}</button>`)},
  async clearyes(){closeModal();await wipe();S.R=null;S.draft=newDraft();S.cur=null;S.view='ob';S.obStep=0;S.pd={lang};S.tab='decide';render();toTop()}
};

/* ---------- events ---------- */
const app=$('#app');
app.addEventListener('click',e=>{
  if(e.target.id==='modal'){closeModal();return}
  const b=e.target.closest('[data-a]');if(!b||b.disabled)return;
  const f=A[b.dataset.a];if(!f)return;
  e.preventDefault();
  try{const r=f(Object.assign({},b.dataset),b);if(r&&r.catch)r.catch(err=>console.error(err))}catch(err){console.error(err)}
});
app.addEventListener('input',e=>{
  const el=e.target,ds=el.dataset;
  if(ds.d!==undefined)S.draft[ds.d]=el.value;
  else if(ds.o!==undefined){const o=S.draft.opts[+ds.o];if(o)o.label=el.value}
  else if(ds.p!==undefined){if(S.pd)S.pd[ds.p]=el.value}
  else if(ds.r!==undefined){setR(ds.r,el.type==='range'?+el.value:el.value);if(el.type==='range'){const pv=$('#pv');if(pv)pv.textContent=el.value}}
  else if(ds.n!==undefined)S.newInfo=el.value;
});
app.addEventListener('change',e=>{
  const el=e.target;
  if(el.dataset.f!==undefined&&el.files&&el.files[0]){const f=el.files[0];el.value='';addPhoto(+el.dataset.f,f)}
  else if(el.type==='range')render();
});
app.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('#modal').classList.contains('show'))closeModal()});

/* ---------- AI backend: talks to our own /api/decide serverless endpoint ---------- */
function blobToBase64(blob){
  return new Promise((resolve,reject)=>{
    const r=new FileReader();
    r.onload=()=>resolve(String(r.result).split(',')[1]||'');
    r.onerror=()=>reject(new Error('read_failed'));
    r.readAsDataURL(blob);
  });
}
const backendSample={
  limits:async()=>({images:{maxCount:4}}),
  json:async(prompt,opts)=>{
    opts=opts||{};
    const images=[];
    if(Array.isArray(opts.images)){
      for(const blob of opts.images){
        try{images.push({mediaType:blob.type||'image/jpeg',data:await blobToBase64(blob)})}catch(e){}
      }
    }
    let res;
    try{
      res=await fetch('/api/decide',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({prompt,images,enableSearch:!!(opts.tools&&opts.tools.length),cache:opts.cache!==false,lang}),
        signal:opts.signal
      });
    }catch(e){
      if(e&&e.name==='AbortError')throw {code:'cancelled'};
      throw {code:'network_error'};
    }
    if(!res.ok){
      let detail=null;try{detail=await res.json()}catch(e){}
      if(res.status===429)throw {code:'rate_limited',message:detail&&detail.error};
      throw {code:'request_failed',message:detail&&detail.error};
    }
    const out=await res.json();
    if(out&&out.searched&&opts.tools&&opts.tools[0]&&typeof opts.tools[0].onUsed==='function'){
      try{opts.tools[0].onUsed()}catch(e){}
    }
    return out&&out.data;
  }
};

/* ---------- boot ---------- */
async function boot(){
  render();
  sample=backendSample;
  try{const l=await sample.limits();imgOK=!!(l&&l.images);if(l&&l.images)maxImgs=l.images.maxCount||4}catch(e){imgOK=false}
  store=canLS()?'local':'mem';
  await loadData();
  if(P&&P.lang&&LANGS[P.lang])lang=P.lang;
  try{const r=JSON.parse(lsGet('dd_r')||'null');if(r&&Array.isArray(r.opts))S.R=r}catch(e){}
  S.boot=false;
  if(!P||!P.onboarded){S.view='ob';S.obStep=0;S.pd={lang}}else S.view='home';
  render();
}
boot();
}

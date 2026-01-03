// app.js
// Инициализация на Supabase клиентът и експортиране като window.sb
const SUPABASE_URL = "https://dtrokaqhgupubrofnndx.supabase.co";
// Постави тук своя публичен ANON key (Project -> Settings -> API -> anon public key)
const SUPABASE_ANON_KEY = "sb_publishable_0cE5BWmw5vn5IIf_HJzmFg_IeTtaRz5";

if (!window?.supabase) {
  console.error("Supabase library not loaded. Make sure you include the CDN script before app.js");
} else {
  // Създаваме клиент и го правим достъпен глобално като window.sb
  window.sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

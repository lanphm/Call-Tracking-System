// TRẠM ĐIỀU KHIỂN PHIÊN BẢN - Thay đổi số này để ép tất cả các máy khách tải lại code mới
const APP_VERSION = "2026_V1.2"; 

if (localStorage.getItem('app_version') !== APP_VERSION) {
    localStorage.setItem('app_version', APP_VERSION);
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then(regs => {
            regs.forEach(r => r.unregister());
        });
    }
    // Ép tải lại toàn bộ trang từ server
    window.location.reload(true);
}

const CONFIG = {
    SUPABASE_URL: "https://ilxngmrnsghlgfqjxfni.supabase.co",
    SUPABASE_ANON_KEY: "sb_publishable_-I0b_tYqzQF4Vk1i6nYGqA_pg0opuN_"
};

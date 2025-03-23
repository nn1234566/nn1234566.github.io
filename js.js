// 登录验证与跳转
document.addEventListener("DOMContentLoaded", () => {
    // 检查是否已登录
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (window.location.pathname.includes("dashboard.html") || window.location.pathname.includes("pages/")) {
        if (!isLoggedIn) window.location.href = "login.html";
    }

    // 登录表单提交
    document.getElementById("loginForm")?.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        if (username && password) {
            localStorage.setItem("isLoggedIn", "true");
            window.location.href = "dashboard.html";
        }
    });
});

// 退出登录
function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
}
// 登录表单提交逻辑
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (username && password) {
                localStorage.setItem("isLoggedIn", "true");
                window.location.href = "dashboard.html";
            } else {
                alert("请输入账号和密码！");
            }
        });
    }

    // 检查登录状态
    if (window.location.pathname.includes("dashboard.html") || window.location.pathname.includes("pages/")) {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (!isLoggedIn) {
            window.location.href = "login.html";
        }
    }
});

// 动态加载导航栏（可选）
function loadNavbar() {
    const navbarPlaceholder = document.getElementById("navbar-placeholder");
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = `
            <nav class="navbar..."></nav>
        `;
    }
}
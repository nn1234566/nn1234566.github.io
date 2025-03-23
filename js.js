// 登录表单提交逻辑
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // 模拟登录成功（实际应验证用户名密码）
    if (username && password) {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "welcome.html";
    } else {
        alert("请输入账号和密码！");
    }
});

// 检查登录状态（页面加载时）
window.addEventListener("load", function() {
    if (window.location.pathname.includes("welcome.html") || window.location.pathname.includes("pages/")) {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (!isLoggedIn) {
            window.location.href = "login.html";
        }
    }
});
// 平滑滚动导航
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 项目卡片点击事件
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        alert('即将跳转到项目详情页！');
    });
});
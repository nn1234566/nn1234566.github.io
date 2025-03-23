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
// 初始化磁盘使用图表
const diskCtx = document.getElementById('diskChart').getContext('2d');
new Chart(diskCtx, {
    type: 'doughnut',
    data: {
        labels: ['已使用', '剩余'],
        datasets: [{
            data: [63.66, 78.14-63.66],
            backgroundColor: ['#ff6384', '#36a2eb']
        }]
    },
    options: {
        plugins: {
            legend: { position: 'bottom' }
        }
    }
});

// 作业类型分布图
const jobTypeCtx = document.getElementById('jobTypeChart').getContext('2d');
new Chart(jobTypeCtx, {
    type: 'pie',
    data: {
        labels: ['新建', '删除', '用户设置'],
        datasets: [{
            data: [21, 32, 8],
            backgroundColor: ['#4bc0c0', '#ff9f40', '#9966ff']
        }]
    }
});
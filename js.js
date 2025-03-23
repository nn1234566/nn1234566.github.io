// 登录跳转逻辑
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    localStorage.setItem('isLogin', 'true');
    window.location.href = 'dashboard.html';
});

// 检查登录状态
if(window.location.pathname.includes('dashboard.html')) {
    if(!localStorage.getItem('isLogin')) {
        window.location.href = 'login.html';
    }
}
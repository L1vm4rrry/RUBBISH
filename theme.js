// theme.js - 全站防闪烁夜间模式（必须放在head里）
(function() {
    // 立即设置主题，防止闪屏
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    // 等DOM加载完再加入按钮
    document.addEventListener('DOMContentLoaded', () => {
        const nav = document.querySelector('.main-nav');
        if (!nav || document.getElementById('theme-toggle')) return;

        const btn = document.createElement('button');
        btn.id = 'theme-toggle';
        btn.className = 'theme-btn';
        btn.innerHTML = currentTheme === 'dark' ? '☀️' : '🌙';

        const searchWrapper = document.querySelector('.search-wrapper');
        if (searchWrapper) {
            searchWrapper.appendChild(btn);
        } else {
            nav.appendChild(btn);
        }

        btn.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            if (theme === 'light') {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                btn.textContent = '☀️';
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                btn.textContent = '🌙';
            }
        });
    });
})();
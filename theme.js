// theme.js - 全站防闪烁夜间模式 + 全局小工具（阅读进度条 / 回到顶部）
// 必须放在 <head> 里最先引入，避免闪屏
(function() {
    // 立即设置主题，防止闪屏
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    document.addEventListener('DOMContentLoaded', () => {
        // ---------- 1. 夜间模式切换按钮 ----------
        const nav = document.querySelector('.main-nav');
        if (nav && !document.getElementById('theme-toggle')) {
            const btn = document.createElement('button');
            btn.id = 'theme-toggle';
            btn.className = 'theme-btn';
            btn.innerHTML = currentTheme === 'dark' ? '☀️' : '🌙';
            btn.setAttribute('aria-label', '切换夜间模式');

            const searchWrapper = document.querySelector('.search-wrapper');
            if (searchWrapper) {
                searchWrapper.appendChild(btn);
            } else {
                nav.appendChild(btn);
            }

            btn.addEventListener('click', () => {
                const theme = document.documentElement.getAttribute('data-theme');
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
        }

        // ---------- 2. 阅读进度条（顶部细条） ----------
        const bar = document.createElement('div');
        bar.id = 'reading-progress';
        bar.setAttribute('aria-hidden', 'true');
        document.body.appendChild(bar);

        // ---------- 3. 回到顶部按钮 ----------
        const topBtn = document.createElement('button');
        topBtn.id = 'back-to-top';
        topBtn.innerHTML = '↑';
        topBtn.setAttribute('aria-label', '回到顶部');
        topBtn.title = '回到顶部';
        topBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        document.body.appendChild(topBtn);

        function updateScrollUI() {
            const doc = document.documentElement;
            const scrollTop = window.pageYOffset || doc.scrollTop || document.body.scrollTop || 0;
            const scrollable = (doc.scrollHeight || document.body.scrollHeight) - window.innerHeight;
            const pct = scrollable > 0 ? Math.min(100, Math.max(0, (scrollTop / scrollable) * 100)) : 0;
            bar.style.width = pct + '%';
            topBtn.classList.toggle('show', scrollTop > 300);
        }
        window.addEventListener('scroll', updateScrollUI, { passive: true });
        window.addEventListener('resize', updateScrollUI);
        updateScrollUI();
    });
})();

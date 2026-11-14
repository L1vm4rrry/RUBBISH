// theme.js - 全站防闪烁夜间模式 + 全局设置面板（主题 / 语言）+ 阅读进度条 + 回到顶部
// 必须放在 <head> 里最先引入，避免闪屏
(function () {
    // 立即设置主题，防止闪屏
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    // 记录脚本自身地址，用于计算小游戏页的相对路径（文章页在子目录）
    const themeScript = document.currentScript;

    // ---------- 界面文案翻译表 ----------
    const i18n = {
        '← 返回首页': '← Home',
        '探索': 'Explore',
        '关于': 'About',
        '合作出版': 'Publishing',
        '订阅': 'Subscribe',
        '投稿': 'Submit',
        'HGS奖': 'HGS Award',
        ' - 首页': ' - Home',
        ' - 探索': ' - Explore',
        ' - 关于': ' - About',
        ' - 合作出版': ' - Publishing',
        ' - 订阅': ' - Subscribe',
        ' - 投稿': ' - Submit',
        ' - HGS奖': ' - HGS Award',
        ' - 404': ' - 404',
        '© 2026 RUBBISH. 所有的废纸都会被认真对待。': '© 2026 RUBBISH. All trash will be treated seriously.',
        '主题': 'Theme',
        '语言': 'Language',
        '☀️ 日间': '☀️ Light',
        '🌙 夜间': '🌙 Dark',
        '简体中文': '简体中文',
        'English': 'English',
        '🎮 小游戏（开发中）': '🎮 Mini Game (in development)'
    };

    function applyLanguage(lang) {
        const isEn = lang === 'en';
        const targets = document.querySelectorAll(
            '.main-nav a, .page-subtitle, .footer, [data-lang-key]'
        );
        targets.forEach(el => {
            if (!el.dataset.zh) el.dataset.zh = el.textContent;
            const orig = el.dataset.zh;
            el.textContent = isEn ? (i18n[orig] || orig) : orig;
        });
        localStorage.setItem('lang', lang);
    }

    document.addEventListener('DOMContentLoaded', () => {
        // ---------- 1. 右上角设置面板（主题 + 语言 + 小游戏入口） ----------
        const nav = document.querySelector('.main-nav');
        if (nav) {
            // 移除旧的独立主题按钮，统一收进设置面板
            const oldBtn = document.getElementById('theme-toggle');
            if (oldBtn) oldBtn.remove();

            const wrap = document.createElement('div');
            wrap.className = 'settings-wrap';

            const btn = document.createElement('button');
            btn.id = 'settings-btn';
            btn.className = 'settings-btn';
            btn.title = '设置';
            btn.setAttribute('aria-label', '设置');
            btn.innerHTML = '⚙️';

            const panel = document.createElement('div');
            panel.id = 'settings-panel';
            panel.className = 'settings-panel';
            panel.innerHTML = `
                <div class="settings-row">
                    <span data-lang-key="theme">主题</span>
                    <button class="set-btn" data-theme-val="light">☀️ 日间</button>
                    <button class="set-btn" data-theme-val="dark">🌙 夜间</button>
                </div>
                <div class="settings-row">
                    <span data-lang-key="language">语言</span>
                    <button class="set-btn" data-lang-val="zh">简体中文</button>
                    <button class="set-btn" data-lang-val="en">English</button>
                </div>
                <a class="settings-link" data-lang-key="game" href="game.html">🎮 小游戏（开发中）</a>
            `;

            // 小游戏链接：文章页在子目录，按 theme.js 真实地址换算
            const gameLink = panel.querySelector('.settings-link');
            if (themeScript && themeScript.src) {
                try {
                    gameLink.href = new URL('game.html', themeScript.src).href;
                } catch (e) { /* 保持默认相对路径 */ }
            }

            wrap.appendChild(btn);
            wrap.appendChild(panel);

            // 有搜索框就放在搜索框右侧，否则放在导航右侧
            const searchWrapper = document.querySelector('.search-wrapper');
            if (searchWrapper) {
                searchWrapper.appendChild(wrap);
            } else {
                nav.appendChild(wrap);
            }

            // 开关面板
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                panel.classList.toggle('show');
            });
            document.addEventListener('click', (e) => {
                if (!wrap.contains(e.target)) panel.classList.remove('show');
            });

            // 主题 / 语言切换
            const themeBtns = panel.querySelectorAll('[data-theme-val]');
            const langBtns = panel.querySelectorAll('[data-lang-val]');
            function refreshActive() {
                const theme = document.documentElement.getAttribute('data-theme');
                const lang = localStorage.getItem('lang') || 'zh';
                themeBtns.forEach(b => b.classList.toggle('active', b.dataset.themeVal === theme));
                langBtns.forEach(b => b.classList.toggle('active', b.dataset.langVal === lang));
            }
            themeBtns.forEach(b => {
                b.addEventListener('click', () => {
                    document.documentElement.setAttribute('data-theme', b.dataset.themeVal);
                    localStorage.setItem('theme', b.dataset.themeVal);
                    refreshActive();
                });
            });
            langBtns.forEach(b => {
                b.addEventListener('click', () => {
                    applyLanguage(b.dataset.langVal);
                    refreshActive();
                });
            });

            applyLanguage(localStorage.getItem('lang') || 'zh');
            refreshActive();
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

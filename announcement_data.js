// 全站唯一公告数据库（以后改公告，只改这里！）
const announcementSummary = `
    <p><strong>最新动态：</strong>策划组新增 <strong>XIV</strong> & <strong>Espin von Linné</strong>！404 页样式问题已修复~</p>
`;

const announcementFullText = `
    <h2>📢 最新更新公告 8.30 13:20</h2>
    <p><strong>团队变动：</strong></p>
    <ul>
        <li>策划组新增两名成员：<strong>XIV</strong> 和 <strong>Espin von Linné</strong>！（审核团队保持不变，这俩不参与审核 pwp）</li>
    </ul>
    <p><strong>功能修复：</strong></p>
    <ul>
        <li>修复 404 页面样式丢失问题：GitHub Pages 会把 404.html 原样返回给所有错误链接，之前从"深路径"坏链接进来时 CSS 会全部失效；现在无论从哪个坏链接进来，页面都带完整样式。</li>
    </ul>
    <hr style="border: none; border-top: 1px solid var(--toast-border); margin: 15px 0;">
    <p style="font-size: 14px; font-weight: normal;"><strong>往期（8.30 12:31）：</strong>UI 翻新、探索页升级（搜索标题/作者/分类 + 筛选 + 计数）、首页"最新普通垃圾"板块、阅读进度条 + 回到顶部、HGS 按届分组、响应式布局、新增 404 页与 README。</p>
`;

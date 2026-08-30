# 🗑️ RUBBISH — The Home For Academic Trash

一个纯静态的"学术垃圾"回收站。所有"理论"仅供娱乐，请勿在现实中进行任何危险实验。

在线地址：<https://l1vm4rrry.github.io/RUBBISH/>

## ✨ 功能

- **首页**：更新公告摘要 + 首页精选 + 最新普通垃圾
- **探索页**：全站文章档案库，支持搜索（标题/作者）、分类筛选（精选/普通）、按时间/名字排序
- **HGS 奖**：The High-Grade Stupidity Award / 高等愚蠢奖，按届展示获奖论文
- **关于页**：免责声明折叠、全站发稿统计条形图、摸头彩蛋
- **投稿页**（BIN）：待审核稿件区
- **夜间模式**：全站防闪烁主题切换，记住用户偏好
- **阅读进度条 & 回到顶部**：全站自动注入
- **响应式布局**：手机 / 小屏自适应
- **MathJax**：文章页支持 LaTeX 数学公式

## 📁 目录结构

```
RUBBISH/
├── index.html          首页
├── explore.html        探索（搜索/筛选/排序）
├── about.html          关于（统计图、免责声明、摸头彩蛋）
├── publish.html        合作出版（纯整活页）
├── subscribe.html      订阅/赞助
├── bin.html            投稿（待审核区）
├── hgs.html            HGS 奖
├── announcement.html   更新公告
├── 404.html            404 页
├── articles.js         全站文章数据仓库 ★ 发文章改这里
├── authors.js          作者数据库 ★ 统计图以此为准
├── announcement_data.js 公告数据库 ★ 改公告只改这里
├── theme.js            夜间模式 + 全局小工具（进度条/回顶）
├── style.css           全站样式
└── articles/           文章页面
    ├── common/         普通文章
    ├── handpicked/     精选文章
    └── HGS/            HGS 获奖论文
```

## 🚀 如何更新网站（只需改 3 个文件）

### 1. 发新文章

1. 把写好的文章 HTML 放进 `articles/handpicked/`（精选）或 `articles/common/`（普通）。
   - 注意文章页内的相对路径：`../../theme.js`、`../../style.css`、`../../images/favicon.png`
2. 在 `articles.js` 的 `articlesData` 数组里加一条记录：

```js
{
    title: "文章标题",
    url: "articles/common/文章文件名.html",
    author: "作者名",
    date: "2026-09-01",
    type: "普通"   // 或 "精选"
}
```

3. 顺手在 `authors.js` 里把对应作者的 `count` 加 1（没有的作者就新增一条）。

> 首页精选、探索页、最新普通垃圾、HGS 都是自动从 `articles.js` 渲染的，无需改 HTML。

### 2. 更新公告

只改 `announcement_data.js` 里的 `announcementSummary`（首页摘要）和 `announcementFullText`（公告全文）即可，首页和公告页会自动同步。

### 3. HGS 获奖

在 `articles.js` 的 `hgsAwards` 数组里追加获奖记录，`hgs.html` 会自动按届分组展示。

## 🛠️ 本地预览

直接用浏览器打开 `index.html` 即可（纯静态，无任何依赖构建步骤）。推荐用 VS Code 的 Live Server 插件预览。

## 📜 宇宙安全声明

本站纯属虚构，所有"学术理论"仅供娱乐。严禁宣传黄赌毒贷、暴力血腥、反国言论等违法行为。
投稿即代表同意将其改造成 A 类学术垃圾；不退出此网站代表你同意所有协议。

## © 版权

© 2026 RUBBISH. 所有的废纸都会被认真对待。

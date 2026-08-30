// authors.js - 作者数据库（唯一维护入口）
// 统计图完全以此文件为准！以后谁发了文章，直接在对应的 count 里加 1 即可。

const authorsData = [
    // 主策划组
    { name: "Dr.叶", institution: "三中实验部 (No.3 AS)", role: "主策划", count: 7 },
    { name: "Apl_zh", institution: "三中实验部 (No.3 AS)", role: "副策划", count: 3 },
    { name: "Dr.叶 & Apl_zh", institution: "三中实验部 (No.3 AS)", role: "联合研究", count: 1 },

    // 外部研究员
    { name: "Starry", institution: "Fuixin 小学", role: "研究员", count: 1 },
    { name: "Mon3tr", institution: "罗德岛医疗部", role: "特邀", count: 1 },
    { name: "Dr.Wang", institution: "三中实验部 (No.3 AS)", role: "研究员", count: 2 },
    { name: "XIV", institution: "三中实验部 (No.3 AS)", role: "研究员", count: 1 },
    { name: "XIV & Dr.叶 合作探究", institution: "三中实验部 (No.3 AS)", role: "合作", count: 1 },
    { name: "张子涵", institution: "三中实验部 (No.3 AS)", role: "研究员", count: 1 },
    { name: "Espin von Linné", institution: "三中实验部 (No.3 AS)", role: "伟大的垃圾文章科学家", count: 3 },
    // 翻译/其他
    { name: "Nature / Dr.叶 翻译", institution: "其他机构", role: "翻译", count: 1 },
    { name: "匿名", institution: "其他机构", role: "匿名", count: 1 },
];
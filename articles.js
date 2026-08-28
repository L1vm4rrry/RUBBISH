// articles.js - 全站文章数据仓库
const articlesData = [
    {
        title: "超导发电机无限能源理论",
        url: "articles/common/超导发电机无限能源理论.html",
        author: "Dr.叶 & Apl_zh",
        date: "2026-08-28",
        type: "普通"
    },
    {
        title: "有理菌分裂动力学与整数重构论",
        url: "articles/common/有理菌分裂动力学与整数重构论.html",
        author: "Starry",
        date: "2026-08-28",
        type: "普通"
    },
    {
        title: "汉堡存在及美味程度与雷德王降临概率相关性探究实验报告",
        url: "articles/common/汉堡存在及美味程度与雷德王降临概率相关性探究实验报告.html",
        author: "Apl_zh",
        date: "2026-08-28",
        type: "普通"
    },
    {
        title: "第二届年度世界人形机器人运动会（神秘机翻版）",
        url: "articles/common/第二届世界人形机器人运动会（神秘机翻版）.html",
        author: "Nature / Translate by Dr.叶",
        date: "2026-08-28",
        type: "普通"
    },
    {
        title: "关于多索雷斯城墙增长速度函数的探究",
        url: "articles/common/关于多索雷斯城墙增长速度函数的探究.html",
        author: "Dr.叶",
        date: "2026-08-28",
        type: "普通"
    },
    //上面是普通
    //下面是精选
    {
        title: "量子级碳骨架重组与热力学逆熵合成理论",
        url: "articles/handpicked/量子级碳骨架重组与热力学逆熵合成理论.html",
        author: "张子涵",
        date: "2026-08-27",
        type: "精选"
    },
    {
        title: "关于红墨水酸碱性研究的量子叠加态报道",
        url: "articles/handpicked/红墨水酸碱性研究.html",
        author: "Dr.叶 (No.3 AS 总策划)",
        date: "2026-08-28",
        type: "精选"
    },
    {
        title: "碳还原二氧化碳的等效变换原理及其治理全球变暖的终极方案",
        url: "articles/handpicked/碳还原二氧化碳的等效变换原理.html",
        author: "Dr.叶 (No.3 AS 总策划)",
        date: "2026-08-28",
        type: "精选"
    },
    {
        title: "三角函数倍角公式的绝妙几何证明",
        url: "articles/handpicked/三角函数倍角公式的绝妙几何证明.html", // 路径改成了handpicked
        author: "Dr.叶 (No.3 AS 总策划)",
        date: "2026-08-28",
        type: "精选" // 改成精选
    },
    {
        title: "三角函数倍角公式的绝妙几何证明Pt.2",
        url: "articles/handpicked/关于一个没什么用的定理的推导.html", // 路径改成了handpicked
        author: "XIV(主要证明) & Dr.叶 (No.3 AS 总策划)(次要验证)",
        date: "2026-08-28",
        type: "精选" // 改成精选
    },
    {
        title: "二次函数性质重构",
        url: "articles/handpicked/二次函数性质重构与三角恒等式探究.html",
        author: "Dr.叶 (No.3 AS 总策划)",
        date: "2026-08-28",
        type: "精选"
    }
    // 下面的三角函数文件你还没建，所以先注释掉。等以后写好了再解开
    /*
    {
        title: "三角函数倍角公式的绝妙几何证明",
        url: "articles/三角函数倍角公式的绝妙几何证明.html",
        author: ""author": "Dr.叶 (No.3 AS 总策划)"",
        date: "2026-08-28",
        type: "普通"
    }
    */
];

// 待审核稿件（bin文件夹里的示例文件也注释掉，除非你真的建了）
const pendingArticles = [
    /*
    {
        title: "关于用微波炉加热铁块以验证电磁感应定律的实验报告",
        url: "bin/微波炉加热铁块实验报告.html", 
        author: "匿名投稿者",
        date: "2026-08-28"
    },
    {
        title: "论如何用头发丝测量地球到月球的距离",
        url: "bin/头发丝测量地月距离.html",
        author: "物理系落榜生",
        date: "2026-08-29"
    }
    */
    {
        title: "关于“高中男女混寝提高生育率”玩笑的综合分析",
        url: "articles/bin/关于“高中男女混寝提高生育率”玩笑的综合分析.html",
        author: "Dr.wang",
        date: "2026-08-28"
    }
];

// HGS奖获奖论文集
const hgsAwards = [
    {
        issue: "第一届",
        title: "三角函数倍角公式的绝妙几何证明",
        url: "articles/HGS/第一期_三角函数倍角公式的绝妙几何证明.html",
        author: "Dr.叶",
        summary: "本证明采用纯欧几里得几何风格，通过无中生有地在内部构造“等腰三角形”，利用底角相等、外角定理与勾股定理三步推导，绝妙地导出了二倍角公式。展现了初中几何的看家本领，被评委会评为第一届HGS最高荣誉。"
    },
    {
        issue: "第一届",
        title: "关于一个没什么用的定理的推导",
        url: "articles/HGS/第一期第二篇_关于一个没什么用的定理的推导.html",
        author: "XIV(主要证明) & Dr.叶 (No.3 AS 总策划)(次要验证)",
        summary: "本证明由XIV提出新颖的内部构造视角，并辅助以“瞪眼法”进行严密推导。将枯燥的代数恒等式转化为优美的几何外角关系，体现了初中生最后的倔强与极高的捣乱水平。"
    },
    // 新增第三篇
    {
        issue: "第一届",
        title: "二次函数性质重构",
        url: "articles/HGS/第一期第三篇_二次函数性质重构.html",
        author: "Dr.叶",
        summary: "开创性地提出“顶点判别式”，跳过了繁琐的展开运算，直接将二次函数与几何意义结合，展现了极高的数学直觉。"
    }
];
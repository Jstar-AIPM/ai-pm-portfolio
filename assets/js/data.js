/* ==========================================================================
   Portfolio 内容配置 —— 改这一个文件即可更新整站
   --------------------------------------------------------------------------
   新增一个项目：在 PROJECTS 数组里追加一条对象即可，页面会自动生成。
   字段说明见每条项目上方注释。
   ========================================================================== */

/* ---------- 站点基本信息 ---------- */
const SITE = {
  brand: "AI Portfolio",
  name: "靳伟星",
  role: "AI 产品经理 · AI Builder",
  ideaZh: "AI 让想法被实现，<br />也让想法被看见。",
  ideaEn: "AI turns ideas into reality — and makes thoughts visible.",
  intro: "我喜欢从真实的问题和想法出发，用 AI 把它们做成真正可以使用的产品。",
  // 👇 个人 GitHub 主页
  github: "https://github.com/Jstar-AIPM",
  email: "18500028325@163.com",
};

/* ---------- 项目分类 ----------
   分类作为项目的属性存在，而不是固定栏目。
   未来同类新项目只需在 PROJECTS 里引用相同的 categoryId。
------------------------------------------------------------- */
const CATEGORIES = {
  product:  { zh: "AI × 产品工作",   en: "AI for Product Work" },
  thinking: { zh: "AI × 思考与效率", en: "AI for Thinking & Productivity" },
  life:     { zh: "AI × 生活与兴趣", en: "AI for Life & Interests" },
};

/* ---------- 项目列表 ----------
   order      项目序号（数字越小越靠前）
   categoryId 对应 CATEGORIES 的 key
   title      中文项目名（主要名称）
   titleEn    英文项目名（可选，作为辅助标签）
   tagline    一句话产品定义
   summary    简短产品介绍（2–3 句）
   workflow   核心产品流程（数组，页面自动加箭头）
   cover      主产品截图
   extra      补充截图（可选，最多 1 张）
   demo       Live Demo 地址
   github     GitHub 仓库地址
   status     当前状态（可选，如 "V1 已上线"）
------------------------------------------------------------- */
const PROJECTS = [
  {
    order: 1,
    categoryId: "product",
    title: "AI 用户洞察分析器",
    titleEn: "",
    tagline: "把零散的用户反馈，整理成可追溯的产品洞察。",
    summary:
      "上传用户反馈，AI 把它们归纳成结构化的主题：用户被什么阻碍、真正需要什么，并保留支持每条结论的原始证据。它不把 AI 输出当成已经被验证的需求，而是帮产品经理发现值得进一步验证的问题与机会。",
    workflow: ["用户反馈", "证据", "洞察", "产品机会"],
    cover: { src: "assets/img/insight-overview.webp", w: 1440, h: 1000, alt: "AI 用户洞察分析器的分析结果概览，展示样本量、洞察主题与用户证据" },
    extra: { src: "assets/img/insight-evidence.webp", w: 1440, h: 1000, alt: "某个洞察主题的详情：用户问题、用户需求、逐字保留的原始证据与产品机会" },
    demo: "https://skspa45uaigs0h5089a86.apigateway-cn-beijing.volceapi.com/",
    github: "https://github.com/Jstar-AIPM/ai-user-insight-analyzer",
    status: "V1 已上线",
  },
  {
    order: 2,
    categoryId: "thinking",
    title: "逐字稿提取器",
    titleEn: "Link2Transcript",
    tagline: "把视频变成逐字稿，让内容成为可以继续思考的 Context。",
    summary:
      "粘贴 B 站或小红书视频链接，就能得到一份可阅读、可下载的逐字稿。它的价值不只是把视频转成文字，而是把视频内容变成可复用的文本 Context，方便之后继续与 AI 对话、提问和分析。",
    workflow: ["视频", "逐字稿", "Context", "与 AI 思考"],
    cover: { src: "assets/img/l2t-home.webp", w: 1440, h: 1000, alt: "逐字稿提取器首页：粘贴视频链接，生成可阅读可下载的逐字稿" },
    extra: null,
    demo: "https://ssam70taea5thtgh9v9q5.apigateway-cn-beijing.volceapi.com/",
    github: "https://github.com/Jstar-AIPM/Link2Transcript",
    status: "V1 已上线",
  },
  {
    order: 3,
    categoryId: "life",
    title: "鞋历",
    titleEn: "Shoestory",
    tagline: "鞋会穿旧，故事不会。",
    summary:
      "上传一张曾经穿过的球鞋照片，AI 把它转译成统一风格的手绘水彩插画，再连同年份与故事一起收进鞋柜。它不是一个通用 AI 绘图器，而是从真实兴趣和记忆出发的个人档案——在同一套视觉语言里，慢慢积累。",
    workflow: ["照片", "插画", "故事", "个人鞋柜"],
    cover: { src: "assets/img/shoestory-cabinet.webp", w: 1440, h: 1000, alt: "鞋历的个人鞋柜：按年份排列的水彩球鞋插画" },
    extra: { src: "assets/img/shoestory-artwork.webp", w: 560, h: 375, alt: "鞋历生成的一张手绘水彩球鞋插画" },
    demo: "https://sf7d7f90oeokpqnk7mllk.apigateway-cn-beijing.volceapi.com/",
    github: "https://github.com/Jstar-AIPM/shoestory",
    status: "V1 已上线",
  },
];

/* ---------- How I Build ---------- */
const HOW_I_BUILD = {
  steps: ["问题 / 想法", "产品判断", "AI 能力", "Workflow 设计", "AI Coding", "测试", "迭代"],
  note: "AI Coding 降低了从想法到产品的实现门槛，但真正决定产品价值的，仍然是问题定义、产品判断、AI 能力选择、Workflow 设计、边界取舍，以及真实使用中的验证和迭代。",
};

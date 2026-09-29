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
  // 👇 个人形象照：留空时显示灰色占位框；补上图后填路径即可，例如 "assets/img/portrait.jpg"
  photo: "",
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
   workflow   核心工作流步骤（数组，页面自动加箭头）
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
      "上传一个 CSV，AI 读完全部反馈后归纳出若干主题：每个主题都给出用户被什么问题阻碍、真正需要什么、哪些原始反馈支持这个判断，以及值得进一步评估的产品机会。它不把大模型的输出当成已经被验证的需求——每条结论都能回到用户原话。",
    workflow: ["用户反馈 CSV", "反馈主题", "用户问题", "深层需求", "原始证据", "产品机会"],
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
      "粘贴 B 站或小红书视频链接，系统先判断是否存在可信字幕，没有字幕再降级到语音识别，并把实际处理方式明确告诉用户。逐字稿不是终点——它把视频内容变成可复用的文本 Context，供用户继续与 AI 对话、提问和思考。",
    workflow: ["视频链接", "来源校验", "字幕优先 / 语音识别兜底", "逐段可见的逐字稿", "阅读 · 复制 · 下载"],
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
      "上传一张球鞋照片，系统把它转译成统一风格的手绘水彩插画，再连同年份与故事一起收进你的鞋柜。它不是一个通用 AI 绘图器——真正的难点是在保留原鞋轮廓、配色与 Logo 位置的前提下，把不同来源的照片变成同一套视觉语言，并长期积累成个人档案。",
    workflow: ["上传球鞋照片", "确认裁切", "图片体检", "水彩插画生成", "质量检查", "补充时间与故事", "私有鞋柜"],
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

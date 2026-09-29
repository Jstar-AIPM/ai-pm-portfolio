# 靳伟星 · AI Portfolio

个人 AI 产品主页：**顶部留下印象，项目证明能力。**

用最克制的方式回答三件事：我是谁、我如何理解和使用 AI、我做过哪些真实可用的 AI 产品。

## 技术栈

纯静态站点：**HTML + CSS + 原生 JavaScript**，无框架、无构建、无依赖。
内容与 UI 解耦——所有内容都在 `assets/js/data.js` 里，页面结构不用动。

## 目录结构

```
├── index.html               页面结构（导航 / Hero / 项目 / How I Build / Footer）
├── assets/
│   ├── favicon.svg
│   ├── css/styles.css       设计系统（Refero-inspired 黑白灰编辑风）
│   ├── img/                 真实项目截图（已压缩为 webp）
│   └── js/
│       ├── data.js          👈 所有内容都在这里
│       └── main.js          渲染逻辑（一般不用动）
└── README.md
```

## 本地预览

直接双击 `index.html` 即可，或启动本地服务器：

```bash
cd "00 个人站"
python3 -m http.server 8000
# 打开 http://localhost:8000
```

## 内容维护（重要）

**只改一个文件：`assets/js/data.js`。**

- `SITE` — 品牌名、姓名、身份、理念、辅助说明、GitHub 主页、邮箱
- `CATEGORIES` — 三个内容分类（AI × 产品工作 / 思考与效率 / 生活与兴趣）
- `PROJECTS` — 项目数组
- `HOW_I_BUILD` — How I Build 的步骤与说明

### 项目配图（横向滑动）

一个项目有 `cover` + `extra` 两张图时，右侧会自动变成**可左右滑动的轮播**（圆点 + 左右箭头，手机可直接滑动），左侧文字保持不动；只有一张图时则显示单图。新增更多图时把 `extra` 换成 `images: [ ... ]` 也可以自动支持。

### 新增一个项目

在 `PROJECTS` 数组里追加一条对象，页面会自动按现有设计生成新的 Project Module：

```js
{
  order: 4,                       // 排序，数字越小越靠前
  categoryId: "product",          // 对应 CATEGORIES 的 key
  title: "项目中文名",
  titleEn: "English Name",        // 可留空
  tagline: "一句话产品定义。",
  summary: "2–3 句产品介绍。",
  workflow: ["步骤一", "步骤二", "步骤三"],
  cover: { src: "assets/img/xxx.webp", w: 1440, h: 1000, alt: "截图说明" },
  extra: null,                    // 或再补一张 { src, w, h, alt }
  demo: "https://...",            // 可留空
  github: "https://github.com/...",
  status: "V1 已上线",            // 可留空
}
```

- 分类复用：`categoryId` 指向 `CATEGORIES`，同类新项目直接引用即可，不用重复写分类文案。
- 截图：放进 `assets/img/`，建议压缩为 webp（`cwebp -q 82 -resize 1600 0 in.png -o out.webp`），并在 `cover` 里写清 `w`/`h` 以避免布局跳动。

## 设计说明

- 视觉方向：**Refero-inspired Minimal Editorial**，黑白灰、极细分割线、大留白、编辑式 Grid。
- **站点本身保持中性**，不设品牌主色——颜色由项目截图提供。
- 中文字体使用系统字体栈（PingFang SC / 微软雅黑 等），不加载 web font，保证国内加载速度与跨平台一致性。
- 已适配 Desktop / Tablet / Mobile，无横向溢出。

## 部署

计划部署到火山云静态/前端托管。本轮先本地确认视觉与内容，确认后再进入部署。

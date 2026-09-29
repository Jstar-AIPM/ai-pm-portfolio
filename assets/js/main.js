/* ==========================================================================
   渲染逻辑 —— 从 data.js 读取内容生成页面（一般不需要修改）
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- 工具 ---------- */
  function el(id) {
    return document.getElementById(id);
  }

  function escapeHtml(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function isUrl(v) {
    return typeof v === "string" && /^https?:\/\//.test(v);
  }

  /* ---------- 站点基本信息 ---------- */
  function renderSite() {
    document.title = SITE.name + " · " + SITE.role.replace(" · ", " / ");

    el("navName").textContent = SITE.brand || SITE.name;
    el("heroName").textContent = SITE.name;
    el("heroRole").textContent = SITE.role;
    el("heroIdea").innerHTML = SITE.ideaZh;           // 允许 <br />
    el("heroIdeaEn").textContent = SITE.ideaEn;
    el("heroIntro").textContent = SITE.intro;

    if (isUrl(SITE.github)) {
      el("navGithub").href = SITE.github;
      el("heroGithub").href = SITE.github;
      el("footerGithub").href = SITE.github;
    } else {
      el("navGithub").hidden = true;
      el("heroGithub").hidden = true;
      el("footerGithub").hidden = true;
    }

    var mail = el("footerEmail");
    if (SITE.email) {
      mail.href = "mailto:" + SITE.email;
    } else {
      mail.hidden = true;
    }

    el("footerYear").textContent = new Date().getFullYear();
  }

  /* ---------- 个人形象照 ---------- */
  function renderPhoto() {
    var box = el("heroPhoto");
    if (!box) return;

    if (SITE.photo) {
      box.removeAttribute("aria-hidden");
      box.classList.add("has-photo");
      box.style.backgroundImage = "url('" + SITE.photo + "')";
      box.innerHTML = '<img src="' + escapeHtml(SITE.photo) + '" alt="' +
        escapeHtml(SITE.name) + ' 的个人形象照" />';
    } else {
      // 占位：虚线灰框 + 提示文字
      box.setAttribute("aria-hidden", "true");
      box.innerHTML = '<span class="hero-photo-label">个人形象照</span>';
    }
  }

  /* ---------- 项目 ---------- */
  function workflowHtml(steps) {
    return (steps || [])
      .map(function (s, i) {
        var arrow = i > 0 ? '<span class="wf-arrow" aria-hidden="true">→</span>' : "";
        return arrow + '<span class="wf-step">' + escapeHtml(s) + "</span>";
      })
      .join("");
  }

  function imgTag(img, loading) {
    return (
      '<img src="' + escapeHtml(img.src) + '" alt="' + escapeHtml(img.alt || "") + '"' +
      ' width="' + img.w + '" height="' + img.h + '"' +
      ' loading="' + loading + '" decoding="async" />'
    );
  }

  // 单图：普通相框；多图：横向可滑动
  function mediaHtml(images) {
    if (images.length <= 1) {
      return '<figure class="frame">' + imgTag(images[0], "eager") + "</figure>";
    }

    var slides = images.map(function (img, i) {
      return '<figure class="slide">' + imgTag(img, i === 0 ? "eager" : "lazy") + "</figure>";
    }).join("");

    var dots = images.map(function (_, i) {
      return '<button class="dot' + (i === 0 ? " is-active" : "") + '" type="button"' +
        ' data-index="' + i + '" aria-label="查看第 ' + (i + 1) + " 张图\"></button>";
    }).join("");

    return (
      '<div class="slider" data-slider>' +
        '<div class="slider-track" tabindex="0" role="group" aria-label="项目截图，可左右滑动切换">' +
          slides +
        "</div>" +
        '<div class="slider-ui">' +
          '<div class="slider-dots">' + dots + "</div>" +
          '<div class="slider-nav">' +
            '<button class="slider-btn" type="button" data-dir="-1" aria-label="上一张">←</button>' +
            '<button class="slider-btn" type="button" data-dir="1" aria-label="下一张">→</button>' +
          "</div>" +
        "</div>" +
      "</div>"
    );
  }

  function renderProjects() {
    var list = el("projectsList");
    var sorted = PROJECTS.slice().sort(function (a, b) { return a.order - b.order; });

    list.innerHTML = sorted.map(function (p, i) {
      var cat = CATEGORIES[p.categoryId] || { zh: "", en: "" };
      var num = String(i + 1).padStart(2, "0");
      var reverse = i % 2 === 1 ? " project--reverse" : "";
      var titleEn = p.titleEn
        ? '<span class="project-title-en" lang="en">' + escapeHtml(p.titleEn) + "</span>"
        : "";

      var images = (Array.isArray(p.images) && p.images.length ? p.images : [p.cover, p.extra])
        .filter(Boolean);

      var links =
        (isUrl(p.demo)
          ? '<a class="btn btn-dark" href="' + escapeHtml(p.demo) + '" target="_blank" rel="noopener">在线体验 <span class="btn-ico" aria-hidden="true">↗</span></a>'
          : "") +
        (isUrl(p.github)
          ? '<a class="btn btn-ghost" href="' + escapeHtml(p.github) + '" target="_blank" rel="noopener">GitHub <span class="btn-ico" aria-hidden="true">↗</span></a>'
          : "");

      var status = p.status
        ? '<span class="project-status">' + escapeHtml(p.status) + "</span>"
        : "";

      return (
        '<article class="project reveal' + reverse + '">' +
          '<header class="project-top">' +
            '<span class="project-num">' + num + "</span>" +
            '<span class="project-cat">' +
              '<span class="cat-en" lang="en">' + escapeHtml(cat.en) + "</span>" +
              '<span class="cat-zh">' + escapeHtml(cat.zh) + "</span>" +
            "</span>" +
            status +
          "</header>" +
          '<div class="project-grid">' +
            '<div class="project-body">' +
              '<h3 class="project-title">' + escapeHtml(p.title) + titleEn + "</h3>" +
              '<p class="project-tagline">' + escapeHtml(p.tagline) + "</p>" +
              '<p class="project-summary">' + escapeHtml(p.summary) + "</p>" +
              '<div class="workflow" aria-label="核心工作流">' + workflowHtml(p.workflow) + "</div>" +
            "</div>" +
            '<div class="project-media">' + mediaHtml(images) + "</div>" +
            '<div class="project-links">' + links + "</div>" +
          "</div>" +
        "</article>"
      );
    }).join("");
  }

  /* ---------- 横向滑动 ---------- */
  function initSliders() {
    document.querySelectorAll("[data-slider]").forEach(function (root) {
      var track = root.querySelector(".slider-track");
      var slides = root.querySelectorAll(".slide");
      var dots = root.querySelectorAll(".dot");
      if (!track || slides.length < 2) return;

      function current() {
        return Math.round(track.scrollLeft / track.clientWidth);
      }

      function go(i) {
        i = Math.max(0, Math.min(slides.length - 1, i));
        track.scrollTo({ left: i * track.clientWidth, behavior: "smooth" });
      }

      dots.forEach(function (d) {
        d.addEventListener("click", function () { go(Number(d.dataset.index)); });
      });

      root.querySelectorAll(".slider-btn").forEach(function (b) {
        b.addEventListener("click", function () { go(current() + Number(b.dataset.dir)); });
      });

      track.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") { e.preventDefault(); go(current() - 1); }
        if (e.key === "ArrowRight") { e.preventDefault(); go(current() + 1); }
      });

      track.addEventListener("scroll", function () {
        var i = current();
        dots.forEach(function (d, k) { d.classList.toggle("is-active", k === i); });
      }, { passive: true });
    });
  }

  /* ---------- How I Build ---------- */
  function renderHow() {
    el("buildFlow").innerHTML = (HOW_I_BUILD.steps || [])
      .map(function (s, i) {
        var arrow = i > 0 ? '<span class="wf-arrow" aria-hidden="true">→</span>' : "";
        return arrow + '<span class="build-step">' + escapeHtml(s) + "</span>";
      })
      .join("");
    el("buildNote").textContent = HOW_I_BUILD.note;
  }

  /* ---------- 滚动渐显（非常克制） ---------- */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach(function (n) { n.classList.add("visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });
    els.forEach(function (n) { io.observe(n); });
  }

  /* ---------- 启动 ---------- */
  function init() {
    renderSite();
    renderPhoto();
    renderProjects();
    renderHow();
    initSliders();
    initReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

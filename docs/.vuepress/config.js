let sidebar = [
  "/",
  "/installation/",
  "/button/",
  "/icon/",
  "/checkbox/",
  "/radio/",
  "/switch/",
  "/select/",
  "/input/",
  "/input-number/"
];

module.exports = {
  title: "Nebula UI",
  description: "Determinacy for better user experience of enterprise applications",
  themeConfig: {
    nav: [{ text: "GitHub", link: "https://github.com/LVMM-PC/nebula" }],
    sidebar: sidebar,
    lastUpdated: true,
    sidebarDepth: 2,
    locales: {
      "/zh/": {
        label: "简体中文",
        sidebar: sidebar.map(x => {
          return "/zh" + x;
        })
      }
    }
  },
  markdown: {
    config: md => {
      md.use(require("./nebulaSnippet.js"));
    }
  },
  locales: {
    "/": {
      lang: "en-US"
    },
    "/zh/": {
      lang: "zh-CN",
      description: "服务于企业级产品的设计体系，让设计者和开发者专注于更好的用户体验"
    }
  },
  evergreen: true
};

let sidebar = [
  "/",
  "/installation/",
  "/button/",
  "/icon/",
  "/checkbox/",
  "/radio/",
  "/switch/",
  "/select/",
  "/input/"
];

module.exports = {
  title: "Nebula UI",
  description: "Based on the Ant Design",
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
      description: "基于 Ant Design 的组件库"
    }
  },
  evergreen: true
};

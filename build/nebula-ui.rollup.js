import NebulaUi from "../dist/nebula-ui.common";

export var NebulaButton = NebulaUi.NebulaButton;
export var NebulaIcon = NebulaUi.NebulaIcon;
export var NebulaButtonGroup = NebulaUi.NebulaButtonGroup;
export var HelloWorld = NebulaUi.HelloWorld;

function install(Vue) {
  Vue.component("NebulaButton", NebulaButton);
  Vue.component("NebulaButtonGroup", NebulaButtonGroup);
  Vue.component("NebulaIcon", NebulaIcon);
  Vue.component("HelloWorld", HelloWorld);
}

const plugin = {
  install
};
export default plugin;

// Auto-install
let GlobalVue = null;
if (typeof window !== "undefined") {
  // @ts-ignore
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  // @ts-ignore
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

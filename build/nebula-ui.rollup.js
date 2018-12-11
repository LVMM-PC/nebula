import NebulaUi from "../dist/nebula-ui.common";

export var NebulaButton = NebulaUi.NebulaButton;
export var NebulaIcon = NebulaUi.NebulaIcon;
export var NebulaButtonGroup = NebulaUi.NebulaButtonGroup;
export var NebulaCheckbox = NebulaUi.NebulaCheckbox;
export var NebulaCheckboxGroup = NebulaUi.NebulaCheckboxGroup;
export var NebulaRadio = NebulaUi.NebulaRadio;
export var NebulaRadioButton = NebulaUi.NebulaRadioButton;
export var NebulaRadioGroup = NebulaUi.NebulaRadioGroup;
export var NebulaSwitch = NebulaUi.NebulaSwitch;
export var NebulaSelect = NebulaUi.NebulaSelect;
export var NebulaSelectOption = NebulaUi.NebulaSelectOption;
export var NebulaSelectOptGroup = NebulaUi.NebulaSelectOptGroup;

function install(Vue) {
  Vue.component("NebulaButton", NebulaButton);
  Vue.component("NebulaButtonGroup", NebulaButtonGroup);
  Vue.component("NebulaIcon", NebulaIcon);
  Vue.component("NebulaCheckbox", NebulaCheckbox);
  Vue.component("NebulaCheckboxGroup", NebulaCheckboxGroup);
  Vue.component("NebulaRadio", NebulaRadio);
  Vue.component("NebulaRadioButton", NebulaRadioButton);
  Vue.component("NebulaRadioGroup", NebulaRadioGroup);
  Vue.component("NebulaSwitch", NebulaSwitch);
  Vue.component("NebulaSelect", NebulaSelect);
  Vue.component("NebulaSelectOption", NebulaSelectOption);
  Vue.component("NebulaSelectOptGroup", NebulaSelectOptGroup);
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

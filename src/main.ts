import Vue from "vue";
import App from "./App.vue";
import "./components/nebula-ui.less";

import {
  NebulaButton,
  NebulaButtonGroup,
  NebulaCheckbox,
  NebulaCheckboxGroup,
  NebulaIcon,
  NebulaRadio,
  NebulaRadioButton,
  NebulaRadioGroup,
  VueCheckbox,
  Select,
  NebulaSwitch
} from "./index";

import router from "./router";

Vue.component("VueCheckbox", VueCheckbox);
Vue.component("NebulaButton", NebulaButton);
Vue.component("NebulaIcon", NebulaIcon);
Vue.component("NebulaButtonGroup", NebulaButtonGroup);
Vue.component("NebulaCheckbox", NebulaCheckbox);
Vue.component("NebulaCheckboxGroup", NebulaCheckboxGroup);
Vue.component("NebulaRadio", NebulaRadio);
Vue.component("NebulaRadioButton", NebulaRadioButton);
Vue.component("NebulaRadioGroup", NebulaRadioGroup);
Vue.component(Select.name, Select);
Vue.component("NebulaSwitch", NebulaSwitch);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import "./components/nebula-ui.less";

import {
  NebulaButton,
  NebulaButtonGroup,
  NebulaCheckbox,
  NebulaIcon,
  NebulaCheckboxGroup
} from "./index";

import router from "./router";

Vue.component("NebulaButton", NebulaButton);
Vue.component("NebulaIcon", NebulaIcon);
Vue.component("NebulaButtonGroup", NebulaButtonGroup);
Vue.component("NebulaCheckbox", NebulaCheckbox);
Vue.component("NebulaCheckboxGroup", NebulaCheckboxGroup);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

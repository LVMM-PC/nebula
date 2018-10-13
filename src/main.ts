import Vue from "vue";
import App from "./App.vue";
import "./components/nebula-ui.less";

import {
  NebulaButton,
  NebulaButtonGroup,
  NebulaCheckbox,
  NebulaIcon
} from "./index";

import router from "./router";

Vue.component("NebulaButton", NebulaButton);
Vue.component("NebulaIcon", NebulaIcon);
Vue.component("NebulaButtonGroup", NebulaButtonGroup);
Vue.component("NebulaCheckbox", NebulaCheckbox);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

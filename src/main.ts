import Vue from "vue";
import App from "./App.vue";
import "./components/nebula-ui.less";

// @ts-ignore
import { NebulaButton, NebulaIcon, NebulaButtonGroup } from "./index.ts";

import router from "./router";

Vue.component("NebulaButton", NebulaButton);
Vue.component("NebulaIcon", NebulaIcon);
Vue.component("NebulaButtonGroup", NebulaButtonGroup);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

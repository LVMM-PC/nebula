import Vue from "vue";
import App from "./App.vue";
import "./components/nebula-ui.less";

import NebulaUi from "./index";

import router from "./router";

Vue.use(NebulaUi);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import "./components/nebula-ui.less";
// @ts-ignore
import NebulaUi from "./index.ts";

Vue.config.productionTip = false;
Vue.use(NebulaUi);

new Vue({
  render: h => h(App)
}).$mount("#app");

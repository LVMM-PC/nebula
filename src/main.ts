import Vue from "vue";
import App from "./App.vue";
import "./components/nebula-ui.less";

import {
  NebulaButton,
  NebulaButtonGroup,
  NebulaCheckbox,
  NebulaCheckboxGroup,
  NebulaIcon,
  NebulaInput,
  NebulaInputGroup,
  NebulaInputNumber,
  NebulaInputSearch,
  NebulaRadio,
  NebulaRadioButton,
  NebulaRadioGroup,
  NebulaSelect,
  NebulaSelectOptGroup,
  NebulaSelectOption,
  NebulaSwitch,
  NebulaTextarea,
  NebulaModal,
  NebulaTooltip,
  NebulaForm
} from "./index";

import router from "./router";

Vue.prototype.$info = NebulaModal.info;
Vue.prototype.$success = NebulaModal.success;
Vue.prototype.$error = NebulaModal.error;
Vue.prototype.$warning = NebulaModal.warning;
Vue.prototype.$confirm = NebulaModal.confirm;

Vue.component("NebulaButton", NebulaButton);
Vue.component("NebulaIcon", NebulaIcon);
Vue.component("NebulaButtonGroup", NebulaButtonGroup);
Vue.component("NebulaCheckbox", NebulaCheckbox);
Vue.component("NebulaCheckboxGroup", NebulaCheckboxGroup);
Vue.component("NebulaRadio", NebulaRadio);
Vue.component("NebulaRadioButton", NebulaRadioButton);
Vue.component("NebulaRadioGroup", NebulaRadioGroup);
Vue.component("NebulaSelect", NebulaSelect);
Vue.component("NebulaSelectOption", NebulaSelectOption);
Vue.component("NebulaSelectOptGroup", NebulaSelectOptGroup);
Vue.component("NebulaSwitch", NebulaSwitch);
Vue.component("NebulaInput", NebulaInput);
Vue.component("NebulaInputSearch", NebulaInputSearch);
Vue.component("NebulaInputGroup", NebulaInputGroup);
Vue.component("NebulaTextarea", NebulaTextarea);
Vue.component("NebulaInputNumber", NebulaInputNumber);
Vue.component("NebulaModal", NebulaModal);
Vue.component("NebulaTooltip", NebulaTooltip);

Vue.use(NebulaForm);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

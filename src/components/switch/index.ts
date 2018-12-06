import Switch from "./NebulaSwitch";

/* istanbul ignore next */
// @ts-ignore
Switch.install = function(Vue) {
  Vue.component(Switch.name, Switch);
};

export { Switch };
export default Switch;

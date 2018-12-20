import Icon from "./NebulaIcon";

/* istanbul ignore next */
// @ts-ignore
Icon.install = function(Vue) {
  Vue.component(Icon.name, Icon);
};

export default Icon;

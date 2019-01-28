import ToolTip from "./Tooltip";

/* istanbul ignore next */
// @ts-ignore
ToolTip.install = function(Vue) {
  Vue.component(ToolTip.name, ToolTip);
};

export default ToolTip;

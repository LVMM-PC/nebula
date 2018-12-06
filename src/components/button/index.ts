import Button from "./NebulaButton";
import ButtonGroup from "./NebulaButtonGroup";

// @ts-ignore
Button.Group = ButtonGroup;

/* istanbul ignore next */
// @ts-ignore
Button.install = function(Vue) {
  Vue.component(Button.name, Button);
  Vue.component(ButtonGroup.name, ButtonGroup);
};

export default Button;

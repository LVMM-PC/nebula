import Radio from "./NebulaRadio";
import Group from "./NebulaRadioGroup";
import Button from "./NebulaRadioButton";

// @ts-ignore
Radio.Group = Group;
// @ts-ignore
Radio.Button = Button;

/* istanbul ignore next */
// @ts-ignore
Radio.install = function(Vue) {
  Vue.component(Radio.name, Radio);
  // @ts-ignore
  Vue.component(Radio.Group.name, Radio.Group);
  // @ts-ignore
  Vue.component(Radio.Button.name, Radio.Button);
};

export { Button, Group };
export default Radio;

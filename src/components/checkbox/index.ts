import Checkbox from "./NebulaCheckbox";
import CheckboxGroup from "./NebulaCheckboxGroup";

// @ts-ignore
Checkbox.Group = CheckboxGroup;

/* istanbul ignore next */
// @ts-ignore
Checkbox.install = function(Vue) {
  Vue.component(Checkbox.name, Checkbox);
  Vue.component(CheckboxGroup.name, CheckboxGroup);
};

export default Checkbox;

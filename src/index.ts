import NebulaButton from "./components/button";
import NebulaIcon from "./components/icon";
import NebulaRadio from "./components/radio";
import NebulaCheckbox from "./components/checkbox";
import NebulaSwitch from "./components/switch";
import NebulaSelect from "./components/select"

const components = [
  NebulaButton,
  NebulaIcon,
  NebulaRadio,
  NebulaCheckbox,
  NebulaSwitch,
  NebulaSelect
];

const install = function(Vue) {
  components.map(component => {
    Vue.use(component);
  });
};
export {
  install,
  NebulaButton,
  NebulaIcon,
  NebulaRadio,
  NebulaCheckbox,
  NebulaSwitch,
  NebulaSelect
};

export default {
  install
};

import { NebulaButton, NebulaButtonGroup, NebulaIcon } from "../../";
import "../../dist/nebula-ui.css";

export default ({ Vue }) => {
  // Vue.use(NebulaUiFramework);
  Vue.component("NebulaButton", NebulaButton);
  Vue.component("NebulaButtonGroup", NebulaButtonGroup);
  Vue.component("NebulaIcon", NebulaIcon);
};

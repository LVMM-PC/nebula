import Vue from "vue";
import glob from "glob";
import { mount } from "@vue/test-utils";
import NebulaUi from "../../dist/nebula-ui.esm.js";
Vue.use(NebulaUi);

export default function demoTest(component) {
  const files = glob.sync(
    `./docs/.vuepress/components/demo/${component}/*.vue`
  );

  files.forEach(file => {
    test(`renders ${file} correctly`, () => {
      let temp = require(`../.${file}`);
      const demo = temp.default || temp;
      const wrapper = mount(demo);
      expect(wrapper).toMatchSnapshot();
    });
  });
}

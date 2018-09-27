import { shallowMount, mount } from "@vue/test-utils";

// import {NebulaButton,NebulaIcon} from "../../../"
import NebulaButton from "../NebulaButton.vue";
import NebulaIcon from "../../icon/NebulaIcon.vue";

describe("Button", () => {
  it("renders correctly", () => {
    const buttonWrapper = shallowMount(NebulaButton, {
      slots: {
        default: "Follow"
      }
    });
    expect(buttonWrapper.html()).toMatchSnapshot();
  });

  it("renders Chinese characters correctly", () => {
    const iconWrapper = mount(NebulaIcon, {
      attrs: {
        type: "search"
      }
    });

    const buttonWrapper1 = mount(NebulaButton, {
      slots: {
        default: "按钮"
      }
    });
    expect(buttonWrapper1.html()).toMatchSnapshot();

    const buttonWrapper2 = mount(NebulaButton, {
      slots: {
        icon: "search",
        default: "按钮"
      }
    });
    expect(buttonWrapper2.html()).toMatchSnapshot();

    const buttonWrapper3 = mount(NebulaButton, {
      slots: {
        default: iconWrapper.html() + "按钮"
      }
    });
    expect(buttonWrapper3.html()).toMatchSnapshot();

    const buttonWrapper4 = mount(NebulaButton, {
      slots: {
        default: iconWrapper.html() + "按钮"
      },
      propsData: {
        loading: true
      }
    });
    expect(buttonWrapper4.html()).toMatchSnapshot();

    const buttonWrapper5 = mount(NebulaButton, {
      slots: {
        default: "按钮"
      },
      propsData: {
        loading: true
      }
    });
    expect(buttonWrapper5.html()).toMatchSnapshot();
  });

  it("should support link button", () => {
    const wrapper = mount(NebulaButton, {
      propsData: {
        target: "_blank",
        href: "http://nebula.em2046.com/"
      },
      slots: {
        default: "Link button"
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});

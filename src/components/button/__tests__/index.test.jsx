import { mount } from "@vue/test-utils";
import NebulaButton from "../NebulaButton.vue";
import NebulaIcon from "../../icon/NebulaIcon.vue";

describe("Button", () => {
  it("renders correctly", () => {
    const buttonWrapper = mount({
      render() {
        return <NebulaButton>Follow</NebulaButton>;
      }
    });
    expect(buttonWrapper.html()).toMatchSnapshot();
  });

  it("renders Chinese characters correctly", () => {
    const buttonWrapper1 = mount({
      render() {
        return <NebulaButton>按钮</NebulaButton>;
      }
    });
    expect(buttonWrapper1.html()).toMatchSnapshot();

    const buttonWrapper2 = mount({
      render() {
        return <NebulaButton icon={"search"}>按钮</NebulaButton>;
      }
    });
    expect(buttonWrapper2.html()).toMatchSnapshot();

    const buttonWrapper3 = mount({
      render() {
        return (
          <NebulaButton>
            <NebulaIcon type={"search"} />
            按钮
          </NebulaButton>
        );
      }
    });
    expect(buttonWrapper3.html()).toMatchSnapshot();

    const buttonWrapper4 = mount({
      render() {
        return (
          <NebulaButton loading>
            <NebulaIcon type={"search"} />
            按钮
          </NebulaButton>
        );
      }
    });
    expect(buttonWrapper4.html()).toMatchSnapshot();

    const buttonWrapper5 = mount({
      render() {
        return <NebulaButton loading>按钮</NebulaButton>;
      }
    });
    expect(buttonWrapper5.html()).toMatchSnapshot();
  });

  it("should support link button", () => {
    const wrapper = mount({
      render() {
        return (
          <NebulaButton href={"http://nebula.em2046.com/"} target={"_blank"}>
            Link button
          </NebulaButton>
        );
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});

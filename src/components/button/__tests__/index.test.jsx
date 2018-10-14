import { mount } from "@vue/test-utils";
import { render } from "@vue/server-test-utils";
import NebulaButton from "../NebulaButton.vue";
import flushPromises from "flush-promises";

describe("Button", () => {
  it("renders correctly", () => {
    const wrapper = mount({
      render() {
        return <NebulaButton>Follow</NebulaButton>;
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("mount correctly", () => {
    expect(() => {
      render({
        render() {
          return <NebulaButton>Follow</NebulaButton>;
        }
      });
    }).not.toThrow();
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
        return <NebulaButton icon="search">按钮</NebulaButton>;
      }
    });
    expect(buttonWrapper3.html()).toMatchSnapshot();

    const buttonWrapper4 = mount({
      render() {
        return (
          <NebulaButton icon="search" loading>
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

  //TODO renders Chinese characters correctly in HOC

  it("have static property for type detecting", () => {
    expect(NebulaButton.__NEBULA_BUTTON).toBe(true);
  });

  it("should change loading state instantly by default", async () => {
    const DefaultButton = {
      data() {
        return {
          loading: false
        };
      },
      methods: {
        enterLoading() {
          this.loading = true;
        }
      },
      render() {
        return (
          <NebulaButton loading={this.loading} onClick={this.enterLoading} />
        );
      }
    };
    const wrapper = mount(DefaultButton);

    await flushPromises();
    wrapper.trigger("click");
    await flushPromises();
    expect(wrapper.findAll(".nebula-btn-loading").length).toBe(1);
  });

  it("should change loading state with delay", async () => {
    const DefaultButton = {
      data() {
        return {
          loading: false
        };
      },
      methods: {
        enterLoading() {
          this.loading = { delay: 1000 };
        }
      },
      render() {
        return (
          <NebulaButton loading={this.loading} onClick={this.enterLoading}>
            Button
          </NebulaButton>
        );
      }
    };
    const wrapper = mount(DefaultButton);
    await flushPromises();
    wrapper.trigger("click");
    await flushPromises();
    expect(wrapper.classes("nebula-btn-loading")).toBe(false);
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

  it("fixbug renders {0} , 0 and {false}", () => {
    const wrapper = render({
      render() {
        return <NebulaButton>{0}</NebulaButton>;
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
    const wrapper1 = render({
      render() {
        return <NebulaButton>0</NebulaButton>;
      }
    });
    expect(wrapper1.html()).toMatchSnapshot();
    //FIXME
    const wrapper2 = render({
      render() {
        return <NebulaButton>{false}</NebulaButton>;
      }
    });
    expect(wrapper2.html()).toMatchSnapshot();
  });
});

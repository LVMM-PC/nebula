import { mount } from "@vue/test-utils";
import { NebulaButton, NebulaIcon } from "@/../";
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
      mount({
        render() {
          return <NebulaButton>Follow</NebulaButton>;
        }
      });
    }).not.toThrow();
  });

  it("renders Chinese characters correctly", () => {
    const wrapper = mount({
      render() {
        return <NebulaButton>按钮</NebulaButton>;
      }
    });
    expect(wrapper.html()).toMatchSnapshot();

    // should not insert space when there is icon
    const wrapper1 = mount({
      render() {
        return <NebulaButton icon="search">按钮</NebulaButton>;
      }
    });
    expect(wrapper1.html()).toMatchSnapshot();

    // should not insert space when there is icon
    const wrapper2 = mount({
      render() {
        return (
          <NebulaButton>
            <NebulaIcon type="search" />
            按钮
          </NebulaButton>
        );
      }
    });
    expect(wrapper2.html()).toMatchSnapshot();

    // should not insert space when there is icon while loading
    const wrapper4 = mount({
      render() {
        return (
          <NebulaButton icon="search" loading>
            按钮
          </NebulaButton>
        );
      }
    });
    expect(wrapper4.html()).toMatchSnapshot();

    // should insert space while loading
    const wrapper5 = mount({
      render() {
        return <NebulaButton loading>按钮</NebulaButton>;
      }
    });
    expect(wrapper5.html()).toMatchSnapshot();
  });

  it("renders Chinese characters correctly in HOC", async () => {
    const Text = {
      props: {
        label: {
          type: String
        }
      },
      render() {
        return <span>{this.label}</span>;
      }
    };

    const wrapper = mount({
      data() {
        return {
          label: "按钮"
        };
      },
      render() {
        return (
          <NebulaButton>
            <Text label={this.label}>按钮</Text>
          </NebulaButton>
        );
      }
    });

    await flushPromises();
    expect(
      wrapper.find(".nebula-btn").classes("nebula-btn-two-chinese-chars")
    ).toBe(true);

    wrapper.setData({
      label: "大按钮"
    });

    await flushPromises();
    expect(
      wrapper.find(".nebula-btn").classes("nebula-btn-two-chinese-chars")
    ).toBe(false);

    wrapper.setData({
      label: "按钮"
    });

    await flushPromises();
    expect(
      wrapper.find(".nebula-btn").classes("nebula-btn-two-chinese-chars")
    ).toBe(true);
  });

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
    const wrapper = mount({
      render() {
        return <NebulaButton>{0}</NebulaButton>;
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
    const wrapper1 = mount({
      render() {
        return <NebulaButton>0</NebulaButton>;
      }
    });
    expect(wrapper1.html()).toMatchSnapshot();
    const wrapper2 = mount({
      render() {
        return <NebulaButton>{false}</NebulaButton>;
      }
    });
    expect(wrapper2.html()).toMatchSnapshot();
  });

  it("should has click wave effect", async () => {
    const wrapper = mount({
      render() {
        return <NebulaButton type="primary">button</NebulaButton>;
      }
    });
    await flushPromises();
    wrapper.trigger("click");
    await flushPromises();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should not render as link button when href is undefined", async () => {
    const wrapper = mount({
      render() {
        return (
          <NebulaButton type="primary" href={undefined}>
            button
          </NebulaButton>
        );
      }
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});

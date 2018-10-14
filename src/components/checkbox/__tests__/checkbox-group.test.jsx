import { mount } from "@vue/test-utils";
import NebulaCheckbox from "../NebulaCheckbox.vue";
import NebulaCheckboxGroup from "../NebulaCheckboxGroup.vue";
import Vue from "vue";

Vue.component("NebulaCheckbox", NebulaCheckbox);

describe("CheckboxGroup", () => {
  it("should work basically", () => {
    const onChange = jest.fn();
    const wrapper = mount({
      render() {
        return (
          <NebulaCheckboxGroup
            options={["Apple", "Pear", "Orange"]}
            onChange={onChange}
          />
        );
      }
    });

    wrapper
      .findAll(".nebula-checkbox-input")
      .at(0)
      .trigger("change");
    expect(onChange).toBeCalledWith(["Apple"]);

    wrapper
      .findAll(".nebula-checkbox-input")
      .at(1)
      .trigger("change");
    expect(onChange).toBeCalledWith(["Apple", "Pear"]);

    wrapper
      .findAll(".nebula-checkbox-input")
      .at(2)
      .trigger("change");
    expect(onChange).toBeCalledWith(["Apple", "Pear", "Orange"]);

    wrapper
      .findAll(".nebula-checkbox-input")
      .at(1)
      .trigger("change");
    expect(onChange).toBeCalledWith(["Apple", "Orange"]);
  });

  it("does not trigger onChange callback of both Checkbox and CheckboxGroup when CheckboxGroup is disabled", () => {
    const onChangeGroup = jest.fn();

    const options = [
      { lable: "Apple", value: "Apple" },
      { lable: "Pear", value: "Pear" }
    ];

    const groupWrapper = mount({
      render() {
        return (
          <NebulaCheckboxGroup
            options={options}
            onChange={onChangeGroup}
            disabled
          />
        );
      }
    });

    groupWrapper
      .findAll(".nebula-checkbox-input")
      .at(0)
      .trigger("change");
    expect(onChangeGroup).not.toBeCalled();

    groupWrapper
      .findAll(".nebula-checkbox-input")
      .at(1)
      .trigger("change");
    expect(onChangeGroup).not.toBeCalled();
  });

  it("does not prevent onChange callback from Checkbox when CheckboxGroup is not disabled", () => {
    const onChangeGroup = jest.fn();

    const options = [
      { lable: "Apple", value: "Apple" },
      { lable: "Pear", value: "Pear", disabled: true }
    ];

    const groupWrapper = mount({
      render() {
        return (
          <NebulaCheckboxGroup
            options={options}
            onChange={onChangeGroup}
            disabled
          />
        );
      }
    });

    groupWrapper
      .findAll(".nebula-checkbox-input")
      .at(0)
      .trigger("change");
    expect(onChangeGroup).not.toBeCalled();

    groupWrapper
      .findAll(".nebula-checkbox-input")
      .at(1)
      .trigger("change");
    expect(onChangeGroup).not.toBeCalled();
  });

  it("passes prefixCls down to checkbox", () => {
    const options = [
      { label: "Apple", value: "Apple" },
      { label: "Orange", value: "Orange" }
    ];

    const wrapper = mount({
      render() {
        return (
          <NebulaCheckboxGroup prefixCls="my-checkbox" options={options} />
        );
      }
    });

    expect(wrapper).toMatchSnapshot();
  });

  it("should be controlled by value", done => {
    const options = [
      { label: "Apple", value: "Apple" },
      { label: "Orange", value: "Orange" }
    ];

    const wrapper = mount(NebulaCheckboxGroup, {
      propsData: {
        options
      }
    });

    expect(wrapper.vm.stateValue).toEqual([]);
    wrapper.setProps({ value: ["Apple"] });

    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.stateValue).toEqual(["Apple"]);
      done();
    });
  });
});

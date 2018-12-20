import { mount } from "@vue/test-utils";
import { NebulaCheckbox } from "@/../";
import focusTest from "../../../../tests/shared/focus-test";

describe("Checkbox", () => {
  focusTest(NebulaCheckbox);

  it("responses hover events", () => {
    const onMouseenter = jest.fn();
    const onMouseleave = jest.fn();

    const wrapper = mount({
      render() {
        return (
          <NebulaCheckbox
            onMouseenter={onMouseenter}
            onMouseleave={onMouseleave}
          />
        );
      }
    });

    wrapper.trigger("mouseenter");
    expect(onMouseenter).toHaveBeenCalled();

    wrapper.trigger("mouseleave");
    expect(onMouseleave).toHaveBeenCalled();
  });
});

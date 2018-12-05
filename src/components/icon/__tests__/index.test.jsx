import { mount } from "@vue/test-utils";
import NebulaIcon from "../NebulaIcon";

describe("Icon", () => {
  it("should render to a <span class='???'></span>", () => {
    const wrapper = mount({
      render() {
        return <NebulaIcon type="appstore" class="my-icon-class-name" />;
      }
    });
    expect(wrapper).toMatchSnapshot();
  });
});

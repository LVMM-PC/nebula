import { mount } from "@vue/test-utils";

export default function focusTest(Component) {
  describe("focus and blur", () => {
    beforeAll(() => {
      jest.useFakeTimers();
    });

    let container;
    beforeEach(() => {
      container = document.createElement("div");
      document.body.appendChild(container);
    });

    afterAll(() => {
      jest.useRealTimers();
    });

    it("focus() and onFocus", () => {
      const handleFocus = jest.fn();
      const wrapper = mount(
        {
          render() {
            return <Component ref="component" onFocus={handleFocus} />;
          }
        },
        { attachTo: container }
      );
      wrapper.vm.$refs.component.focus();
      jest.runAllTimers();
      expect(handleFocus).toBeCalled();
    });

    it("blur() and onBlur", () => {
      const handleBlur = jest.fn();
      const wrapper = mount(
        {
          render() {
            return <Component ref="component" onBlur={handleBlur} />;
          }
        },
        { attachTo: container }
      );
      wrapper.vm.$refs.component.focus();
      jest.runAllTimers();
      wrapper.vm.$refs.component.blur();
      jest.runAllTimers();
      expect(handleBlur).toBeCalled();
    });

    it("autofocus", () => {
      const handleFocus = jest.fn();
      mount(
        {
          render() {
            return <Component autofocus onFocus={handleFocus} />;
          }
        },
        { attachTo: container }
      );
      jest.runAllTimers();
      setTimeout(function() {
        expect(handleFocus).toBeCalled();
      });
    });
  });
}

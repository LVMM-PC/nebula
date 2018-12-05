import PropTypes from "../_util/vue-types";

import { Component, Vue } from "vue-property-decorator";
@Component({
  props: {
    visible: PropTypes.bool,
    hiddenClassName: PropTypes.string
  }
})
export default class LazyRenderBox extends Vue {
  constructor(props: any) {
    super(props);
  }

  render() {
    const { hiddenClassName, visible } = this.$props;
    let children = null;
    if (
      hiddenClassName ||
      !this.$slots.default ||
      this.$slots.default.length > 1
    ) {
      const cls = "";
      if (!visible && hiddenClassName) {
        // cls += ` ${hiddenClassName}`
      }
      children = <div class={cls}>{this.$slots.default}</div>;
    } else {
      children = this.$slots.default[0];
    }
    return children;
  }
}

import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class extends Vue {
  @Prop({ type: Boolean })
  visible?: boolean;
  @Prop({ type: String })
  hiddenClassName?: string;

  constructor(props) {
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

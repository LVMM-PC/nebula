import omit from "omit.js";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "DOMWrap"
})
export default class DOMWrap extends Vue {
  @Prop({ default: false, type: Boolean })
  visible: boolean;

  @Prop({ default: "div", type: String })
  tag: string;

  @Prop({ default: "", type: String })
  hiddenClassName: string;

  class() {
    const { visible, hiddenClassName } = this.$props;
    return {
      // [hiddenClassName]: !visible,
    };
  }

  render() {
    const otherProps = omit(this.$props, ["tag", "hiddenClassName", "visible"]);
    const Tag = this.$props.tag;
    const tagProps = {
      attr: { ...otherProps, ...this.$attrs },
      on: this.$listeners
    };
    return (
      <Tag {...tagProps} class={this.class}>
        {this.$slots.default}
      </Tag>
    );
  }
}

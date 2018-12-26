import LazyRenderBox from "./LazyRenderBox";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class extends Vue {
  @Prop({ default: "", type: String })
  hiddenClassName?: string;

  @Prop({ type: String })
  prefixCls?: string;

  @Prop({ type: Boolean })
  visible?: boolean;

  render() {
    const { prefixCls, visible, hiddenClassName } = this.$props;
    const { $listeners } = this;
    const divProps = {
      on: $listeners
    };

    return (
      <div {...divProps} class={!visible ? hiddenClassName : ""}>
        <LazyRenderBox class={`${prefixCls}-content`} visible={visible}>
          {this.$slots.default}
        </LazyRenderBox>
      </div>
    );
  }
}

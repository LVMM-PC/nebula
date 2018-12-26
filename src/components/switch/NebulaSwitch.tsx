import { getComponentFromProp, getOptionProps } from "../_util/props-util";
import VcSwitch from "../vc-switch";
import Wave from "../_util/wave";
import { Component, Model, Prop, Vue } from "vue-property-decorator";

export type switchSize = "small" | "default" | "large";

@Component({
  name: "NebulaSwitch"
})
export default class NebulaSwitch extends Vue {
  @Prop({ default: "nebula-switch", type: String })
  public prefixCls?: string;
  @Model("change", { default: undefined })
  checked!: boolean;
  @Prop({ default: null, type: String })
  private size?: switchSize;
  @Prop({ type: Boolean })
  private disabled?: boolean;
  @Prop({})
  private checkedChildren?: any;
  @Prop({})
  private unCheckedChildren?: any;
  @Prop({ type: Number })
  private tabIndex?: number;
  @Prop({ type: Boolean })
  private defaultChecked?: boolean;
  @Prop({ type: Boolean })
  private autoFocus?: boolean;
  @Prop({ type: Boolean })
  private loading?: boolean;

  focus() {
    let refSwitchNode = this.$refs.refSwitchNode as HTMLInputElement;
    refSwitchNode.focus();
  }

  blur() {
    let refSwitchNode = this.$refs.refSwitchNode as HTMLInputElement;
    refSwitchNode.blur();
  }

  render() {
    const { prefixCls, size, loading, ...restProps } = getOptionProps(this);
    const classes = {
      [`${prefixCls}-small`]: size === "small",
      [`${prefixCls}-loading`]: loading
    };
    const switchProps = {
      props: {
        ...restProps,
        prefixCls
      },
      on: this.$listeners,
      class: classes,
      ref: "refSwitchNode"
    };
    return (
      <Wave insertExtraNode>
        <VcSwitch {...switchProps}>
          <template slot="checkedChildren">
            {getComponentFromProp(this, "checkedChildren")}
          </template>
          <template slot="unCheckedChildren">
            {getComponentFromProp(this, "unCheckedChildren")}
          </template>
        </VcSwitch>
      </Wave>
    );
  }
}

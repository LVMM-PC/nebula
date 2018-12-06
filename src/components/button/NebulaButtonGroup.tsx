import { Component, Prop, Vue } from "vue-property-decorator";
import { ButtonSize } from "./NebulaButton";
import { filterEmpty } from "../_util/props-util";

@Component({
  name: "NebulaButtonGroup"
})
export default class NebulaButtonGroup extends Vue {
  constructor(props: any) {
    super(props);
  }

  @Prop({ default: null, type: String })
  private size?: ButtonSize;

  public prefixCls: string = "nebula-btn-group";

  get classes() {
    let prefixCls = this.prefixCls;
    let sizeCls = this.sizeCls;
    return [
      prefixCls,
      {
        [`${prefixCls}-${sizeCls}`]: sizeCls
      }
    ];
  }

  get sizeCls() {
    // large => lg
    // small => sm
    let sizeCls = "";
    switch (this.size) {
      case "large":
        sizeCls = "lg";
        break;
      case "small":
        sizeCls = "sm";
        break;
      default:
        break;
    }
    return sizeCls;
  }

  render() {
    const { classes, $slots } = this;
    return <div class={classes}>{filterEmpty($slots.default)}</div>;
  }
}

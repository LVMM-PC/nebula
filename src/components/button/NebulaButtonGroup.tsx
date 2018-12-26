import { filterEmpty } from "../_util/props-util";
import { Component, Prop, Vue } from "vue-property-decorator";
import { ButtonSize } from "@/components/button/NebulaButton";
import { mixins } from "vue-class-component";

@Component({})
export class ButtonGroupProps extends Vue {
  @Prop({ default: "nebula-btn-group", type: String })
  prefixCls?: string;

  @Prop({ type: String })
  className?: string;

  @Prop({ type: String })
  size?: ButtonSize;
}

@Component({
  data() {
    return {
      sizeMap: {
        large: "lg",
        small: "sm"
      }
    };
  },
  computed: {
    classes() {
      const { prefixCls, size, sizeMap } = this;
      const sizeCls = sizeMap[size] || "";
      return [
        {
          [`${prefixCls}`]: true,
          [`${prefixCls}-${sizeCls}`]: sizeCls
        }
      ];
    }
  },
  render() {
    const { classes, $slots } = this;
    return <div class={classes}>{filterEmpty($slots.default)}</div>;
  }
})
export default class NebulaButtonGroup extends mixins(ButtonGroupProps) {}

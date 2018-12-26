import { getOptionProps, initDefaultProps } from "../_util/props-util";
import classNames from "classnames";
import Icon from "../icon";
import VcInputNumber from "../vc-input-number/src";
import { Component, Model, Prop, Vue } from "vue-property-decorator";
import { mixins } from "vue-class-component";

@Component({})
export class InputNumberProps extends Vue {
  @Prop({ type: String })
  prefixCls?: string;

  @Prop({ type: Number })
  min?: number;

  @Prop({ type: Number })
  max?: number;

  @Prop({ type: [Number, String] })
  value?: number | string;

  @Prop({ type: [Number, String] })
  step?: number | string;

  @Prop({ type: Number })
  defaultValue?: number;

  @Prop({ type: Number })
  tabIndex?: number;

  @Prop({ type: Boolean })
  disabled?: boolean;

  @Prop({ type: String })
  size?: "large" | "small" | "default";

  @Prop({ type: Function })
  formatter?: any;

  @Prop({ type: Function })
  parser?: any;

  @Prop({ type: String })
  decimalSeparator?: string;

  @Prop({ type: String })
  placeholder?: string;

  @Prop({ type: String })
  name?: string;

  @Prop({ type: String })
  id?: string;

  @Prop({ type: Number })
  precision?: number;

  @Prop({ type: Boolean })
  autoFocus?: boolean;
}

@Component({})
export default class InputNumber extends mixins(InputNumberProps) {
  @Model("change")
  value?: any;

  @Prop({ default: "nebula-input-number", type: String })
  prefixCls?: string;

  @Prop({ default: 1, type: Number })
  step?: number;

  focus() {
    let inputNumberRef = this.$refs.inputNumberRef as HTMLInputElement;
    inputNumberRef.focus();
  }

  blur() {
    let inputNumberRef = this.$refs.inputNumberRef as HTMLInputElement;
    inputNumberRef.blur();
  }

  render() {
    const { size, ...others } = getOptionProps(this);
    const inputNumberClass = classNames({
      [`${this.prefixCls}-lg`]: size === "large",
      [`${this.prefixCls}-sm`]: size === "small"
    });
    const upIcon = (
      <Icon type="up" class={`${this.prefixCls}-handler-up-inner`} />
    );
    const downIcon = (
      <Icon type="down" class={`${this.prefixCls}-handler-down-inner`} />
    );

    const vcInputNumberprops = {
      props: {
        upHandler: upIcon,
        downHandler: downIcon,
        ...others
      },
      class: inputNumberClass,
      ref: "inputNumberRef",
      on: this.$listeners
    };
    return <VcInputNumber {...vcInputNumberprops} />;
  }
}

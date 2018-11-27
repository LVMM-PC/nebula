<script lang="tsx">
import { Component, Model, Prop, Vue, Watch } from "vue-property-decorator";
import NebulaRadio from "./NebulaRadio";
import { filterEmpty, getOptionProps } from "../_util/props-util";

export type CheckboxValueType = string | number | boolean;

export interface CheckboxOptionType {
  label: string;
  value: CheckboxValueType;
  disabled?: boolean;
}

@Component
export default class NebulaRadioGroup extends Vue {
  @Model("change", {})
  value?: any;

  @Prop({ default: "nebula-radio", type: String })
  private prefixCls?: string;

  @Prop({})
  private defaultValue?: any;

  @Prop({
    default: "default",
    type: String,
    validator(value) {
      return ["large", "default", "small"].includes(value);
    }
  })
  private size?: string;

  @Prop({
    default: () => [],
    type: Array
  })
  private options?: Array<CheckboxOptionType | string>;

  @Prop({ default: null, type: Boolean })
  private disabled?: boolean;

  @Prop({ type: String })
  private name?: string;

  @Prop({ default: "outline", type: String })
  private buttonStyle?: string;

  @Watch("value")
  onValueChanged(val: any) {
    this.stateValue = val;
  }

  public stateValue: any = [];

  created() {
    let value = this.value;
    let defaultValue = this.defaultValue;
    this.stateValue = value && value.length ? value : defaultValue || [];
  }

  radioOptions() {
    const { disabled } = this;
    return this.options.map(option => {
      return typeof option === "string"
        ? { label: option, value: option }
        : {
            ...option,
            disabled: option.disabled === undefined ? disabled : option.disabled
          };
    });
  }

  classes() {
    const { prefixCls, size } = this;
    return {
      [`${prefixCls}`]: true,
      [`${prefixCls}-${size}`]: size
    };
  }

  render() {
    const props = getOptionProps(this);
    const { prefixCls, options, buttonStyle } = props;
    const groupPrefixCls = `${prefixCls}-group`;
    const classString = [
      groupPrefixCls,
      `${groupPrefixCls}-${buttonStyle}`,
      {
        [`${groupPrefixCls}-${props.size}`]: props.size
      }
    ];

    let children = filterEmpty(this.$slots.default);

    if (options && options.length > 0) {
      children = options.map((option, index) => {
        if (typeof option === "string") {
          return (
            <NebulaRadio
              key={index}
              prefixCls={prefixCls}
              disabled={props.disabled}
              value={option}
              checked={this.stateValue === option}
            >
              {option}
            </NebulaRadio>
          );
        } else {
          return (
            <NebulaRadio
              key={index}
              prefixCls={prefixCls}
              disabled={option.disabled || props.disabled}
              value={option.value}
              checked={this.stateValue === option.value}
            >
              {option.label}
            </NebulaRadio>
          );
        }
      });
    }

    return <div class={classString}>{children}</div>;
  }
}
</script>

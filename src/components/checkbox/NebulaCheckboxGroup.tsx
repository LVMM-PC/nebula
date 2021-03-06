import NebulaCheckbox from "./NebulaCheckbox";
import hasProp from "../_util/props-util";
import { Component, Model, Prop, Vue, Watch } from "vue-property-decorator";

export type CheckboxValueType = string | number | boolean;

export interface CheckboxOptionType {
  label: string;
  value: CheckboxValueType;
  disabled?: boolean;
}

@Component({
  name: "NebulaCheckboxGroup",
  provide() {
    return {
      checkboxGroupContext: this
    };
  }
})
export default class NebulaCheckboxGroup extends Vue {
  @Model("change", { default: undefined, type: Array })
  value?: Array<CheckboxValueType>;

  @Prop({ default: "nebula-checkbox", type: String })
  public prefixCls?: string;
  public stateValue: Array<CheckboxValueType> = [];
  @Prop({ default: null, type: Boolean })
  private disabled?: boolean;
  @Prop({
    default: undefined,
    type: Array
  })
  private defaultValue?: Array<CheckboxValueType>;
  @Prop({
    default: () => [],
    type: Array
  })
  private options?: Array<CheckboxOptionType | string>;

  @Watch("value")
  onValueChanged(val: any) {
    this.stateValue = val;
  }

  created() {
    const { value, defaultValue } = this;
    this.stateValue = value || defaultValue || [];
  }

  public getOptions() {
    const { options } = this.$props;
    return options.map(option => {
      if (typeof option === "string") {
        return {
          label: option,
          value: option
        };
      }
      return option;
    });
  }

  public toggleOption(option) {
    const optionIndex = this.stateValue.indexOf(option.value);
    const value = [...this.stateValue];
    if (optionIndex === -1) {
      value.push(option.value);
    } else {
      value.splice(optionIndex, 1);
    }
    if (!hasProp(this, "value")) {
      this.stateValue = value;
    }
    this.$emit("input", value);
    this.$emit("change", value);
  }

  render() {
    const { $props: props, $data: state, $slots } = this;
    const { prefixCls, options } = props;
    let children = $slots.default;
    const groupPrefixCls = `${prefixCls}-group`;
    if (options && options.length > 0) {
      children = this.getOptions().map(option => (
        <NebulaCheckbox
          prefixCls={prefixCls}
          key={option.value.toString()}
          disabled={"disabled" in option ? option.disabled : props.disabled}
          value={option.value}
          checked={state.stateValue.indexOf(option.value) !== -1}
          onChange={() => this.toggleOption(option)}
          class={`${groupPrefixCls}-item`}
        >
          {option.label}
        </NebulaCheckbox>
      ));
    }
    return <div class={groupPrefixCls}>{children}</div>;
  }
}

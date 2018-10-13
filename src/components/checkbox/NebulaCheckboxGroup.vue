<script lang="tsx">
import NebulaCheckbox from "./NebulaCheckbox.vue";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

export type CheckboxValueType = string | number | boolean;

export interface CheckboxOptionType {
  label: string;
  value: CheckboxValueType;
  disabled?: boolean;
}

@Component
export default class NebulaCheckboxGroup extends Vue {
  public stateValue: Array<CheckboxValueType> = [];

  public prefixCls: string = "nebula-checkbox";

  @Prop({ default: null, type: Boolean })
  private disabled?: boolean;

  @Prop({
    default: () => [],
    type: Array
  })
  private defaultValue?: Array<CheckboxValueType>;

  @Prop({
    default: () => [],
    type: Array
  })
  private options?: Array<CheckboxOptionType | string>;

  @Prop({
    default: () => [],
    type: Array
  })
  private value?: Array<CheckboxValueType>;

  @Watch("value")
  onValueChanged(val: any) {
    this.stateValue = val;
  }

  created() {
    let value = this.value;
    let defaultValue = this.defaultValue;
    this.stateValue = value && value.length ? value : defaultValue || [];
  }

  get groupClass() {
    let prefixCls = this.prefixCls;
    return `${prefixCls}-group`;
  }

  private getOptions() {
    const options = this.options;
    if (!options) {
      return [];
    }
    return options.map(option => {
      if (typeof option === "string") {
        return {
          label: option,
          value: option
        } as CheckboxOptionType;
      }
      return option;
    });
  }

  private toggleOption(option: any) {
    const optionIndex = this.stateValue.indexOf(option.value);
    const value = [...this.stateValue];

    if (optionIndex === -1) {
      value.push(option.value);
    } else {
      value.splice(optionIndex, 1);
    }
    this.stateValue = value;
    this.$emit("input", value);
    this.$emit("change", value);
  }

  render(h: any) {
    let children = this.getOptions().map(option => {
      let disabled = "disabled" in option ? option.disabled : this.disabled;
      let checked = this.stateValue.indexOf(option.value) !== -1;
      let prefixCls = this.prefixCls;
      let value = option.value;
      let change = () => {
        this.toggleOption(option);
      };
      let className = `${this.groupClass}-item`;
      //TODO Using TSX rewrite
      return h(
        "NebulaCheckbox",
        {
          class: className,
          props: {
            disabled,
            checked,
            prefixCls,
            value
          },
          on: {
            change: change
          }
        },
        [value]
      );
    });
    let groupClasses = this.groupClass;
    return <div className={groupClasses}>{children}</div>;
  }
}
</script>

<script lang="tsx">
import NebulaCheckbox from "./NebulaCheckbox.vue";
import { Component, Model, Prop, Vue, Watch } from "vue-property-decorator";

export type CheckboxValueType = string | number | boolean;

export interface CheckboxOptionType {
  label: string;
  value: CheckboxValueType;
  disabled?: boolean;
}

@Component
export default class NebulaCheckboxGroup extends Vue {
  @Model("change", { default: () => [], type: Array })
  value?: Array<CheckboxValueType>;

  @Prop({ default: "nebula-checkbox", type: String })
  private prefixCls?: string;

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

  @Watch("value")
  onValueChanged(val: any) {
    this.stateValue = val;
  }

  public stateValue: Array<CheckboxValueType> = [];

  get groupClass() {
    let prefixCls = this.prefixCls;
    return `${prefixCls}-group`;
  }

  created() {
    let value = this.value;
    let defaultValue = this.defaultValue;
    this.stateValue = value && value.length ? value : defaultValue || [];
  }

  public getOptions() {
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

  public toggleOption(option: any) {
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
      let disabled = this.disabled || option.disabled;
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
    return <div class={groupClasses}>{children}</div>;
  }
}
</script>

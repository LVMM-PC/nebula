<script lang="tsx">
import { Component, Model, Prop, Vue, Watch } from "vue-property-decorator";
import { getOptionProps, hasProp } from "../_util/props-util";

@Component
export default class VueCheckbox extends Vue {
  @Model("change", { type: [Boolean, Number] })
  checked!: boolean | number;

  @Prop({ default: "vue-checkbox", type: String })
  private prefixCls?: string;

  @Prop({ type: String })
  private name?: string;

  @Prop({ type: String })
  private id?: string;

  @Prop({ default: "checkbox" })
  private type?: string;

  @Prop({ type: [Boolean, Number] })
  private defaultChecked?: boolean | number;

  @Prop({ type: Boolean })
  private disabled?: boolean;

  @Prop({ type: String })
  private tabIndex?: string;

  @Prop({ type: Boolean })
  private readOnly?: boolean;

  @Prop({ type: Boolean })
  private autoFocus?: boolean;

  @Prop({})
  private value?: any;

  @Watch("checked")
  onCheckedChanged(val: boolean | number) {
    this.stateChecked = val;
  }

  public stateChecked?: boolean | number = false;

  created() {
    let checked = this.checked;
    let defaultChecked = this.defaultChecked;
    this.stateChecked = hasProp(this, "checked") ? checked : defaultChecked;
  }

  mounted() {
    if (this.autoFocus) {
      let input: HTMLInputElement = this.$refs.input as HTMLInputElement;
      input.focus();
    }
  }

  public focus() {
    let input: HTMLInputElement = this.$refs.input as HTMLInputElement;
    input.focus();
  }

  public blur() {
    let input: HTMLInputElement = this.$refs.input as HTMLInputElement;
    input.blur();
  }

  public handleChange(event: { target: HTMLInputElement }) {
    let targetChecked = event.target.checked;
    this.stateChecked = targetChecked;
    this.$emit("change", targetChecked);
  }

  render() {
    const {
      prefixCls,
      name,
      id,
      type,
      disabled,
      readOnly,
      tabIndex,
      autoFocus,
      value,
      ...others
    } = getOptionProps(this);
    const $attrs = this.$attrs;
    const globalProps = Object.keys({ ...others, ...$attrs }).reduce(
      (prev: any, key) => {
        let prefix = key.substr(0, 5);
        if (prefix === "aria-" || prefix === "data-" || key === "role") {
          prev[key] = others[key];
        }
        return prev;
      },
      {}
    );
    let stateChecked = this.stateChecked;
    const classString = [
      prefixCls,
      {
        [`${prefixCls}-checked`]: stateChecked,
        [`${prefixCls}-disabled`]: disabled
      }
    ];

    return (
      <span class={classString}>
        <input
          name={name}
          id={id}
          type={type}
          readOnly={readOnly}
          disabled={disabled}
          tabIndex={tabIndex}
          class={`${prefixCls}-input`}
          checked={stateChecked}
          autoFocus={autoFocus}
          ref="input"
          value={value}
          {...{
            attrs: {
              ...globalProps
            },
            on: {
              ...this.$listeners,
              change: this.handleChange
            }
          }}
        />
        <span class={`${prefixCls}-inner`} />
      </span>
    );
  }
}
</script>

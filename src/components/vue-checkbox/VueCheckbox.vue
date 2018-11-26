<script lang="tsx">
import { Component, Model, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class VueCheckbox extends Vue {
  @Model("change", { default: null, type: Boolean })
  checked!: boolean;

  @Prop({ default: "vue-checkbox" })
  private prefixCls?: string;

  @Prop({ default: null })
  private name?: string;

  @Prop({ default: null })
  private id?: string;

  @Prop({ default: "checkbox" })
  private type?: string;

  @Prop({ default: null })
  private defaultChecked?: boolean;

  @Prop({ default: null })
  private checked?: boolean;

  @Prop({ default: null })
  private disabled?: boolean;

  @Prop({ default: null })
  private tabIndex?: boolean;

  @Prop({ default: null })
  private readOnly?: boolean;

  @Prop({ default: null, type: Boolean })
  private autoFocus?: boolean;

  @Prop({ default: null })
  private value?: any;

  @Watch("checked")
  onCheckedChanged(val: boolean) {
    this.stateChecked = val;
  }

  public stateChecked?: boolean = false;

  created() {
    let checked = this.checked;
    let defaultChecked = this.defaultChecked;
    this.stateChecked = typeof checked === "boolean" ? checked : defaultChecked;
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
      stateChecked,
      prefixCls,
      name,
      id,
      type,
      disabled,
      readOnly,
      tabIndex,
      autoFocus,
      value,
      $attrs
    } = this;

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
              ...$attrs
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

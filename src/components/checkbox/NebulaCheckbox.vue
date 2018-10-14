<script lang="tsx">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

function noop() {}

@Component
export default class NebulaCheckbox extends Vue {
  public prefixCls: string = "nebula-checkbox";

  @Prop({ default: null, type: Boolean })
  private checked?: boolean;

  @Prop({ default: null, type: Boolean })
  private defaultChecked?: boolean;

  @Prop({ default: null, type: Boolean })
  private autofocus?: boolean;

  @Prop({ default: null, type: Boolean })
  private disabled?: boolean;

  @Prop({ default: null, type: Boolean })
  private indeterminate?: boolean;

  @Watch("checked")
  onCheckedChanged(val: boolean) {
    this.stateChecked = val;
  }

  get labelClasses() {
    let prefixCls = this.prefixCls || "nebula-checkbox";
    return [
      {
        [`${prefixCls}-wrapper`]: true
      }
    ];
  }

  get checkboxClasses() {
    let prefixCls = this.prefixCls;
    return [
      {
        [`${prefixCls}-input`]: true
      }
    ];
  }

  get innerClass() {
    return this.prefixCls + "-inner";
  }

  get spanClasses() {
    let prefixCls = this.prefixCls;
    let stateChecked = this.stateChecked;
    let stateDisabled = this.getDisabled;
    let stateIndeterminate = this.getIndeterminate;
    return [
      prefixCls,
      {
        [`${prefixCls}-checked`]: stateChecked,
        [`${prefixCls}-disabled`]: stateDisabled,
        [`${prefixCls}-indeterminate`]: stateIndeterminate
      }
    ];
  }

  public stateChecked?: boolean = false;

  created() {
    let checked = this.checked;
    let defaultChecked = this.defaultChecked;
    this.stateChecked = typeof checked === "boolean" ? checked : defaultChecked;
  }

  get getDisabled() {
    return this.disabled;
  }

  get getIndeterminate() {
    return this.indeterminate;
  }

  mounted() {
    if (this.autofocus) {
      let input: HTMLInputElement = this.$refs.input as HTMLInputElement;
      input.focus();
    }
  }

  handleChange(event: { target: HTMLInputElement }) {
    let targetChecked = event.target.checked;
    this.stateChecked = targetChecked;
    this.$emit("input", targetChecked);
    this.$emit("change", event);
  }

  public focus() {
    let input: HTMLInputElement = this.$refs.input as HTMLInputElement;
    input.focus();
  }

  public blur() {
    let input: HTMLInputElement = this.$refs.input as HTMLInputElement;
    input.blur();
  }

  render() {
    const {
      $attrs,
      $listeners,
      getDisabled,
      checkboxClasses,
      handleChange,
      stateChecked
    } = this;
    const {
      mouseenter = noop,
      mouseleave = noop,
      ...restListeners
    } = $listeners;
    const checkboxProps = {
      attrs: {
        ...$attrs
      },
      class: checkboxClasses,
      on: {
        ...restListeners,
        change: handleChange
      }
    };
    let labelClasses = this.labelClasses;
    let spanClasses = this.spanClasses;
    let innerClass = this.innerClass;
    let children = this.$slots.default;
    let autofocus = this.autofocus;
    return (
      <label
        class={labelClasses}
        onMouseenter={mouseenter}
        onMouseleave={mouseleave}
      >
        <span class={spanClasses}>
          <input
            type="checkbox"
            checked={stateChecked}
            disabled={getDisabled}
            autofocus={autofocus}
            ref="input"
            {...checkboxProps}
          />
          <span class={innerClass} />
        </span>
        {children !== undefined ? <span>{children}</span> : null}
      </label>
    );
  }
}
</script>

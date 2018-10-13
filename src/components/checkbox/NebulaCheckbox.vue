<script lang="tsx">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class NebulaCheckbox extends Vue {
  @Prop({ default: false, type: Boolean })
  private checked?: boolean;

  @Prop({ default: false, type: Boolean })
  private defaultChecked?: boolean;

  @Prop({ default: false, type: Boolean })
  private disabled?: boolean;

  @Prop({ default: false, type: Boolean })
  private indeterminate?: boolean;

  @Watch("checked")
  onCheckedChanged(val: boolean) {
    this.stateChecked = val;
  }

  public prefixCls: string = "nebula-checkbox";

  get labelClasses() {
    let prefixCls = this.prefixCls;
    return [
      {
        [`${prefixCls}-wrapper`]: true
      }
    ];
  }

  get checkboxClasses() {
    let prefixCls = this.prefixCls;
    let stateIndeterminate = this.getIndeterminate;
    return [
      {
        [`${prefixCls}-input`]: true,
        [`${prefixCls}-indeterminate`]: stateIndeterminate
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
    return [
      prefixCls,
      {
        [`${prefixCls}-checked`]: stateChecked,
        [`${prefixCls}-disabled`]: stateDisabled
      }
    ];
  }

  public stateChecked?: boolean = false;

  created() {
    let $attrs = this.$attrs;
    let checked = this.checked;
    let defaultChecked = this.defaultChecked;
    this.stateChecked = "checked" in $attrs ? checked : defaultChecked;
  }

  get getDisabled() {
    return this.disabled;
  }

  get getIndeterminate() {
    return this.indeterminate;
  }

  handleChange(event: { target: HTMLInputElement }) {
    let targetChecked = event.target.checked;
    this.stateChecked = targetChecked;
    this.$emit("change", event);
    this.$emit("input", targetChecked);
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
    const checkboxProps = {
      attrs: {
        ...$attrs,
        defaultChecked: true
      },
      class: checkboxClasses,
      on: {
        ...$listeners,
        change: handleChange
      }
    };
    let labelClasses = this.labelClasses;
    let spanClasses = this.spanClasses;
    let innerClass = this.innerClass;
    let children = this.$slots.default;
    return (
      <label class={labelClasses}>
        <span class={spanClasses}>
          <input
            type="checkbox"
            checked={stateChecked}
            disabled={getDisabled}
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

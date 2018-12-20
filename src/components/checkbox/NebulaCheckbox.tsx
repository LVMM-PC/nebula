import VueCheckbox from "../vc-checkbox";
import { getAttrs, getOptionProps } from "../_util/props-util";
import { Component, Model, Prop, Vue } from "vue-property-decorator";

function noop() {}

@Component({
  name: "NebulaCheckbox",
  inject: {
    checkboxGroupContext: { default: null }
  }
})
export default class NebulaCheckbox extends Vue {
  constructor(props: any) {
    super(props);
  }

  @Model("change", { default: undefined })
  checked!: boolean;

  @Prop({ default: "nebula-checkbox", type: String })
  public prefixCls?: string;

  @Prop({ type: Boolean })
  private defaultChecked?: boolean;

  @Prop({ type: Boolean })
  private disabled?: boolean;

  @Prop({ type: Boolean })
  private isGroup?: boolean;

  @Prop({})
  private value?: any;

  @Prop({ type: String })
  private name?: string;

  @Prop({ type: String })
  private id?: string;

  @Prop({ type: Boolean })
  private indeterminate?: boolean;

  @Prop({ default: "checkbox" })
  private type?: string;

  @Prop({ type: Boolean })
  private autoFocus?: boolean;

  handleChange(event: { target: HTMLInputElement }) {
    const targetChecked = event.target.checked;
    this.$emit("input", targetChecked);
    this.$emit("change", event);
  }

  focus() {
    let vueCheckbox = this.$refs.vueCheckbox as HTMLInputElement;
    vueCheckbox.focus();
  }

  blur() {
    let vueCheckbox = this.$refs.vueCheckbox as HTMLInputElement;
    vueCheckbox.blur();
  }

  render(h: any): any {
    // @ts-ignore
    const { checkboxGroupContext: checkboxGroup, $listeners, $slots } = this;
    const props = getOptionProps(this);
    const children = $slots.default;
    const {
      mouseenter = noop,
      mouseleave = noop,
      ...restListeners
    } = $listeners;
    const { prefixCls, indeterminate, ...restProps } = props;
    const checkboxProps = {
      props: { ...restProps, prefixCls },
      on: restListeners,
      attrs: getAttrs(this)
    };
    if (checkboxGroup) {
      checkboxProps.on.change = () =>
        checkboxGroup.toggleOption({ label: children, value: props.value });
      checkboxProps.props.checked =
        checkboxGroup.stateValue.indexOf(props.value) !== -1;
      checkboxProps.props.disabled = props.disabled || checkboxGroup.disabled;
    } else {
      checkboxProps.on.change = this.handleChange;
    }
    const classString = [
      {
        [`${prefixCls}-wrapper`]: true
      }
    ];
    const checkboxClass = [
      {
        [`${prefixCls}-indeterminate`]: indeterminate
      }
    ];
    return (
      <label
        class={classString}
        onMouseenter={mouseenter}
        onMouseleave={mouseleave}
      >
        <VueCheckbox
          {...checkboxProps}
          class={checkboxClass}
          ref="vueCheckbox"
        />
        {children !== undefined ? <span>{children}</span> : null}
      </label>
    );
  }
}

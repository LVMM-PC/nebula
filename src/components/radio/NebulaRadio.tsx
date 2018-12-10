import { Component, Model, Prop, Vue } from "vue-property-decorator";
import VcCheckbox from "../vc-checkbox";
import { getAttrs, getOptionProps } from "../_util/props-util";

function noop() {}

@Component({
  name: "NebulaRadio",
  inject: {
    radioGroupContext: { default: undefined }
  }
})
export default class NebulaRadio extends Vue {
  constructor(props: any) {
    super(props);
  }

  @Model("change", { default: undefined })
  checked!: boolean;

  @Prop({ default: "nebula-radio", type: String })
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
  private autoFocus?: boolean;

  @Prop({ default: "radio" })
  private type?: string;

  handleChange(event: { target: HTMLInputElement }) {
    const targetChecked = event.target.checked;
    this.$emit("input", targetChecked);
    this.$emit("change", event);
  }

  focus() {
    let vcCheckbox = this.$refs.vcCheckbox as HTMLInputElement;
    vcCheckbox.focus();
  }

  blur() {
    let vcCheckbox = this.$refs.vcCheckbox as HTMLInputElement;
    vcCheckbox.blur();
  }

  render(h: any): any {
    // @ts-ignore
    const { $slots, $listeners, radioGroupContext: radioGroup } = this;
    const props = getOptionProps(this);
    const children = $slots.default;
    const {
      mouseenter = noop,
      mouseleave = noop,
      ...restListeners
    } = $listeners;
    const { prefixCls, ...restProps } = props;
    const radioProps = {
      props: { ...restProps, prefixCls },
      on: restListeners,
      attrs: getAttrs(this)
    };

    if (radioGroup) {
      radioProps.props.name = radioGroup.name;
      radioProps.on.change = radioGroup.onRadioChange;
      radioProps.props.checked = props.value === radioGroup.stateValue;
      radioProps.props.disabled = props.disabled || radioGroup.disabled;
    } else {
      radioProps.on.change = this.handleChange;
    }
    const wrapperClassString = [
      {
        [`${prefixCls}-wrapper`]: true,
        [`${prefixCls}-wrapper-checked`]: radioProps.props.checked,
        [`${prefixCls}-wrapper-disabled`]: radioProps.props.disabled
      }
    ];

    return (
      <label
        class={wrapperClassString}
        onMouseenter={mouseenter}
        onMouseleave={mouseleave}
      >
        <VcCheckbox {...radioProps} ref="vcCheckbox" />
        {children !== undefined ? <span>{children}</span> : null}
      </label>
    );
  }
}

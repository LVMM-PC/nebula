import classNames from "classnames";
import {
  getOptionProps,
  hasProp,
  initDefaultProps,
  getAttrs
} from "../_util/props-util";
import BaseMixin from "../_util/BaseMixin";
import { Component, Model, Prop, Vue, Watch } from "vue-property-decorator";

@Component({
  name: "Checkbox",
  mixins: [BaseMixin],
  inheritAttrs: false
})
export default class Checkbox extends Vue {
  constructor(props) {
    super(props);
  }

  @Prop({ default: "rc-checkbox", type: String })
  prefixCls?: string;

  @Prop({ type: String })
  name?: string;

  @Prop({ type: String })
  id?: string;

  @Prop({ default: "checkbox", type: String })
  type?: string;

  @Prop({ default: false, type: [Number, Boolean] })
  defaultChecked?: number | boolean;

  @Prop({ type: Boolean })
  disabled?: boolean;

  @Prop({ type: String })
  tabIndex?: string;

  @Prop({ type: Boolean })
  readOnly?: boolean;

  @Prop({ type: Boolean })
  autoFocus?: boolean;

  @Prop({})
  value?: any;

  @Model("change")
  checked?: number | boolean;

  @Watch("checked")
  onCheckedChanged(val: string) {
    this.sChecked = val;
  }

  public sChecked;
  public eventShiftKey;

  created() {
    const checked = hasProp(this, "checked")
      ? this.checked
      : this.defaultChecked;

    this.sChecked = checked;
  }

  mounted() {
    this.$nextTick(() => {
      if (this.autoFocus) {
        let input = this.$refs.input as HTMLInputElement;
        input && input.focus();
      }
    });
  }

  focus() {
    let input = this.$refs.input as HTMLInputElement;
    input.focus();
  }

  blur() {
    let input = this.$refs.input as HTMLInputElement;
    input.blur();
  }

  handleChange(e) {
    const props = getOptionProps(this);
    if (props.disabled) {
      return;
    }
    if (!("checked" in props)) {
      this.sChecked = e.target.checked;
    }
    this.$forceUpdate(); // change前，维持现有状态
    // @ts-ignore
    this.__emit("change", {
      target: {
        ...props,
        checked: e.target.checked
      },
      stopPropagation() {
        e.stopPropagation();
      },
      preventDefault() {
        e.preventDefault();
      },
      nativeEvent: { ...e, shiftKey: this.eventShiftKey }
    });
    this.eventShiftKey = false;
  }

  onClick(e) {
    // @ts-ignore
    this.__emit("click", e);
    // onChange没能获取到shiftKey，使用onClick hack
    this.eventShiftKey = e.shiftKey;
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
    const attrs = getAttrs(this);
    const globalProps = Object.keys({ ...others, ...attrs }).reduce(
      (prev, key) => {
        if (
          key.substr(0, 5) === "aria-" ||
          key.substr(0, 5) === "data-" ||
          key === "role"
        ) {
          prev[key] = others[key];
        }
        return prev;
      },
      {}
    );

    const { sChecked } = this;
    const classString = classNames(prefixCls, {
      [`${prefixCls}-checked`]: sChecked,
      [`${prefixCls}-disabled`]: disabled
    });

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
          checked={!!sChecked}
          autoFocus={autoFocus}
          ref="input"
          value={value}
          {...{
            attrs: globalProps,
            on: {
              ...this.$listeners,
              change: this.handleChange,
              click: this.onClick
            }
          }}
        />
        <span class={`${prefixCls}-inner`} />
      </span>
    );
  }
}

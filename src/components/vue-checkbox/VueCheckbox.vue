<script lang="tsx">
import { Component, Model, Prop, Vue, Watch } from "vue-property-decorator";
import { getAttrs, getOptionProps, hasProp } from "../_util/props-util";

@Component
export default class VueCheckbox extends Vue {
  constructor(props: any) {
    super(props);
  }

  @Model("change")
  checked!: boolean | number;

  @Prop({ default: "vue-checkbox", type: String })
  public prefixCls?: string;

  @Prop({ type: String })
  private name?: string;

  @Prop({ type: String })
  private id?: string;

  @Prop({ default: "checkbox" })
  private type?: string;

  @Prop({ default: false, type: [Boolean, Number] })
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
  public eventShiftKey = false;

  created() {
    let checked = this.checked;
    let defaultChecked = this.defaultChecked;
    this.stateChecked = hasProp(this, "checked") ? checked : defaultChecked;
  }

  mounted() {
    this.$nextTick(() => {
      if (this.autoFocus) {
        let input: HTMLInputElement = this.$refs.input as HTMLInputElement;
        input.focus();
      }
    });
  }

  public focus() {
    let input: HTMLInputElement = this.$refs.input as HTMLInputElement;
    input.focus();
  }

  public blur() {
    let input: HTMLInputElement = this.$refs.input as HTMLInputElement;
    input.blur();
  }

  public handleChange(event: {
    target: HTMLInputElement;
    stopPropagation;
    preventDefault;
  }) {
    const props = getOptionProps(this);
    if (props.disabled) {
      return;
    }
    if (!("checked" in props)) {
      this.stateChecked = event.target.checked;
    }
    this.$emit("change", {
      target: {
        ...props,
        checked: event.target.checked
      },
      stopPropagation() {
        event.stopPropagation();
      },
      preventDefault() {
        event.preventDefault();
      },
      nativeEvent: { ...event, shiftKey: this.eventShiftKey }
    });
    this.eventShiftKey = false;
  }

  public onClick(event) {
    this.$emit("click", event);
    this.eventShiftKey = event.shiftKey;
  }

  render(h: any): any {
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

    const { stateChecked } = this;
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
          checked={!!stateChecked}
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
</script>

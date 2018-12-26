import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Wave from "../_util/wave";
import Icon from "../icon";
import buttonTypes from "./buttonTypes";
import { mixins } from "vue-class-component";

const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

const props = buttonTypes();

export type ButtonType = "default" | "primary" | "ghost" | "dashed" | "danger";
export type ButtonShape = "circle" | "circle-outline";
export type ButtonSize = "small" | "default" | "large";
export type ButtonHTMLType = "submit" | "button" | "reset";

type loadingType = boolean | { delay?: number };

@Component({})
export class BaseButtonProps extends Vue {
  @Prop({ default: "nebula-btn", type: String })
  prefixCls?: string;
  @Prop({ type: String })
  type?: ButtonType;
  @Prop({ default: "button", type: String })
  htmlType?: ButtonHTMLType;
  @Prop({ type: String })
  icon?: string;
  @Prop({ type: String })
  shape?: ButtonShape;
  @Prop({ type: String })
  size?: ButtonSize;
  @Prop({ type: [Boolean, Object] })
  loading?: loadingType;
  @Prop({ type: Boolean })
  disabled?: boolean;
  @Prop({ type: Boolean })
  ghost?: boolean;
  @Prop({ type: Boolean })
  block?: boolean;

  constructor(props) {
    super(props);
  }
}

@Component({
  // @ts-ignore
  __NEBULA_BUTTON: true
})
export default class NebulaButton extends mixins(BaseButtonProps) {
  static __NEBULA_BUTTON: any = true;
  public delayTimeout?: any;
  public sizeMap?: any = {
    large: "lg",
    small: "sm"
  };
  public sLoading?: any = !!this.loading;
  public hasTwoCNChar?: any = false;

  constructor(props) {
    super(props);
  }

  get classes() {
    const {
      prefixCls,
      type,
      shape,
      size,
      hasTwoCNChar,
      sLoading,
      ghost,
      block,
      sizeMap
    } = this;
    const sizeCls = sizeMap[size] || "";
    return {
      [`${prefixCls}`]: true,
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${shape}`]: shape,
      [`${prefixCls}-${sizeCls}`]: sizeCls,
      [`${prefixCls}-loading`]: sLoading,
      [`${prefixCls}-background-ghost`]: ghost || type === "ghost",
      [`${prefixCls}-two-chinese-chars`]: hasTwoCNChar,
      [`${prefixCls}-block`]: block
    };
  }

  @Watch("loading")
  onLoadingChanged(val: loadingType) {
    clearTimeout(this.delayTimeout);
    if (typeof val !== "boolean" && val && val.delay) {
      this.delayTimeout = setTimeout(() => {
        this.sLoading = !!val;
      }, val.delay);
    } else {
      this.sLoading = !!val;
    }
  }

  initData() {}

  created() {
    this.initData();
  }

  mounted() {
    this.fixTwoCNChar();
  }

  updated() {
    this.fixTwoCNChar();
  }

  beforeDestroy() {
    // if (this.timeout) {
    //   clearTimeout(this.timeout)
    // }
    if (this.delayTimeout) {
      clearTimeout(this.delayTimeout);
    }
  }

  fixTwoCNChar() {
    // Fix for HOC usage like <FormatMessage />
    const node = this.$el;
    const buttonText = node.textContent || node.innerText;
    if (this.isNeedInserted() && isTwoCNChar(buttonText)) {
      if (!this.hasTwoCNChar) {
        this.hasTwoCNChar = true;
      }
    } else if (this.hasTwoCNChar) {
      this.hasTwoCNChar = false;
    }
  }

  handleClick(event) {
    // this.clicked = true
    // clearTimeout(this.timeout)
    // this.timeout = setTimeout(() => (this.clicked = false), 500)
    this.$emit("click", event);
  }

  insertSpace(child, needInserted) {
    const SPACE = needInserted ? " " : "";
    if (typeof child.text === "string") {
      let text = child.text.trim();
      if (isTwoCNChar(text)) {
        text = text.split("").join(SPACE);
      }
      return <span>{text}</span>;
    }
    return child;
  }

  isNeedInserted() {
    const { icon, $slots } = this;
    return $slots.default && $slots.default.length === 1 && !icon;
  }

  render() {
    const {
      htmlType,
      classes,
      icon,
      disabled,
      handleClick,
      sLoading,
      $slots,
      $attrs,
      $listeners
    } = this;
    const buttonProps = {
      props: {},
      attrs: {
        ...$attrs,
        type: htmlType,
        disabled
      },
      class: classes,
      on: {
        ...$listeners,
        click: handleClick
      }
    };
    const iconType = sLoading ? "loading" : icon;
    const iconNode = iconType ? <Icon type={iconType} /> : null;
    const kids =
      $slots.default && $slots.default.length === 1
        ? this.insertSpace($slots.default[0], this.isNeedInserted())
        : $slots.default;
    if ("href" in $attrs) {
      return (
        <a {...buttonProps}>
          {iconNode}
          {kids}
        </a>
      );
    } else {
      return (
        <Wave>
          <button {...buttonProps}>
            {iconNode}
            {kids}
          </button>
        </Wave>
      );
    }
  }
}

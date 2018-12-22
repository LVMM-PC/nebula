import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Wave from "../_util/wave";
import classNames from "classnames";
import Icon from "../icon";

const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

function isString(str: any) {
  return typeof str === "string";
}

export type ButtonType = "default" | "primary" | "ghost" | "dashed" | "danger";
export type ButtonShape = "circle" | "circle-outline";
export type ButtonSize = "small" | "default" | "large";
export type ButtonHTMLType = "submit" | "button" | "reset";

type ButtonLoading = boolean | { delay?: number };

export interface BaseButtonProps {
  type?: ButtonType;
  icon?: string;
  shape?: ButtonShape;
  size?: ButtonSize;
  loading?: ButtonLoading;
  prefixCls?: string;
  className?: string;
  ghost?: boolean;
  block?: boolean;
  children?: any;
}

export type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: any;
} & BaseButtonProps &
  HTMLAnchorElement;

export type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: any;
} & BaseButtonProps &
  HTMLButtonElement;

export type ButtonProps = AnchorButtonProps | NativeButtonProps;

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
  loading?: ButtonLoading;
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
export default class NebulaButton extends Vue {
  static __NEBULA_BUTTON: any = true;
  private delayTimeout?: number;
  public sizeMap?: any = {
    large: "lg",
    small: "sm"
  };

  public state = {
    loading: undefined,
    hasTwoCNChar: undefined
  };

  @Prop({ default: "nebula-btn", type: String })
  prefixCls?: string;
  @Prop({ default: false, type: Boolean })
  ghost?: boolean;
  @Prop({ default: undefined, type: String })
  type?: ButtonType;
  @Prop({ default: undefined, type: String })
  shape?: ButtonShape;
  @Prop({ default: undefined, type: String })
  size?: ButtonSize;
  @Prop({ default: undefined, type: String })
  htmlType?: ButtonHTMLType;
  @Prop({ default: undefined, type: Function })
  onClick?: any;
  @Prop({ default: false, type: [Boolean, Object] })
  loading?: ButtonLoading;
  @Prop({ default: undefined, type: String })
  className?: string;
  @Prop({ default: undefined, type: String })
  icon?: string;
  @Prop({ default: false, type: Boolean })
  block?: boolean;

  constructor(props: ButtonProps) {
    super(props);
    Object.assign(this.state, {
      loading: this.loading,
      hasTwoCNChar: false
    });
  }

  @Watch("loading")
  onLoadingChanged(loading: ButtonLoading) {
    const currentLoading = this.loading;

    if (currentLoading) {
      clearTimeout(this.delayTimeout);
    }

    if (typeof loading !== "boolean" && loading && loading.delay) {
      this.delayTimeout = window.setTimeout(() => {
        Object.assign(this.state, { loading });
      }, loading.delay);
    } else {
      Object.assign(this.state, { loading });
    }
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

  // Insert one space between two chinese characters automatically.
  insertSpace(child: any, needInserted: boolean) {
    // Check the child if is undefined or null.
    if (child == null) {
      return;
    }
    const SPACE = needInserted ? " " : "";
    // strictNullChecks oops.
    /*if (
      typeof child !== 'string' &&
      typeof child !== 'number' &&
      isString(child.type) &&
      isTwoCNChar(child.props.children)
    ) {
      return React.cloneElement(child, {}, child.props.children.split('').join(SPACE));
    }*/

    if (typeof child.text === "string") {
      let text = child.text.trim();
      if (isTwoCNChar(text)) {
        text = text.split("").join(SPACE);
      }
      return <span>{text}</span>;
    }
    return child;
  }

  saveButtonRef = (node: HTMLElement | null) => {
    // @ts-ignore
    this.buttonNode = node;
  };

  fixTwoCNChar() {
    // Fix for HOC usage like <FormatMessage />
    const node = this.$el;
    const buttonText = node.textContent || node.innerText;
    if (this.isNeedInserted() && isTwoCNChar(buttonText)) {
      if (!this.state.hasTwoCNChar) {
        Object.assign(this.state, {
          hasTwoCNChar: true
        });
      }
    } else if (this.state.hasTwoCNChar) {
      Object.assign(this.state, {
        hasTwoCNChar: false
      });
    }
  }

  handleClick(event) {
    // this.clicked = true
    // clearTimeout(this.timeout)
    // this.timeout = setTimeout(() => (this.clicked = false), 500)
    this.$emit("click", event);
  }

  isNeedInserted() {
    const { icon, $slots } = this;
    return $slots.default && $slots.default.length === 1 && !icon;
  }

  render() {
    const {
      type,
      shape,
      size,
      className,
      $slots,
      icon,
      prefixCls,
      ghost,
      block,
      // @ts-ignore
      ...rest
    } = this;

    const { loading, hasTwoCNChar } = this.state;

    // large => lg
    // small => sm
    let sizeCls = "";
    switch (size) {
      case "large":
        sizeCls = "lg";
        break;
      case "small":
        sizeCls = "sm";
        break;
      default:
        break;
    }

    const classes = classNames(prefixCls, className, {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${shape}`]: shape,
      [`${prefixCls}-${sizeCls}`]: sizeCls,
      [`${prefixCls}-icon-only`]: !$slots.default && icon,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-background-ghost`]: ghost,
      [`${prefixCls}-two-chinese-chars`]: hasTwoCNChar,
      [`${prefixCls}-block`]: block
    });

    const iconType = loading ? "loading" : icon;
    const iconNode = iconType ? <Icon type={iconType} /> : null;
    const kids =
      $slots.default && $slots.default.length === 1
        ? this.insertSpace($slots.default[0], this.isNeedInserted())
        : $slots.default;

    const title = rest.title;

    const linkButtonRestProps = rest as AnchorButtonProps;
    if (linkButtonRestProps.href !== undefined) {
      return (
        <a
          {...linkButtonRestProps}
          class={classes}
          onClick={this.handleClick}
          title={title}
          ref={this.saveButtonRef}
        >
          {iconNode}
          {kids}
        </a>
      );
    }

    const { htmlType, ...otherProps } = rest as NativeButtonProps;

    return (
      <Wave>
        <button
          {...otherProps as NativeButtonProps}
          type={htmlType || "button"}
          class={classes}
          onClick={this.handleClick}
          title={title}
          ref={this.saveButtonRef}
        >
          {iconNode}
          {kids}
        </button>
      </Wave>
    );
  }
}

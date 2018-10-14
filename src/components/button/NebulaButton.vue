<script lang="tsx">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { VNode } from "vue";
import NebulaIcon from "../icon/NebulaIcon.vue";

const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = (str: any) => {
  if (typeof str !== "string") {
    return;
  }
  return rxTwoCNChar.test(str);
};
const isString = (str: any) => {
  return typeof str === "string";
};

export type ButtonType = "default" | "primary" | "ghost" | "dashed" | "danger";
export type ButtonShape = "circle" | "circle-outline";
export type ButtonSize = "small" | "default" | "large";
export type ButtonHTMLType = "submit" | "button" | "reset";

@Component({
  components: {
    NebulaIcon
  }
})
export default class NebulaButton extends Vue {
  static __NEBULA_BUTTON: boolean = true;

  @Prop({ default: null, type: String })
  private icon?: string;

  @Prop({ default: null, type: String })
  private shape?: ButtonShape;

  @Prop({ default: null, type: String })
  private type?: ButtonType;

  @Prop({ default: null, type: String })
  private size?: ButtonSize;

  @Prop({ default: null, type: Boolean })
  private ghost?: boolean;

  @Prop({ default: null, type: Boolean })
  private disabled?: boolean;

  @Prop({ default: null, type: [Boolean, Object] })
  private loading?: boolean | { delay: number };

  @Prop({ default: null, type: Boolean })
  private block?: boolean;

  @Prop({ default: "button", type: String })
  private htmlType?: ButtonHTMLType;

  @Watch("loading")
  onLoadingChanged(val: boolean | { delay?: number }) {
    const currentLoading = this.loading;

    if (currentLoading) {
      clearTimeout(this.delayTimeout);
    }

    if (typeof val === "object" && val && val.delay) {
      this.delayTimeout = setTimeout(() => {
        this.stateLoading = true;
      }, val.delay);
    } else if (typeof val === "boolean") {
      this.stateLoading = val;
    }
  }

  get sizeCls() {
    // large => lg
    // small => sm
    let sizeCls = "";
    switch (this.size) {
      case "large":
        sizeCls = "lg";
        break;
      case "small":
        sizeCls = "sm";
        break;
      default:
        break;
    }
    return sizeCls;
  }

  get component() {
    if (this.$attrs["href"]) {
      return "a";
    } else {
      return "button";
    }
  }

  get iconType() {
    if (this.stateLoading) {
      return "loading";
    } else {
      return this.icon;
    }
  }

  mounted() {
    this.fixTwoCNChar();
  }

  updated() {
    this.fixTwoCNChar();
  }

  beforeDestroy() {
    if (this.delayTimeout) {
      clearTimeout(this.delayTimeout);
    }
  }

  public prefixCls: string = "nebula-btn";

  public hasTwoCNChar: boolean = false;

  public stateLoading: boolean = !!this.loading;

  public delayTimeout: any;

  public classes() {
    let block = this.block;
    let children = this.children();
    let ghost = this.ghost;
    let hasTwoCNChar = this.hasTwoCNChar;
    let icon = this.icon;
    let loading = this.stateLoading;
    let prefixCls = this.prefixCls;
    let shape = this.shape;
    let sizeCls = this.sizeCls;
    let type = this.type;
    return [
      prefixCls,
      {
        [`${prefixCls}-${shape}`]: shape,
        [`${prefixCls}-${sizeCls}`]: sizeCls,
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-background-ghost`]: ghost,
        [`${prefixCls}-block`]: block,
        [`${prefixCls}-icon-only`]: !children && icon,
        [`${prefixCls}-loading`]: loading,
        [`${prefixCls}-two-chinese-chars`]: hasTwoCNChar
      }
    ];
  }

  public insertSpace(child: VNode, needInserted: boolean) {
    if (child == null) {
      return;
    }
    const SPACE = needInserted ? " " : "";
    let childText =
      child.children && child.children[0] && child.children[0].text;
    if (
      typeof child !== "string" &&
      typeof child !== "number" &&
      isString(child.tag) &&
      child.children &&
      child.children.length === 1 &&
      childText &&
      isString(childText) &&
      isTwoCNChar(childText)
    ) {
      return childText.split("").join(SPACE);
    }
    let text = child.text;
    if (typeof text === "string") {
      if (isTwoCNChar(text)) {
        text = text.split("").join(SPACE);
      }
      return <span>{text}</span>;
    }
    return child;
  }

  public handleClick(event: Event) {
    if (this.ghost) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    } else {
      this.$emit("click", event);
    }
  }

  public isNeedInserted() {
    const { iconType, $slots } = this;
    return $slots.default && $slots.default.length === 1 && !iconType;
  }

  public fixTwoCNChar() {
    const node = this.$el as HTMLElement;
    const buttonText = node.textContent || node.innerText;
    if (this.isNeedInserted() && isTwoCNChar(buttonText)) {
      if (!this.hasTwoCNChar) {
        this.hasTwoCNChar = true;
      }
    } else if (this.hasTwoCNChar) {
      this.hasTwoCNChar = false;
    }
  }

  public children() {
    return this.$slots.default;
  }

  render() {
    const {
      $attrs,
      $listeners,
      disabled,
      handleClick,
      htmlType,
      iconType
    } = this;
    let classes = this.classes();
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

    const iconProps = {
      props: {
        type: iconType
      }
    };
    const iconNode = iconType ? <NebulaIcon {...iconProps} /> : "";
    let children = this.children();
    const kids = children
      ? children.map(child => {
          return this.insertSpace(child, this.isNeedInserted());
        })
      : null;

    switch (this.component) {
      case "a":
        return (
          <a {...buttonProps}>
            {iconNode}
            {kids}
          </a>
        );
      case "button":
        return (
          <button {...buttonProps}>
            {iconNode}
            {kids}
          </button>
        );
    }
  }
}
</script>

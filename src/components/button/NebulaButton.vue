<script lang="tsx">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { VNode } from "vue";
import NebulaIcon from "../icon/NebulaIcon.vue";

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
  private label?: string;

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

  public prefixCls: string = "nebula-btn";

  public hasTwoCNChar: boolean = false;

  public stateLoading: boolean = !!this.loading;

  public delayTimeout: any;

  beforeDestroy() {
    if (this.delayTimeout) {
      clearTimeout(this.delayTimeout);
    }
  }

  static isTwoCNChar(str: string) {
    const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
    return rxTwoCNChar.test(str);
  }

  static getTwoCNChar(slot: VNode[]) {
    let tempVNode = null;

    if (slot && slot.length === 1) {
      tempVNode = slot[0];
      if (tempVNode && tempVNode.children && tempVNode.children.length === 1) {
        tempVNode = tempVNode.children[0];
      }
    }

    if (
      tempVNode &&
      tempVNode.text &&
      NebulaButton.isTwoCNChar(tempVNode.text)
    ) {
      return tempVNode.text;
    }
  }

  get classes() {
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

  public children() {
    let label = this.label;
    if (label) {
      if (NebulaButton.isTwoCNChar(label)) {
        this.hasTwoCNChar = true;
        return label.split("").join(" ");
      } else {
        this.hasTwoCNChar = false;
        return label;
      }
    }

    let twoCNChar = NebulaButton.getTwoCNChar(this.$slots.default);

    if (twoCNChar && !this.iconType) {
      this.hasTwoCNChar = true;
      return twoCNChar.split("").join(" ");
    } else {
      this.hasTwoCNChar = false;
      return this.$slots.default;
    }
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

  handleClick(event: Event) {
    if (this.ghost) {
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
    } else {
      this.$emit("click", event);
    }
  }

  render() {
    const {
      $attrs,
      $listeners,
      classes,
      disabled,
      handleClick,
      htmlType,
      iconType
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

    const iconProps = {
      props: {
        type: iconType
      }
    };
    const iconNode = iconType ? <NebulaIcon {...iconProps} /> : "";
    let children = this.children();
    const kids = children ? <span>{children}</span> : "";
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

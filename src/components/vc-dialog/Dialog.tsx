import { getComponentFromProp } from "../_util/props-util";
import KeyCode from "../_util/KeyCode";
import contains from "../_util/Dom/contains";
import LazyRenderBox from "./LazyRenderBox";
import BaseMixin from "../_util/BaseMixin";
import getTransitionProps from "../_util/getTransitionProps";
import getScrollBarSize from "../_util/getScrollBarSize";
import getDialogPropTypes from "./IDialogPropTypes";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

const IDialogPropTypes = getDialogPropTypes();

let uuid = 0;
let openCount = 0;

/* eslint react/no-is-mounted:0 */
function noop() {}

function getScroll(w, top = null) {
  let ret = w[`page${top ? "Y" : "X"}Offset`];
  const method = `scroll${top ? "Top" : "Left"}`;
  if (typeof ret !== "number") {
    const d = w.document;
    ret = d.documentElement[method];
    if (typeof ret !== "number") {
      ret = d.body[method];
    }
  }
  return ret;
}

function setTransformOrigin(node, value) {
  const style = node.style;
  ["Webkit", "Moz", "Ms", "ms"].forEach(prefix => {
    style[`${prefix}TransformOrigin`] = value;
  });
  style[`transformOrigin`] = value;
}

function offset(el) {
  const rect = el.getBoundingClientRect();
  const pos = {
    left: rect.left,
    top: rect.top
  };
  const doc = el.ownerDocument;
  const w = doc.defaultView || doc.parentWindow;
  pos.left += getScroll(w);
  pos.top += getScroll(w, true);
  return pos;
}

const initDefaultProps = (propTypes, defaultProps) => {
  return Object.keys(defaultProps).map(k => propTypes[k].def(defaultProps[k]));
};

@Component({
  mixins: [BaseMixin]
})
export default class Dialog extends Vue {
  constructor(props) {
    super(props);
  }

  @Watch("visible")
  onVisibleChanged(val: string, oldVal: string) {
    if (val) {
      this.destroyPopup = false;
    }
    this.$nextTick(() => {
      this.updatedCallback(!val);
    });
  }

  public destroyPopup = false;

  @Prop({ default: true, type: Boolean })
  keyboard: boolean;

  @Prop({ default: true, type: Boolean })
  mask: boolean;

  @Prop({ type: Function })
  afterClose: any;

  @Prop({ default: true, type: Boolean })
  closable: boolean;

  @Prop({ default: true, type: Boolean })
  maskClosable: boolean;

  @Prop({ default: false, type: Boolean })
  visible: boolean;

  @Prop({ default: false, type: Boolean })
  destroyOnClose: boolean;

  @Prop({ type: Object })
  mousePosition: {
    x: number;
    y: number;
  };

  @Prop({})
  title: any;

  @Prop({})
  footer: any;

  @Prop({ type: String })
  transitionName: string;

  @Prop({ type: String })
  maskTransitionName: string;

  @Prop({})
  animation: any;

  @Prop({})
  maskAnimation: any;

  @Prop({ type: Object })
  wrapStyle: any;

  @Prop({ type: Object })
  bodyStyle: any;

  @Prop({ type: Object })
  maskStyle: any;

  @Prop({ default: "rc-dialog", type: String })
  prefixCls: string;

  @Prop({ type: String })
  wrapClassName: string;

  @Prop({ type: [String, Number] })
  width: string | number;

  @Prop({ type: [String, Number] })
  height: string | number;

  @Prop({ type: Number })
  zIndex: number;

  @Prop({ type: Object })
  bodyProps: any;

  @Prop({ type: Object })
  maskProps: any;

  @Prop({ type: Object })
  wrapProps: any;

  @Prop({ type: Function })
  getContainer: any;

  @Prop({ default: () => {}, type: Object })
  dialogStyle: any;

  @Prop({ default: () => {}, type: Object })
  dialogClass: any;

  @Prop({})
  closeIcon: any;

  public inTransition;
  public titleId;
  public openTime;
  public lastOutSideFocusNode;
  public bodyIsOverflowing;
  public scrollbarWidth;

  beforeMount() {
    this.inTransition = false;
    this.titleId = `rcDialogTitle${uuid++}`;
  }

  mounted() {
    this.$nextTick(() => {
      this.updatedCallback(false);
    });
  }

  beforeDestroy() {
    if (this.visible || this.inTransition) {
      this.removeScrollingEffect();
    }
  }

  updatedCallback(visible) {
    const mousePosition = this.mousePosition;
    if (this.visible) {
      // first show
      if (!visible) {
        this.openTime = Date.now();
        // this.lastOutSideFocusNode = document.activeElement
        this.addScrollingEffect();
        // this.$refs.wrap.focus()
        this.tryFocus();
        // @ts-ignore
        const dialogNode = this.$refs.dialog.$el;
        if (mousePosition) {
          const elOffset = offset(dialogNode);
          setTransformOrigin(
            dialogNode,
            `${mousePosition.x - elOffset.left}px ${mousePosition.y -
              elOffset.top}px`
          );
        } else {
          setTransformOrigin(dialogNode, "");
        }
      }
    } else if (visible) {
      this.inTransition = true;
      if (this.mask && this.lastOutSideFocusNode) {
        try {
          this.lastOutSideFocusNode.focus();
        } catch (e) {
          this.lastOutSideFocusNode = null;
        }
        this.lastOutSideFocusNode = null;
      }
    }
  }

  tryFocus() {
    if (!contains(this.$refs.wrap, document.activeElement)) {
      this.lastOutSideFocusNode = document.activeElement;
      let sentinelStart = this.$refs.sentinelStart as HTMLElement;
      sentinelStart.focus();
    }
  }

  onAnimateLeave() {
    const { afterClose, destroyOnClose } = this;
    // need demo?
    // https://github.com/react-component/dialog/pull/28
    let wrap = this.$refs.wrap as HTMLElement;
    if (wrap) {
      wrap.style.display = "none";
    }
    if (destroyOnClose) {
      this.destroyPopup = true;
    }
    this.inTransition = false;
    this.removeScrollingEffect();
    if (afterClose) {
      afterClose();
    }
  }

  onMaskClick(e) {
    // android trigger click on open (fastclick??)
    if (Date.now() - this.openTime < 300) {
      return;
    }
    if (e.target === e.currentTarget) {
      this.close(e);
    }
  }

  onKeydown(e) {
    const props = this.$props;
    if (props.keyboard && e.keyCode === KeyCode.ESC) {
      e.stopPropagation();
      this.close(e);
      return;
    }
    // keep focus inside dialog
    if (props.visible) {
      if (e.keyCode === KeyCode.TAB) {
        const activeElement = document.activeElement;
        const sentinelStart = this.$refs.sentinelStart as HTMLElement;
        let sentinelEnd = this.$refs.sentinelEnd as HTMLElement;
        if (e.shiftKey) {
          if (activeElement === sentinelStart) {
            sentinelEnd.focus();
          }
        } else if (activeElement === sentinelEnd) {
          sentinelStart.focus();
        }
      }
    }
  }

  getDialogElement() {
    const {
      closable,
      prefixCls,
      width,
      height,
      title,
      footer: tempFooter,
      bodyStyle,
      visible,
      bodyProps
    } = this;
    const dest = {} as { width; height };
    if (width !== undefined) {
      dest.width = typeof width === "number" ? `${width}px` : width;
    }
    if (height !== undefined) {
      dest.height = typeof height === "number" ? `${height}px` : height;
    }

    let footer;
    if (tempFooter) {
      footer = (
        <div key="footer" class={`${prefixCls}-footer`} ref="footer">
          {tempFooter}
        </div>
      );
    }

    let header;
    if (title) {
      header = (
        <div key="header" class={`${prefixCls}-header`} ref="header">
          <div class={`${prefixCls}-title`} id={this.titleId}>
            {title}
          </div>
        </div>
      );
    }

    let closer;
    if (closable) {
      const closeIcon = getComponentFromProp(this, "closeIcon");
      closer = (
        <button
          key="close"
          onClick={this.close || noop}
          aria-label="Close"
          class={`${prefixCls}-close`}
        >
          {closeIcon || <span class={`${prefixCls}-close-x`} />}
        </button>
      );
    }

    const style = { ...this.dialogStyle, ...dest };
    const sentinelStyle = { width: 0, height: 0, overflow: "hidden" };
    const cls = {
      [prefixCls]: true,
      ...this.dialogClass
    };
    const transitionName = this.getTransitionName();
    const dialogElement = (
      <LazyRenderBox
        v-show={visible}
        key="dialog-element"
        role="document"
        ref="dialog"
        style={style}
        class={cls}
      >
        <div tabIndex={0} ref="sentinelStart" style={sentinelStyle}>
          sentinelStart
        </div>
        <div class={`${prefixCls}-content`}>
          {closer}
          {header}
          <div
            key="body"
            class={`${prefixCls}-body`}
            style={bodyStyle}
            ref="body"
            {...bodyProps}
          >
            {this.$slots.default}
          </div>
          {footer}
        </div>
        <div tabIndex={0} ref="sentinelEnd" style={sentinelStyle}>
          sentinelEnd
        </div>
      </LazyRenderBox>
    );
    const dialogTransitionProps = getTransitionProps(transitionName, {
      afterLeave: this.onAnimateLeave
    });
    return (
      <transition key="dialog" {...dialogTransitionProps}>
        {visible || !this.destroyPopup ? dialogElement : null}
      </transition>
    );
  }

  getZIndexStyle() {
    const style = {} as { zIndex };
    const props = this.$props;
    if (props.zIndex !== undefined) {
      style.zIndex = props.zIndex;
    }
    return style;
  }

  getWrapStyle() {
    return { ...this.getZIndexStyle(), ...this.wrapStyle };
  }

  getMaskStyle() {
    return { ...this.getZIndexStyle(), ...this.maskStyle };
  }

  getMaskElement() {
    const props = this.$props;
    let maskElement;
    if (props.mask) {
      const maskTransition = this.getMaskTransitionName();
      maskElement = (
        <LazyRenderBox
          v-show={props.visible}
          style={this.getMaskStyle()}
          key="mask"
          class={`${props.prefixCls}-mask`}
          {...props.maskProps}
        />
      );
      if (maskTransition) {
        const maskTransitionProps = getTransitionProps(maskTransition);
        maskElement = (
          <transition key="mask" {...maskTransitionProps}>
            {maskElement}
          </transition>
        );
      }
    }
    return maskElement;
  }

  getMaskTransitionName() {
    const props = this.$props;
    let transitionName = props.maskTransitionName;
    const animation = props.maskAnimation;
    if (!transitionName && animation) {
      transitionName = `${props.prefixCls}-${animation}`;
    }
    return transitionName;
  }

  getTransitionName() {
    const props = this.$props;
    let transitionName = props.transitionName;
    const animation = props.animation;
    if (!transitionName && animation) {
      transitionName = `${props.prefixCls}-${animation}`;
    }
    return transitionName;
  }

  setScrollbar() {
    if (this.bodyIsOverflowing && this.scrollbarWidth !== undefined) {
      document.body.style.paddingRight = `${this.scrollbarWidth}px`;
    }
  }

  addScrollingEffect() {
    openCount++;
    if (openCount !== 1) {
      return;
    }
    this.checkScrollbar();
    this.setScrollbar();
    document.body.style.overflow = "hidden";
    // this.adjustDialog();
  }

  removeScrollingEffect() {
    openCount--;
    if (openCount !== 0) {
      return;
    }
    document.body.style.overflow = "";
    this.resetScrollbar();
    // this.resetAdjustments();
  }

  close(e) {
    // @ts-ignore
    this.__emit("close", e);
  }

  checkScrollbar() {
    let fullWindowWidth = window.innerWidth;
    if (!fullWindowWidth) {
      // workaround for missing window.innerWidth in IE8
      const documentElementRect = document.documentElement.getBoundingClientRect();
      fullWindowWidth =
        documentElementRect.right - Math.abs(documentElementRect.left);
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
    if (this.bodyIsOverflowing) {
      this.scrollbarWidth = getScrollBarSize();
    }
  }

  resetScrollbar() {
    document.body.style.paddingRight = "";
  }

  adjustDialog() {
    let wrap = this.$refs.wrap as HTMLElement;
    if (wrap && this.scrollbarWidth !== undefined) {
      const modalIsOverflowing =
        wrap.scrollHeight > document.documentElement.clientHeight;
      wrap.style.paddingLeft = `${
        !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : ""
      }px`;
      wrap.style.paddingRight = `${
        this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ""
      }px`;
    }
  }

  resetAdjustments() {
    let wrap = this.$refs.wrap as HTMLElement;
    if (wrap) {
      wrap.style.paddingLeft = wrap.style.paddingLeft = "";
    }
  }

  render() {
    const {
      prefixCls,
      maskClosable,
      visible,
      wrapClassName,
      title,
      wrapProps
    } = this;
    const style = this.getWrapStyle();
    // clear hide display
    // and only set display after async anim, not here for hide
    if (visible) {
      style.display = null;
    }
    return (
      <div>
        {this.getMaskElement()}
        <div
          tabIndex={-1}
          onKeydown={this.onKeydown}
          class={`${prefixCls}-wrap ${wrapClassName || ""}`}
          ref="wrap"
          onClick={maskClosable ? this.onMaskClick : noop}
          role="dialog"
          aria-labelledby={title ? this.titleId : null}
          style={style}
          {...wrapProps}
        >
          {this.getDialogElement()}
        </div>
      </div>
    );
  }
}

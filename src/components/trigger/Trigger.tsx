import ref from "vue-ref";
import contains from "../_util/Dom/contains";
import {
  filterEmpty,
  getComponentFromProp,
  getEvents,
  hasProp
} from "../_util/props-util";
import {
  cancelAnimationTimeout,
  requestAnimationTimeout
} from "../_util/requestAnimationTimeout";
import addEventListener from "../_util/Dom/addEventListener";
import warning from "../_util/warning";
import Popup from "./Popup";
import { getAlignFromPlacement, getAlignPopupClassName, noop } from "./utils";
import BaseMixin from "../_util/BaseMixin";
import { cloneElement } from "../_util/vnode";
import ContainerRender from "../_util/ContainerRender";
import { Component, Prop, Vue } from "vue-property-decorator";

Vue.use(ref, { name: "ant-ref" });

function returnEmptyString() {
  return "";
}

function returnDocument() {
  return window.document;
}

const ALL_HANDLERS = [
  "click",
  "mousedown",
  "touchstart",
  "mouseenter",
  "mouseleave",
  "focus",
  "blur",
  "contextmenu"
];

@Component({
  name: "Trigger",
  mixins: [BaseMixin],
  data() {
    const props = this.$props;
    let popupVisible;
    if (hasProp(this, "popupVisible")) {
      popupVisible = !!props.popupVisible;
    } else {
      popupVisible = !!props.defaultPopupVisible;
    }
    return {
      sPopupVisible: popupVisible,
      point: null
    };
  },
  watch: {
    popupVisible(val) {
      if (val !== undefined) {
        this.sPopupVisible = val;
      }
    },
    sPopupVisible(val) {
      this.$nextTick(() => {
        this.renderComponent(null, () => {
          this.afterPopupVisibleChange(val);
        });
      });
    }
  }
})
export default class extends Vue {
  @Prop({ default: () => [], type: [String, Array] })
  action?: string | string[];
  @Prop({ default: () => [] })
  showAction?: any;
  @Prop({})
  hideAction?: any;
  @Prop({ default: returnEmptyString })
  getPopupClassNameFromAlign?: any;
  @Prop({ default: noop, type: Function })
  afterPopupVisibleChange?: any;
  @Prop({})
  popup?: any;
  @Prop({
    default: () => {}
  })
  popupStyle?: any;
  @Prop({ default: "rc-trigger-popup", type: String })
  prefixCls?: string;
  @Prop({ default: "", type: String })
  popupClassName?: string;
  @Prop({ type: String })
  popupPlacement?: string;
  @Prop({})
  builtinPlacements?: any;
  @Prop({ type: [String, Object] })
  popupTransitionName?: any;
  @Prop({})
  popupAnimation?: any;
  @Prop({ default: 0, type: Number })
  mouseEnterDelay?: number;
  @Prop({ default: 0.1, type: Number })
  mouseLeaveDelay?: number;
  @Prop({ type: Number })
  zIndex?: number;
  @Prop({ default: 0, type: Number })
  focusDelay?: number;
  @Prop({ default: 0.15, type: Number })
  blurDelay?: number;
  @Prop({ type: Function })
  getPopupContainer?: any;
  @Prop({ default: returnDocument, type: Function })
  getDocument?: any;
  @Prop({})
  forceRender?: boolean;
  @Prop({ type: Boolean })
  destroyPopupOnHide?: any;
  @Prop({ default: false, type: Boolean })
  mask?: boolean;
  @Prop({ default: true, type: Boolean })
  maskClosable?: boolean;
  @Prop({
    default: () => {},
    type: Object
  })
  popupAlign?: any;
  @Prop({ type: Boolean })
  popupVisible?: boolean;
  @Prop({ default: false, type: Boolean })
  defaultPopupVisible?: boolean;
  @Prop({ type: [String, Object] })
  maskTransitionName?: any;
  @Prop({ type: String })
  maskAnimation?: string;
  @Prop({ type: String })
  stretch?: string;
  @Prop({ type: Boolean })
  alignPoint?: boolean;
  public sPopupVisible;
  public point;
  public renderComponent;
  public clickOutsideHandler;
  public touchOutsideHandler;
  public contextmenuOutsideHandler1;
  public contextmenuOutsideHandler2;
  public _component;
  public focusTime;
  public preClickTime;
  public preTouchTime;
  public popupContainer;
  public delayTimer;
  public childOriginEvents;

  constructor(props) {
    super(props);
  }

  created() {
    const props = this.$props;
    let popupVisible;
    if (hasProp(this, "popupVisible")) {
      popupVisible = !!props.popupVisible;
    } else {
      popupVisible = !!props.defaultPopupVisible;
    }
    this.sPopupVisible = popupVisible;
    this.point = null;
  }

  beforeCreate() {
    ALL_HANDLERS.forEach(h => {
      this[`fire${h}`] = e => {
        this.fireEvents(h, e);
      };
    });
  }

  mounted() {
    this.$nextTick(() => {
      this.renderComponent(null);
      this.updatedCal();
    });
  }

  updated() {
    this.$nextTick(() => {
      this.updatedCal();
    });
  }

  beforeDestroy() {
    this.clearDelayTimer();
    this.clearOutsideHandler();
  }

  updatedCal() {
    const props = this.$props;
    const state = this.$data;

    // We must listen to `mousedown` or `touchstart`, edge case:
    // https://github.com/ant-design/ant-design/issues/5804
    // https://github.com/react-component/calendar/issues/250
    // https://github.com/react-component/trigger/issues/50
    if (state.sPopupVisible) {
      let currentDocument;
      if (
        !this.clickOutsideHandler &&
        (this.isClickToHide() || this.isContextmenuToShow())
      ) {
        currentDocument = props.getDocument();
        this.clickOutsideHandler = addEventListener(
          currentDocument,
          "mousedown",
          this.onDocumentClick
        );
      }
      // always hide on mobile
      if (!this.touchOutsideHandler) {
        currentDocument = currentDocument || props.getDocument();
        this.touchOutsideHandler = addEventListener(
          currentDocument,
          "touchstart",
          this.onDocumentClick
        );
      }
      // close popup when trigger type contains 'onContextmenu' and document is scrolling.
      if (!this.contextmenuOutsideHandler1 && this.isContextmenuToShow()) {
        currentDocument = currentDocument || props.getDocument();
        this.contextmenuOutsideHandler1 = addEventListener(
          currentDocument,
          "scroll",
          this.onContextmenuClose
        );
      }
      // close popup when trigger type contains 'onContextmenu' and window is blur.
      if (!this.contextmenuOutsideHandler2 && this.isContextmenuToShow()) {
        this.contextmenuOutsideHandler2 = addEventListener(
          window,
          "blur",
          this.onContextmenuClose
        );
      }
    } else {
      this.clearOutsideHandler();
    }
  }

  onMouseenter(e) {
    const { mouseEnterDelay } = this.$props;
    this.fireEvents("mouseenter", e);
    this.delaySetPopupVisible(
      true,
      mouseEnterDelay,
      mouseEnterDelay ? null : e
    );
  }

  onMouseMove(e) {
    this.fireEvents("mousemove", e);
    this.setPoint(e);
  }

  onMouseleave(e) {
    this.fireEvents("mouseleave", e);
    this.delaySetPopupVisible(false, this.$props.mouseLeaveDelay);
  }

  onPopupMouseenter() {
    this.clearDelayTimer();
  }

  onPopupMouseleave(e) {
    if (
      e &&
      e.relatedTarget &&
      !e.relatedTarget.setTimeout &&
      this._component &&
      this._component.getPopupDomNode &&
      contains(this._component.getPopupDomNode(), e.relatedTarget)
    ) {
      return;
    }
    this.delaySetPopupVisible(false, this.$props.mouseLeaveDelay);
  }

  onFocus(e) {
    this.fireEvents("focus", e);
    // incase focusin and focusout
    this.clearDelayTimer();
    if (this.isFocusToShow()) {
      this.focusTime = Date.now();
      this.delaySetPopupVisible(true, this.$props.focusDelay);
    }
  }

  onMousedown(e) {
    this.fireEvents("mousedown", e);
    this.preClickTime = Date.now();
  }

  onTouchstart(e) {
    this.fireEvents("touchstart", e);
    this.preTouchTime = Date.now();
  }

  onBlur(e) {
    this.fireEvents("blur", e);
    this.clearDelayTimer();
    if (this.isBlurToHide()) {
      this.delaySetPopupVisible(false, this.$props.blurDelay);
    }
  }

  onContextmenu(e) {
    e.preventDefault();
    this.fireEvents("contextmenu", e);
    this.setPopupVisible(true, e);
  }

  onContextmenuClose() {
    if (this.isContextmenuToShow()) {
      this.close();
    }
  }

  onClick(event) {
    this.fireEvents("click", event);
    // focus will trigger click
    if (this.focusTime) {
      let preTime;
      if (this.preClickTime && this.preTouchTime) {
        preTime = Math.min(this.preClickTime, this.preTouchTime);
      } else if (this.preClickTime) {
        preTime = this.preClickTime;
      } else if (this.preTouchTime) {
        preTime = this.preTouchTime;
      }
      if (Math.abs(preTime - this.focusTime) < 20) {
        return;
      }
      this.focusTime = 0;
    }
    this.preClickTime = 0;
    this.preTouchTime = 0;
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    if (event && event.domEvent) {
      event.domEvent.preventDefault();
    }
    const nextVisible = !this.$data.sPopupVisible;
    if (
      (this.isClickToHide() && !nextVisible) ||
      (nextVisible && this.isClickToShow())
    ) {
      this.setPopupVisible(!this.$data.sPopupVisible, event);
    }
  }

  onDocumentClick(event) {
    if (this.$props.mask && !this.$props.maskClosable) {
      return;
    }
    const target = event.target;
    const root = this.$el;
    const popupNode = this.getPopupDomNode();
    if (!contains(root, target) && !contains(popupNode, target)) {
      this.close();
    }
  }

  getPopupDomNode() {
    if (this._component && this._component.getPopupDomNode) {
      return this._component.getPopupDomNode();
    }
    return null;
  }

  getRootDomNode() {
    return this.$el;
    // return this.$el.children[0] || this.$el
  }

  handleGetPopupClassFromAlign(align) {
    const className = [];
    const props = this.$props;
    const {
      popupPlacement,
      builtinPlacements,
      prefixCls,
      alignPoint,
      getPopupClassNameFromAlign
    } = props;
    if (popupPlacement && builtinPlacements) {
      className.push(
        getAlignPopupClassName(builtinPlacements, prefixCls, align, alignPoint)
      );
    }
    if (getPopupClassNameFromAlign) {
      className.push(getPopupClassNameFromAlign(align));
    }
    return className.join(" ");
  }

  getPopupAlign() {
    const props = this.$props;
    const { popupPlacement, popupAlign, builtinPlacements } = props;
    if (popupPlacement && builtinPlacements) {
      return getAlignFromPlacement(
        builtinPlacements,
        popupPlacement,
        popupAlign
      );
    }
    return popupAlign;
  }

  savePopup(node) {
    this._component = node;
  }

  getComponent() {
    const self = this;
    const mouseProps = {} as {
      mouseenter;
      mouseleave;
    };
    if (this.isMouseEnterToShow()) {
      mouseProps.mouseenter = self.onPopupMouseenter;
    }
    if (this.isMouseLeaveToHide()) {
      mouseProps.mouseleave = self.onPopupMouseleave;
    }
    const {
      handleGetPopupClassFromAlign,
      getRootDomNode,
      getContainer,
      $listeners
    } = self;
    const {
      prefixCls,
      destroyPopupOnHide,
      popupClassName,
      action,
      popupAnimation,
      popupTransitionName,
      popupStyle,
      mask,
      maskAnimation,
      maskTransitionName,
      zIndex,
      stretch,
      alignPoint
    } = self.$props;
    const { sPopupVisible, point } = this.$data;
    const align = this.getPopupAlign();
    const popupProps = {
      props: {
        prefixCls,
        destroyPopupOnHide,
        visible: sPopupVisible,
        point: alignPoint && point,
        action,
        align,
        animation: popupAnimation,
        getClassNameFromAlign: handleGetPopupClassFromAlign,
        stretch,
        getRootDomNode,
        mask,
        zIndex,
        transitionName: popupTransitionName,
        maskAnimation,
        maskTransitionName,
        getContainer,
        popupClassName,
        popupStyle
      },
      on: {
        align: $listeners.popupAlign || noop,
        ...mouseProps
      },
      directives: [
        {
          name: "ant-ref",
          value: this.savePopup
        }
      ]
    };
    return <Popup {...popupProps}>{getComponentFromProp(self, "popup")}</Popup>;
  }

  getContainer() {
    const { $props: props } = this;
    const popupContainer = document.createElement("div");
    // Make sure default popup container will never cause scrollbar appearing
    // https://github.com/react-component/trigger/issues/41
    popupContainer.style.position = "absolute";
    popupContainer.style.top = "0";
    popupContainer.style.left = "0";
    popupContainer.style.width = "100%";
    const mountNode = props.getPopupContainer
      ? props.getPopupContainer(this.$el)
      : props.getDocument().body;
    mountNode.appendChild(popupContainer);
    this.popupContainer = popupContainer;
    return popupContainer;
  }

  setPopupVisible(sPopupVisible, event = null) {
    const { alignPoint } = this.$props;
    this.clearDelayTimer();
    if (this.$data.sPopupVisible !== sPopupVisible) {
      if (!hasProp(this, "popupVisible")) {
        // @ts-ignore
        this.setState({
          sPopupVisible
        });
      }
      let popupVisibleChange = this.$listeners.popupVisibleChange;
      // @ts-ignore
      popupVisibleChange && popupVisibleChange(sPopupVisible);
    }
    // Always record the point position since mouseEnterDelay will delay the show
    if (sPopupVisible && alignPoint && event) {
      this.setPoint(event);
    }
  }

  setPoint(point) {
    const { alignPoint } = this.$props;
    if (!alignPoint || !point) return;

    // @ts-ignore
    this.setState({
      point: {
        pageX: point.pageX,
        pageY: point.pageY
      }
    });
  }

  delaySetPopupVisible(visible, delayS, event = null) {
    const delay = delayS * 1000;
    this.clearDelayTimer();
    if (delay) {
      const point = event ? { pageX: event.pageX, pageY: event.pageY } : null;
      this.delayTimer = requestAnimationTimeout(() => {
        this.setPopupVisible(visible, point);
        this.clearDelayTimer();
      }, delay);
    } else {
      this.setPopupVisible(visible, event);
    }
  }

  clearDelayTimer() {
    if (this.delayTimer) {
      cancelAnimationTimeout(this.delayTimer);
      this.delayTimer = null;
    }
  }

  clearOutsideHandler() {
    if (this.clickOutsideHandler) {
      this.clickOutsideHandler.remove();
      this.clickOutsideHandler = null;
    }

    if (this.contextmenuOutsideHandler1) {
      this.contextmenuOutsideHandler1.remove();
      this.contextmenuOutsideHandler1 = null;
    }

    if (this.contextmenuOutsideHandler2) {
      this.contextmenuOutsideHandler2.remove();
      this.contextmenuOutsideHandler2 = null;
    }

    if (this.touchOutsideHandler) {
      this.touchOutsideHandler.remove();
      this.touchOutsideHandler = null;
    }
  }

  createTwoChains(event) {
    let fn = () => {};
    const events = this.$listeners;
    if (this.childOriginEvents[event] && events[event]) {
      return this[`fire${event}`];
    }
    fn = this.childOriginEvents[event] || events[event] || fn;
    return fn;
  }

  isClickToShow() {
    const { action, showAction } = this.$props;
    return action.indexOf("click") !== -1 || showAction.indexOf("click") !== -1;
  }

  isContextmenuToShow() {
    const { action, showAction } = this.$props;
    return (
      action.indexOf("contextmenu") !== -1 ||
      showAction.indexOf("contextmenu") !== -1
    );
  }

  isClickToHide() {
    const { action, hideAction } = this.$props;
    return action.indexOf("click") !== -1 || hideAction.indexOf("click") !== -1;
  }

  isMouseEnterToShow() {
    const { action, showAction } = this.$props;
    return (
      action.indexOf("hover") !== -1 || showAction.indexOf("mouseenter") !== -1
    );
  }

  isMouseLeaveToHide() {
    const { action, hideAction } = this.$props;
    return (
      action.indexOf("hover") !== -1 || hideAction.indexOf("mouseleave") !== -1
    );
  }

  isFocusToShow() {
    const { action, showAction } = this.$props;
    return action.indexOf("focus") !== -1 || showAction.indexOf("focus") !== -1;
  }

  isBlurToHide() {
    const { action, hideAction } = this.$props;
    return action.indexOf("focus") !== -1 || hideAction.indexOf("blur") !== -1;
  }

  forcePopupAlign() {
    if (
      this.$data.sPopupVisible &&
      this._component &&
      this._component.$refs.alignInstance
    ) {
      this._component.$refs.alignInstance.forceAlign();
    }
  }

  fireEvents(type, e) {
    if (this.childOriginEvents[type]) {
      this.childOriginEvents[type](e);
    }
    // @ts-ignore
    this.__emit(type, e);
  }

  close() {
    this.setPopupVisible(false);
  }

  render(h) {
    const { sPopupVisible } = this;
    const children = filterEmpty(this.$slots.default);
    const { forceRender, alignPoint } = this.$props;

    if (children.length > 1) {
      warning(
        false,
        "Trigger $slots.default.length > 1, just support only one default",
        true
      );
    }
    const child = children[0];
    this.childOriginEvents = getEvents(child);
    let on = {} as {
      contextmenu;
      click;
      mousedown;
      touchstart;
      mouseenter;
      mousemove;
      mouseleave;
      focus;
      blur;
    };
    const newChildProps = {
      props: {},
      on: on,
      key: "trigger"
    };

    if (this.isContextmenuToShow()) {
      newChildProps.on.contextmenu = this.onContextmenu;
    } else {
      newChildProps.on.contextmenu = this.createTwoChains("contextmenu");
    }

    if (this.isClickToHide() || this.isClickToShow()) {
      newChildProps.on.click = this.onClick;
      newChildProps.on.mousedown = this.onMousedown;
      newChildProps.on.touchstart = this.onTouchstart;
    } else {
      newChildProps.on.click = this.createTwoChains("click");
      newChildProps.on.mousedown = this.createTwoChains("mousedown");
      newChildProps.on.touchstart = this.createTwoChains("onTouchstart");
    }
    if (this.isMouseEnterToShow()) {
      newChildProps.on.mouseenter = this.onMouseenter;
      if (alignPoint) {
        newChildProps.on.mousemove = this.onMouseMove;
      }
    } else {
      newChildProps.on.mouseenter = this.createTwoChains("mouseenter");
    }
    if (this.isMouseLeaveToHide()) {
      newChildProps.on.mouseleave = this.onMouseleave;
    } else {
      newChildProps.on.mouseleave = this.createTwoChains("mouseleave");
    }

    if (this.isFocusToShow() || this.isBlurToHide()) {
      newChildProps.on.focus = this.onFocus;
      newChildProps.on.blur = this.onBlur;
    } else {
      newChildProps.on.focus = this.createTwoChains("focus");
      newChildProps.on.blur = e => {
        if (e && (!e.relatedTarget || !contains(e.target, e.relatedTarget))) {
          this.createTwoChains("blur")(e);
        }
      };
    }

    const trigger = cloneElement(child, newChildProps);

    return (
      <ContainerRender
        parent={this}
        visible={sPopupVisible}
        autoMount={false}
        forceRender={forceRender}
        getComponent={this.getComponent}
        getContainer={this.getContainer}
        children={({ renderComponent }) => {
          this.renderComponent = renderComponent;
          return trigger;
        }}
      />
    );
  }
}

import classNames from "classnames";
import Dialog from "../vc-dialog";
import addEventListener from "../_util/Dom/addEventListener";
import Button from "../button";
import ButtonType from "../button/NebulaButton";
import LocaleReceiver from "../locale-provider/LocaleReceiver";
import { getConfirmLocale } from "./locale";
import {
  initDefaultProps,
  getComponentFromProp,
  getClass,
  getStyle,
  mergeProps
} from "../_util/props-util";
import Icon from "../icon";
import { Model, Component, Prop, Vue, Watch } from "vue-property-decorator";
import { mixins } from "vue-class-component";

let mousePosition = null;
let mousePositionEventBinded = false;

function noop() {}

@Component({})
class ModalProps extends Vue {
  @Prop({ type: String })
  prefixCls?: string;

  /** 对话框是否可见*/
  @Prop({ type: Boolean })
  visible?: boolean;

  /** 确定按钮 loading*/
  @Prop({ type: Boolean })
  confirmLoading?: boolean;

  /** 标题*/
  @Prop({})
  title?: any;

  /** 是否显示右上角的关闭按钮*/
  @Prop({ type: Boolean })
  closable?: boolean;

  @Prop({
    default: () => {
      noop;
    },
    type: Function
  })
  afterClose?: any;

  /** 居中 */
  @Prop({ type: Boolean })
  centered?: boolean;

  /** 宽度*/
  @Prop({ type: [String, Number] })
  width?: string | number;

  /** 底部内容*/
  @Prop({})
  footer?: any;

  /** 确认按钮文字*/
  @Prop({ type: String })
  okText?: string;

  /** 确认按钮类型*/
  @Prop({ type: String })
  okType?: ButtonType;

  /** 取消按钮文字*/
  @Prop({ type: String })
  cancelText?: string;

  /** 点击蒙层是否允许关闭*/
  @Prop({})
  maskClosable?: boolean;

  @Prop({})
  okButtonProps?: any;

  @Prop({ type: Object })
  cancelButtonProps?: any;

  @Prop({ type: Boolean })
  destroyOnClose?: boolean;

  @Prop({ type: String })
  wrapClassName?: string;

  @Prop({ type: String })
  maskTransitionName?: string;

  @Prop({ type: String })
  transitionName?: string;

  @Prop({ type: Function })
  getContainer?: any;

  @Prop({ type: Number })
  zIndex?: number;

  @Prop({ type: Object })
  bodyStyle?: any;

  @Prop({ type: Object })
  maskStyle?: any;

  @Prop({})
  mask?: boolean;

  @Prop({ type: Boolean })
  keyboard?: boolean;

  @Prop({ type: Object })
  wrapProps?: any;
}

@Component({})
export default class NebulaModal extends mixins(ModalProps) {
  constructor(props) {
    super(props);
  }

  public static info;
  public static success;
  public static error;
  public static warning;
  public static warn;
  public static confirm;

  @Model("change", { default: false, type: Boolean })
  visible!: boolean;

  @Prop({ default: "nebula-modal", type: String })
  prefixCls?: string;

  @Prop({ default: 420, type: [String, Number] })
  width?: string | number;

  @Prop({ default: "zoom", type: String })
  transitionName?: string;

  @Prop({ default: "fade", type: String })
  maskTransitionName?: string;

  @Prop({ default: false, type: Boolean })
  confirmLoading?: boolean;

  @Prop({ default: "primary", type: String })
  okType?: ButtonType;

  mounted() {
    if (mousePositionEventBinded) {
      return;
    }
    // 只有点击事件支持从鼠标位置动画展开
    addEventListener(document.documentElement, "click", e => {
      mousePosition = {
        x: e.pageX,
        y: e.pageY
      };
      // 100ms 内发生过点击事件，则从点击位置动画展示
      // 否则直接 zoom 展示
      // 这样可以兼容非点击方式展开
      setTimeout(() => {
        mousePosition = null;
      }, 100);
    });
    mousePositionEventBinded = true;
  }

  handleCancel(e) {
    this.$emit("cancel", e);
    this.$emit("change", false);
  }

  handleOk(e) {
    this.$emit("ok", e);
  }

  renderFooter(locale) {
    const { okType, confirmLoading } = this;
    const cancelBtnProps = mergeProps(
      { on: { click: this.handleCancel } },
      this.cancelButtonProps || {}
    );
    const okBtnProps = mergeProps(
      {
        on: { click: this.handleOk },
        props: {
          type: okType,
          loading: confirmLoading
        }
      },
      this.okButtonProps || {}
    );
    return (
      <div>
        <Button {...cancelBtnProps}>
          {getComponentFromProp(this, "cancelText") || locale.cancelText}
        </Button>
        <Button {...okBtnProps}>
          {getComponentFromProp(this, "okText") || locale.okText}
        </Button>
      </div>
    );
  }

  render() {
    const {
      visible,
      wrapClassName,
      centered,
      prefixCls,
      $listeners,
      $slots
    } = this;

    const defaultFooter = (
      <LocaleReceiver
        componentName="Modal"
        defaultLocale={getConfirmLocale()}
        scopedSlots={{ default: this.renderFooter }}
      />
    );
    const closeIcon = (
      <span class={`${prefixCls}-close-x`}>
        <Icon class={`${prefixCls}-close-icon`} type={"close"} />
      </span>
    );
    const footer = getComponentFromProp(this, "footer");
    const title = getComponentFromProp(this, "title");
    const dialogProps = {
      props: {
        ...this.$props,
        prefixCls,
        wrapClassName: classNames(
          { [`${prefixCls}-centered`]: !!centered },
          wrapClassName
        ),
        title,
        footer: footer === undefined ? defaultFooter : footer,
        visible: visible,
        mousePosition,
        closeIcon
      },
      on: {
        ...$listeners,
        close: this.handleCancel
      },
      class: getClass(this),
      style: getStyle(this)
    };
    return <Dialog {...dialogProps}>{$slots.default}</Dialog>;
  }
}

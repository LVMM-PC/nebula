import Dialog from "./Dialog";
import ContainerRender from "../_util/ContainerRender";
import getDialogPropTypes from "./IDialogPropTypes";
import { getStyle, getClass } from "../_util/props-util";
import { Component, Prop, Vue } from "vue-property-decorator";

const IDialogPropTypes = getDialogPropTypes();

@Component({})
export default class DialogWrap extends Vue {
  constructor(props) {
    super(props);
  }

  created() {
    this.renderComponent = () => {};
    this.removeContainer = () => {};
  }

  public renderComponent;

  public removeContainer;

  @Prop({ type: Boolean })
  keyboard: boolean;

  @Prop({ type: Boolean })
  mask: boolean;

  @Prop({ type: Function })
  afterClose: any;

  @Prop({ type: Boolean })
  closable: boolean;

  @Prop({ type: Boolean })
  maskClosable: boolean;

  @Prop({ default: false, type: Boolean })
  visible: boolean;

  @Prop({ type: Boolean })
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

  @Prop({ type: String })
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

  beforeDestroy() {
    if (this.visible) {
      this.renderComponent({
        afterClose: this.removeContainer,
        visible: false,
        on: {
          close() {}
        }
      });
    } else {
      this.removeContainer();
    }
  }

  getComponent(extra = {}) {
    const { $attrs, $listeners, $props, $slots } = this;
    // @ts-ignore
    const { on, ...otherProps } = extra;
    const dialogProps = {
      props: {
        ...$props,
        dialogClass: getClass(this),
        dialogStyle: getStyle(this),
        ...otherProps
      },
      attrs: $attrs,
      ref: "_component",
      key: "dialog",
      on: {
        ...$listeners,
        ...on
      }
    };
    return <Dialog {...dialogProps}>{$slots.default}</Dialog>;
  }

  getContainer2() {
    const container = document.createElement("div");
    if (this.getContainer) {
      this.getContainer().appendChild(container);
    } else {
      document.body.appendChild(container);
    }
    return container;
  }

  render() {
    const { visible } = this;
    return (
      <ContainerRender
        parent={this}
        visible={visible}
        autoDestroy={false}
        getComponent={this.getComponent}
        getContainer={this.getContainer2}
        children={({ renderComponent, removeContainer }) => {
          this.renderComponent = renderComponent;
          this.removeContainer = removeContainer;
          return null;
        }}
      />
    );
  }
}

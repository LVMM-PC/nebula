import {initDefaultProps} from "../../_util/props-util";
import {cloneElement} from "../../_util/vnode";
import warning from "../../_util/warning";
import BaseMixin from "../../_util/BaseMixin";
import {Component, Prop, Vue} from "vue-property-decorator";
import {mixins} from "vue-class-component";

@Component({})
class ITouchProps extends Vue {
  @Prop({type: Boolean})
  disabled?: boolean;

  @Prop({type: String})
  activeClassName?: string;

  @Prop({})
  activeStyle?: any;
}

@Component({
  name: "TouchFeedback",
  mixins: [BaseMixin]
})
export default class TouchFeedback extends mixins(ITouchProps) {
  public active?: any;

  constructor(props) {
    super(props);

  }

  mounted() {
    this.$nextTick(() => {
      if (this.disabled && this.active) {
        // @ts-ignore
        this.setState({
          active: false
        });
      }
    });
  }

  triggerEvent(type, isActive, ev) {
    // 暂时仅有input-number用到，事件直接到挂载到Touchable上，不需要像antd那样从子组件触发
    this.$emit(type, ev);
    if (isActive !== this.active) {
      // @ts-ignore
      this.setState({
        active: isActive
      });
    }
  }

  onTouchStart(e) {
    this.triggerEvent("touchstart", true, e);
  }

  onTouchMove(e) {
    this.triggerEvent("touchmove", false, e);
  }

  onTouchEnd(e) {
    this.triggerEvent("touchend", false, e);
  }

  onTouchCancel(e) {
    this.triggerEvent("touchcancel", false, e);
  }

  onMouseDown(e) {
    // pc simulate mobile
    this.triggerEvent("mousedown", true, e);
  }

  onMouseUp(e) {
    this.triggerEvent("mouseup", false, e);
  }

  onMouseLeave(e) {
    this.triggerEvent("mouseleave", false, e);
  }

  render() {
    const {disabled, activeClassName = "", activeStyle = {}} = this.$props;

    const child = this.$slots.default;
    if (child.length !== 1) {
      warning(false, "m-feedback组件只能包含一个子元素");
      return null;
    }
    let childProps = {
      on: disabled
        ? {}
        : {
          touchstart: this.onTouchStart,
          touchmove: this.onTouchMove,
          touchend: this.onTouchEnd,
          touchcancel: this.onTouchCancel,
          mousedown: this.onMouseDown,
          mouseup: this.onMouseUp,
          mouseleave: this.onMouseLeave
        }
    };

    if (!disabled && this.active) {
      childProps = {
        ...childProps,
        ...{
          // @ts-ignore
          style: activeStyle,
          class: activeClassName
        }
      };
    }

    return cloneElement(child, childProps);
  }
}

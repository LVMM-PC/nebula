import PropTypes from "../_util/vue-types";
import Button from "../button";
import BaseMixin from "../_util/BaseMixin";
import buttonTypes from "../button/NebulaButton";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({
  mixins: [BaseMixin]
})
export default class ActionButton extends Vue {
  constructor(props) {
    super(props);
  }

  @Prop()
  type: buttonTypes;

  @Prop({ type: Function })
  actionFn: any;

  @Prop({ type: Function })
  closeModal: any;

  @Prop({ type: Boolean })
  autoFocus: boolean;

  @Prop({ type: Object })
  buttonProps: any;

  public timeoutId;
  public loading = false;

  mounted() {
    if (this.autoFocus) {
      this.timeoutId = setTimeout(() => this.$el.focus());
    }
  }

  beforeDestroy() {
    clearTimeout(this.timeoutId);
  }

  onClick() {
    const { actionFn, closeModal } = this;
    if (actionFn) {
      let ret;
      if (actionFn.length) {
        ret = actionFn(closeModal);
      } else {
        ret = actionFn();
        if (!ret) {
          closeModal();
        }
      }
      if (ret && ret.then) {
        // @ts-ignore
        this.setState({ loading: true });
        ret.then(
          (...args) => {
            // It's unnecessary to set loading=false, for the Modal will be unmounted after close.
            // this.setState({ loading: false });
            closeModal(...args);
          },
          () => {
            // See: https://github.com/ant-design/ant-design/issues/6183
            // @ts-ignore
            this.setState({ loading: false });
          }
        );
      }
    } else {
      closeModal();
    }
  }

  render() {
    const { type, $slots, loading, buttonProps } = this;
    return (
      <Button
        type={type}
        onClick={this.onClick}
        loading={loading}
        {...buttonProps}
      >
        {$slots.default}
      </Button>
    );
  }
}

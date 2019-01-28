import PropTypes from "../_util/vue-types";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class Content extends Vue {
  constructor(props) {
    super(props);
  }

  @Prop({ type: String })
  prefixCls: string;

  @Prop()
  overlay: any;

  @Prop()
  trigger: any;

  updated() {
    const { trigger } = this;
    if (trigger) {
      trigger.forcePopupAlign();
    }
  }
  render() {
    const { overlay, prefixCls } = this;
    return (
      <div class={`${prefixCls}-inner`} role="tooltip">
        {typeof overlay === "function" ? overlay() : overlay}
      </div>
    );
  }
}

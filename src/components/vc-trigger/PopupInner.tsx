import PropTypes from "../_util/vue-types";
import LazyRenderBox from "./LazyRenderBox";
import { Component, Vue } from "vue-property-decorator";

@Component({
  props: {
    hiddenClassName: PropTypes.string.def(""),
    prefixCls: PropTypes.string,
    visible: PropTypes.bool
  }
})
export default class PopupInner extends Vue {
  constructor(props) {
    super(props);
  }

  render() {
    const { prefixCls, visible, hiddenClassName } = this.$props;
    const { $listeners } = this;
    const divProps = {
      on: $listeners
    };

    return (
      <div {...divProps} class={!visible ? hiddenClassName : ""}>
        <LazyRenderBox class={`${prefixCls}-content`} visible={visible}>
          {this.$slots.default}
        </LazyRenderBox>
      </div>
    );
  }
}

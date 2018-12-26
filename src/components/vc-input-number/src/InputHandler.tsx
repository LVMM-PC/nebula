import Touchable from "../../vc-m-feedback";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class InputHandler extends Vue {
  @Prop({ type: String })
  prefixCls?: string;
  @Prop({ type: Boolean })
  disabled?: boolean;

  constructor(props) {
    super(props);
  }

  render() {
    const { prefixCls, disabled } = this.$props;
    const touchableProps = {
      props: {
        disabled,
        activeClassName: `${prefixCls}-handler-active`
      },
      on: this.$listeners
    };
    return (
      <Touchable {...touchableProps}>
        <span>{this.$slots.default}</span>
      </Touchable>
    );
  }
}

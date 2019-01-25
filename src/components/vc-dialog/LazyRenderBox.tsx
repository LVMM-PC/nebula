import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class extends Vue {
  constructor(props) {
    super(props);
  }

  @Prop({ type: Boolean })
  visible: boolean;

  @Prop({ type: String })
  hiddenClassName: string;

  render() {
    return <div>{this.$slots.default}</div>;
  }
}

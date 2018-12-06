import PropTypes from "../_util/vue-types";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Option extends Vue {
  constructor(props: any) {
    super(props);
  }

  @Prop({ type: Boolean })
  disabled: boolean;

  @Prop({ type: String })
  title: string;

  @Prop({ type: [String, Number] })
  value: string | number;

  public isSelectOption = true;
}

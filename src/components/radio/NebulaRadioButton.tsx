import { Component, Prop } from "vue-property-decorator";
import NebulaRadio from "./NebulaRadio";

@Component({
  name: "NebulaRadioButton"
})
export default class NebulaRadioButton extends NebulaRadio {
  @Prop({ default: "nebula-radio-button", type: String })
  public prefixCls?: string;
}

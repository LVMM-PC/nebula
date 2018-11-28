<script lang="tsx">
import { Component, Prop } from "vue-property-decorator";
import NebulaRadio from "./NebulaRadio.vue";

@Component
export default class NebulaRadioButton extends NebulaRadio {
  @Prop({ default: "nebula-radio-button", type: String })
  public prefixCls?: string;
}
</script>

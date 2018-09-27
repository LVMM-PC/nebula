<template>
  <div :class="classes">
    <slot/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ButtonSize } from "./NebulaButton.vue";

@Component
export default class NebulaButtonGroup extends Vue {
  @Prop({ default: null, type: String })
  private size?: ButtonSize;

  public prefixCls: string = "nebula-btn-group";

  get classes() {
    let prefixCls = this.prefixCls;
    let sizeCls = this.sizeCls;
    return [
      prefixCls,
      {
        [`${prefixCls}-${sizeCls}`]: sizeCls
      }
    ];
  }

  get sizeCls() {
    // large => lg
    // small => sm
    let sizeCls = "";
    switch (this.size) {
      case "large":
        sizeCls = "lg";
        break;
      case "small":
        sizeCls = "sm";
        break;
      default:
        break;
    }
    return sizeCls;
  }
}
</script>

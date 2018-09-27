<template>
  <span
    v-bind="$attrs"
    :class="classes"/>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class NebulaIcon extends Vue {
  @Prop({ default: null, type: String })
  private type?: string;

  @Prop({ default: false, type: Boolean })
  private spin?: boolean;

  public prefixCls: string = "nebula-icon";

  get classes() {
    let prefixCls = this.prefixCls;
    let type = this.type;
    let spin = this.spin || (type && type.indexOf("loading") === 0);
    return [
      prefixCls,
      {
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-spin`]: spin
      }
    ];
  }
}
</script>

import { filterEmpty } from "../_util/props-util";

import { Prop, Vue, Component, Watch, Model } from "vue-property-decorator";

@Component({})
export default class NebulaInputGroup extends Vue {
  @Prop({ default: "nebula-input-group", type: String })
  prefixCls?: any;

  @Prop({ type: String })
  size?: "small" | "large" | "default";

  @Prop({ type: Boolean })
  compact?: boolean;

  get classes() {
    const { prefixCls, size, compact = false } = this;
    return {
      [`${prefixCls}`]: true,
      [`${prefixCls}-lg`]: size === "large",
      [`${prefixCls}-sm`]: size === "small",
      [`${prefixCls}-compact`]: compact
    };
  }

  render() {
    const { $listeners } = this;
    return (
      <span class={this.classes} {...{ on: $listeners }}>
        {filterEmpty(this.$slots.default)}
      </span>
    );
  }
}

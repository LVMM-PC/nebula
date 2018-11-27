<script lang="tsx">
import { Component, Model, Prop, Vue } from "vue-property-decorator";
import VueCheckbox from "@/components/vue-checkbox/VueCheckbox.vue";
import { getProps } from "../_util/props-util";

@Component
export default class NebulaRadio extends Vue {
  @Model("change")
  checked!: boolean;

  @Prop({ default: "nebula-radio" })
  private prefixCls?: string;

  @Prop({ type: Boolean })
  private defaultChecked?: boolean;

  @Prop({ type: Boolean })
  private disabled?: boolean;

  @Prop({ type: Boolean })
  private isGroup?: boolean;

  @Prop({})
  private value?: any;

  @Prop({ type: String })
  private name?: string;

  @Prop({ type: String })
  private id?: string;

  @Prop({ type: Boolean })
  private autoFocus?: boolean;

  @Prop({ default: "radio" })
  private type?: string;

  render() {
    const { $slots, $listeners } = this;
    const props = getProps(this);
    console.log(props);
    const children = $slots.default;
    const { ...restListeners } = $listeners;
    const { prefixCls, ...restProps } = props;
    const radioProps = {
      props: {
        ...restProps,
        prefixCls
      },
      on: restListeners,
      attrs: this.$attrs
    };
    const wrapperClassString = [
      {
        [`${prefixCls}-wrapper`]: true,
        [`${prefixCls}-wrapper-checked`]: this.checked,
        [`${prefixCls}-wrapper-disabled`]: this.disabled
      }
    ];
    return (
      <label class={wrapperClassString}>
        <VueCheckbox {...radioProps} />
        {children !== undefined ? <span>{children}</span> : null}
      </label>
    );
  }
}
</script>

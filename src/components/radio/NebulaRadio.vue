<script lang="tsx">
import { Component, Model, Prop, Vue } from "vue-property-decorator";
import VueCheckbox from "@/components/vue-checkbox/VueCheckbox.vue";

@Component
export default class NebulaRadio extends Vue {
  @Model("change", { default: null })
  checked!: boolean;

  @Prop({ default: null })
  private disabled?: boolean;

  @Prop({ default: "nebula-radio" })
  private prefixCls?: string;

  @Prop({ default: "radio" })
  private type?: string;

  render() {
    const {
      $slots,
      $listeners,
      checked,
      disabled,
      prefixCls,
      $attrs,
      ...restProps
    } = this;
    const children = $slots.default;
    const { ...restListeners } = $listeners;
    const radioProps = {
      props: {
        ...restProps,
        prefixCls
      },
      on: restListeners,
      attrs: $attrs
    };
    const wrapperClassString = [
      {
        [`${prefixCls}-wrapper`]: true,
        [`${prefixCls}-wrapper-checked`]: checked,
        [`${prefixCls}-wrapper-disabled`]: disabled
      }
    ];

    return (
      <label class={wrapperClassString}>
        <VueCheckbox type="radio" {...radioProps} />
        {children !== undefined ? <span>{children}</span> : null}
      </label>
    );
  }
}
</script>

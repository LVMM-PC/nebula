import { Prop, Vue, Component } from "vue-property-decorator";

@Component({})
export default class InputProps extends Vue {
  @Prop({ default: "nebula-input", type: String })
  prefixCls?: string;

  @Prop({ type: [String, Number] })
  defaultValue?: string | number;

  @Prop({ type: [String, Number] })
  value?: string | number;

  @Prop({ type: [String, Number] })
  placeholder?: string | number;

  @Prop({ default: "text", type: String })
  type?: string;

  @Prop({ type: String })
  name?: string;

  @Prop({ type: String })
  size?: any;

  @Prop({ default: false, type: Boolean })
  disabled?: boolean;

  @Prop({ type: Boolean })
  readOnly?: boolean;

  @Prop({})
  addonBefore?: any;

  @Prop({})
  addonAfter?: any;

  @Prop({})
  prefix?: any;

  @Prop({})
  suffix?: any;

  @Prop({ type: Boolean })
  spellCheck?: boolean;

  @Prop({ type: Boolean })
  autoFocus?: boolean;
}

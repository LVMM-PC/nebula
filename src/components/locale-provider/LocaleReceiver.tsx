import { Vue, Component, Prop } from "vue-property-decorator";

@Component({
  inject: {
    localeData: { default: {} }
  }
})
export default class LocaleReceiver extends Vue {
  constructor(props) {
    super(props);
  }

  @Prop({ type: String })
  componentName: string;

  @Prop({ type: [Object, Function] })
  defaultLocale: any;

  @Prop({ type: Function })
  children: any;

  public localeData: any;

  render() {
    const { $scopedSlots } = this;
    const children = this.children || $scopedSlots.default;
    return children(this.getLocale(), this.getLocaleCode());
  }

  getLocale() {
    const { componentName, defaultLocale } = this;
    const { antLocale } = this.localeData;
    const localeFromContext = antLocale && antLocale[componentName];
    return {
      ...(typeof defaultLocale === "function"
        ? defaultLocale()
        : defaultLocale),
      ...(localeFromContext || {})
    };
  }

  getLocaleCode() {
    const { antLocale } = this.localeData;
    const localeCode = antLocale && antLocale.locale;
    // Had use LocaleProvide but didn't set locale
    if (antLocale && antLocale.exist && !localeCode) {
      return "en-us";
    }
    return localeCode;
  }
}

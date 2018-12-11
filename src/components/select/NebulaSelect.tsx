import warning from "warning";
import { Select as VcSelect } from "../vc-select/Select";
import Option from "../vc-select/Option";
import LocaleReceiver from "../locale-provider/LocaleReceiver";
import defaultLocale from "../locale-provider/default";
import {
  getComponentFromProp,
  getOptionProps,
  filterEmpty
} from "../_util/props-util";
import { mixins } from "vue-class-component";
import { Component, Prop, Vue, Model } from "vue-property-decorator";

@Component({})
export class AbstractSelectProps extends Vue {
  constructor(props) {
    super(props);
  }

  @Prop({ type: String })
  prefixCls?: string;

  @Prop({ type: String })
  size?: "small" | "large" | "default";

  @Prop()
  notFoundContent?: any;

  @Prop({ type: String })
  transitionName?: string;

  @Prop({ type: String })
  choiceTransitionName?: string;

  @Prop({ type: Boolean })
  showSearch?: boolean;

  @Prop({ type: Boolean })
  allowClear?: boolean;

  @Prop({ type: Boolean })
  disabled?: boolean;

  @Prop({ type: Number })
  tabIndex?: number;

  @Prop()
  placeholder?: any;

  @Prop({ type: Boolean })
  defaultActiveFirstOption?: boolean;

  @Prop({ type: String })
  dropdownClassName?: string;

  @Prop()
  dropdownStyle?: any;

  @Prop()
  dropdownMenuStyle?: any;

  @Prop({ type: Boolean })
  dropdownMatchSelectWidth?: boolean;

  @Prop({})
  filterOption?: boolean | ((inputValue: string, option: any) => any);

  @Prop({ type: Boolean })
  autoFocus?: boolean;

  @Prop({ type: Boolean })
  backfill?: boolean;

  @Prop({ default: true, type: Boolean })
  showArrow?: boolean;

  @Prop({ type: Function })
  getPopupContainer?: (triggerNode: Element) => HTMLElement;
}

export interface LabeledValue {
  key: string;
  label: any;
}

export type SelectValue =
  | string
  | string[]
  | number
  | number[]
  | LabeledValue
  | LabeledValue[];

@Component({})
export class SelectProps extends mixins(AbstractSelectProps) {
  @Prop()
  value?: SelectValue;

  @Prop()
  defaultValue?: SelectValue;

  @Prop({ type: String })
  mode?: "default" | "multiple" | "tags" | "combobox" | string;

  @Prop({ type: String })
  optionLabelProp?: string;

  @Prop({ type: [String, Array] })
  firstActiveValue?: string | string[];

  @Prop({ type: Number })
  maxTagCount?: number;

  @Prop()
  maxTagPlaceholder?: any;

  @Prop({ type: Boolean })
  dropdownMatchSelectWidth?: boolean;

  @Prop({ type: String })
  optionFilterProp?: string;

  @Prop({ type: Boolean })
  labelInValue?: boolean;

  @Prop({ type: Function })
  getPopupContainer?: any;

  @Prop({ type: Array })
  tokenSeparators?: string[];

  @Prop({ type: Function })
  getInputElement?: any;

  @Prop({ type: Array })
  options?: any;
}

@Component({})
export default class Select extends mixins(SelectProps) {
  constructor(props) {
    super(props);
  }

  @Prop({ default: "nebula-select", type: String })
  prefixCls?: string;

  @Prop({ default: false, type: Boolean })
  showSearch?: boolean;

  @Prop({ default: "slide-up", type: String })
  transitionName?: string;

  @Prop({ default: "zoom", type: String })
  choiceTransitionName?: string;

  @Model("change")
  value!: any;

  static SECRET_COMBOBOX_MODE_DO_NOT_USE = "SECRET_COMBOBOX_MODE_DO_NOT_USE";

  created() {
    warning(
      this.$props.mode !== "combobox",
      "The combobox mode of Select is deprecated," +
        "it will be removed in next major version," +
        "please use AutoComplete instead"
    );
  }

  focus() {
    let vcSelect = this.$refs.vcSelect as HTMLInputElement;
    vcSelect.focus();
  }

  blur() {
    let vcSelect = this.$refs.vcSelect as HTMLInputElement;
    vcSelect.blur();
  }

  getNotFoundContent(locale) {
    const notFoundContent = getComponentFromProp(this, "notFoundContent");
    if (this.isCombobox()) {
      // AutoComplete don't have notFoundContent defaultly
      return notFoundContent === undefined ? null : notFoundContent;
    }
    return notFoundContent === undefined
      ? locale.notFoundContent
      : notFoundContent;
  }

  isCombobox() {
    const { mode } = this;
    return (
      mode === "combobox" || mode === Select.SECRET_COMBOBOX_MODE_DO_NOT_USE
    );
  }

  renderSelect(locale) {
    const { prefixCls, size, mode, options, ...restProps } = getOptionProps(
      this
    );
    const cls = {
      [`${prefixCls}-lg`]: size === "large",
      [`${prefixCls}-sm`]: size === "small"
    };

    let { optionLabelProp } = this.$props;
    if (this.isCombobox()) {
      // children 带 dom 结构时，无法填入输入框
      optionLabelProp = optionLabelProp || "value";
    }

    const modeConfig = {
      multiple: mode === "multiple",
      tags: mode === "tags",
      combobox: this.isCombobox()
    };
    const selectProps = {
      props: {
        ...restProps,
        ...modeConfig,
        prefixCls,
        optionLabelProp: optionLabelProp || "children",
        notFoundContent: this.getNotFoundContent(locale),
        maxTagPlaceholder: getComponentFromProp(this, "maxTagPlaceholder"),
        placeholder: getComponentFromProp(this, "placeholder"),
        children: options
          ? options.map(option => {
              const { key, label = option.title, ...restOption } = option;
              return (
                <Option key={key} {...{ props: restOption }}>
                  {label}
                </Option>
              );
            })
          : filterEmpty(this.$slots.default),
        __propsSymbol__: Symbol()
      },
      on: this.$listeners,
      class: cls,
      ref: "vcSelect"
    };
    // @ts-ignore
    return <VcSelect {...selectProps} />;
  }

  render() {
    return (
      <LocaleReceiver
        componentName="Select"
        defaultLocale={defaultLocale.Select}
        scopedSlots={{ default: this.renderSelect }}
      />
    );
  }
}

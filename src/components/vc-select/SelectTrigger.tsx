import classnames from "classnames";
import Trigger from "../trigger";
import DropdownMenu from "./DropdownMenu";
import { isSingleMode, saveRef } from "./util";
import BaseMixin from "../_util/BaseMixin";
import { Component, Prop, Vue, Model } from "vue-property-decorator";

const BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ["tl", "bl"],
    offset: [0, 4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topLeft: {
    points: ["bl", "tl"],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  }
};

@Component({
  name: "SelectTrigger",
  mixins: [BaseMixin]
})
export default class SelectTrigger extends Vue {
  constructor(props) {
    super(props);
  }

  @Prop({ type: Boolean })
  dropdownMatchSelectWidth?: boolean;

  @Prop({ type: Boolean })
  defaultActiveFirstOption?: boolean;

  @Prop({ type: Object })
  dropdownAlign?: any;

  @Prop({ type: Boolean })
  visible?: boolean;

  @Prop({ type: Boolean })
  disabled?: boolean;

  @Prop({ type: Boolean })
  showSearch?: boolean;

  @Prop({ type: String })
  dropdownClassName?: string;

  @Prop({ type: Object })
  dropdownStyle?: any;

  @Prop({ type: Object })
  dropdownMenuStyle?: any;

  @Prop({ type: Boolean })
  multiple?: boolean;

  @Prop({ type: String })
  inputValue?: string;

  @Prop({})
  filterOption?: any;

  @Prop({})
  options?: any;

  @Prop({ type: String })
  prefixCls?: string;

  @Prop({ type: String })
  popupClassName?: string;

  @Prop({ type: Array })
  value?: any;

  @Prop({ type: Array })
  showAction?: string[];

  @Prop({ type: Boolean })
  combobox?: boolean;

  @Prop({ type: String })
  animation?: string;

  @Prop({ type: String })
  transitionName?: string;

  @Prop({ type: Function })
  getPopupContainer?: any;

  @Prop({})
  backfillValue?: any;

  public dropdownWidth: any = null;
  public saveDropdownMenuRef: any;
  public saveTriggerRef: any;
  public dropdownMenuRef: any;
  public triggerRef: any;
  public firstActiveValue: any;

  created() {
    this.saveDropdownMenuRef = saveRef(this, "dropdownMenuRef");
    this.saveTriggerRef = saveRef(this, "triggerRef");
  }

  mounted() {
    this.$nextTick(() => {
      this.setDropdownWidth();
    });
  }

  updated() {
    this.$nextTick(() => {
      this.setDropdownWidth();
    });
  }

  setDropdownWidth() {
    const width = this.$el.offsetWidth;
    if (width !== this.dropdownWidth) {
      // @ts-ignore
      this.setState({ dropdownWidth: width });
    }
  }

  getInnerMenu() {
    return this.dropdownMenuRef && this.dropdownMenuRef.$refs.menuRef;
  }

  getPopupDOMNode() {
    return this.triggerRef.getPopupDomNode();
  }

  getDropdownElement(newProps) {
    const {
      value,
      firstActiveValue,
      defaultActiveFirstOption,
      dropdownMenuStyle,
      getDropdownPrefixCls,
      backfillValue
    } = this;
    const { menuSelect, menuDeselect, popupScroll } = this.$listeners;
    const dropdownMenuProps = {
      props: {
        ...newProps.props,
        prefixCls: getDropdownPrefixCls(),
        value,
        firstActiveValue,
        defaultActiveFirstOption,
        dropdownMenuStyle,
        backfillValue
      },
      on: {
        ...newProps.on,
        menuSelect,
        menuDeselect,
        popupScroll
      },
      directives: [
        {
          name: "ref",
          value: this.saveDropdownMenuRef
        }
      ]
    };
    return <DropdownMenu {...dropdownMenuProps} />;
  }

  getDropdownTransitionName() {
    const props = this.$props;
    let transitionName = props.transitionName;
    if (!transitionName && props.animation) {
      transitionName = `${this.getDropdownPrefixCls()}-${props.animation}`;
    }
    return transitionName;
  }

  getDropdownPrefixCls() {
    return `${this.prefixCls}-dropdown`;
  }

  render() {
    const { $props, $slots, $listeners } = this;
    const {
      multiple,
      visible,
      inputValue,
      dropdownAlign,
      disabled,
      showSearch,
      dropdownClassName,
      dropdownStyle,
      dropdownMatchSelectWidth,
      options,
      getPopupContainer,
      showAction
    } = $props;
    const {
      mouseenter,
      mouseleave,
      popupFocus,
      dropdownVisibleChange
    } = $listeners;
    const dropdownPrefixCls = this.getDropdownPrefixCls();
    const popupClassName = {
      [dropdownClassName]: !!dropdownClassName,
      [`${dropdownPrefixCls}--${multiple ? "multiple" : "single"}`]: 1
    };
    const popupElement = this.getDropdownElement({
      props: {
        menuItems: options,
        multiple,
        inputValue,
        visible
      },
      on: {
        popupFocus
      }
    });
    let hideAction;
    if (disabled) {
      hideAction = [];
    } else if (isSingleMode($props) && !showSearch) {
      hideAction = ["click"];
    } else {
      hideAction = ["blur"];
    }
    const popupStyle = { ...dropdownStyle };
    const widthProp = dropdownMatchSelectWidth ? "width" : "minWidth";
    if (this.dropdownWidth) {
      popupStyle[widthProp] = `${this.dropdownWidth}px`;
    }
    let on = {
      popupVisibleChange: dropdownVisibleChange
    } as {
      popupVisibleChange;
      mouseenter;
      mouseleave;
    };
    const triggerProps = {
      props: {
        ...$props,
        showAction: disabled ? [] : showAction,
        hideAction,
        ref: "triggerRef",
        popupPlacement: "bottomLeft",
        builtinPlacements: BUILT_IN_PLACEMENTS,
        prefixCls: dropdownPrefixCls,
        popupTransitionName: this.getDropdownTransitionName(),
        popupAlign: dropdownAlign,
        popupVisible: visible,
        getPopupContainer,
        popupClassName: classnames(popupClassName),
        popupStyle
      },
      on: on,
      directives: [
        {
          name: "ref",
          value: this.saveTriggerRef
        }
      ]
    };
    if (mouseenter) {
      triggerProps.on.mouseenter = mouseenter;
    }
    if (mouseleave) {
      triggerProps.on.mouseleave = mouseleave;
    }
    return (
      <Trigger {...triggerProps}>
        {$slots.default}
        <template slot="popup">{popupElement}</template>
      </Trigger>
    );
  }
}

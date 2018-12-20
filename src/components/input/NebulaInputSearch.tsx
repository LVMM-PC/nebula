import classNames from "classnames";
import Input from "./NebulaInput";
import Icon from "../icon";
import Button from "../button";
import { cloneElement } from "../_util/vnode";
import { getOptionProps, getComponentFromProp } from "../_util/props-util";
import InputProps from "./InputProps";
import { Prop, Vue, Component, Watch, Model } from "vue-property-decorator";
import { mixins } from "vue-class-component";

@Component({})
export default class NebulaInputSearch extends mixins(InputProps) {
  @Model("change.value")
  value!: any;

  @Prop({ default: "nebula-input-search", type: String })
  prefixCls?: any;
  @Prop({ default: "nebula-input", type: String })
  inputPrefixCls?: any;
  @Prop({ type: [Boolean, String, Object] })
  enterButton?: boolean | string | object;

  public stateValue: any;

  onSearch(e) {
    let input = this.$refs.input as HTMLInputElement;
    // @ts-ignore
    this.$emit("search", input.stateValue, e);
    input.focus();
  }

  focus() {
    let input = this.$refs.input as HTMLInputElement;
    input.focus();
  }

  blur() {
    let input = this.$refs.input as HTMLInputElement;
    input.blur();
  }

  getButtonOrIcon() {
    const { prefixCls, size, disabled } = this;
    const enterButton = getComponentFromProp(this, "enterButton");
    const enterButtonAsElement = Array.isArray(enterButton)
      ? enterButton[0]
      : enterButton;
    let node;
    if (!enterButton) {
      node = (
        <Icon class={`${prefixCls}-icon`} type="search" key="searchIcon" />
      );
    } else if (
      enterButtonAsElement.tag === "button" ||
      (enterButtonAsElement.componentOptions &&
        enterButtonAsElement.componentOptions.Ctor.extendOptions
          .__NEBULA_BUTTON)
    ) {
      node = cloneElement(enterButtonAsElement, {
        class: `${prefixCls}-button`,
        props: { size }
      });
    } else {
      node = (
        <Button
          class={`${prefixCls}-button`}
          type="primary"
          size={size}
          disabled={disabled}
          key="enterButton"
        >
          {enterButton === true ? <Icon type="search" /> : enterButton}
        </Button>
      );
    }
    return cloneElement(node, {
      on: {
        click: this.onSearch
      }
    });
  }

  render() {
    const {
      prefixCls,
      inputPrefixCls,
      size,
      suffix,
      ...others
    } = getOptionProps(this);
    const enterButton = getComponentFromProp(this, "enterButton");
    const buttonOrIcon = this.getButtonOrIcon();
    const searchSuffix = suffix ? [suffix, buttonOrIcon] : buttonOrIcon;
    const inputClassName = classNames(prefixCls, {
      [`${prefixCls}-enter-button`]: !!enterButton,
      [`${prefixCls}-${size}`]: !!size
    });
    const on = { ...this.$listeners };
    delete on.search;
    const inputProps = {
      props: {
        ...others,
        prefixCls: inputPrefixCls,
        size,
        suffix: searchSuffix
      },
      attrs: this.$attrs,
      on: {
        pressEnter: this.onSearch,
        ...on
      }
    };
    return <Input {...inputProps} class={inputClassName} ref="input" />;
  }
}

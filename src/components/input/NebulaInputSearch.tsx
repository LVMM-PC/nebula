import classNames from "classnames";
import Input from "./NebulaInput";
import Icon from "../icon";
import inputProps from "./inputProps";
import Button from "../button";
import { cloneElement } from "../_util/vnode";
import { getOptionProps, getComponentFromProp } from "../_util/props-util";
import PropTypes from "../_util/vue-types";

export default {
  name: "NebulaInputSearch",
  props: {
    ...inputProps,
    prefixCls: {
      default: "nebula-input-search",
      type: String
    },
    inputPrefixCls: {
      default: "nebula-input",
      type: String
    },
    enterButton: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
      PropTypes.object
    ])
  },
  model: {
    prop: "value",
    event: "change.value"
  },
  methods: {
    onSearch(e) {
      this.$emit("search", this.$refs.input.stateValue, e);
      this.$refs.input.focus();
    },
    focus() {
      this.$refs.input.focus();
    },

    blur() {
      this.$refs.input.blur();
    },
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
          enterButtonAsElement.componentOptions.Ctor.extendOptions.__ANT_BUTTON)
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
  },
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
};

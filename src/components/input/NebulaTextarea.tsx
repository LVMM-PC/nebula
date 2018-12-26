import omit from "omit.js";
import InputProps from "./InputProps";
import calculateNodeHeight from "./calculateNodeHeight";
import hasProp from "../_util/props-util";
import { mixins } from "vue-class-component";
import { Component, Model, Prop, Watch } from "vue-property-decorator";

function onNextFrame(cb) {
  if (window.requestAnimationFrame) {
    return window.requestAnimationFrame(cb);
  }
  return window.setTimeout(cb, 1);
}

function clearNextFrameAction(nextFrameId) {
  if (window.cancelAnimationFrame) {
    window.cancelAnimationFrame(nextFrameId);
  } else {
    window.clearTimeout(nextFrameId);
  }
}

function fixControlledValue(value) {
  if (typeof value === "undefined" || value === null) {
    return "";
  }
  return value;
}

@Component({})
export default class NebulaTextarea extends mixins(InputProps) {
  @Prop({ type: [Object, Boolean] })
  autosize?: object | boolean;
  @Model("change.value")
  value!: any;
  public stateValue?: any;
  public nextFrameActionId?: any = undefined;
  public textareaStyles?: any = {};

  constructor(props) {
    super(props);
  }

  @Watch("value")
  onValueChanged(val: string) {
    this.stateValue = fixControlledValue(val);
    if (this.nextFrameActionId) {
      clearNextFrameAction(this.nextFrameActionId);
    }
    this.nextFrameActionId = onNextFrame(this.resizeTextarea);
  }

  initData() {
    const { value, defaultValue } = this.$props;
    this.stateValue = fixControlledValue(
      !hasProp(this, "value") ? defaultValue : value
    );
  }

  created() {
    this.initData();
  }

  mounted() {
    this.$nextTick(() => {
      this.resizeTextarea();
      if (this.autoFocus) {
        this.focus();
      }
    });
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      this.$emit("pressEnter", e);
    }
    this.$emit("keydown", e);
  }

  resizeTextarea() {
    const { autosize } = this.$props;
    if (!autosize || !this.$refs.textArea) {
      return;
    }
    const minRows = autosize ? autosize.minRows : null;
    const maxRows = autosize ? autosize.maxRows : null;
    const textareaStyles = calculateNodeHeight(
      this.$refs.textArea,
      false,
      minRows,
      maxRows
    );
    this.textareaStyles = textareaStyles;
  }

  getTextAreaClassName() {
    const { prefixCls, disabled } = this.$props;
    return {
      [prefixCls]: true,
      [`${prefixCls}-disabled`]: disabled
    };
  }

  handleTextareaChange(e) {
    if (!hasProp(this, "value")) {
      this.stateValue = e.target.value;
      this.$nextTick(() => {
        this.resizeTextarea();
      });
    } else {
      this.$forceUpdate();
    }
    if (!e.target.composing) {
      this.$emit("change.value", e.target.value);
    }
    this.$emit("change", e);
    this.$emit("input", e);
  }

  focus() {
    let textArea = this.$refs.textArea as HTMLInputElement;
    textArea.focus();
  }

  blur() {
    let textArea = this.$refs.textArea as HTMLInputElement;
    textArea.blur();
  }

  render() {
    const {
      stateValue,
      getTextAreaClassName,
      handleKeyDown,
      handleTextareaChange,
      textareaStyles,
      $attrs,
      $listeners
    } = this;
    const otherProps = omit(this.$props, ["prefixCls", "autosize", "type"]);
    const textareaProps = {
      attrs: { ...otherProps, ...$attrs },
      on: {
        ...$listeners,
        keydown: handleKeyDown,
        input: handleTextareaChange
      }
    };
    if ($listeners["change.value"]) {
      // @ts-ignore
      textareaProps.directives = [{ name: "nebula-input" }];
    }
    return (
      <textarea
        {...textareaProps}
        value={stateValue}
        class={getTextAreaClassName()}
        style={textareaStyles}
        ref="textArea"
      />
    );
  }
}

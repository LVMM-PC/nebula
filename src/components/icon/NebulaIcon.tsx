import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class NebulaIcon extends Vue {
  constructor(props) {
    super(props);
  }

  @Prop({ default: "nebula-icon", type: String })
  prefixCls?: string;

  @Prop({ type: String })
  type?: string;

  @Prop({ type: String })
  title?: string;

  @Prop({ type: Boolean })
  spin?: boolean;

  clicked: any;
  timeout: any;

  classes() {
    const { prefixCls, type, spin } = this;
    return {
      [`${prefixCls}`]: true,
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-spin`]: !!spin || type === "loading"
    };
  }

  handleClick(event) {
    if (this.clicked) {
      return;
    }

    this.clicked = true;
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => (this.clicked = false), 500);
    this.$emit("click", event);
  }

  beforeDestroy() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  render() {
    const { title, classes, handleClick, $listeners } = this;
    const iconProps = {
      attrs: {
        title
      },
      class: classes(),
      on: {
        ...$listeners,
        click: handleClick
      }
    };
    return <i {...iconProps} />;
  }
}

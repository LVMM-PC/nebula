import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "NebulaIcon"
})
export default class NebulaIcon extends Vue {
  @Prop({ default: null, type: String })
  private type?: string;

  @Prop({ default: null, type: String })
  private title?: string;

  @Prop({ default: false, type: Boolean })
  private spin?: boolean;

  @Prop()
  private timeout?: any;

  public prefixCls: string = "nebula-icon";

  public clicked: boolean = false;

  get classes() {
    let prefixCls = this.prefixCls;
    let type = this.type;
    let spin = this.spin || (type && type.indexOf("loading") === 0);
    return [
      prefixCls,
      {
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-spin`]: spin
      }
    ];
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

  render() {
    const { title, classes, handleClick, $listeners } = this;
    const iconProps = {
      attrs: {
        title
      },
      class: classes,
      on: {
        ...$listeners,
        click: handleClick
      }
    };
    return <i {...iconProps} />;
  }
}

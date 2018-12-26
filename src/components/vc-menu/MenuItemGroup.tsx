import { getComponentFromProp } from "../_util/props-util";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  // @ts-ignore
  isMenuItemGroup: true
})
export default class MenuItemGroup extends Vue {
  @Prop({ type: Function })
  renderMenuItem?: any;
  @Prop({ type: Number })
  index?: number;
  @Prop({ type: String })
  className?: string;
  @Prop({ type: String })
  subMenuKey?: string;
  @Prop({ type: String })
  rootPrefixCls?: string;
  @Prop({ default: true, type: Boolean })
  disabled?: boolean;
  @Prop({})
  title?: any;

  constructor(props) {
    super(props);
  }

  renderInnerMenuItem(item) {
    const { renderMenuItem, index, subMenuKey } = this.$props;
    return renderMenuItem(item, index, subMenuKey);
  }

  render() {
    const props = { ...this.$props };
    const { rootPrefixCls, title } = props;
    const titleClassName = `${rootPrefixCls}-item-group-title`;
    const listClassName = `${rootPrefixCls}-item-group-list`;
    // menuAllProps.props.forEach(key => delete props[key])
    const listeners = { ...this.$listeners };
    delete listeners.click;

    return (
      <li {...{ on: listeners, class: `${rootPrefixCls}-item-group` }}>
        <div
          class={titleClassName}
          title={typeof title === "string" ? title : undefined}
        >
          {getComponentFromProp(this, "title")}
        </div>
        <ul class={listClassName}>
          {this.$slots.default &&
            this.$slots.default.map(this.renderInnerMenuItem)}
        </ul>
      </li>
    );
  }
}

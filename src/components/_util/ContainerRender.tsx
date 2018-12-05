import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class ContainerRender extends Vue {
  constructor(props: any) {
    super(props);
  }

  @Prop({ default: true, type: Boolean })
  autoMount: boolean;

  @Prop({ default: true, type: Boolean })
  autoDestroy: boolean;

  @Prop({ type: Boolean })
  visible: boolean;

  @Prop({ default: false, type: Boolean })
  forceRender: boolean;

  @Prop({})
  parent: any;

  @Prop({})
  getComponent: any;

  @Prop({})
  getContainer: any;

  @Prop({})
  children: any;

  @Prop({})
  container: any;

  @Prop({})
  _component: any;

  @Prop({})
  componentEl: any;

  mounted() {
    if (this.autoMount) {
      this.renderComponent();
    }
  }

  updated() {
    if (this.autoMount) {
      this.renderComponent();
    }
  }

  beforeDestroy() {
    if (this.autoDestroy) {
      this.removeContainer();
    }
  }

  removeContainer() {
    if (this.container) {
      this._component && this._component.$destroy();
      this.container.parentNode.removeChild(this.container);
      this.container = null;
    }
  }

  renderComponent(...args) {
    let props = args[0] || {};
    let ready = args[1];

    const { visible, forceRender, getContainer, parent } = this;
    const self = this;
    if (visible || parent.$refs._component || forceRender) {
      let el = this.componentEl;
      if (!this.container) {
        this.container = getContainer();
        el = document.createElement("div");
        this.componentEl = el;
        this.container.appendChild(el);
      }

      if (!this._component) {
        this._component = new Vue({
          el: el,
          parent: self.parent,
          data: {
            comProps: props
          },
          mounted() {
            this.$nextTick(() => {
              if (ready) {
                ready.call(self);
              }
            });
          },
          updated() {
            this.$nextTick(() => {
              if (ready) {
                ready.call(self);
              }
            });
          },
          render() {
            return self.getComponent(this.comProps);
          }
        });
      } else {
        this._component.comProps = props;
      }
    }
  }

  render() {
    return this.children({
      renderComponent: this.renderComponent,
      removeContainer: this.removeContainer
    });
  }
}

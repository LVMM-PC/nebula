import { storeShape } from "./PropTypes";
import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "StoreProvider",
  props: {
    store: storeShape.isRequired
  }
})
export default class StoreProvider extends Vue {
  provide() {
    return {
      storeContext: this.$props
    };
  }
  render() {
    return this.$slots.default[0];
  }
}

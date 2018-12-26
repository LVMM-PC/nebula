import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  // @ts-ignore
  isSelectOptGroup: true
})
export default class OptGroup extends Vue {
  @Prop()
  label: any;

  constructor(props) {
    super(props);
  }
}

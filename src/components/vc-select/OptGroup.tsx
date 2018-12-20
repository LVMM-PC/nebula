import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  // @ts-ignore
  isSelectOptGroup: true
})
export default class OptGroup extends Vue {
  constructor(props) {
    super(props);
  }

  @Prop()
  label: any;
}

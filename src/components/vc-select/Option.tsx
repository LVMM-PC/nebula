import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  // @ts-ignore
  isSelectOption: true
})
export default class Option extends Vue {
  @Prop({ type: [String, Number] })
  value: string | number;
  @Prop({ type: Boolean })
  disabled: boolean;
  @Prop({ type: String })
  title: string;

  constructor(props) {
    super(props);
  }
}

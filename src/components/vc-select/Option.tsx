import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  // @ts-ignore
  isSelectOption: true
})
export default class Option extends Vue {
  constructor(props) {
    super(props);
  }

  @Prop({ type: [String, Number] })
  value: string | number;

  @Prop({ type: Boolean })
  disabled: boolean;

  @Prop({ type: String })
  title: string;
}

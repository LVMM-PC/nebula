// based on vc-select 7.7.5
import ProxySelect, { Select } from "./Select";
import Option from "./Option";
import { SelectPropTypes } from "./PropTypes";
import OptGroup from "./OptGroup";
// @ts-ignore
Select.Option = Option;
// @ts-ignore
Select.OptGroup = OptGroup;
// @ts-ignore
ProxySelect.Option = Option;
// @ts-ignore
ProxySelect.OptGroup = OptGroup;
export { Select, Option, OptGroup, SelectPropTypes };
export default ProxySelect;

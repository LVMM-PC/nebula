<template>
  <div>
    <AdvancedSearch/>
    <Coordinated/>
    <CustomizedFormControls/>
    <DynamicFormItem/>
    <DynamicRule/>
    <FormInModal/>
    <GlobalState/>
    <HorizontalLogin/>
    <Layout/>
    <NormalLogin/>
    <Register/>
    <ValidateOther/>
    <ValidateStatic/>
    <WithoutFormCreate/>
  </div>
</template>

<script>
import AdvancedSearch from "./form/advanced-search.vue";
import Coordinated from "./form/coordinated.vue";
import CustomizedFormControls from "./form/customized-form-controls.vue";
import DynamicFormItem from "./form/dynamic-form-item.vue";
import DynamicRule from "./form/dynamic-rule.vue";
import FormInModal from "./form/form-in-modal.vue";
import GlobalState from "./form/global-state.vue";
import HorizontalLogin from "./form/horizontal-login.vue";
import Layout from "./form/layout.vue";
import NormalLogin from "./form/normal-login.vue";
import Register from "./form/register.vue";
import ValidateOther from "./form/validate-other.vue";
import ValidateStatic from "./form/validate-static.vue";
import WithoutFormCreate from "./form/without-form-create.vue";

export default {
  components: {
    AdvancedSearch,
    Coordinated,
    CustomizedFormControls,
    DynamicFormItem,
    DynamicRule,
    FormInModal,
    GlobalState,
    HorizontalLogin,
    Layout,
    NormalLogin,
    Register,
    ValidateOther,
    ValidateStatic,
    WithoutFormCreate
  }
};
</script>

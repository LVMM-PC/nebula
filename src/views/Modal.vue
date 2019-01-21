<template>
  <main>
    <AsynchronouslyClose/>
    <Basic/>
    <ConfirmationModalDialogUsePromise/>
    <ConfirmationModalDialog/>
    <CustomizedFooter/>
    <InformationModalDialog/>
    <Internationalization/>
    <ManualToUpdateDestroy/>
    <ToCustomizeThePositionOfModal/>
    <CustomizeFooterButtonsProps/>
  </main>
</template>

<script>
import AsynchronouslyClose from "./modal/AsynchronouslyClose.vue";
import Basic from "./modal/Basic.vue";
import ConfirmationModalDialogUsePromise from "./modal/ConfirmationModalDialogUsePromise.vue";
import ConfirmationModalDialog from "./modal/ConfirmationModalDialog.vue";
import CustomizedFooter from "./modal/CustomizedFooter.vue";
import InformationModalDialog from "./modal/InformationModalDialog.vue";
import Internationalization from "./modal/Internationalization.vue";
import ManualToUpdateDestroy from "./modal/ManualToUpdateDestroy.vue";
import ToCustomizeThePositionOfModal from "./modal/ToCustomizeThePositionOfModal.vue";
import CustomizeFooterButtonsProps from "./modal/CustomizeFooterButtonsProps.vue";

export default {
  name: "Modal",
  components: {
    AsynchronouslyClose,
    Basic,
    ConfirmationModalDialogUsePromise,
    ConfirmationModalDialog,
    CustomizedFooter,
    InformationModalDialog,
    Internationalization,
    ManualToUpdateDestroy,
    ToCustomizeThePositionOfModal,
    CustomizeFooterButtonsProps
  }
};
</script>

<style lang="less" scoped>
main {
  padding: 20px;
}

section {
  margin-bottom: 10px;
}
</style>

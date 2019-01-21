<template>
  <div>
    <nebula-button 
      type="primary" 
      @click="showModal">Open Modal with async logic</nebula-button>
    <nebula-modal
      :visible="visible"
      :confirm-loading="confirmLoading"
      title="Title"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <p>{{ ModalText }}</p>
    </nebula-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ModalText: "Content of the modal",
      visible: false,
      confirmLoading: false
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      this.ModalText = "The modal will be closed after two seconds";
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel(e) {
      console.log("Clicked cancel button");
      this.visible = false;
    }
  }
};
</script>

<template>
  <section>
    <nebula-button 
      type="primary" 
      @click="showModal">Open Modal with customized button props</nebula-button>
    <nebula-modal
      v-model="visible"
      :ok-button-props="{ props: {disabled: true} }"
      :cancel-button-props="{ props: {disabled: true} }"
      title="Basic Modal"
      @ok="handleOk"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </nebula-modal>
  </section>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
    handleCancel(e) {
      console.log(e);
      this.visible = false;
    }
  }
};
</script>

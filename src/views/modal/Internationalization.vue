<template>
  <section>
    <nebula-button 
      type="primary" 
      @click="showModal">Modal</nebula-button>
    <nebula-modal
      v-model="visible"
      title="Modal"
      ok-text="确认"
      cancel-text="取消"
      @ok="hideModal"
    >
      <p>Bla bla ...</p>
      <p>Bla bla ...</p>
      <p>Bla bla ...</p>
    </nebula-modal>
    <nebula-button @click="confirm">Confirm</nebula-button>
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
    hideModal() {
      this.visible = false;
    },
    confirm() {
      this.$confirm({
        title: "Confirm",
        content: "Bla bla ...",
        okText: "确认",
        cancelText: "取消"
      });
    }
  }
};
</script>

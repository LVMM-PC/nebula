<template>
  <div>
    <nebula-button 
      type="primary" 
      @click="showModal">Open Modal</nebula-button>
    <nebula-modal
      v-model="visible"
      title="Basic Modal"
      @ok="handleOk"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </nebula-modal>
  </div>
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
    }
  }
};
</script>

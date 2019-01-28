<template>
  <main>
    <NebulaButton type="primary" @click="showModal">
      Open Modal with customized button props
    </NebulaButton>
    <NebulaModal
      title="Basic Modal"
      v-model="visible"
      @ok="handleOk"
      @cancel="handleCancel"
      :okButtonProps="{props: {disabled: true}}"
      :cancelButtonProps="{props: {disabled: true}}"
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </NebulaModal>
  </main>
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
      Object.assign(this, {
        visible: true
      });
    },
    handleOk(e) {
      console.log(e);
      Object.assign(this, {
        visible: false
      });
    },
    handleCancel(e) {
      console.log(e);
      Object.assign(this, {
        visible: false
      });
    }
  }
};
</script>

<style scoped>
</style>

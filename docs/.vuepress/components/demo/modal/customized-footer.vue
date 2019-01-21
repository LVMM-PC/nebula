<template>
  <main>
    <NebulaButton type="primary" @click="showModal">
      Open Modal with customized footer
    </NebulaButton>
    <NebulaModal
      v-model="visible"
      title="Title"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <template slot="footer">
        <NebulaButton key="back" @click="handleCancel">Return</NebulaButton>
        <NebulaButton key="submit" type="primary" :loading="loading" @click="handleOk">
          Submit
        </NebulaButton>
      </template>
      <p>Some contents...</p>
      <p>Some contents...</p>
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
      loading: false,
      visible: false
    };
  },
  methods: {
    showModal() {
      Object.assign(this, {
        visible: true
      });
    },
    handleOk() {
      Object.assign(this, { loading: true });
      setTimeout(() => {
        Object.assign(this, { loading: false, visible: false });
      }, 3000);
    },
    handleCancel() {
      Object.assign(this, { visible: false });
    }
  }
};
</script>

<template>
  <main>
    <section>
      <NebulaButton type="primary" @click="showModal">Modal</NebulaButton>
      <NebulaModal
        title="Modal"
        v-model="visible"
        @ok="hideModal"
        @cancel="hideModal"
        okText="确认"
        cancelText="取消"
      >
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
      </NebulaModal>
    </section>
    <section>
      <NebulaButton @click="confirm">Confirm</NebulaButton>
    </section>
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
    hideModal() {
      Object.assign(this, {
        visible: false
      });
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

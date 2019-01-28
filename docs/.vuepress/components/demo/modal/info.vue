<template>
  <main>
    <NebulaButton @click="info">Info</NebulaButton>
    <NebulaButton @click="success">Success</NebulaButton>
    <NebulaButton @click="error">Error</NebulaButton>
    <NebulaButton @click="warning">Warning</NebulaButton>
  </main>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    info() {
      const h = this.$createElement;
      this.$info({
        title: "This is a notification message",
        content: h("div", {}, [
          h("p", "some messages...some messages..."),
          h("p", "some messages...some messages...")
        ]),
        onOk() {}
      });
    },
    success() {
      this.$success({
        title: "This is a success message",
        content: "some messages...some messages..."
      });
    },
    error() {
      this.$error({
        title: "This is an error message",
        content: "some messages...some messages..."
      });
    },
    warning() {
      this.$warning({
        title: "This is a warning message",
        content: "some messages...some messages..."
      });
    }
  }
};
</script>

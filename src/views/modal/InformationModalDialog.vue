<template>
  <div>
    <nebula-button @click="info">Info</nebula-button>
    <nebula-button @click="success">Success</nebula-button>
    <nebula-button @click="error">Error</nebula-button>
    <nebula-button @click="warning">Warning</nebula-button>
  </div>
</template>

<script>
export default {
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
        // JSX support
        content: (
          <div>
            <p>some messages...some messages...</p>
            <p>some messages...some messages...</p>
          </div>
        )
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

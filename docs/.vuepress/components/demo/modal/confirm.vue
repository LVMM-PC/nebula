<template>
  <main>
    <NebulaButton @click="showConfirm">
      Confirm
    </NebulaButton>
    <NebulaButton @click="showDeleteConfirm" type="dashed">
      Delete
    </NebulaButton>
    <NebulaButton @click="showPropsConfirm" type="dashed">
      With extra props
    </NebulaButton>
  </main>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    showConfirm() {
      this.$confirm({
        title: "Do you Want to delete these items?",
        content: "Some descriptions",
        onOk() {
          console.log("OK");
        },
        onCancel() {
          console.log("Cancel");
        }
      });
    },
    showDeleteConfirm() {
      this.$confirm({
        title: "Are you sure delete this task?",
        content: "Some descriptions",
        okText: "Yes",
        okType: "danger",
        cancelText: "No",
        onOk() {
          console.log("OK");
        },
        onCancel() {
          console.log("Cancel");
        }
      });
    },
    showPropsConfirm() {
      this.$confirm({
        title: "Are you sure delete this task?",
        content: "Some descriptions",
        okText: "Yes",
        okType: "danger",
        okButtonProps: {
          disabled: true
        },
        cancelText: "No",
        onOk() {
          console.log("OK");
        },
        onCancel() {
          console.log("Cancel");
        }
      });
    }
  }
};
</script>

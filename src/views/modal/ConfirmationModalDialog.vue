<template>
  <div>
    <nebula-button @click="showConfirm">
      Confirm
    </nebula-button>
    <nebula-button 
      type="dashed" 
      @click="showDeleteConfirm">
      Delete
    </nebula-button>
    <nebula-button 
      type="dashed" 
      @click="showPropsConfirm">
      With extra props
    </nebula-button>
  </div>
</template>

<script>
export default {
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
        },
        class: "test"
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
          props: { disabled: true }
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

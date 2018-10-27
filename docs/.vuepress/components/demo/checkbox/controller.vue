<template>
  <main>
    <section :style="{marginBottom:'20px'}">
      <NebulaCheckbox
        v-model="checked"
        :disabled="disabled"
        @change="handleChange"
      >{{label}}
      </NebulaCheckbox>
    </section>
    <section>
      <NebulaButton
        type="primary"
        size="small"
        @click="handleToggleChecked"
      >{{checkLabel}}
      </NebulaButton>
      <NebulaButton
        :style="{marginLeft:'10px'}"
        type="primary"
        size="small"
        @click="handleToggleDisable"
      >{{checkDisabled}}
      </NebulaButton>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      disabled: false
    };
  },
  computed: {
    label() {
      return `${this.checked ? "Checked" : "Unchecked"}-${
        this.disabled ? "Disabled" : "Enabled"
      }`;
    },
    checkLabel() {
      return !this.checked ? "Check" : "Uncheck";
    },
    checkDisabled() {
      return !this.disabled ? "Disable" : "Enable";
    }
  },
  methods: {
    handleChange(checked) {
      this.checked = checked;
    },
    handleToggleChecked() {
      this.checked = !this.checked;
    },
    handleToggleDisable() {
      this.disabled = !this.disabled;
    }
  }
};
</script>

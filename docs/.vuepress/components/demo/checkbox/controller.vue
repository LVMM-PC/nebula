<template>
  <main>
    <section :style="{marginBottom:'20px'}">
      <NebulaCheckbox
        v-model="checked"
        :disabled="disabled"
        @change="onChange"
      >{{label}}
      </NebulaCheckbox>
    </section>
    <section>
      <NebulaButton
        type="primary"
        size="small"
        @click="toggleChecked"
      >{{checkLabel}}
      </NebulaButton>
      <NebulaButton
        :style="{marginLeft:'10px'}"
        type="primary"
        size="small"
        @click="toggleDisable"
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
    onChange(e) {
      this.checked = e.target.checked;
    },
    toggleChecked() {
      this.checked = !this.checked;
    },
    toggleDisable() {
      this.disabled = !this.disabled;
    }
  }
};
</script>

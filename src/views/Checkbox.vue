<template>
  <div>
    <section>
      <NebulaCheckbox/>
    </section>
    <section>
      <NebulaCheckbox default-checked/>
    </section>
    <section>
      <NebulaCheckbox
        :checked="checked"
        :disabled="disabled"
        @change="handleChange">Checkbox</NebulaCheckbox>
      <NebulaButton @click="handleCheck">Check</NebulaButton>
      <NebulaButton @click="handleUnCheck">UnCheck</NebulaButton>
      <NebulaButton @click="handleDisable">Disable</NebulaButton>
      <NebulaButton @click="handleUnDisable">UnDisable</NebulaButton>
    </section>
  </div>
</template>

<script>
export default {
  name: "Checkbox",
  data() {
    return {
      checked: false,
      disabled: false
    };
  },
  methods: {
    handleCheck() {
      this.checked = true;
    },
    handleUnCheck() {
      this.checked = false;
    },
    handleDisable() {
      this.disabled = true;
    },
    handleUnDisable() {
      this.disabled = false;
    },
    handleChange(e) {
      this.checked = e.target.checked;
    }
  }
};
</script>

<style scoped>
</style>

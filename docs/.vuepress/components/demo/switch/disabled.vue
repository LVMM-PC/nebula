<template>
  <main>
    <section>
      <NebulaSwitch :disabled="disabled" defaultChecked />
    </section>
    <section>
      <NebulaButton type="primary" @click="toggle">Toggle disabled</NebulaButton>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      disabled: true
    };
  },
  methods: {
    toggle() {
      this.disabled = !this.disabled;
    }
  }
};
</script>

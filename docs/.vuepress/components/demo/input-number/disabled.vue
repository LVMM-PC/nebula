<template>
  <main>
    <section>
      <NebulaInputNumber :min="1" :max="10" :disabled="disabled" :defaultValue="3"/>
    </section>
    <section>
      <NebulaButton @click="toggle" type="primary">Toggle disabled</NebulaButton>
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

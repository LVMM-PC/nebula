<template>
  <main>
    <section>
      <NebulaRadio :defaultChecked="false" :disabled="disabled">Disabled</NebulaRadio>
    </section>
    <section>
      <NebulaRadio defaultChecked :disabled="disabled">Disabled</NebulaRadio>
    </section>
    <section :style="{ marginTop: '20px' }">
      <NebulaButton type="primary" @click="toggleDisabled">
        Toggle disabled
      </NebulaButton>
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
    toggleDisabled() {
      this.disabled = !this.disabled;
    }
  }
};
</script>

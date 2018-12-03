<template>
  <div>
    <h1>Switch Demo</h1>
    <a-switch 
      default-checked 
      @change="onChange"/>
  </div>
</template>

<script>
export default {
  name: "SwitchDemo",
  methods: {
    onChange(checked) {
      console.log(`a-switch to ${checked}`);
    }
  }
};
</script>

<style scoped>
</style>

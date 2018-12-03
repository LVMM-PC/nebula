<template>
  <div>
    <h1>Select</h1>
    <div>
      <a-select 
        default-value="lucy" 
        style="width: 120px" 
        @change="handleChange">
        <a-select-option value="jack">Jack</a-select-option>
        <a-select-option value="lucy">Lucy</a-select-option>
        <a-select-option 
          value="disabled" 
          disabled>Disabled</a-select-option>
        <a-select-option value="Yiminghe">yiminghe</a-select-option>
      </a-select>
      <a-select 
        default-value="lucy" 
        style="width: 120px" 
        disabled>
        <a-select-option value="lucy">Lucy</a-select-option>
      </a-select>
    </div>
  </div>
</template>

<script>
export default {
  name: "Select",
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    }
  }
};
</script>

<style scoped>
</style>

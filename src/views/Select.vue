<template>
  <div>
    <h1>Select</h1>
    <h2>TODO</h2>
    <!--<div>
      <nebula-select
        default-value="lucy"
        style="width: 120px"
        @change="handleChange">
        <nebula-select-option value="jack">Jack</nebula-select-option>
        <nebula-select-option value="lucy">Lucy</nebula-select-option>
        <nebula-select-option
          value="disabled"
          disabled>Disabled</nebula-select-option>
        <a-select-option value="Yiminghe">yiminghe</a-select-option>
      </nebula-select>
      <nebula-select
        default-value="lucy"
        style="width: 120px"
        disabled>
        <nebula-select-option value="lucy">Lucy</nebula-select-option>
      </nebula-select>
    </div>-->
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

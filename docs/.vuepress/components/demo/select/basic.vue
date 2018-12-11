<template>
  <div>
    <NebulaSelect defaultValue="lucy" :style="{ width: '120px' }" @change="handleChange">
      <NebulaSelectOption value="jack">Jack</NebulaSelectOption>
      <NebulaSelectOption value="lucy">Lucy</NebulaSelectOption>
      <NebulaSelectOption value="disabled" disabled>Disabled</NebulaSelectOption>
      <NebulaSelectOption value="Yiminghe">yiminghe</NebulaSelectOption>
    </NebulaSelect>
    <NebulaSelect defaultValue="lucy" :style="{ width: '120px' }" disabled>
      <NebulaSelectOption value="lucy">Lucy</NebulaSelectOption>
    </NebulaSelect>
  </div>
</template>

<script>
export default {
  name: "basic",
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    }
  }
};
</script>

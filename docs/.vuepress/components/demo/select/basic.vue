<template>
  <section>
    <NebulaSelect defaultValue="lucy" :style="{ width: '120px' }" @change="handleChange">
      <NebulaSelectOption value="jack">Jack</NebulaSelectOption>
      <NebulaSelectOption value="lucy">Lucy</NebulaSelectOption>
      <NebulaSelectOption value="disabled" disabled>Disabled</NebulaSelectOption>
      <NebulaSelectOption value="Yiminghe">yiminghe</NebulaSelectOption>
    </NebulaSelect>
    <NebulaSelect defaultValue="lucy" :style="{ width: '120px' }" disabled>
      <NebulaSelectOption value="lucy">Lucy</NebulaSelectOption>
    </NebulaSelect>
  </section>
</template>

<script>
export default {
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    }
  }
};
</script>

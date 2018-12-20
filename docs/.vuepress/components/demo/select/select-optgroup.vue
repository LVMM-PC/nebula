<template>
  <section>
    <NebulaSelect
      defaultValue="lucy"
      :style="{ width: '200px'}"
      @change="handleChange"
    >
      <NebulaSelectOptGroup label="Manager">
        <NebulaSelectOption value="jack">Jack</NebulaSelectOption>
        <NebulaSelectOption value="lucy">Lucy</NebulaSelectOption>
      </NebulaSelectOptGroup>
      <NebulaSelectOptGroup label="Engineer">
        <NebulaSelectOption value="Yiminghe">yiminghe</NebulaSelectOption>
      </NebulaSelectOptGroup>
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

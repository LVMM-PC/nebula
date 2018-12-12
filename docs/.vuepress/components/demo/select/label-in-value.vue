<template>
  <NebulaSelect
    labelInValue
    :defaultValue="{ key: 'lucy' }"
    :style="{ width: '120px'}"
    @change="handleChange">
    <NebulaSelectOption value="jack">Jack (100)</NebulaSelectOption>
    <NebulaSelectOption value="lucy">Lucy (101)</NebulaSelectOption>
  </NebulaSelect>
</template>

<script>
export default {
  name: "label-in-value",
  methods: {
    handleChange(value) {
      console.log(value); // { key: "lucy", label: "Lucy (101)" }
    }
  }
};
</script>

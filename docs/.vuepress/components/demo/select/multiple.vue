<template>
  <NebulaSelect
    mode="multiple"
    :style="{ width: '100%'}"
    placeholder="Please select"
    :defaultValue="['a10', 'c12']"
    @change="handleChange"
  >
    <NebulaSelectOption v-for="(i) in 26" :key="String.fromCodePoint(i+96)+(i+9)">
      {{String.fromCodePoint(i+96)+(i+9)}}
    </NebulaSelectOption>
  </NebulaSelect>
</template>

<script>
export default {
  name: "multiple",
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    }
  }
};
</script>

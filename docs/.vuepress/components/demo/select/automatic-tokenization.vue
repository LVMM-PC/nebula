<template>
  <NebulaSelect
    mode="tags"
    :style="{ width: '100%'}"
    @change="handleChange"
    :tokenSeparators="[',']"
  >
    <NebulaSelectOption v-for="(i) in 26" :key="String.fromCodePoint(i+96)+(i+9)">
      {{String.fromCodePoint(i+96)+(i+9)}}
    </NebulaSelectOption>
  </NebulaSelect>
</template>

<script>
export default {
  name: "automatic-tokenization",
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    }
  }
};
</script>

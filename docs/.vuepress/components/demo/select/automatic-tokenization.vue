<template>
  <section>
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

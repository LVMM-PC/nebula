<template>
  <section>
    <NebulaRadioGroup @change="onChange" v-model="value">
      <NebulaRadio :value="1">A</NebulaRadio>
      <NebulaRadio :value="2">B</NebulaRadio>
      <NebulaRadio :value="3">C</NebulaRadio>
      <NebulaRadio :value="4">D</NebulaRadio>
    </NebulaRadioGroup>
  </section>
</template>

<script>
export default {
  data() {
    return {
      value: 1
    };
  },
  methods: {
    onChange(e) {
      console.log("radio checked", e.target.value);
    }
  }
};
</script>

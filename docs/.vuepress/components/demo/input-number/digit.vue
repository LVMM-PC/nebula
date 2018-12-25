<template>
  <section>
    <NebulaInputNumber :min="0" :max="10" :step="0.1" @change="onChange"/>
  </section>
</template>

<script>
export default {
  methods: {
    onChange(value) {
      console.log("changed", value);
    }
  }
};
</script>

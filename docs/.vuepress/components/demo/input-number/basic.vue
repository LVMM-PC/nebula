<template>
  <section>
    <NebulaInputNumber :min="1" :max="10" :defaultValue="3" @change="onChange"/>
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

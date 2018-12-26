<template>
  <section class="demo-input-number-size">
    <NebulaInputNumber size="large" :min="1" :max="100000" :defaultValue="3" @change="onChange"/>
    <NebulaInputNumber :min="1" :max="100000" :defaultValue="3" @change="onChange"/>
    <NebulaInputNumber size="small" :min="1" :max="100000" :defaultValue="3" @change="onChange"/>
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

<style lang="less" scoped>
.demo-input-number-size {
  .nebula-input-number {
    margin-right: 10px;
  }
}
</style>

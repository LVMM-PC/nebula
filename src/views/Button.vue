<template>
  <div>
    <section id="renderCorrectly">
      <NebulaButton>Follow</NebulaButton>
    </section>
    <section id="hoc">
      <NebulaButton 
        :label="hocLabel" 
        @click="handleHocClick"/>
    </section>
  </div>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {
      hocLabel: "按钮"
    };
  },
  methods: {
    handleHocClick() {
      if (this.hocLabel === "按钮") {
        this.hocLabel = "大按钮";
      } else {
        this.hocLabel = "按钮";
      }
    }
  }
};
</script>

<style scoped>
</style>

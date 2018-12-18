<template>
  <div>
    <a class="demo-code-box-toggle" @click="handleVisible">&lt;Vue source code&gt;</a>
    <div v-show="visible">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "demo-code-box",
  data() {
    return {
      visible: false
    }
  },
  methods:{
    handleVisible(){
      this.visible = !this.visible
    }
  }
}
</script>

<style scoped>
.demo-code-box-toggle{
  color: #999;
}
.demo-code-box-toggle:hover{
  color: #1890ff;
  border: none;
}
</style>

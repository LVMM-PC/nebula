<template>
  <main class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </main>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="less" scoped>
main {
  padding: 20px;
  text-align: center;
}
</style>

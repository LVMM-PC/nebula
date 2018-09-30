<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <NebulaButton 
      :label="buttonLabel" 
      @click="handlerButtonClick">Click me</NebulaButton>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {
  public buttonLabel = "按钮";
  handlerButtonClick() {
    if (this.buttonLabel === "按钮") {
      this.buttonLabel = "大按钮";
    } else {
      this.buttonLabel = "按钮";
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

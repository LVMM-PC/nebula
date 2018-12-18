<template>
  <NebulaInput
    placeholder="Enter your username"
    :value="userName"
    @change="onChangeUserName"
    ref="userNameInput"
  >
    <NebulaIcon type="close-circle" @click="emitEmpty"/>
    <NebulaIcon type="user" :style="{color: 'rgba(0,0,0,.25)'}"/>
  </NebulaInput>
</template>

<script>
export default {
  name: "presuffix",
  methods: {
    onChangeUserName() {},
    emitEmpty() {}
  }
};
</script>

<style scoped>
</style>

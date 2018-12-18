<template>
  <section>
    <NebulaInput
      placeholder="Enter your username"
      v-model="userName"
      ref="userNameInput"
    >
      <NebulaIcon slot="prefix" type="user" :style="{ color: 'rgba(0, 0, 0, 0.25)' }"/>
      <NebulaIcon v-show="userName" slot="suffix" type="close-circle" @click="emitEmpty"/>
    </NebulaInput>
  </section>
</template>

<script>
export default {
  name: "presuffix",
  data() {
    return {
      userName: ""
    };
  },
  methods: {
    emitEmpty() {
      this.$refs["userNameInput"].focus();
      this.userName = "";
    }
  }
};
</script>

<style>
.nebula-icon-close-circle {
  cursor: pointer;
  color: #ccc;
  transition: color 0.3s;
  font-size: 12px;
}

.nebula-icon-close-circle:hover {
  color: #999;
}

.nebula-icon-close-circle:active {
  color: #666;
}
</style>

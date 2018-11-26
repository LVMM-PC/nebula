<template>
  <div>
    <NebulaRadio/>
    <VueCheckbox
      id="myVueCheckbox1"
      :checked="true"
      :disabled="false"
      :read-aonly="true"
      name="type"
      auto-focus
      tab-index="1"
      value="apple"
    />
    <VueCheckbox
      id="myVueCheckbox2"
      :checked="true"
      :disabled="false"
      :read-aonly="true"
      name="type"
      auto-focus
      tab-index="3"
      value="orange"
    />
    <VueCheckbox
      id="myVueCheckbox3"
      :checked="true"
      :disabled="false"
      :read-aonly="true"
      name="type"
      auto-focus
      tab-index="2"
      value="tomato"
    />
  </div>
</template>

<script>
export default {
  name: "Radio"
};
</script>

<style scoped>
</style>

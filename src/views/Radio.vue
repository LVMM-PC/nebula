<template>
  <div>
    <NebulaRadio/>

    <div>
      <NebulaRadio 
        :default-checked="true" 
        :disabled="disabled">Disabled</NebulaRadio>
      <br>
      <NebulaRadio 
        :disabled="disabled" 
        default-checked>Disabled</NebulaRadio>
      <div :style="{ marginTop: 20 }">
        <NebulaButton 
          type="primary" 
          @click="toggleDisabled">
          Toggle disabled
        </NebulaButton>
      </div>
    </div>

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
  name: "Radio",
  data() {
    return {
      disabled: false
    };
  },
  methods: {
    toggleDisabled() {
      this.disabled = !this.disabled;
    }
  }
};
</script>

<style scoped>
</style>

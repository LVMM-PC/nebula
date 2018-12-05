<template>
  <div>
    <h1>Switch Demo</h1>
    <div>
      <NebulaSwitch
        default-checked
        @change="onChange"/>
    </div>
    <div>
      <NebulaSwitch 
        :disabled="disabled" 
        default-checked 
        style="margin-bottom:5px"/>
      <br>
      <NebulaButton 
        type="primary" 
        @click="onToggle">Toggle disabled</NebulaButton>
    </div>
    <div>
      <NebulaSwitch 
        checked-children="开" 
        un-checked-children="关" 
        default-checked/>
      <br>
      <NebulaSwitch 
        checked-children="1" 
        un-checked-children="0"/>
      <br>
      <NebulaSwitch default-checked >
        <nebula-icon 
          slot="checkedChildren" 
          type="check"/>
        <nebula-icon 
          slot="unCheckedChildren" 
          type="cross"/>
      </NebulaSwitch>
    </div>
    <div>
      <NebulaSwitch default-checked/>
      <br>
      <NebulaSwitch 
        size="small" 
        default-checked/>
    </div>
    <div>
      <NebulaSwitch 
        loading 
        default-checked/>
      <br>
      <NebulaSwitch 
        size="small" 
        loading/>
    </div>
  </div>
</template>

<script>
export default {
  name: "SwitchDemo",
  data() {
    return {
      disabled: true
    };
  },
  methods: {
    onChange(checked) {
      console.log(`NebulaSwitch to ${checked}`);
    },
    onToggle() {
      this.disabled = !this.disabled;
    }
  }
};
</script>

<style scoped>
</style>

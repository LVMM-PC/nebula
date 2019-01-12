<template>
  <main>
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
        @click="onToggle">Toggle disabled
      </NebulaButton>
    </div>
    <div>
      <NebulaSwitch
        checked-children="开"
        default-checked
        un-checked-children="关"/>
      <br>
      <NebulaSwitch
        checked-children="1"
        un-checked-children="0"/>
      <br>
      <NebulaSwitch default-checked>
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
        default-checked
        size="small"/>
    </div>
    <div>
      <NebulaSwitch
        default-checked
        loading/>
      <br>
      <NebulaSwitch
        loading
        size="small"/>
    </div>
  </main>
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

<style lang="less" scoped>
main {
  padding: 20px;
}
</style>

<template>
  <div>
    <section>
      <NebulaCheckbox autofocus/>
    </section>
    <section>
      <NebulaCheckbox default-checked/>
    </section>
    <section>
      <NebulaCheckbox
        ref="third"
        :checked="checked"
        :disabled="disabled"
        @change="handleSingleChange">Checkbox</NebulaCheckbox>
      <NebulaButton @click="handleCheck">Check</NebulaButton>
      <NebulaButton @click="handleUnCheck">UnCheck</NebulaButton>
      <NebulaButton @click="handleDisable">Disable</NebulaButton>
      <NebulaButton @click="handleUnDisable">UnDisable</NebulaButton>
    </section>
    <section :style="{borderBottom: '1px solid #E9E9E9'}">
      <NebulaCheckbox
        :indeterminate="indeterminate"
        :checked="checkAll"
        @change="handleGroupCheckAllChange"
      >
        Check all
      </NebulaCheckbox>
    </section>
    <section>
      <NebulaCheckboxGroup
        :options="plainOptions"
        :value="checkedList"
        @change="handleGroupChange"/>
    </section>
    <section>
      <NebulaCheckboxGroup
        :options="plainOptions"
        :default-value="['Apple']"
        @change="handleChange"/>
    </section>
    <section>
      <NebulaCheckboxGroup
        :options="options"
        :default-value="['Pear']"
        @change="handleChange"/>
    </section>
    <section>
      <NebulaCheckboxGroup
        :options="optionsWithDisabled"
        :default-value="['Apple']"
        disabled
        @change="handleChange"/>
    </section>
  </div>
</template>

<script>
const defaultCheckedList = ["Apple", "Orange"];
const plainOptions = ["Apple", "Pear", "Orange"];
const options = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange" }
];
const optionsWithDisabled = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange", disabled: false }
];

export default {
  name: "Checkbox",
  data() {
    return {
      plainOptions: plainOptions,
      checkedList: defaultCheckedList,
      checked: false,
      disabled: false,
      indeterminate: true,
      checkAll: false,
      options: options,
      optionsWithDisabled: optionsWithDisabled
    };
  },
  mounted() {
    let third = this.$refs.third;
    setTimeout(function() {
      third.focus();
    }, 500);
  },
  methods: {
    handleCheck() {
      this.checked = true;
    },
    handleUnCheck() {
      this.checked = false;
    },
    handleDisable() {
      this.disabled = true;
    },
    handleUnDisable() {
      this.disabled = false;
    },
    handleSingleChange(e) {
      this.checked = e.target.checked;
    },
    handleGroupCheckAllChange(e) {
      this.checkedList = e.target.checked ? plainOptions : [];
      this.indeterminate = false;
      this.checkAll = e.target.checked;
    },
    handleGroupChange(checkedList) {
      this.checkedList = checkedList;
      this.indeterminate =
        !!checkedList.length && checkedList.length < plainOptions.length;
      this.checkAll = checkedList.length === plainOptions.length;
    },
    handleChange(checkedValues) {
      console.log("checked = ", checkedValues);
    }
  }
};
</script>

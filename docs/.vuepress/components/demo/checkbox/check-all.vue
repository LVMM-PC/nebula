<template>
  <main>
    <section :style="{borderBottom: '1px solid #E9E9E9'}">
      <NebulaCheckbox
        :indeterminate="indeterminate"
        @change="handleCheckAllChange"
        v-model="checkAll"
      >Check all
      </NebulaCheckbox>
    </section>
    <section>
      <NebulaCheckboxGroup :options="plainOptions" v-model="checkedList" @change="handleChange"/>
    </section>
  </main>
</template>

<script>
const plainOptions = ["Apple", "Pear", "Orange"];
const defaultCheckedList = ["Apple", "Orange"];

export default {
  data() {
    return {
      plainOptions: plainOptions,
      checkedList: defaultCheckedList,
      indeterminate: true,
      checkAll: false
    };
  },
  methods: {
    handleCheckAllChange(checked) {
      this.checkedList = checked ? plainOptions : [];
      this.indeterminate = false;
      this.checkAll = checked;
    },
    handleChange(checkedList) {
      this.checkedList = checkedList;
      this.indeterminate =
        !!checkedList.length && checkedList.length < plainOptions.length;
      this.checkAll = checkedList.length === plainOptions.length;
    }
  }
};
</script>

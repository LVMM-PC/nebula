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
    handleCheckAllChange(e) {
      Object.assign(this, {
        checkedList: e.target.checked ? plainOptions : [],
        indeterminate: false,
        checkAll: e.target.checked
      });
    },
    handleChange(checkedList) {
      Object.assign(this, {
        checkedList,
        indeterminate:
          !!checkedList.length && checkedList.length < plainOptions.length,
        checkAll: checkedList.length === plainOptions.length
      });
    }
  }
};
</script>

<template>
  <main>
    <section>
      <NebulaCheckbox
        :indeterminate="indeterminate"
        @change="onCheckAllChange"
        v-model="checkAll"
      >Check all
      </NebulaCheckbox>
    </section>
    <section>
      <NebulaCheckboxGroup :options="plainOptions" v-model="checkedList" @change="onChange"/>
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
    onCheckAllChange(e) {
      Object.assign(this, {
        checkedList: e.target.checked ? plainOptions : [],
        indeterminate: false,
        checkAll: e.target.checked
      });
    },
    onChange(checkedList) {
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

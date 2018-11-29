<template>
  <div>
    <div>
      <NebulaCheckbox @change="onChange1">Checkbox</NebulaCheckbox>
    </div>

    <div>
      <div :style="{ borderBottom: '1px solid #E9E9E9' }">
        <NebulaCheckbox
          :indeterminate="indeterminate"
          :checked="checkAll"
          @change="onCheckAllChange2"
        >
          Check all
        </NebulaCheckbox>
      </div>
      <br >
      <NebulaCheckbox-group
        :options="plainOptions"
        v-model="checkedList"
        @change="onChange2" />
    </div>

    <div>
      <NebulaCheckbox
        :default-checked="false"
        disabled />
      <br >
      <NebulaCheckbox
        default-checked
        disabled />
    </div>

    <div>
      <p :style="{ marginBottom: '20px' }">
        <NebulaCheckbox
          :checked="checked"
          :disabled="disabled"
          @change="onChange3"
        >
          {{ label }}
        </NebulaCheckbox>
      </p>
      <p>
        <NebulaButton
          type="primary"
          size="small"
          @click="toggleChecked3"
        >
          {{ !checked ? 'Check' : 'Uncheck' }}
        </NebulaButton>
        <NebulaButton
          :style="{ marginLeft: '10px' }"
          type="primary"
          size="small"
          @click="toggleDisable3"
        >
          {{ !disabled ? 'Disable' : 'Enable' }}
        </NebulaButton>
      </p>
    </div>

    <div>
      <NebulaCheckboxGroup
        :options="plainOptions"
        v-model="value"
        @change="onChange4" />
      <br >
      <NebulaCheckboxGroup
        :options="plainOptions"
        :default-value="['Apple']"
        @change="onChange4" />
      <br >
      <NebulaCheckboxGroup
        :options="options"
        :value="['Pear']"
        @change="onChange4" />
      <br >
      <NebulaCheckboxGroup
        :options="optionsWithDisabled"
        :default-value="['Apple']"
        disabled
        @change="onChange4" />
    </div>

    <div>
      <NebulaCheckboxGroup @change="onChange5">
        <div>
          <div :span="8"><NebulaCheckbox value="A">A</NebulaCheckbox></div>
          <div :span="8"><NebulaCheckbox value="B">B</NebulaCheckbox></div>
          <div :span="8"><NebulaCheckbox value="C">C</NebulaCheckbox></div>
          <div :span="8"><NebulaCheckbox value="D">D</NebulaCheckbox></div>
          <div :span="8"><NebulaCheckbox value="E">E</NebulaCheckbox></div>
        </div>
      </NebulaCheckboxGroup>
    </div>
  </div>
</template>

<script>
const plainOptions = ["Apple", "Pear", "Orange"];
const defaultCheckedList = ["Apple", "Orange"];

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
      checkedList: defaultCheckedList,
      indeterminate: true,
      checkAll: false,
      plainOptions,
      checked: true,
      disabled: false,

      options,
      optionsWithDisabled,
      value: []
    };
  },
  computed: {
    label() {
      const { checked, disabled } = this;
      return `${checked ? "Checked" : "Unchecked"}-${
        disabled ? "Disabled" : "Enabled"
      }`;
    }
  },
  methods: {
    onChange1(e) {
      console.log(`checked = ${e.target.checked}`);
    },
    onChange2(checkedList) {
      this.indeterminate =
        !!checkedList.length && checkedList.length < plainOptions.length;
      this.checkAll = checkedList.length === plainOptions.length;
    },
    onCheckAllChange2(e) {
      Object.assign(this, {
        checkedList: e.target.checked ? plainOptions : [],
        indeterminate: false,
        checkAll: e.target.checked
      });
    },

    toggleChecked3() {
      this.checked = !this.checked;
    },
    toggleDisable3() {
      this.disabled = !this.disabled;
    },
    onChange3(e) {
      this.checked = e.target.checked;
    },

    onChange4(checkedValues) {
      console.log("checked = ", checkedValues);
      console.log("value = ", this.value);
    },

    onChange5(checkedValues) {
      console.log("checked = ", checkedValues);
    }
  }
};
</script>

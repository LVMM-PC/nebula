<template>
  <div>
    <NebulaSelect
      showSearch
      :style="{width: '200px'}"
      placeholder="Select a person"
      optionFilterProp="children"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
      :filterOption="(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0"
    >
      <NebulaSelectOption value="jack">Jack</NebulaSelectOption>
      <NebulaSelectOption value="lucy">Lucy</NebulaSelectOption>
      <NebulaSelectOption value="tom">Tom</NebulaSelectOption>
    </NebulaSelect>
  </div>
</template>

<script>
export default {
  name: "search",
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },

    handleBlur() {
      console.log("blur");
    },

    handleFocus() {
      console.log("focus");
    }
  }
};
</script>

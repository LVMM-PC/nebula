<template>
  <section>
    <NebulaSelect
      showSearch
      :style="{width: '200px'}"
      placeholder="Select a person"
      optionFilterProp="children"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
      :filterOption="filterOption"
    >
      <NebulaSelectOption value="jack">Jack</NebulaSelectOption>
      <NebulaSelectOption value="lucy">Lucy</NebulaSelectOption>
      <NebulaSelectOption value="tom">Tom</NebulaSelectOption>
    </NebulaSelect>
  </section>
</template>

<script>
export default {
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    handleBlur() {
      console.log("blur");
    },
    handleFocus() {
      console.log("focus");
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    }
  }
};
</script>

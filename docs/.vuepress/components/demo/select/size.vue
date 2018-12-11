<template>
  <div>
    <NebulaRadioGroup value={size} @change="handleSizeChange">
      <NebulaRadioButton value="large">Large</NebulaRadioButton>
      <NebulaRadioButton value="default">Default</NebulaRadioButton>
      <NebulaRadioButton value="small">Small</NebulaRadioButton>
    </NebulaRadioGroup>
    <br/><br/>
    <NebulaSelect
      :size="size"
      defaultValue="a10"
      @change="handleChange"
      :style="{ width: '200px'}"
    >
      <NebulaSelectOption v-for="(i) in 26" :key="String.fromCodePoint(i+96)+(i+9)">
        {{String.fromCodePoint(i+96)+(i+9)}}
      </NebulaSelectOption>
    </NebulaSelect>
    <br/>
    <NebulaSelect
      mode="multiple"
      :size="size"
      placeholder="Please select"
      :defaultValue="['a10', 'c12']"
      @change="handleChange"
      :style="{ width: '100%'}"
    >
      <NebulaSelectOption v-for="(i) in 26" :key="String.fromCodePoint(i+96)+(i+9)">
        {{String.fromCodePoint(i+96)+(i+9)}}
      </NebulaSelectOption>
    </NebulaSelect>
    <br/>
    <NebulaSelect
      mode="tags"
      :size="size"
      placeholder="Please select"
      :defaultValue="['a10', 'c12']"
      @change="handleChange"
      :style="{ width: '100%'}"
    >
      <NebulaSelectOption v-for="(i) in 26" :key="String.fromCodePoint(i+96)+(i+9)">
        {{String.fromCodePoint(i+96)+(i+9)}}
      </NebulaSelectOption>
    </NebulaSelect>
  </div>
</template>

<script>
export default {
  name: "size",
  data() {
    return {
      size: "default"
    };
  },
  methods: {
    handleChange(value) {
      console.log(`Selected: ${value}`);
    },
    handleSizeChange(e) {
      this.size = e.target.value;
    }
  }
};
</script>

<style>
.code-box-demo .nebula-select {
  margin: 0 8px 10px 0;
}

#components-select-demo-search-box .code-box-demo .nebula-select {
  margin: 0;
}
</style>

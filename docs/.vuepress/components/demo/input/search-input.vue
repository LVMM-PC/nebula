<template>
  <div>
    <NebulaInputSearch
      placeholder="input search text"
      @search="onSearch"
    :style="{ width: '200px'}"
    />
    <br /><br />
    <NebulaInputSearch
      placeholder="input search text"
      @search="onSearch"
    enterButton
    />
    <br /><br />
    <NebulaInputSearch
      placeholder="input search text"
      enterButton="Search"
      size="large"
      @search="onSearch"
    />
  </div>
</template>

<script>
export default {
  name: "search-input",
  methods: {
    onSearch(value) {
      console.log(value);
    }
  }
};
</script>

<style scoped>
</style>

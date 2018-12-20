<template>
  <main>
    <section>
      <NebulaInputSearch
        placeholder="input search text"
        @search="onSearch"
        :style="{ width: '200px'}"
      />
    </section>
    <section>
      <NebulaInputSearch
        placeholder="input search text"
        @search="onSearch"
        enterButton
      />
    </section>
    <section>
      <NebulaInputSearch
        placeholder="input search text"
        enterButton="Search"
        size="large"
        @search="onSearch"
      />
    </section>
  </main>
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

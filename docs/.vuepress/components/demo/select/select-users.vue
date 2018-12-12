<template>
  <NebulaSelect
    mode="multiple"
    labelInValue
    :value="value"
    placeholder="Select users"
    :notFoundContent="fetching ? 'Loading' : null"
    :filterOption="false"
    @search="fetchUser"
    @change="handleChange"
    :style="{ width: '100%'}"
  >
    <NebulaSelectOption v-for="d in data" :key="d.value">{{d.text}}</NebulaSelectOption>
  </NebulaSelect>
</template>

<script>
import debounce from "lodash/debounce";

export default {
  name: "select-users",
  data() {
    return {
      data: [],
      value: [],
      fetching: false
    };
  },
  created() {
    this.lastFetchId = 0;
    this.fetchUser = debounce(this.fetchUser, 800);
  },
  methods: {
    handleChange(value) {
      Object.assign(this, {
        value,
        data: [],
        fetching: false
      });
    },
    fetchUser(value) {
      console.log("fetching user", value);
      this.lastFetchId += 1;
      const fetchId = this.lastFetchId;
      Object.assign(this, { data: [], fetching: true });
      fetch("https://randomuser.me/api/?results=5")
        .then(response => response.json())
        .then(body => {
          if (fetchId !== this.lastFetchId) {
            // for fetch callback order
            return;
          }
          const data = body.results.map(user => ({
            text: `${user.name.first} ${user.name.last}`,
            value: user.login.username
          }));
          Object.assign(this, { data, fetching: false });
        });
    }
  }
};
</script>

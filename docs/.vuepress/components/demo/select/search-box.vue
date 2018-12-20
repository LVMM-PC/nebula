<template>
  <section>
    <NebulaSelect
      showSearch
      :value="value"
      placeholder="input search text"
      :style="{ width: '200px'}"
      :defaultActiveFirstOption="false"
      :showArrow="false"
      :filterOption="false"
      @search="handleSearch"
      @change="handleChange"
      :notFoundContent="null"
    >
      <NebulaSelectOption v-for="(item) in data" :key="item.value">{{item.text}}</NebulaSelectOption>
    </NebulaSelect>
  </section>
</template>

<script>
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';

let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const str = querystring.encode({
      code: 'utf-8',
      q: value,
    });
    jsonp(`https://suggest.taobao.com/sug?${str}`)
      .then(response => response.json())
      .then((d) => {
        if (currentValue === value) {
          const result = d.result;
          const data = [];
          result.forEach((r) => {
            data.push({
              value: r[0],
              text: r[0],
            });
          });
          callback(data);
        }
      });
  }

  timeout = setTimeout(fake, 300);
}

export default {
  data() {
    return {
      data: [],
      value: undefined,
    }
  },
  methods:{
    handleSearch  (value)  {
      let callback = data => {
        console.log(data);
        Object.assign(this, { data })
      };
      fetch(value, callback);
    },
    handleChange  (value)  {
      Object.assign(this, {value})
    }
  }
}
</script>

<style scoped>

</style>
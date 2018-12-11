<template>
  <div>
    <NebulaSelect
      :defaultValue="provinceData[0]"
      :style="{ width: '90px'}"
      @change="handleProvinceChange"
    >
      <NebulaSelectOption
        v-for="(province) in provinceData"
        :key="province">
        {{province}}
      </NebulaSelectOption>
    </NebulaSelect>
    <NebulaSelect
      :value="secondCity"
      :style="{ width: '90px'}"
      @change="onSecondCityChange">
      <NebulaSelectOption
        v-for="(city) in cities"
        :key="city">
        {{city}}
      </NebulaSelectOption>
    </NebulaSelect>
  </div>
</template>

<script>
const provinceData = ["Zhejiang", "Jiangsu"];
const cityData = {
  Zhejiang: ["Hangzhou", "Ningbo", "Wenzhou"],
  Jiangsu: ["Nanjing", "Suzhou", "Zhenjiang"]
};

export default {
  name: "coordinate",
  data() {
    return {
      provinceData: provinceData,
      cities: cityData[provinceData[0]],
      secondCity: cityData[provinceData[0]][0]
    };
  },
  methods: {
    handleProvinceChange(value) {
      Object.assign(this, {
        cities: cityData[value],
        secondCity: cityData[value][0]
      });
    },
    onSecondCityChange(value) {
      Object.assign(this, {
        secondCity: value
      });
    }
  }
};
</script>

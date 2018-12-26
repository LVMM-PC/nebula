<template>
  <div>
    <h1>Select</h1>
    <div>
      <nebula-select
        default-value="lucy"
        style="width: 120px"
        @change="basicUsageHandleChange">
        <nebula-select-option value="jack">Jack</nebula-select-option>
        <nebula-select-option value="lucy">Lucy</nebula-select-option>
        <nebula-select-option
          disabled
          value="disabled">Disabled
        </nebula-select-option>
        <nebula-select-option value="Yiminghe">yiminghe</nebula-select-option>
      </nebula-select>
      <nebula-select
        default-value="lucy"
        disabled
        style="width: 120px">
        <nebula-select-option value="lucy">Lucy</nebula-select-option>
      </nebula-select>
    </div>
    <div>
      <nebula-radio-group v-model="size">
        <nebula-radio-button value="large">Large</nebula-radio-button>
        <nebula-radio-button value="default">Default</nebula-radio-button>
        <nebula-radio-button value="small">Small</nebula-radio-button>
      </nebula-radio-group>
      <br><br>
      <nebula-select
        :size="size"
        default-value="a1"
        style="width: 200px"
        @change="sizesHandleChange"
      >
        <nebula-select-option
          v-for="i in 25"
          :key="(i + 9).toString(36) + i">
          {{ (i + 9).toString(36) + i }}
        </nebula-select-option>
      </nebula-select>
      <br>
      <nebula-select
        :default-value="['a1', 'b2']"
        :size="size"
        mode="multiple"
        placeholder="Please select"
        style="width: 200px"
        @change="sizesHandleChange"
        @popupScroll="sizesPopupScroll"
      >
        <nebula-select-option
          v-for="i in 25"
          :key="(i + 9).toString(36) + i">
          {{ (i + 9).toString(36) + i }}
        </nebula-select-option>
      </nebula-select>
      <br>
      <nebula-select
        :default-value="['a1', 'b2']"
        :size="size"
        mode="tags"
        placeholder="Please select"
        style="width: 200px"
        @change="sizesHandleChange"
      >
        <nebula-select-option
          v-for="i in 25"
          :key="(i + 9).toString(36) + i">
          {{ (i + 9).toString(36) + i }}
        </nebula-select-option>
      </nebula-select>
    </div>
    <div>
      <nebula-select
        mode="tags"
        placeholder="Tags Mode"
        style="width: 100%"
        @change="tagsHandleChange"
      >
        <nebula-select-option
          v-for="i in 25"
          :key="(i + 9).toString(36) + i">{{ (i + 9).toString(36) + i }}
        </nebula-select-option>
      </nebula-select>
    </div>
    <div>
      <nebula-select
        :token-separators="[',']"
        mode="tags"
        style="width: 100%"
        @change="automaticTokenizationHandleChange">
        <nebula-select-option
          v-for="i in 25"
          :key="(i + 9).toString(36) + i">{{ (i + 9).toString(36) + i }}
        </nebula-select-option>
      </nebula-select>
    </div>
    <div>
      <nebula-select
        :default-value="{ key: 'lucy' }"
        label-in-value
        style="width: 120px"
        @change="getValueOfSelectedItemHandleChange">
        <nebula-select-option value="jack">Jack (100)</nebula-select-option>
        <nebula-select-option value="lucy">Lucy (101)</nebula-select-option>
      </nebula-select>
    </div>
    <div>
      <nebula-select
        :default-value="['a1', 'b2']"
        mode="multiple"
        placeholder="Please select"
        style="width: 100%"
        @change="multipleSelectionHandleChange">
        <nebula-select-option
          v-for="i in 25"
          :key="(i + 9).toString(36) + i">{{ (i + 9).toString(36) + i }}
        </nebula-select-option>
      </nebula-select>
    </div>
    <div>
      <nebula-select
        :default-value="provinceData[0]"
        style="width: 120px"
        @change="handleProvinceChange">
        <nebula-select-option
          v-for="province in provinceData"
          :key="province">{{ province }}
        </nebula-select-option>
      </nebula-select>
      <nebula-select
        v-model="secondCity"
        style="width: 120px">
        <nebula-select-option
          v-for="city in cities"
          :key="city">{{ city }}
        </nebula-select-option>
      </nebula-select>
    </div>
    <div>
      <nebula-select
        default-value="lucy"
        style="width: 200px"
        @change="optionGroupHandleChange">
        <nebula-select-opt-group>
          <span slot="label"><nebula-icon type="user"/>Manager</span>
          <nebula-select-option value="jack">Jack</nebula-select-option>
          <nebula-select-option value="lucy">Lucy</nebula-select-option>
        </nebula-select-opt-group>
        <nebula-select-opt-group label="Engineer">
          <nebula-select-option value="Yiminghe">yiminghe</nebula-select-option>
        </nebula-select-opt-group>
      </nebula-select>
    </div>
    <div>
      <nebula-select
        :default-active-first-option="false"
        :filter-option="false"
        :not-found-content="null"
        :show-arrow="false"
        :value="value"
        placeholder="input search text"
        show-search
        style="width: 200px"
        @change="searchBoxHandleChange"
        @search="searchBoxHandleSearch"
      >
        <nebula-select-option
          v-for="d in data"
          :key="d.value">{{ d.text }}
        </nebula-select-option>
      </nebula-select>
    </div>
    <div>
      <nebula-select
        :filter-option="selectWithSearchFieldFilterOption"
        option-filter-prop="children"
        placeholder="Select a person"
        show-search
        style="width: 200px"
        @blur="selectWithSearchFieldHandleBlur"
        @change="selectWithSearchFieldHandleChange"
        @focus="selectWithSearchFieldHandleFocus"
      >
        <nebula-select-option value="jack">Jack</nebula-select-option>
        <nebula-select-option value="lucy">Lucy</nebula-select-option>
        <nebula-select-option value="tom">Tom</nebula-select-option>
      </nebula-select>
    </div>
    <div>
      <nebula-select
        :filter-option="false"
        :not-found-content="searchAndSelectUsersFetching ? undefined : null"
        :value="searchAndSelectUsersValue"
        label-in-value
        mode="multiple"
        placeholder="Select users"
        style="width: 100%"
        @change="searchAndSelectUsersHandleChange"
        @search="searchAndSelectUsersFetchUser"
      >
        <!--<nebula-spin v-if="searchAndSelectUsersFetching" slot="notFoundContent" size="small"/>-->
        <nebula-select-option
          v-for="d in searchAndSelectUsersData"
          :key="d.value">{{ d.text }}
        </nebula-select-option>
      </nebula-select>
    </div>
  </div>
</template>

<script>
const provinceData = ["Zhejiang", "Jiangsu"];
const cityData = {
  Zhejiang: ["Hangzhou", "Ningbo", "Wenzhou"],
  Jiangsu: ["Nanjing", "Suzhou", "Zhenjiang"]
};

import jsonp from "fetch-jsonp";
import querystring from "querystring";
import debounce from "lodash/debounce";

let timeout;
let currentValue;

function searchBoxFetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const str = querystring.encode({
      code: "utf-8",
      q: value
    });
    jsonp(`https://suggest.taobao.com/sug?${str}`)
      .then(response => response.json())
      .then(d => {
        if (currentValue === value) {
          const result = d.result;
          const data = [];
          result.forEach(r => {
            data.push({
              value: r[0],
              text: r[0]
            });
          });
          callback(data);
        }
      });
  }

  timeout = setTimeout(fake, 300);
}

export default {
  name: "Select",
  data() {
    this.lastFetchId = 0;
    this.searchAndSelectUsersFetchUser = debounce(
      this.searchAndSelectUsersFetchUser,
      800
    );
    return {
      data: [],
      value: undefined,
      size: "default",
      provinceData,
      cityData,
      cities: cityData[provinceData[0]],
      secondCity: cityData[provinceData[0]][0],
      searchAndSelectUsersData: [],
      searchAndSelectUsersValue: [],
      searchAndSelectUsersFetching: false
    };
  },
  methods: {
    basicUsageHandleChange(value) {
      console.log(`selected ${value}`);
    },
    sizesHandleChange(value) {
      console.log(`Selected: ${value}`);
    },
    sizesPopupScroll() {
      console.log("popupScroll");
    },
    tagsHandleChange(value) {
      console.log(`selected ${value}`);
    },
    automaticTokenizationHandleChange(value) {
      console.log(`selected ${value}`);
    },
    getValueOfSelectedItemHandleChange(value) {
      console.log(value); // { key: "lucy", label: "Lucy (101)" }
    },
    multipleSelectionHandleChange(value) {
      console.log(`selected ${value}`);
    },
    handleProvinceChange(value) {
      this.cities = cityData[value];
      this.secondCity = cityData[value][0];
    },
    optionGroupHandleChange(value) {
      console.log(`selected ${value}`);
    },
    searchBoxHandleSearch(value) {
      searchBoxFetch(value, data => (this.data = data));
    },
    searchBoxHandleChange(value) {
      console.log(value);
      this.value = value;
      searchBoxFetch(value, data => (this.data = data));
    },
    selectWithSearchFieldHandleChange(value) {
      console.log(`selected ${value}`);
    },
    selectWithSearchFieldHandleBlur() {
      console.log("blur");
    },
    selectWithSearchFieldHandleFocus() {
      console.log("focus");
    },
    selectWithSearchFieldFilterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    },
    searchAndSelectUsersFetchUser(value) {
      console.log("fetching user", value);
      this.lastFetchId += 1;
      const fetchId = this.lastFetchId;
      this.searchAndSelectUsersData = [];
      this.searchAndSelectUsersFetching = true;
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
          this.searchAndSelectUsersData = data;
          this.searchAndSelectUsersFetching = false;
        });
    },
    searchAndSelectUsersHandleChange(value) {
      Object.assign(this, {
        searchAndSelectUsersValue: value,
        searchAndSelectUsersData: [],
        fetching: false
      });
    }
  }
};
</script>

<style scoped>
</style>

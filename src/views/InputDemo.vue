<template>
  <div>
    <div>
      <nebula-input placeholder="Basic usage"/>
    </div>
    <div>
      <nebula-textarea
        autosize
        placeholder="Autosize height based on content lines"/>
      <div style="margin: 24px 0"/>
      <nebula-textarea
        :autosize="{ minRows: 2, maxRows: 6 }"
        placeholder="Autosize height with minimum and maximum number of lines"/>
    </div>
    <div class="components-input-demo-presuffix">
      <nebula-input
        ref="userNameInput"
        v-model="userName"
        placeholder="Basic usage">
        <nebula-icon
          slot="prefix"
          type="user"/>
        <nebula-icon
          v-if="userName"
          slot="suffix"
          type="close-circle"
          @click="emitEmpty"/>
      </nebula-input>
    </div>
    <div>
      <nebula-input-search
        placeholder="input search text"
        style="width: 200px"
        @search="onSearch"
      />
      <br><br>
      <nebula-input-search
        enter-button
        placeholder="input search text"
        @search="onSearch"
      />
      <br><br>
      <nebula-input-search
        enter-button="Search"
        placeholder="input search text"
        size="large"
        @search="onSearch"/>
      <br><br>
      <nebula-input-search
        placeholder="input search text"
        size="large"
        @search="onSearch">
        <nebula-button slot="enterButton">Custom</nebula-button>
      </nebula-input-search>
    </div>
    <div class="components-input-demo-size">
      <nebula-input
        placeholder="large size"
        size="large"/>
      <nebula-input placeholder="default size"/>
      <nebula-input
        placeholder="small size"
        size="small"/>
    </div>
    <div>
      <nebula-input-group size="large">
        <nebula-input default-value="0571"/>
        <nebula-input default-value="26888888"/>
      </nebula-input-group>
      <br>
      <nebula-input-group compact>
        <nebula-input
          default-value="0571"
          style="width: 20%"/>
        <nebula-input
          default-value="26888888"
          style="width: 30%"/>
      </nebula-input-group>
      <br>
      <nebula-input-group compact>
        <nebula-select default-value="Zhejiang">
          <nebula-select-option value="Zhejiang">Zhejiang</nebula-select-option>
          <nebula-select-option value="Jiangsu">Jiangsu</nebula-select-option>
        </nebula-select>
        <nebula-input
          default-value="Xihu District, Hangzhou"
          style="width: 50%"/>
      </nebula-input-group>
      <br>
      <nebula-input-group compact>
        <nebula-select default-value="Option1">
          <nebula-select-option value="Option1">Option1</nebula-select-option>
          <nebula-select-option value="Option2">Option2</nebula-select-option>
        </nebula-select>
        <nebula-input
          default-value="input content"
          style="width: 50%"/>
      </nebula-input-group>
      <br>
      <nebula-input-group compact>
        <nebula-input
          default-value="input content"
          style="width: 50%"/>
          <!--<nebula-date-picker />-->
      </nebula-input-group>
      <br>
      <nebula-input-group compact>
        <nebula-select default-value="Option1-1">
          <nebula-select-option value="Option1-1">Option1-1</nebula-select-option>
          <nebula-select-option value="Option1-2">Option1-2</nebula-select-option>
        </nebula-select>
        <nebula-select default-value="Option2-2">
          <nebula-select-option value="Option2-1">Option2-1</nebula-select-option>
          <nebula-select-option value="Option2-2">Option2-2</nebula-select-option>
        </nebula-select>
      </nebula-input-group>
      <br>
      <nebula-input-group compact>
        <nebula-select default-value="1">
          <nebula-select-option value="1">Between</nebula-select-option>
          <nebula-select-option value="2">Except</nebula-select-option>
        </nebula-select>
        <nebula-input
          placeholder="Minimum"
          style=" width: 100px; text-align: center"/>
        <nebula-input
          disabled
          placeholder="~"
          style=" width: 30px; border-left: 0; pointer-events: none; backgroundColor: #fff"/>
        <nebula-input
          placeholder="Maximum"
          style="width: 100px; text-align: center; border-left: 0"/>
      </nebula-input-group>
      <br>
      <nebula-input-group compact>
        <nebula-select default-value="Sign Up">
          <nebula-select-option value="Sign Up">Sign Up</nebula-select-option>
          <nebula-select-option value="Sign In">Sign In</nebula-select-option>
        </nebula-select>
        <!--<nebula-auto-complete
          :dataSource="dataSource"
          style="width: 200px"
          @change="handleChange"
          placeholder="Email"
        />-->
      </nebula-input-group>
      <br>
      <nebula-input-group compact>
        <nebula-select
          default-value="Home"
          style="width: 30%">
          <nebula-select-option value="Home">Home</nebula-select-option>
          <nebula-select-option value="Company">Company</nebula-select-option>
        </nebula-select>
        <!--<nebula-cascader style="width: 70%" :options="options" placeholder="Select Address" />-->
      </nebula-input-group>
    </div>
    <div>
      <nebula-textarea
        :rows="4"
        placeholder="Basic usage"/>
    </div>
    <div>
      <div style="margin-bottom: 16px">
        <nebula-input
          addon-after=".com"
          addon-before="Http://"
          default-value="mysite"/>
      </div>
      <div style="margin-bottom: 16px">
        <nebula-input default-value="mysite">
          <nebula-select
            slot="addonBefore"
            default-value="Http://"
            style="width: 90px">
            <nebula-select-option value="Http://">Http://</nebula-select-option>
            <nebula-select-option value="Https://">Https://</nebula-select-option>
          </nebula-select>
          <nebula-select
            slot="addonAfter"
            default-value=".com"
            style="width: 80px">
            <nebula-select-option value=".com">.com</nebula-select-option>
            <nebula-select-option value=".jp">.jp</nebula-select-option>
            <nebula-select-option value=".cn">.cn</nebula-select-option>
            <nebula-select-option value=".org">.org</nebula-select-option>
          </nebula-select>
        </nebula-input>
      </div>
      <div style="margin-bottom: 16px">
        <nebula-input default-value="mysite">
          <nebula-icon
            slot="addonAfter"
            type="setting"/>
        </nebula-input>
      </div>
    </div>
  </div>
</template>

<script>
const options = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake"
          }
        ]
      }
    ]
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men"
          }
        ]
      }
    ]
  }
];
export default {
  name: "InputDemo",
  data() {
    return {
      userName: "",
      options,
      dataSource: []
    };
  },
  methods: {
    emitEmpty() {
      this.$refs.userNameInput.focus();
      this.userName = "";
    },
    onSearch(value) {
      console.log(value);
    },
    handleChange(value) {
      this.dataSource =
        !value || value.indexOf("@") >= 0
          ? []
          : [`${value}@gmail.com`, `${value}@163.com`, `${value}@qq.com`];
    }
  }
};
</script>

<style scoped>
.components-input-demo-presuffix .anticon-close-circle {
  cursor: pointer;
  color: #ccc;
  transition: color 0.3s;
  font-size: 12px;
}

.components-input-demo-presuffix .anticon-close-circle:hover {
  color: #999;
}

.components-input-demo-presuffix .anticon-close-circle:active {
  color: #666;
}

.components-input-demo-size .ant-input {
  width: 200px;
  margin: 0 8px 8px 0;
}
</style>

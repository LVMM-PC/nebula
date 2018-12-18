<template>
  <div>
    <NebulaInputGroup size="large">
      <NebulaInput defaultValue="0571"/>
      <NebulaInput defaultValue="26888888"/>
    </NebulaInputGroup>
    <br/>
    <NebulaInputGroup compact>
      <NebulaInput :style="{ width: '20%' }" defaultValue="0571"/>
      <NebulaInput :style="{ width: '30%' }" defaultValue="26888888"/>
    </NebulaInputGroup>
    <br/>
    <NebulaInputGroup compact>
      <NebulaSelect defaultValue="Zhejiang">
        <NebulaSelectOption value="Zhejiang">Zhejiang</NebulaSelectOption>
        <NebulaSelectOption value="Jiangsu">Jiangsu</NebulaSelectOption>
      </NebulaSelect>
      <NebulaInput :style="{ width: '50%' }" defaultValue="Xihu District, Hangzhou"/>
    </NebulaInputGroup>
    <br/>
    <NebulaInputGroup compact>
      <NebulaSelect defaultValue="Option1">
        <NebulaSelectOption value="Option1">Option1</NebulaSelectOption>
        <NebulaSelectOption value="Option2">Option2</NebulaSelectOption>
      </NebulaSelect>
      <NebulaInput :style="{ width: '50%' }" defaultValue="input content"/>
    </NebulaInputGroup>
    <br/>
    <NebulaInputGroup compact>
      <NebulaInput :style="{ width: '50%' }" defaultValue="input content"/>
    </NebulaInputGroup>
    <br/>
    <NebulaInputGroup compact>
      <NebulaSelect defaultValue="Option1-1">
        <NebulaSelectOption value="Option1-1">Option1-1</NebulaSelectOption>
        <NebulaSelectOption value="Option1-2">Option1-2</NebulaSelectOption>
      </NebulaSelect>
      <NebulaSelect defaultValue="Option2-2">
        <NebulaSelectOption value="Option2-1">Option2-1</NebulaSelectOption>
        <NebulaSelectOption value="Option2-2">Option2-2</NebulaSelectOption>
      </NebulaSelect>
    </NebulaInputGroup>
    <br/>
    <NebulaInputGroup compact>
      <NebulaSelect defaultValue="1">
        <NebulaSelectOption value="1">Between</NebulaSelectOption>
        <NebulaSelectOption value="2">Except</NebulaSelectOption>
      </NebulaSelect>
      <NebulaInput :style="{ width: '100px', textAlign: 'center' }" placeholder="Minimum"/>
      <NebulaInput
        :style="{width: '30px', borderLeft: 0, pointerEvents: 'none', backgroundColor: '#fff'}"
        placeholder="~"
        disabled
      />
      <NebulaInput :style="{ width: '100px', textAlign: 'center', borderLeft: 0 }" placeholder="Maximum"/>
    </NebulaInputGroup>
    <br/>
    <NebulaInputGroup compact>
      <NebulaSelect defaultValue="Sign Up">
        <NebulaSelectOption value="Sign Up">Sign Up</NebulaSelectOption>
        <NebulaSelectOption value="Sign In">Sign In</NebulaSelectOption>
      </NebulaSelect>
    </NebulaInputGroup>
    <br/>
    <NebulaInputGroup compact>
      <NebulaSelect :style="{ width: '30%' }" defaultValue="Home">
        <NebulaSelectOption value="Home">Home</NebulaSelectOption>
        <NebulaSelectOption value="Company">Company</NebulaSelectOption>
      </NebulaSelect>
    </NebulaInputGroup>
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
  name: "group",
  data() {
    return {
      options: options,
      dataSource: []
    };
  },
  methods: {
    handleChange(value) {
      Object.assign(this, {
        dataSource:
          !value || value.indexOf("@") >= 0
            ? []
            : [`${value}@gmail.com`, `${value}@163.com`, `${value}@qq.com`]
      });
    }
  }
};
</script>

<style scoped>
</style>

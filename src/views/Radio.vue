<template>
  <div>
    <NebulaRadio 
      name="lens" 
      value="16-35"/>
    <NebulaRadio 
      name="lens" 
      value="24-70"/>
    <NebulaRadio 
      name="lens" 
      value="70-200"/>

    <div>
      <NebulaRadio
        :default-checked="false"
        :disabled="disabled">Disabled
      </NebulaRadio>
      <br>
      <NebulaRadio
        :disabled="disabled"
        default-checked>Disabled
      </NebulaRadio>
      <div :style="{ marginTop: 20 }">
        <NebulaButton
          type="primary"
          @click="toggleDisabled">
          Toggle disabled
        </NebulaButton>
      </div>
    </div>

    <VueCheckbox
      id="myVueCheckbox1"
      :checked="true"
      :disabled="false"
      :read-aonly="true"
      name="type"
      auto-focus
      tab-index="1"
      value="apple"
    />
    <VueCheckbox
      id="myVueCheckbox2"
      :checked="true"
      :disabled="false"
      :read-aonly="true"
      name="type"
      auto-focus
      tab-index="3"
      value="orange"
    />
    <VueCheckbox
      id="myVueCheckbox3"
      :checked="true"
      :disabled="false"
      :read-aonly="true"
      name="type"
      auto-focus
      tab-index="2"
      value="tomato"
    />

    <div>
      <div>
        <NebulaRadioGroup
          v-model="value"
          @change="onChange">
          <NebulaRadioButton value="a">Hangzhou</NebulaRadioButton>
          <NebulaRadioButton value="b">Shanghai</NebulaRadioButton>
          <NebulaRadioButton value="c">Beijing</NebulaRadioButton>
          <NebulaRadioButton value="d">Chengdu</NebulaRadioButton>
        </NebulaRadioGroup>
      </div>
      <div :style="{ marginTop: '16px' }">
        <NebulaRadioGroup
          default-value="a"
          @change="onChange">
          <NebulaRadioButton value="a">Hangzhou</NebulaRadioButton>
          <NebulaRadioButton
            value="b"
            disabled>Shanghai
          </NebulaRadioButton>
          <NebulaRadioButton value="c">Beijing</NebulaRadioButton>
          <NebulaRadioButton value="d">Chengdu</NebulaRadioButton>
        </NebulaRadioGroup>
      </div>
      <div :style="{ marginTop: '16px' }">
        <NebulaRadioGroup
          disabled
          default-value="a"
          @change="onChange">
          <NebulaRadioButton value="a">Hangzhou</NebulaRadioButton>
          <NebulaRadioButton value="b">Shanghai</NebulaRadioButton>
          <NebulaRadioButton value="c">Beijing</NebulaRadioButton>
          <NebulaRadioButton value="d">Chengdu</NebulaRadioButton>
        </NebulaRadioGroup>
      </div>
    </div>

    <div>
      <div>
        <NebulaRadioGroup
          default-value="a"
          button-style="solid">
          <NebulaRadioButton value="a">Hangzhou</NebulaRadioButton>
          <NebulaRadioButton value="b">Shanghai</NebulaRadioButton>
          <NebulaRadioButton value="c">Beijing</NebulaRadioButton>
          <NebulaRadioButton value="d">Chengdu</NebulaRadioButton>
        </NebulaRadioGroup>
      </div>
      <div :style="{ marginTop: '16px' }">
        <NebulaRadioGroup
          default-value="c"
          button-style="solid">
          <NebulaRadioButton value="a">Hangzhou</NebulaRadioButton>
          <NebulaRadioButton
            value="b"
            disabled>Shanghai
          </NebulaRadioButton>
          <NebulaRadioButton value="c">Beijing</NebulaRadioButton>
          <NebulaRadioButton value="d">Chengdu</NebulaRadioButton>
        </NebulaRadioGroup>
      </div>
    </div>

    <div>
      <NebulaRadioGroup
        v-model="optionValue"
        @change="onChange">
        <NebulaRadio
          :style="radioStyle"
          :value="1">Option A
        </NebulaRadio>
        <NebulaRadio
          :style="radioStyle"
          :value="2">Option B
        </NebulaRadio>
        <NebulaRadio
          :style="radioStyle"
          :value="3">Option C
        </NebulaRadio>
        <NebulaRadio
          :style="radioStyle"
          :value="4">
          More...
          <input
            v-if="optionValue === 4"
            :style="{ width: 100, marginLeft: 10 }">
        </NebulaRadio>
      </NebulaRadioGroup>
    </div>

    <div>
      <div>
        <NebulaRadioGroup
          :options="plainOptions"
          :default-value="value1"
          @change="onChange1"/>
        <br>
        <NebulaRadioGroup
          :options="options"
          v-model="value2"
          @change="onChange2"/>
        <br>
        <NebulaRadioGroup
          :options="optionsWithDisabled"
          v-model="value3"
          disabled
          @change="onChange3"/>
      </div>
    </div>

    <div>
      <NebulaRadioGroup
        :default-value="1"
        name="radioGroup">
        <NebulaRadio :value="1">A</NebulaRadio>
        <NebulaRadio :value="2">B</NebulaRadio>
        <NebulaRadio :value="3">C</NebulaRadio>
        <NebulaRadio :value="4">D</NebulaRadio>
      </NebulaRadioGroup>
    </div>

    <div>
      <NebulaRadioGroup
        v-model="value"
        @change="onChange">
        <NebulaRadio :value="1">A</NebulaRadio>
        <NebulaRadio :value="2">B</NebulaRadio>
        <NebulaRadio :value="3">C</NebulaRadio>
        <NebulaRadio :value="4">D</NebulaRadio>
      </NebulaRadioGroup>
    </div>

    <div>
      <div>
        <NebulaRadioGroup
          default-value="a"
          size="large">
          <NebulaRadioButton value="a">Hangzhou</NebulaRadioButton>
          <NebulaRadioButton value="b">Shanghai</NebulaRadioButton>
          <NebulaRadioButton value="c">Beijing</NebulaRadioButton>
          <NebulaRadioButton value="d">Chengdu</NebulaRadioButton>
        </NebulaRadioGroup>
      </div>
      <div :style="{ marginTop: '16px' }">
        <NebulaRadioGroup default-value="a">
          <NebulaRadioButton value="a">Hangzhou</NebulaRadioButton>
          <NebulaRadioButton value="b">Shanghai</NebulaRadioButton>
          <NebulaRadioButton value="c">Beijing</NebulaRadioButton>
          <NebulaRadioButton value="d">Chengdu</NebulaRadioButton>
        </NebulaRadioGroup>
      </div>
      <div :style="{ marginTop: '16px' }">
        <NebulaRadioGroup
          default-value="a"
          size="small">
          <NebulaRadioButton value="a">Hangzhou</NebulaRadioButton>
          <NebulaRadioButton value="b">Shanghai</NebulaRadioButton>
          <NebulaRadioButton value="c">Beijing</NebulaRadioButton>
          <NebulaRadioButton value="d">Chengdu</NebulaRadioButton>
        </NebulaRadioGroup>
      </div>
    </div>


  </div>
</template>

<script>
const plainOptions = ["Apple", "Pear", "Orange"];
const options = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange" }
];
const optionsWithDisabled = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange", disabled: false }
];

export default {
  name: "Radio",
  data() {
    return {
      disabled: false,
      optionValue: 1,
      value: "a",
      radioStyle: {
        display: "block",
        height: "30px",
        lineHeight: "30px"
      },
      plainOptions,
      options,
      optionsWithDisabled,
      value1: "Apple",
      value2: "Apple",
      value3: "Apple"
    };
  },
  methods: {
    toggleDisabled() {
      this.disabled = !this.disabled;
    },
    onChange(e) {
      console.log(`checked = ${e.target.value}`);
    },

    onChange1(e) {
      console.log("radio1 checked", e.target.value);
    },
    onChange2(e) {
      console.log("radio2 checked", e.target.value);
    },
    onChange3(e) {
      console.log("radio3 checked", e.target.value);
    }
  }
};
</script>

<style>
/*.nebula-radio-button-wrapper .nebula-radio-inner,
.nebula-radio-button-wrapper input[type="checkbox"],
.nebula-radio-button-wrapper input[type="radio"] {
  opacity: 1;
  width: auto;
  height: auto;
}*/
</style>

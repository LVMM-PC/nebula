<template>
  <main>
    <section>
      <NebulaRadioGroup :options="plainOptions" @change="onChange1" v-model="value1"/>
    </section>
    <section>
      <NebulaRadioGroup :options="options" @change="onChange2" v-model="value2"/>
    </section>
    <section>
      <NebulaRadioGroup :options="optionsWithDisabled" @change="onChange3" v-model="value3"/>
    </section>
  </main>
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
  data() {
    return {
      plainOptions,
      options,
      optionsWithDisabled,
      value1: "Apple",
      value2: "Apple",
      value3: "Apple"
    };
  },
  methods: {
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

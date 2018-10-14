<template>
  <main>
    <section>
      <NebulaCheckboxGroup :options="plainOptions" :defaultValue="['Apple']" @change="handleChange"/>
    </section>
    <section>
      <NebulaCheckboxGroup :options="options" :defaultValue="['Pear']" @change="handleChange"/>
    </section>
    <section>
      <NebulaCheckboxGroup :options="optionsWithDisabled" disabled :defaultValue="['Apple']" @change="handleChange"/>
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
      plainOptions: plainOptions,
      options: options,
      optionsWithDisabled: optionsWithDisabled
    };
  },
  methods: {
    handleChange(checkedValues) {
      console.log("checked = ", JSON.parse(JSON.stringify(checkedValues)));
    }
  }
};
</script>

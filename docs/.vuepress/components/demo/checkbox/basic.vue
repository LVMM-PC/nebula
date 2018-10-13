<template>
  <section>
    <NebulaCheckbox @click="handleClick">Checkbox</NebulaCheckbox>
  </section>
</template>

<script>
export default {
  methods: {
    handleClick(e) {
      console.log(`checked = ${e.target.checked}`);
    }
  }
};
</script>

<template>
  <section>
    <NebulaCheckbox @change="onChange">Checkbox</NebulaCheckbox>
  </section>
</template>

<script>
export default {
  methods: {
    onChange(e) {
      console.log(`checked = ${e.target.checked}`);
    }
  }
};
</script>

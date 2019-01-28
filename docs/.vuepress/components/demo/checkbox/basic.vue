<template>
  <main>
    <NebulaCheckbox @change="onChange">Checkbox</NebulaCheckbox>
  </main>
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

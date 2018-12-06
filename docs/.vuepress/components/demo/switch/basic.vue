<template>
  <section>
    <NebulaSwitch defaultChecked @change="onChange"/>
  </section>
</template>

<script>
export default {
  methods: {
    onChange(checked) {
      console.log(`switch to ${checked}`);
    }
  }
};
</script>

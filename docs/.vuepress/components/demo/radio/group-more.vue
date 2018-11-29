<template>
  <section>
    <NebulaRadioGroup @change="onChange" v-model="value">
      <NebulaRadio :style="radioStyle" :value="1">A</NebulaRadio>
      <NebulaRadio :style="radioStyle" :value="2">B</NebulaRadio>
      <NebulaRadio :style="radioStyle" :value="3">C</NebulaRadio>
      <NebulaRadio :style="radioStyle" :value="4">D</NebulaRadio>
    </NebulaRadioGroup>
  </section>
</template>

<script>
export default {
  data () {
    return {
      value: 1,
      radioStyle: {
        display: 'block',
        height: '30px',
        lineHeight: '30px'
      }
    }
  },
  methods: {
    onChange (e) {
      console.log('radio checked', e.target.value)
    }
  }
}
</script>

<style>
</style>

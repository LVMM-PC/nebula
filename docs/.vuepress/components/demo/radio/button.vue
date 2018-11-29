<template>
  <main>
    <section>
      <NebulaRadioGroup @change="onChange" defaultValue="a">
        <NebulaRadioButton value="a">Hangzhou</NebulaRadioButton>
        <NebulaRadioButton value="b">Shanghai</NebulaRadioButton>
        <NebulaRadioButton value="c">Beijing</NebulaRadioButton>
        <NebulaRadioButton value="d">Chengdu</NebulaRadioButton>
      </NebulaRadioGroup>
    </section>
    <section :style="{ marginTop: '16px' }">
      <NebulaRadioGroup @change="onChange" defaultValue="a">
        <NebulaRadioButton value="a">Hangzhou</NebulaRadioButton>
        <NebulaRadioButton value="b" disabled>Shanghai</NebulaRadioButton>
        <NebulaRadioButton value="c">Beijing</NebulaRadioButton>
        <NebulaRadioButton value="d">Chengdu</NebulaRadioButton>
      </NebulaRadioGroup>
    </section>
    <section :style="{ marginTop: '16px' }">
      <NebulaRadioGroup disabled @change="onChange" defaultValue="a">
        <NebulaRadioButton value="a">Hangzhou</NebulaRadioButton>
        <NebulaRadioButton value="b">Shanghai</NebulaRadioButton>
        <NebulaRadioButton value="c">Beijing</NebulaRadioButton>
        <NebulaRadioButton value="d">Chengdu</NebulaRadioButton>
      </NebulaRadioGroup>
    </section>
  </main>
</template>

<script>
export default {
  methods: {
    onChange(e) {
      console.log(`radio checked:${e.target.value}`);
    }
  }
};
</script>

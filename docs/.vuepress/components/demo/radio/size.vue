<template>
  <main>
    <section>
      <NebulaRadioGroup defaultValue="a" size="large">
        <NebulaRadioButton value="a">Hangzhou</NebulaRadioButton>
        <NebulaRadioButton value="b">Shanghai</NebulaRadioButton>
        <NebulaRadioButton value="c">Beijing</NebulaRadioButton>
        <NebulaRadioButton value="d">Chengdu</NebulaRadioButton>
      </NebulaRadioGroup>
    </section>
    <section :style="{ marginTop: '16px' }">
      <NebulaRadioGroup defaultValue="a">
        <NebulaRadioButton value="a">Hangzhou</NebulaRadioButton>
        <NebulaRadioButton value="b">Shanghai</NebulaRadioButton>
        <NebulaRadioButton value="c">Beijing</NebulaRadioButton>
        <NebulaRadioButton value="d">Chengdu</NebulaRadioButton>
      </NebulaRadioGroup>
    </section>
    <section :style="{ marginTop: '16px' }">
      <NebulaRadioGroup defaultValue="a" size="small">
        <NebulaRadioButton value="a">Hangzhou</NebulaRadioButton>
        <NebulaRadioButton value="b">Shanghai</NebulaRadioButton>
        <NebulaRadioButton value="c">Beijing</NebulaRadioButton>
        <NebulaRadioButton value="d">Chengdu</NebulaRadioButton>
      </NebulaRadioGroup>
    </section>
  </main>
</template>

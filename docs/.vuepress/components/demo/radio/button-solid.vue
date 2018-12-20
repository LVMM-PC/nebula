<template>
  <main>
    <section>
      <NebulaRadioGroup defaultValue="a" buttonStyle="solid">
        <NebulaRadioButton value="a">Hangzhou</NebulaRadioButton>
        <NebulaRadioButton value="b">Shanghai</NebulaRadioButton>
        <NebulaRadioButton value="c">Beijing</NebulaRadioButton>
        <NebulaRadioButton value="d">Chengdu</NebulaRadioButton>
      </NebulaRadioGroup>
    </section>
    <section>
      <NebulaRadioGroup defaultValue="c" buttonStyle="solid">
        <NebulaRadioButton value="a">Hangzhou</NebulaRadioButton>
        <NebulaRadioButton value="b" disabled>Shanghai</NebulaRadioButton>
        <NebulaRadioButton value="c">Beijing</NebulaRadioButton>
        <NebulaRadioButton value="d">Chengdu</NebulaRadioButton>
      </NebulaRadioGroup>
    </section>
  </main>
</template>

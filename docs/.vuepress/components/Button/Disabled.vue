<template>
  <main>
    <section>
      <NebulaButton type="primary">Primary</NebulaButton>
      <NebulaButton
        type="primary"
        disabled>Primary(disabled)</NebulaButton>
    </section>
    <section>
      <NebulaButton>Default</NebulaButton>
      <NebulaButton disabled>Default(disabled)</NebulaButton>
    </section>
    <section>
      <NebulaButton type="dashed">Dashed</NebulaButton>
      <NebulaButton
        type="dashed"
        disabled>Dashed(disabled)</NebulaButton>
    </section>
    <section :style="{ padding: '8px 8px 0 8px', background: 'rgb(190, 200, 200)' }">
      <NebulaButton ghost>Ghost</NebulaButton>
      <NebulaButton
        ghost
        disabled>Ghost(disabled)</NebulaButton>
    </section>
  </main>
</template>

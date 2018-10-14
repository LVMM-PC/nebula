<template>
  <main>
    <section>
      <NebulaButton type="primary">Primary</NebulaButton>
      <NebulaButton
        disabled
        type="primary">Primary(disabled)
      </NebulaButton>
    </section>
    <section>
      <NebulaButton>Default</NebulaButton>
      <NebulaButton disabled>Default(disabled)</NebulaButton>
    </section>
    <section>
      <NebulaButton type="dashed">Dashed</NebulaButton>
      <NebulaButton
        disabled
        type="dashed">Dashed(disabled)
      </NebulaButton>
    </section>
    <section :style="{ padding: '8px 8px 0 8px', background: 'rgb(190, 200, 200)' }">
      <NebulaButton ghost>Ghost</NebulaButton>
      <NebulaButton
        disabled
        ghost>Ghost(disabled)
      </NebulaButton>
    </section>
  </main>
</template>

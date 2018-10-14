<template>
  <main>
    <h4>Basic</h4>
    <section>
      <NebulaButtonGroup>
        <NebulaButton>Cancel</NebulaButton>
        <NebulaButton>OK</NebulaButton>
      </NebulaButtonGroup>
      <NebulaButtonGroup>
        <NebulaButton disabled>L</NebulaButton>
        <NebulaButton disabled>M</NebulaButton>
        <NebulaButton disabled>R</NebulaButton>
      </NebulaButtonGroup>
      <NebulaButtonGroup>
        <NebulaButton>L</NebulaButton>
        <NebulaButton>M</NebulaButton>
        <NebulaButton>R</NebulaButton>
      </NebulaButtonGroup>
    </section>
    <h4>With Icon</h4>
    <section>
      <NebulaButtonGroup>
        <NebulaButton type="primary">
          <NebulaIcon type="left"/>
          Go back
        </NebulaButton>
        <NebulaButton type="primary">
          Go forward
          <NebulaIcon type="right"/>
        </NebulaButton>
      </NebulaButtonGroup>
      <NebulaButtonGroup>
        <NebulaButton
          icon="cloud"
          type="primary"/>
        <NebulaButton
          icon="cloud-download"
          type="primary"/>
      </NebulaButtonGroup>
    </section>
  </main>
</template>

<template>
  <main>
    <section>
      <NebulaSwitch checkedChildren="开" unCheckedChildren="关" defaultChecked/>
    </section>
    <section>
      <NebulaSwitch checkedChildren="1" unCheckedChildren="0"/>
    </section>
    <section>
      <NebulaSwitch defaultChecked>
        <NebulaIcon type="check" slot="checkedChildren"/>
        <NebulaIcon type="cross" slot="unCheckedChildren"/>
      </NebulaSwitch>
    </section>
  </main>
</template>

<template>
  <main>
    <section>

      <NebulaRadioGroup v-model="size" @change="handleSizeChange">
        <NebulaRadioButton value="large">Large</NebulaRadioButton>
        <NebulaRadioButton value="default">Default</NebulaRadioButton>
        <NebulaRadioButton value="small">Small</NebulaRadioButton>
      </NebulaRadioGroup>

    </section>
    <section>
      <NebulaButton
        :size="size"
        type="primary">Primary
      </NebulaButton>
      <NebulaButton :size="size">Normal</NebulaButton>
      <NebulaButton
        :size="size"
        type="dashed">Dashed
      </NebulaButton>
      <NebulaButton
        :size="size"
        type="danger">Danger
      </NebulaButton>
    </section>
    <section>
      <NebulaButton
        :size="size"
        icon="download"
        shape="circle"
        type="primary"/>
      <NebulaButton
        :size="size"
        icon="download"
        type="primary">Download
      </NebulaButton>
    </section>
    <section>
      <NebulaButtonGroup :size="size">
        <NebulaButton type="primary">
          <NebulaIcon type="left"/>
          Backward
        </NebulaButton>
        <NebulaButton type="primary">Forward
          <NebulaIcon type="right"/>
        </NebulaButton>
      </NebulaButtonGroup>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      size: "large"
    };
  },
  methods: {
    handleSizeChange(e) {
      this.size =  e.target.value;
    }
  }
};
</script>

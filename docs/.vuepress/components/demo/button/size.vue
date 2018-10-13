<template>
  <main>
    <section>
      <NebulaButtonGroup :value="size">
        <NebulaButton
          :type="(size === 'large') ? 'primary' : ''"
          @click="handleSwitchSize('large')"
          value="large">Large
        </NebulaButton>
        <NebulaButton
          :type="(size === 'default') ? 'primary' : ''"
          @click="handleSwitchSize('default')"
          value="default">Default
        </NebulaButton>
        <NebulaButton
          :type="(size === 'small') ? 'primary' : ''"
          @click="handleSwitchSize('small')"
          value="small">Small
        </NebulaButton>
      </NebulaButtonGroup>
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
        <NebulaButton type="primary">
          Forward
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
    handleSwitchSize(size) {
      this.size = size;
    }
  }
};
</script>

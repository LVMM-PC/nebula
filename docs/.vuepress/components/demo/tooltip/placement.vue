<template>
  <main>
    <ul class="grid-box">
      <li></li>
      <li>
        <NebulaTooltip placement="topLeft" :title="text">
          <NebulaButton>TL</NebulaButton>
        </NebulaTooltip>
      </li>
      <li>
        <NebulaTooltip placement="top" :title="text">
          <NebulaButton>Top</NebulaButton>
        </NebulaTooltip>
      </li>
      <li>
        <NebulaTooltip placement="topRight" :title="text">
          <NebulaButton>TR</NebulaButton>
        </NebulaTooltip>
      </li>
      <li></li>
      <li>
        <NebulaTooltip placement="leftTop" :title="text">
          <NebulaButton>LT</NebulaButton>
        </NebulaTooltip>
      </li>
      <li></li>
      <li>
        <NebulaTooltip placement="rightTop" :title="text">
          <NebulaButton>RT</NebulaButton>
        </NebulaTooltip>
      </li>
      <li>
        <NebulaTooltip placement="left" :title="text">
          <NebulaButton>Left</NebulaButton>
        </NebulaTooltip>
      </li>
      <li>
        <NebulaTooltip placement="right" :title="text">
          <NebulaButton>Right</NebulaButton>
        </NebulaTooltip>
      </li>
      <li>
        <NebulaTooltip placement="leftBottom" :title="text">
          <NebulaButton>LB</NebulaButton>
        </NebulaTooltip>
      </li>
      <li>
        <NebulaTooltip placement="rightBottom" :title="text">
          <NebulaButton>RB</NebulaButton>
        </NebulaTooltip>
      </li>
      <li></li>
      <li>
        <NebulaTooltip placement="bottomLeft" :title="text">
          <NebulaButton>BL</NebulaButton>
        </NebulaTooltip>
      </li>
      <li>
        <NebulaTooltip placement="bottom" :title="text">
          <NebulaButton>Bottom</NebulaButton>
        </NebulaTooltip>
      </li>
      <li>
        <NebulaTooltip placement="bottomRight" :title="text">
          <NebulaButton>BR</NebulaButton>
        </NebulaTooltip>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  data() {
    const h = this.$createElement;
    return {
      text: h("span", "prompt text")
    };
  }
};
</script>

<style lang="less" scoped>
.grid-box {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  width: 400px;
  height: 400px;
  grid-gap: 10px;

  li {
    display: flex;

    button {
      width: 100%;
      height: 100%;
    }
  }

  li:nth-child(7) {
    grid-row-end: 5;
    grid-row-start: 2;
    grid-column-start: 2;
    grid-column-end: 5;
  }
}
</style>

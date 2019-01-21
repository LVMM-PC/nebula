<template>
  <main>
    <section>
      <nebula-tooltip>
        <template slot="title">
          prompt text
        </template>
        Tooltip will show when mouse enter.
      </nebula-tooltip>
    </section>
    <section id="components-a-tooltip-demo-placement">
      <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
        <nebula-tooltip placement="topLeft">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <nebula-button>TL</nebula-button>
        </nebula-tooltip>
        <nebula-tooltip placement="top">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <nebula-button>Top</nebula-button>
        </nebula-tooltip>
        <nebula-tooltip placement="topRight">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <nebula-button>TR</nebula-button>
        </nebula-tooltip>
      </div>
      <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
        <nebula-tooltip placement="leftTop">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <nebula-button>LT</nebula-button>
        </nebula-tooltip>
        <nebula-tooltip placement="left">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <nebula-button>Left</nebula-button>
        </nebula-tooltip>
        <nebula-tooltip placement="leftBottom">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <nebula-button>LB</nebula-button>
        </nebula-tooltip>
      </div>
      <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24 }px`}">
        <nebula-tooltip placement="rightTop">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <nebula-button>RT</nebula-button>
        </nebula-tooltip>
        <nebula-tooltip placement="right">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <nebula-button>Right</nebula-button>
        </nebula-tooltip>
        <nebula-tooltip placement="rightBottom">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <nebula-button>RB</nebula-button>
        </nebula-tooltip>
      </div>
      <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
        <nebula-tooltip placement="bottomLeft">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <nebula-button>BL</nebula-button>
        </nebula-tooltip>
        <nebula-tooltip placement="bottom">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <nebula-button>Bottom</nebula-button>
        </nebula-tooltip>
        <nebula-tooltip placement="bottomRight">
          <template slot="title">
            <span>prompt text</span>
          </template>
          <nebula-button>BR</nebula-button>
        </nebula-tooltip>
      </div>
    </section>
    <section>
      <nebula-tooltip 
        placement="topLeft" 
        title="Prompt Text">
        <nebula-button>Align edge / 边缘对齐</nebula-button>
      </nebula-tooltip>
      <nebula-tooltip 
        placement="topLeft" 
        title="Prompt Text" 
        arrow-point-at-center>
        <nebula-button>Arrow points to center / 箭头指向中心</nebula-button>
      </nebula-tooltip>
    </section>
    <section>
      <div :style="wrapStyles">
        <nebula-tooltip 
          :get-popup-container="getPopupContainer" 
          placement="left" 
          title="Prompt Text">
          <nebula-button>Adjust automatically / 自动调整</nebula-button>
        </nebula-tooltip>
        <br>
        <nebula-tooltip 
          :get-popup-container="getPopupContainer" 
          :auto-adjust-overflow="false" 
          style="marginTop: 10px"
          placement="left" 
          title="Prompt Text">
          <nebula-button>Ingore / 不处理</nebula-button>
        </nebula-tooltip>
      </div>
    </section>
  </main>
</template>

<script>
const wrapStyles = {
  overflow: "hidden",
  position: "relative",
  padding: "24px",
  border: "1px solid #e9e9e9"
};

export default {
  name: "Tooltip",
  data() {
    return {
      wrapStyles,
      buttonWidth: 70
    };
  },
  methods: {
    getPopupContainer(trigger) {
      return trigger.parentElement;
    }
  }
};
</script>

<style lang="less" scoped>
main {
  padding: 20px;
}

#components-a-tooltip-demo-placement {
  padding: 100px;

  .nebula-btn {
    width: 70px;
    height: 70px;
    text-align: center;
    padding: 0;
    margin-right: 8px;
    margin-bottom: 8px;
  }
}
</style>

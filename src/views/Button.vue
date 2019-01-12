<template>
  <main>
    <section>
      <NebulaButton type="primary">Primary</NebulaButton>
      <NebulaButton>Default</NebulaButton>
      <NebulaButton type="warning">Warning</NebulaButton>
      <NebulaButton type="dashed">Dashed</NebulaButton>
      <NebulaButton type="danger">Danger</NebulaButton>
    </section>
    <section>
      <div id="components-button-demo-button-group">
        <h4>Basic</h4>
        <nebula-button-group>
          <nebula-button>Cancel</nebula-button>
          <nebula-button type="primary">OK</nebula-button>
        </nebula-button-group>
        <nebula-button-group>
          <nebula-button disabled>L</nebula-button>
          <nebula-button disabled>M</nebula-button>
          <nebula-button disabled>R</nebula-button>
        </nebula-button-group>
        <nebula-button-group>
          <nebula-button type="primary">L</nebula-button>
          <nebula-button>M</nebula-button>
          <nebula-button>M</nebula-button>
          <nebula-button type="dashed">R</nebula-button>
        </nebula-button-group>

        <h4>With Icon</h4>
        <nebula-button-group>
          <nebula-button type="primary">
            <nebula-icon type="left"/>
            Go back
          </nebula-button>
          <nebula-button type="primary">
            Go forward
            <nebula-icon type="right"/>
          </nebula-button>
        </nebula-button-group>
        <nebula-button-group>
          <nebula-button
            type="primary"
            icon="cloud"/>
          <nebula-button
            type="primary"
            icon="cloud-download"/>
        </nebula-button-group>
      </div>
    </section>
    <section>
      <nebula-button type="primary">Primary</nebula-button>
      <nebula-button
        type="primary"
        disabled>Primary(disabled)
      </nebula-button>
      <br>
      <nebula-button>Default</nebula-button>
      <nebula-button disabled>Default(disabled)</nebula-button>
      <br>
      <nebula-button type="dashed">Dashed</nebula-button>
      <nebula-button
        type="dashed"
        disabled>Dashed(disabled)
      </nebula-button>
      <div :style="{ padding: '8px 8px 0 8px', background: 'rgb(190, 200, 200)' }">
        <nebula-button ghost>Ghost</nebula-button>
        <nebula-button
          ghost
          disabled>Ghost(disabled)
        </nebula-button>
      </div>
    </section>
    <section :style="{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }">
      <nebula-button
        type="primary"
        ghost>Primary
      </nebula-button>
      <nebula-button ghost>Default</nebula-button>
      <nebula-button
        type="dashed"
        ghost>Dashed
      </nebula-button>
      <nebula-button
        type="danger"
        ghost>danger
      </nebula-button>
    </section>
    <div>
      <nebula-button
        type="primary"
        shape="circle"
        icon="search"/>
      <nebula-button
        type="primary"
        icon="search">Search
      </nebula-button>
      <nebula-button
        shape="circle"
        icon="search"/>
      <nebula-button icon="search">Search</nebula-button>
      <nebula-button
        shape="circle"
        icon="search"/>
      <nebula-button icon="search">Search</nebula-button>
      <nebula-button
        type="dashed"
        shape="circle"
        icon="search"/>
      <nebula-button
        type="dashed"
        icon="search">Search
      </nebula-button>
    </div>
    <div>
      <nebula-button
        type="primary"
        loading>
        Loading
      </nebula-button>
      <nebula-button
        type="primary"
        size="small"
        loading>
        Loading
      </nebula-button>
      <br>
      <nebula-button
        :loading="loading"
        type="primary"
        @mouseenter="enterLoading">
        mouseenter me!
      </nebula-button>
      <nebula-button
        :loading="iconLoading"
        type="primary"
        icon="poweroff"
        @click="enterIconLoading">
        延迟1s
      </nebula-button>
      <br>
      <nebula-button
        shape="circle"
        loading/>
      <nebula-button
        type="primary"
        shape="circle"
        loading/>
    </div>
    <section>
      <nebula-button type="primary">Primary</nebula-button>
      <nebula-button>secondary</nebula-button>

    </section>
    <section class="demo-block">
      <nebula-button
        type="primary"
        block>Primary
      </nebula-button>
      <nebula-button block>Default</nebula-button>
      <nebula-button
        type="dashed"
        block>Dashed
      </nebula-button>
      <nebula-button
        type="danger"
        block>danger
      </nebula-button>
    </section>
    <section>
      <nebula-radio-group
        :value="size"
        @change="handleSizeChange">
        <nebula-radio-button value="large">Large</nebula-radio-button>
        <nebula-radio-button value="default">Default</nebula-radio-button>
        <nebula-radio-button value="small">Small</nebula-radio-button>
      </nebula-radio-group>
      <br><br>
      <nebula-button
        :size="size"
        type="primary">Primary
      </nebula-button>
      <nebula-button :size="size">Normal</nebula-button>
      <nebula-button
        :size="size"
        type="dashed">Dashed
      </nebula-button>
      <nebula-button
        :size="size"
        type="danger">Danger
      </nebula-button>
      <br>
      <nebula-button
        :size="size"
        type="primary"
        shape="circle"
        icon="download"/>
      <nebula-button
        :size="size"
        type="primary"
        icon="download">Download
      </nebula-button>
      <br>
      <nebula-button-group :size="size">
        <nebula-button type="primary">
          <nebula-icon type="left"/>
          Backward
        </nebula-button>
        <nebula-button type="primary">
          Forward
          <nebula-icon type="right"/>
        </nebula-button>
      </nebula-button-group>
    </section>
    <section>
      <FalseButton/>
    </section>
    <section id="renderCorrectly">
      <NebulaButton>Follow</NebulaButton>
    </section>
    <section id="hoc">
      <NebulaButton
        @click="handleHocClick">{{ hocLabel }}
      </NebulaButton>
    </section>
    <section>
      <NebulaButton @click="handleClick">{{ label }}</NebulaButton>
    </section>
    <section>
      <NebulaButton @click="handleClick"><span>{{ label }}</span></NebulaButton>
    </section>
    <section>
      <NebulaButton
        icon="search"
        shape="circle"
        type="primary"/>
    </section>
    <section>
      <NebulaButton
        href="https://nebula.em2046.com/"
        @mouseenter="handleMouseenter"
      />
    </section>
    <section>
      <DefaultButton/>
    </section>
  </main>
</template>

<script lang="tsx">
import NebulaButton from "../components/button/NebulaButton";
import Vue from "vue";

const DefaultButton = {
  data() {
    return {
      loading: false
    };
  },
  methods: {
    enterLoading() {
      this.loading = true;
    }
  },
  render() {
    return <NebulaButton loading={this.loading} onClick={this.enterLoading} />;
  }
};

const FalseButton = {
  render() {
    return <NebulaButton>{false}</NebulaButton>;
  }
};

Vue.component("DefaultButton", DefaultButton);
Vue.component("FalseButton", FalseButton);

export default {
  name: "Button",
  component: {
    DefaultButton
  },
  data() {
    return {
      size: "large",
      loading: false,
      iconLoading: false,
      label: "按钮",
      hocLabel: "按钮"
    };
  },
  methods: {
    handleHocClick() {
      if (this.hocLabel === "按钮") {
        this.hocLabel = "大按钮";
      } else {
        this.hocLabel = "按钮";
      }
    },
    handleClick() {
      if (this.label === "按钮") {
        this.label = "大按钮";
      } else {
        this.label = "按钮";
      }
    },
    handleMouseenter() {
      console.log("Mouseenter");
    },
    enterLoading() {
      this.loading = true;
    },
    enterIconLoading() {
      this.iconLoading = { delay: 1000 };
    },
    handleMenuClick(e) {
      console.log("click", e);
    },
    handleSizeChange(e) {
      this.size = e.target.value;
    }
  }
};
</script>

<style lang="less" scoped>
main {
  padding: 20px;
}

#components-button-demo-button-group h4 {
  margin: 16px 0;
  font-size: 14px;
  line-height: 1;
  font-weight: normal;
}

#components-button-demo-button-group h4:first-child {
  margin-top: 0;
}

#components-button-demo-button-group .ant-btn-group {
  margin-right: 8px;
}

.demo-block {
  width: 200px;
}
</style>

<style lang="less">
section {
  > .nebula-btn-group,
  > .nebula-btn {
    margin-right: 10px;
    margin-bottom: 10px;

    .nebula-btn {
      margin: 0;
    }
  }
}
</style>

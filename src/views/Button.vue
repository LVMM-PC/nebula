<template>
  <div>
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
  </div>
</template>

<script>
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
    }
  }
};
</script>

<style scoped>
</style>

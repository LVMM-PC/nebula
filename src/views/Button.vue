<template>
  <div>
    <section id="renderCorrectly">
      <NebulaButton>Follow</NebulaButton>
    </section>
    <section id="hoc">
      <NebulaButton
        :label="hocLabel"
        @click="handleHocClick"/>
    </section>
    <section>
      <NebulaButton @click="handleClick">{{ label }}</NebulaButton>
    </section>
    <section>
      <NebulaButton
        type="primary"
        shape="circle"
        icon="search"/>
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

Vue.component("DefaultButton", DefaultButton);

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
    }
  }
};
</script>

<style scoped>
</style>

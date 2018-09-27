<template>
  <main>
    <section>
      <NebulaButton
        type="primary"
        loading>
        Loading
      </NebulaButton>
      <NebulaButton
        type="primary"
        size="small"
        loading>
        Loading
      </NebulaButton>
    </section>
    <section>
      <NebulaButton
        :loading="loading"
        type="primary"
        @click="enterLoading">
        Click me!
      </NebulaButton>
      <NebulaButton
        :loading="iconLoading"
        type="primary"
        icon="poweroff"
        @click="enterIconLoading">
        Click me!
      </NebulaButton>
    </section>
    <section>
      <NebulaButton
        shape="circle"
        loading/>
      <NebulaButton
        type="primary"
        shape="circle"
        loading/>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      iconLoading: false
    };
  },
  methods: {
    enterLoading() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
    enterIconLoading() {
      this.iconLoading = { delay: 1000 };
      setTimeout(() => {
        this.iconLoading = false;
      }, 3000);
    }
  }
};
</script>

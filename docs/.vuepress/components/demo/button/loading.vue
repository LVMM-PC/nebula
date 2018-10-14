<template>
  <main>
    <section>
      <NebulaButton
        loading
        type="primary">Loading
      </NebulaButton>
      <NebulaButton
        loading
        size="small"
        type="primary">Loading
      </NebulaButton>
    </section>
    <section>
      <NebulaButton
        :loading="loading"
        @click="enterLoading"
        type="primary">
        Click me!
      </NebulaButton>
      <NebulaButton
        :loading="iconLoading"
        @click="enterIconLoading"
        icon="poweroff"
        type="primary">Click me!
      </NebulaButton>
    </section>
    <section>
      <NebulaButton
        loading
        shape="circle"/>
      <NebulaButton
        loading
        shape="circle"
        type="primary"/>
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

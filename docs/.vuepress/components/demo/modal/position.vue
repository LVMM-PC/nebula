<template>
  <main>
    <section>
      <NebulaButton type="primary" @click="setModal1Visible(true)">Display a modal dialog at 20px to Top</NebulaButton>
      <NebulaModal
        title="20px to Top"
        :style="{top: '20px'}"
        v-model="modal1Visible"
        @ok="setModal1Visible(false)"
        @cancel="setModal1Visible(false)"
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </NebulaModal>
    </section>
    <section>
      <NebulaButton type="primary" @click="setModal2Visible(true)">Vertically centered modal dialog</NebulaButton>
      <NebulaModal
        title="Vertically centered modal dialog"
        centered
        v-model="modal2Visible"
        @ok="setModal2Visible(false)"
        @cancel="setModal2Visible(false)"
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </NebulaModal>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      modal1Visible: false,
      modal2Visible: false
    };
  },
  methods: {
    setModal1Visible(modal1Visible) {
      Object.assign(this, { modal1Visible });
    },
    setModal2Visible(modal2Visible) {
      Object.assign(this, { modal2Visible });
    }
  }
};
</script>

<style scoped>
</style>

<template>
  <section id="components-modal-demo-position">
    <nebula-button 
      type="primary" 
      @click="() => setModal1Visible(true)">Display a modal dialog at 20px to Top</nebula-button>
    <nebula-modal
      :visible="modal1Visible"
      title="20px to Top"
      style="top: 20px;"
      @ok="() => setModal1Visible(false)"
      @cancel="() => setModal1Visible(false)"
    >
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </nebula-modal>
    <nebula-button 
      type="primary" 
      @click="() => modal2Visible = true">Vertically centered modal dialog</nebula-button>
    <nebula-modal
      v-model="modal2Visible"
      title="Vertically centered modal dialog"
      centered
      @ok="() => modal2Visible = false"
    >
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </nebula-modal>
  </section>
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
      this.modal1Visible = modal1Visible;
    }
  }
};
</script>

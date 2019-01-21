<template>
  <section>
    <nebula-button 
      type="primary" 
      @click="showModal">
      Open Modal with customized footer
    </nebula-button>
    <nebula-modal
      v-model="visible"
      title="Title"
      on-ok="handleOk"
    >
      <template slot="footer">
        <nebula-button 
          key="back" 
          @click="handleCancel">Return</nebula-button>
        <nebula-button 
          key="submit" 
          :loading="loading" 
          type="primary" 
          @click="handleOk">
          Submit
        </nebula-button>
      </template>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </nebula-modal>
  </section>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      visible: false
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      this.loading = true;
      setTimeout(() => {
        this.visible = false;
        this.loading = false;
      }, 3000);
    },
    handleCancel(e) {
      this.visible = false;
    }
  }
};
</script>

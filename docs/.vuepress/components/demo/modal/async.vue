<template>
  <main>
    <NebulaButton type="primary" @click="showModal">
      Open Modal with async logic
    </NebulaButton>
    <NebulaModal
      title="Title"
      v-model="visible"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
    >
      <p>{{ModalText}}</p>
    </NebulaModal>
  </main>
</template>

<script>
export default {
  data() {
    return {
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
    };
  },
  methods: {
    showModal  ()  {
      Object.assign(this, {
        visible: true,
      });
    },

    handleOk  ()  {
      Object.assign(this, {
        ModalText: 'The modal will be closed after two seconds',
        confirmLoading: true,
      });
      setTimeout(() => {
        Object.assign(this, {
          visible: false,
          confirmLoading: false,
        });
      }, 2000);
    },

    handleCancel  ()  {
      console.log('Clicked cancel button');
      Object.assign(this, {
        visible: false,
      });
    }
  }
};
</script>

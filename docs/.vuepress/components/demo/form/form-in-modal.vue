<template>
  <main>
    <nebula-button type='primary' @click="showModal">New Collection</nebula-button>
    <collection-create-form
      ref="collectionForm"
      :visible="visible"
      @cancel="handleCancel"
      @create="handleCreate"
    />
  </main>
</template>

<script>
const CollectionCreateForm = {
  props: ["visible"],
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  template: `
    <nebula-modal
      :visible="visible"
      title='Create a new collection'
      okText='Create'
      @cancel="() => { $emit('cancel') }"
      @ok="() => { $emit('create') }"
    >
      <nebula-form layout='vertical' :form="form">
        <nebula-form-item label='Title'>
          <nebula-input
            v-decorator="[
              'title',
              {
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              }
            ]"
          />
        </nebula-form-item>
        <nebula-form-item label='Description'>
          <nebula-input
            type='textarea'
            v-decorator="['description']"
          />
        </nebula-form-item>
        <nebula-form-item class='collection-create-form_last-form-item'>
          <nebula-radio-group
            v-decorator="[
              'modifier',
              {
                initialValue: 'private',
              }
            ]"
          >
              <nebula-radio value='public'>Public</nebula-radio>
              <nebula-radio value='private'>Private</nebula-radio>
            </nebula-radio-group>
        </nebula-form-item>
      </nebula-form>
    </nebula-modal>
  `
};

export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleCancel() {
      this.visible = false;
    },
    handleCreate() {
      const form = this.$refs.collectionForm.form;
      form.validateFields((err, values) => {
        if (err) {
          return;
        }
        console.log("Received values of form: ", values);
        form.resetFields();
        this.visible = false;
      });
    }
  },
  components: { CollectionCreateForm }
};
</script>

<template>
  <main>
    <nebula-form @submit="handleSubmit" :form="form">
      <nebula-form-item
        label='Note'
        :labelCol="{ span: 5 }"
        :wrapperCol="{ span: 12 }"
      >
        <nebula-input
          v-decorator="[
          'note',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
        />
      </nebula-form-item>
      <nebula-form-item
        label='Gender'
        :labelCol="{ span: 5 }"
        :wrapperCol="{ span: 12 }"
      >
        <nebula-select
          v-decorator="[
          'gender',
          {rules: [{ required: true, message: 'Please select your gender!' }]}
        ]"
          placeholder='Select a option and change input text above'
          @change="this.handleSelectChange"
        >
          <nebula-select-option value='male'>male</nebula-select-option>
          <nebula-select-option value='female'>female</nebula-select-option>
        </nebula-select>
      </nebula-form-item>
      <nebula-form-item
        :wrapperCol="{ span: 12, offset: 5 }"
      >
        <nebula-button type='primary' htmlType='submit'>
          Submit
        </nebula-button>
      </nebula-form-item>
    </nebula-form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this)
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === "male" ? "man" : "lady"}!`
      });
    }
  }
};
</script>

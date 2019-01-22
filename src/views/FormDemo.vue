<template>
  <nebula-form 
    :form="form" 
    @submit="handleSubmit">
    <nebula-form-item
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      label="Note"
    >
      <nebula-input
        v-decorator="[
          'note',
          {rules: [{ required: true, message: 'Please input your note!' }]}
        ]"
      />
    </nebula-form-item>
    <nebula-form-item
      :label-col="{ span: 5 }"
      :wrapper-col="{ span: 12 }"
      label="Gender"
    >
      <nebula-select
        v-decorator="[
          'gender',
          {rules: [{ required: true, message: 'Please select your gender!' }]}
        ]"
        placeholder="Select a option and change input text above"
        @change="this.handleSelectChange"
      >
        <nebula-select-option value="male">male</nebula-select-option>
        <nebula-select-option value="female">female</nebula-select-option>
      </nebula-select>
    </nebula-form-item>
    <nebula-form-item
      :wrapper-col="{ span: 12, offset: 5 }"
    >
      <nebula-button 
        type="primary" 
        html-type="submit">
        Submit
      </nebula-button>
    </nebula-form-item>
  </nebula-form>
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

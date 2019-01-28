<template>
  <main>
    <NebulaForm layout='inline' @submit="handleSubmit" :form="form">
      <NebulaFormItem
        :validateStatus="userNameError() ? 'error' : ''"
        :help="userNameError() || ''"
      >
        <NebulaInput
          placeholder='Username'
          v-decorator="[
        'horizontalLoginUserName',
        {rules: [{ required: true, message: 'Please input your username!' }]}
      ]"
        >
          <NebulaIcon slot="prefix" type='user' style="color:rgba(0,0,0,.25)"/>
        </NebulaInput>
      </NebulaFormItem>
      <NebulaFormItem
        :validateStatus="passwordError() ? 'error' : ''"
        :help="passwordError() || ''"
      >
        <NebulaInput
          v-decorator="[
        'horizontalLoginPassword',
        {rules: [{ required: true, message: 'Please input your Password!' }]}
      ]"
          type='password'
          placeholder='Password'
        >
          <NebulaIcon slot="prefix" type='lock' style="color:rgba(0,0,0,.25)"/>
        </NebulaInput>
      </NebulaFormItem>
      <NebulaFormItem>
        <NebulaButton
          type='primary'
          htmlType='submit'
          :disabled="hasErrors(form.getFieldsError())"
        >
          Log in
        </NebulaButton>
      </NebulaFormItem>
    </NebulaForm>
  </main>
</template>

<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

export default {
  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this)
    };
  },
  mounted() {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields();
    });
  },
  methods: {
    // Only show error after a field is touched.
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("userName") && getFieldError("userName");
    },
    // Only show error after a field is touched.
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("password") && getFieldError("password");
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    }
  }
};
</script>

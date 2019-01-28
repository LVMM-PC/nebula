<template>
  <main>
    <NebulaForm 
      id="components-form-demo-normal-login" 
      :form="form" 
      class="login-form" 
      @submit="handleSubmit">
      <NebulaFormItem>
        <NebulaInput
          v-decorator="[
            'normalLoginUserName',
            { rules: [{ required: true, message: 'Please input your username!' }] }
          ]"
          placeholder="Username"
        >
          <NebulaIcon 
            slot="prefix" 
            type="user" 
            style="color: rgba(0,0,0,.25)"/>
        </NebulaInput>
      </NebulaFormItem>
      <NebulaFormItem>
        <NebulaInput
          v-decorator="[
            'normalLoginPassword',
            { rules: [{ required: true, message: 'Please input your Password!' }] }
          ]"
          type="password"
          placeholder="Password"
        >
          <NebulaIcon 
            slot="prefix" 
            type="lock" 
            style="color: rgba(0,0,0,.25)"/>
        </NebulaInput>
      </NebulaFormItem>
      <NebulaFormItem>
        <NebulaCheckbox
          v-decorator="[
            'normalLoginRemember',
            {
              valuePropName: 'checked',
              initialValue: true,
            }
          ]"
        >
          Remember me
        </NebulaCheckbox>
        <a 
          class="login-form-forgot" 
          href="">Forgot password</a>
        <NebulaButton 
          type="primary" 
          html-type="submit" 
          class="login-form-button">
          Log in
        </NebulaButton>
        Or <a href="">register now!</a>
      </NebulaFormItem>
    </NebulaForm>
  </main>
</template>

<script>
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
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

<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}

#components-form-demo-normal-login .login-form-forgot {
  float: right;
}

#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>

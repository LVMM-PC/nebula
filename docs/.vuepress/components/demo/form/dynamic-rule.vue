<template>
  <nebula-form :form="form">
    <nebula-form-item
      :labelCol="formItemLayout.labelCol"
      :wrapperCol="formItemLayout.wrapperCol"
      label='Name'
    >
      <nebula-input
        v-decorator="[
          'username1',
          {rules: [{ required: true, message: 'Please input your name' }]}
        ]"
        placeholder='Please input your name'
      />
    </nebula-form-item>
    <nebula-form-item
      :labelCol="formItemLayout.labelCol"
      :wrapperCol="formItemLayout.wrapperCol"
      label='Nickname'
    >
      <nebula-input
        v-decorator="[
          'nickname1',
          {rules: [{ required: checkNick, message: 'Please input your nickname' }]}
        ]"
        placeholder='Please input your nickname'
      />
    </nebula-form-item>
    <nebula-form-item
      :labelCol="formTailLayout.labelCol"
      :wrapperCol="formTailLayout.wrapperCol"
    >
      <nebula-checkbox
        :checked="checkNick"
        @change="handleChange"
      >
        Nickname is required
      </nebula-checkbox>
    </nebula-form-item>
    <nebula-form-item
      :labelCol="formTailLayout.labelCol"
      :wrapperCol="formTailLayout.wrapperCol"
    >
      <nebula-button type='primary' @click="check">Check</nebula-button>
    </nebula-form-item>
  </nebula-form>
</template>

<script>
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 }
};
export default {
  data() {
    return {
      checkNick: false,
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this)
    };
  },
  methods: {
    check() {
      this.form.validateFields(err => {
        if (!err) {
          console.info("success");
        }
      });
    },
    handleChange(e) {
      this.checkNick = e.target.checked;
      this.$nextTick(() => {
        this.form.validateFields(["nickname1"], { force: true });
      });
    }
  }
};
</script>

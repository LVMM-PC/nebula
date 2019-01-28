<template>
  <main>
    <nebula-form :layout="formLayout">
      <nebula-form-item
        label='Form Layout'
        :labelCol="formItemLayout.labelCol"
        :wrapperCol="formItemLayout.wrapperCol"
      >
        <nebula-radio-group defaultValue='horizontal' @change="handleFormLayoutChange">
          <nebula-radio-button value='horizontal'>Horizontal</nebula-radio-button>
          <nebula-radio-button value='vertical'>Vertical</nebula-radio-button>
          <nebula-radio-button value='inline'>Inline</nebula-radio-button>
        </nebula-radio-group>
      </nebula-form-item>
      <nebula-form-item
        label='Field A'
        :labelCol="formItemLayout.labelCol"
        :wrapperCol="formItemLayout.wrapperCol"
      >
        <nebula-input placeholder='input placeholder'/>
      </nebula-form-item>
      <nebula-form-item
        label='Field B'
        :labelCol="formItemLayout.labelCol"
        :wrapperCol="formItemLayout.wrapperCol"
      >
        <nebula-input placeholder='input placeholder'/>
      </nebula-form-item>
      <nebula-form-item
        :wrapperCol="buttonItemLayout.wrapperCol"
      >
        <nebula-button type='primary'>Submit</nebula-button>
      </nebula-form-item>
    </nebula-form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      formLayout: "horizontal"
    };
  },
  methods: {
    handleFormLayoutChange(e) {
      this.formLayout = e.target.value;
    }
  },
  computed: {
    formItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 }
          }
        : {};
    },
    buttonItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            wrapperCol: { span: 14, offset: 4 }
          }
        : {};
    }
  }
};
</script>

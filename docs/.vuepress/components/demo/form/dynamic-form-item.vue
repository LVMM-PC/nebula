<template>
  <main>
    <nebula-form @submit="handleSubmit" :form="form">
      <nebula-form-item
        v-for="(k, index) in form.getFieldValue('keys')"
        v-bind="index === 0 ? formItemLayout : formItemLayoutWithOutLabel"
        :label="index === 0 ? 'Passengers' : ''"
        :required="false"
        :key="k"
      >
        <nebula-input
          v-decorator="[
        `names[${k}]`,
        {
          validateTrigger: ['change', 'blur'],
          preserve: true,
          rules: [{
            required: true,
            whitespace: true,
            message: 'Please input passenger\'s name or delete this field.',
          }],
        }
      ]"
          placeholder='passenger name'
          style="width: 60%; margin-right: 8px"
        />
        <nebula-icon
          v-if="form.getFieldValue('keys').length > 1"
          class='dynamic-delete-button'
          type='minus-circle-o'
          :disabled="form.getFieldValue('keys').length === 1"
          @click="() => remove(k)"
        />
      </nebula-form-item>
      <nebula-form-item v-bind="formItemLayoutWithOutLabel">
        <nebula-button type='dashed' @click="add" style="width: 60%">
          <nebula-icon type='plus'/>
          Add field
        </nebula-button>
      </nebula-form-item>
      <nebula-form-item v-bind="formItemLayoutWithOutLabel">
        <nebula-button type='primary' htmlType='submit'>Submit</nebula-button>
      </nebula-form-item>
    </nebula-form>
  </main>
</template>

<script>
let id = 0;
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this);
    this.form.getFieldDecorator("keys", { initialValue: [], preserve: true });
  },
  data() {
    return {
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 4 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 20 }
        }
      },
      formItemLayoutWithOutLabel: {
        wrapperCol: {
          xs: { span: 24, offset: 0 },
          sm: { span: 20, offset: 4 }
        }
      }
    };
  },
  methods: {
    remove(k) {
      const { form } = this;
      // can use data-binding to get
      const keys = form.getFieldValue("keys");
      // We need at least one passenger
      if (keys.length === 1) {
        return;
      }

      // can use data-binding to set
      form.setFieldsValue({
        keys: keys.filter(key => key !== k)
      });
    },

    add() {
      const { form } = this;
      // can use data-binding to get
      const keys = form.getFieldValue("keys");
      console.log(keys);
      const nextKeys = keys.concat(++id);
      // can use data-binding to set
      // important! notify form to detect changes
      form.setFieldsValue({
        keys: nextKeys
      });
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
<style>
.dynamic-delete-button {
  cursor: pointer;
  position: relative;
  top: 4px;
  font-size: 24px;
  color: #999;
  transition: all 0.3s;
}

.dynamic-delete-button:hover {
  color: #777;
}

.dynamic-delete-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>

<template>
  <main>
    <NebulaForm @submit="handleSubmit" :form="form">
      <NebulaFormItem
        v-bind="formItemLayout"
        label='E-mail'
      >
        <NebulaInput
          v-decorator="[
        'email',
        {
          rules: [{
            type: 'email', message: 'The input is not valid E-mail!',
          }, {
            required: true, message: 'Please input your E-mail!',
          }]
        }
      ]"
        />
      </NebulaFormItem>
      <NebulaFormItem
        v-bind="formItemLayout"
        label='Password'
      >
        <NebulaInput
          v-decorator="[
        'password',
        {
          rules: [{
            required: true, message: 'Please input your password!',
          }, {
            validator: this.validateToNextPassword,
          }],
        }
      ]"
          type='password'
        />
      </NebulaFormItem>
      <NebulaFormItem
        v-bind="formItemLayout"
        label='Confirm Password'
      >
        <NebulaInput
          v-decorator="[
        'confirm',
        {
          rules: [{
            required: true, message: 'Please confirm your password!',
          }, {
            validator: compareToFirstPassword,
          }],
        }
      ]"
          type='password'
          @blur="handleConfirmBlur"
        />
      </NebulaFormItem>
      <NebulaFormItem
        v-bind="formItemLayout"
      >
    <span slot="label">
      Nickname&nbsp;
      <NebulaTooltip title='What do you want others to call you?'>
        <NebulaIcon type='question-circle-o'/>
      </NebulaTooltip>
    </span>
        <NebulaInput
          v-decorator="[
        'nickname',
        {
          rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }]
        }
      ]"
        />
      </NebulaFormItem>
      <NebulaFormItem
        v-bind="formItemLayout"
        label='Habitual Residence'
      >
        <NebulaInput
          v-decorator="[
        'residence',
        {
          initialValue: ['zhejiang', 'hangzhou', 'xihu'],
          rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
        }
      ]"
          :options="residences"
        />
      </NebulaFormItem>
      <NebulaFormItem
        v-bind="formItemLayout"
        label='Phone Number'
      >
        <NebulaInput
          v-decorator="[
        'phone',
        {
          rules: [{ required: true, message: 'Please input your phone number!' }],
        }
      ]"
          style="width: 100%"
        >
          <nebula-select
            v-decorator="[
          'prefix',
          { initialValue: '86' }
        ]"
            slot="addonBefore"
            style="width: 70px"
          >
            <nebula-select-option value='86'>+86</nebula-select-option>
            <nebula-select-option value='87'>+87</nebula-select-option>
          </nebula-select>
        </NebulaInput>
      </NebulaFormItem>
      <NebulaFormItem
        v-bind="formItemLayout"
        label='Website'
      >
        <NebulaInput
          v-decorator="[
        'website',
        {rules: [{ required: true, message: 'Please input website!' }]}
      ]"
          @change="handleWebsiteChange"
          placeholder='website'
        >
          <template slot="dataSource">
            <nebula-select-option v-for="website in autoCompleteResult" :key="website">{{website}}</nebula-select-option>
          </template>
          <NebulaInput/>
        </NebulaInput>
      </NebulaFormItem>
      <NebulaFormItem
        v-bind="formItemLayout"
        label='Captcha'
        extra='We must make sure that your are a human.'
      >
        <nebula-row :gutter="8">
          <NebulaCol :span="12">
            <NebulaInput
              v-decorator="[
            'captcha',
            {rules: [{ required: true, message: 'Please input the captcha you got!' }]}
          ]"
            />
          </NebulaCol>
          <NebulaCol :span="12">
            <NebulaButton>Get captcha</NebulaButton>
          </NebulaCol>
        </nebula-row>
      </NebulaFormItem>
      <NebulaFormItem v-bind="tailFormItemLayout">
        <nebula-checkbox
          v-decorator="['agreement', {valuePropName: 'checked'}]"
        >I have read the <a href=''>agreement</a></nebula-checkbox>
      </NebulaFormItem>
      <NebulaFormItem v-bind="tailFormItemLayout">
        <NebulaButton type='primary' htmlType='submit'>Register</NebulaButton>
      </NebulaFormItem>
    </NebulaForm>
  </main>
</template>

<script>
const residences = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake"
          }
        ]
      }
    ]
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men"
          }
        ]
      }
    ]
  }
];

export default {
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  data() {
    return {
      confirmDirty: false,
      residences,
      autoCompleteResult: [],
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 }
        }
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0
          },
          sm: {
            span: 16,
            offset: 8
          }
        }
      }
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue("password")) {
        callback("Two passwords that you enter is inconsistent!");
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(["confirm"], { force: true });
      }
      callback();
    },
    handleWebsiteChange(value) {
      let autoCompleteResult;
      if (!value) {
        autoCompleteResult = [];
      } else {
        autoCompleteResult = [".com", ".org", ".net"].map(
          domain => `${value}${domain}`
        );
      }
      this.autoCompleteResult = autoCompleteResult;
    }
  }
};
</script>

<template>
  <main>
    <nebula-form id='components-form-demo-validate-other' @submit="handleSubmit" :form="form">
      <nebula-form-item
        v-bind="formItemLayout"
        label='Plain Text'
      >
        <span class='ant-form-text'>China</span>
      </nebula-form-item>
      <nebula-form-item
        v-bind="formItemLayout"
        label='Select'
        hasFeedback
      >
        <nebula-select
          v-decorator="[
        'select',
        {rules: [{ required: true, message: 'Please select your country!' }]}
      ]"
          placeholder='Please select a country'
        >
          <nebula-select-option value='china'>China</nebula-select-option>
          <nebula-select-option value='usa'>U.S.A</nebula-select-option>
        </nebula-select>
      </nebula-form-item>

      <nebula-form-item
        v-bind="formItemLayout"
        label='Select[multiple]'
      >
        <nebula-select
          v-decorator="[
        'select-multiple', {
        rules: [{ required: true, message: 'Please select your favourite colors!', type: 'array' }],
      }]"
          mode='multiple'
          placeholder='Please select favourite colors'
        >
          <nebula-select-option value='red'>Red</nebula-select-option>
          <nebula-select-option value='green'>Green</nebula-select-option>
          <nebula-select-option value='blue'>Blue</nebula-select-option>
        </nebula-select>
      </nebula-form-item>

      <nebula-form-item
        v-bind="formItemLayout"
        label='InputNumber'
      >
        <nebula-input-number v-decorator="['input-number', { initialValue: 3 }]" :min="1" :max="10"/>
        <span class='ant-form-text'> machines</span>
      </nebula-form-item>

      <nebula-form-item
        v-bind="formItemLayout"
        label='Switch'
      >
        <nebula-switch v-decorator="['switch', { valuePropName: 'checked' }]"/>
      </nebula-form-item>

      <nebula-form-item
        v-bind="formItemLayout"
        label='Slider'
      >
        <nebula-input v-decorator="['slider']" :marks="{ 0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F' }"/>
      </nebula-form-item>

      <nebula-form-item
        v-bind="formItemLayout"
        label='Radio.Group'
      >
        <nebula-radio-group v-decorator="['radio-group']">
          <nebula-radio value='a'>item 1</nebula-radio>
          <nebula-radio value='b'>item 2</nebula-radio>
          <nebula-radio value='c'>item 3</nebula-radio>
        </nebula-radio-group>
      </nebula-form-item>

      <nebula-form-item
        v-bind="formItemLayout"
        label='Radio.Button'
      >
        <nebula-radio-group v-decorator="['radio-button']">
          <nebula-radio-button value='a'>item 1</nebula-radio-button>
          <nebula-radio-button value='b'>item 2</nebula-radio-button>
          <nebula-radio-button value='c'>item 3</nebula-radio-button>
        </nebula-radio-group>
      </nebula-form-item>

      <nebula-form-item
        v-bind="formItemLayout"
        label='Rate'
      >
        <nebula-input allowHalf v-decorator="['rate', {initialValue: 3.5}]"/>
      </nebula-form-item>

      <nebula-form-item
        v-bind="formItemLayout"
        label='Upload'
        extra='longgggggggggggggggggggggggggggggggggg'
      >
        <nebula-input
          v-decorator="['upload', {
        valuePropName: 'fileList',
        getValueFromEvent: normFile,
      }]"
          name='logo'
          action='/upload.do'
          listType='picture'
        >
          <nebula-button>
            <nebula-icon type='upload'/>
            Click to upload
          </nebula-button>
        </nebula-input>
      </nebula-form-item>

      <nebula-form-item
        v-bind="formItemLayout"
        label='Dragger'
      >
        <div class='dropbox'>
          <nebula-input
            v-decorator="['dragger', {
          valuePropName: 'fileList',
          getValueFromEvent: normFile,
        }]"
            name='files'
            action='/upload.do'
          >
            <p class='ant-upload-drag-icon'>
              <nebula-icon type='inbox'/>
            </p>
            <p class='ant-upload-text'>Click or drag file to this area to upload</p>
            <p class='ant-upload-hint'>Support for a single or bulk upload.</p>
          </nebula-input>
        </div>
      </nebula-form-item>

      <nebula-form-item
        :wrapperCol="{ span: 12, offset: 6 }"
      >
        <nebula-button type='primary' htmlType='submit'>Submit</nebula-button>
      </nebula-form-item>
    </nebula-form>
  </main>
</template>

<script>
export default {
  beforeCreate() {
    // window.test = this;
    this.form = this.$form.createForm(this);
  },
  data: () => ({
    formItemLayout: {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    }
  }),
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    normFile(e) {
      console.log("Upload event:", e);
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    }
  }
};
</script>
<style>
#components-form-demo-validate-other .dropbox {
  height: 180px;
  line-height: 1.5;
}
</style>

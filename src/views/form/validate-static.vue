<template>
  <main>
    <nebula-form>
      <nebula-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label="Fail"
        validate-status="error"
        help="Should be combination of numbers & alphabets"
      >
        <nebula-input 
          id="error1" 
          placeholder="unavailable choice"/>
      </nebula-form-item>

      <nebula-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label="Warning"
        validate-status="warning"
      >
        <nebula-input 
          id="warning1" 
          placeholder="Warning"/>
      </nebula-form-item>

      <nebula-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label="Validating"
        has-feedback
        validate-status="validating"
        help="The information is being validated..."
      >
        <nebula-input 
          id="validating" 
          placeholder="I'm the content is being validated"/>
      </nebula-form-item>

      <nebula-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label="Success"
        has-feedback
        validate-status="success"
      >
        <nebula-input 
          id="success1" 
          placeholder="I'm the content"/>
      </nebula-form-item>

      <nebula-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label="Warning"
        has-feedback
        validate-status="warning"
      >
        <nebula-input 
          id="warning2" 
          placeholder="Warning"/>
      </nebula-form-item>

      <nebula-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label="Fail"
        has-feedback
        validate-status="error"
        help="Should be combination of numbers & alphabets"
      >
        <nebula-input 
          id="error2" 
          placeholder="unavailable choice"/>
      </nebula-form-item>

      <nebula-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label="Success"
        has-feedback
        validate-status="success"
      >
        <nebula-input style="width: 100%"/>
      </nebula-form-item>

      <nebula-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label="Warning"
        has-feedback
        validate-status="warning"
      >
        <nebula-input style="width: 100%"/>
      </nebula-form-item>

      <nebula-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label="Error"
        has-feedback
        validate-status="error"
      >
        <nebula-select default-value="1">
          <nebula-select-option value="1">Option 1</nebula-select-option>
          <nebula-select-option value="2">Option 2</nebula-select-option>
          <nebula-select-option value="3">Option 3</nebula-select-option>
        </nebula-select>
      </nebula-form-item>

      <nebula-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label="Validating"
        has-feedback
        validate-status="validating"
        help="The information is being validated..."
      >
        <nebula-select 
          :default-value="['1']" 
          :options="[]"/>
      </nebula-form-item>

      <nebula-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label="inline"
      >
        <nebula-col :span="11">
          <nebula-form-item 
            validate-status="error" 
            help="Please select the correct date">
            <nebula-input style="width: 100%"/>
          </nebula-form-item>
        </nebula-col>
        <nebula-col :span="2">
          <span :style="{ display: 'inline-block', width: '100%', textAlign: 'center' }">
            -
          </span>
        </nebula-col>
        <nebula-col :span="11">
          <nebula-form-item>
            <nebula-input style="width: 100%"/>
          </nebula-form-item>
        </nebula-col>
      </nebula-form-item>

      <nebula-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        label="Success"
        has-feedback
        validate-status="success"
      >
        <nebula-input-number style="width: 100%"/>
      </nebula-form-item>
    </nebula-form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 }
      }
    };
  }
};
</script>

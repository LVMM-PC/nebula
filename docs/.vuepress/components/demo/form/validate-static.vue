<template>
  <main>
    <nebula-form>
      <nebula-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label='Fail'
        validateStatus='error'
        help='Should be combination of numbers & alphabets'
      >
        <nebula-input placeholder='unavailable choice' id='error1'/>
      </nebula-form-item>

      <nebula-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label='Warning'
        validateStatus='warning'
      >
        <nebula-input placeholder='Warning' id='warning1'/>
      </nebula-form-item>

      <nebula-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label='Validating'
        hasFeedback
        validateStatus='validating'
        help='The information is being validated...'
      >
        <nebula-input placeholder="I'm the content is being validated" id='validating'/>
      </nebula-form-item>

      <nebula-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label='Success'
        hasFeedback
        validateStatus='success'
      >
        <nebula-input placeholder="I'm the content" id='success1'/>
      </nebula-form-item>

      <nebula-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label='Warning'
        hasFeedback
        validateStatus='warning'
      >
        <nebula-input placeholder='Warning' id='warning2'/>
      </nebula-form-item>

      <nebula-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label='Fail'
        hasFeedback
        validateStatus='error'
        help='Should be combination of numbers & alphabets'
      >
        <nebula-input placeholder='unavailable choice' id='error2'/>
      </nebula-form-item>

      <nebula-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label='Success'
        hasFeedback
        validateStatus='success'
      >
        <nebula-input style="width: 100%"/>
      </nebula-form-item>

      <nebula-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label='Warning'
        hasFeedback
        validateStatus='warning'
      >
        <nebula-input style="width: 100%"/>
      </nebula-form-item>

      <nebula-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label='Error'
        hasFeedback
        validateStatus='error'
      >
        <nebula-select defaultValue='1'>
          <nebula-select-option value='1'>Option 1</nebula-select-option>
          <nebula-select-option value='2'>Option 2</nebula-select-option>
          <nebula-select-option value='3'>Option 3</nebula-select-option>
        </nebula-select>
      </nebula-form-item>

      <nebula-form-item
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label='Validating'
        hasFeedback
        validateStatus='validating'
        help='The information is being validated...'
      >
        <nebula-select :defaultValue="['1']" :options="[]"/>
      </nebula-form-item>

      <nebula-form-item
        label='inline'
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
      >
        <nebula-col :span="11">
          <nebula-form-item validateStatus='error' help='Please select the correct date'>
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
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        label='Success'
        hasFeedback
        validateStatus='success'
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

<template>
  <main>
    <nebula-form>
      <nebula-form-item
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        :validate-status="number.validateStatus"
        :help="number.errorMsg || tips"
        label="Prime between 8 & 12"
      >
        <nebula-input-number
          :min="8"
          :max="12"
          :value="number.value"
          @change="handleNumberChange"
        />
      </nebula-form-item>
    </nebula-form>
  </main>
</template>

<script>
function validatePrimeNumber(number) {
  if (number === 11) {
    return {
      validateStatus: "success",
      errorMsg: null
    };
  }
  return {
    validateStatus: "error",
    errorMsg: "The prime between 8 and 12 is 11!"
  };
}

export default {
  data() {
    return {
      labelCol: { span: 7 },
      wrapperCol: { span: 12 },
      number: {
        value: 11
      },
      tips:
        "A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself."
    };
  },
  methods: {
    handleNumberChange(value) {
      this.number = {
        ...validatePrimeNumber(value),
        value
      };
    }
  }
};
</script>

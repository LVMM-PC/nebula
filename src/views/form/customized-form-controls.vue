<template>
  <main>
    <nebula-form 
      :form="form" 
      class="costom-form" 
      layout="inline" 
      @submit="handleSubmit">
      <nebula-form-item label="Price">
        <price-input
          v-decorator="[
            'price',
            {
              initialValue: { number: 0, currency: 'rmb' },
              rules: [{ validator: checkPrice }],
            }
          ]"
        />
      </nebula-form-item>
      <nebula-form-item>
        <nebula-button 
          type="primary" 
          html-type="submit">Submit</nebula-button>
      </nebula-form-item>
    </nebula-form>
  </main>
</template>

<script>
const hasProp = (instance, prop) => {
  const $options = instance.$options || {};
  const propsData = $options.propsData || {};
  return prop in propsData;
};
const PriceInput = {
  props: ["value"],
  template: `
    <span class="custom-form-inline">
      <nebula-input
        type='text'
        :value="number"
        @change="handleNumberChange"
        style="width: 63%; margin-right: 2%;"
      />
      <nebula-select
        :value="currency"
        style="width: 32%"
        @change="handleCurrencyChange"
      >
        <nebula-select-option value='rmb'>RMB</nebula-select-option>
        <nebula-select-option value='dollar'>Dollar</nebula-select-option>
      </nebula-select>
    </span>
  `,
  data() {
    const value = this.value || {};
    return {
      number: value.number || 0,
      currency: value.currency || "rmb"
    };
  },
  watch: {
    value(val = {}) {
      this.number = val.number || 0;
      this.currency = val.currency || "rmb";
    }
  },
  methods: {
    handleNumberChange(e) {
      const number = parseInt(e.target.value || 0, 10);
      if (isNaN(number)) {
        return;
      }
      if (!hasProp(this, "value")) {
        this.number = number;
      }
      this.triggerChange({ number });
    },
    handleCurrencyChange(currency) {
      if (!hasProp(this, "value")) {
        this.currency = currency;
      }
      this.triggerChange({ currency });
    },
    triggerChange(changedValue) {
      // Should provide an event to pass value to Form.
      this.$emit("change", Object.assign({}, this.$data, changedValue));
    }
  }
};

export default {
  components: {
    PriceInput
  },
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
    },
    checkPrice(rule, value, callback) {
      if (value.number > 0) {
        callback();
        return;
      }
      callback("Price must greater than zero!");
    }
  }
};
</script>

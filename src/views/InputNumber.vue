<template>
  <div>
    <div>
      <nebula-input-number
        :max="10"
        :min="1"
        v-model="value"
        auto-focus
        @change="onChange"/>
      当前值：{{ value }}
    </div>
    <div>
      <nebula-input-number
        :default-value="3"
        :max="100000"
        :min="1"
        size="large"
        @change="onChange"/>
      <nebula-input-number
        :default-value="3"
        :max="100000"
        :min="1"
        @change="onChange"/>
      <nebula-input-number
        :default-value="3"
        :max="100000"
        :min="1"
        size="small"
        @change="onChange"/>
    </div>
    <div>
      <nebula-input-number
        :default-value="3"
        :disabled="disabled"
        :max="10"
        :min="1"/>
      <div style="marginTop:20px">
        <nebula-button
          type="primary"
          @click="toggle">Toggle disabled
        </nebula-button>
      </div>
    </div>
    <div>
      <nebula-input-number
        :max="10"
        :min="0"
        :step="0.01"
        @change="onChange"/>
    </div>
    <div>
      <nebula-input-number
        :default-value="1000"
        :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
        :parser="value => value.replace(/\$\s?|(,*)/g, '')"
        @change="onChange"
      />
      <nebula-input-number
        :default-value="100"
        :formatter="value => `${value}%`"
        :max="100"
        :min="0"
        :parser="value => value.replace('%', '')"
        @change="onChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "InputNumber",
  data() {
    return {
      value: 3,
      disabled: true
    };
  },
  methods: {
    onChange(value) {
      console.log("changed", value);
    },
    toggle() {
      this.disabled = !this.disabled;
    }
  }
};
</script>

<style scoped>
</style>

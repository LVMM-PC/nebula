<template>
  <div>
    <div>
      <nebula-input-number 
        :min="1" 
        :max="10" 
        v-model="value" 
        @change="onChange" />
      当前值：{{ value }}
    </div>
    <div>
      <nebula-input-number 
        :min="1" 
        :max="100000" 
        :default-value="3" 
        size="large" 
        @change="onChange" />
      <nebula-input-number 
        :min="1" 
        :max="100000" 
        :default-value="3" 
        @change="onChange" />
      <nebula-input-number 
        :min="1" 
        :max="100000" 
        :default-value="3" 
        size="small" 
        @change="onChange" />
    </div>
    <div>
      <nebula-input-number 
        :min="1" 
        :max="10" 
        :disabled="disabled" 
        :default-value="3" />
      <div style="marginTop:20px">
        <nebula-button 
          type="primary" 
          @click="toggle">Toggle disabled</nebula-button>
      </div>
    </div>
    <div>
      <nebula-input-number 
        :min="0" 
        :max="10" 
        :step="0.01" 
        @change="onChange" />
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
        :min="0"
        :max="100"
        :formatter="value => `${value}%`"
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

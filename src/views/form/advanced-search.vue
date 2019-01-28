<template>
  <main id="components-form-demo-advanced-search">
    <nebula-form
      :form="form"
      class="ant-advanced-search-form"
      @submit="handleSearch"
    >
      <nebula-row :gutter="24">
        <nebula-col 
          v-for="i in 10" 
          :span="8" 
          :key="i" 
          :style="{ display: i < count ? 'block' : 'none' }">
          <nebula-form-item :label="`Field ${i}`">
            <nebula-input
              v-decorator="[
                `field-${i}`,
                {
                  rules: [{
                    required: true,
                    message: 'Input something!',
                  }],
                }
              ]"
              placeholder="placeholder"
            />
          </nebula-form-item>
        </nebula-col>
      </nebula-row>
      <nebula-row>
        <nebula-col 
          :span="24" 
          :style="{ textAlign: 'right' }">
          <nebula-button 
            type="primary" 
            html-type="submit">Search</nebula-button>
          <nebula-button 
            :style="{ marginLeft: '8px' }" 
            @click="handleReset">
            Clear
          </nebula-button>
          <a 
            :style="{ marginLeft: '8px', fontSize: '12px' }" 
            @click="toggle">
            Collapse
            <nebula-icon :type="expand ? 'up' : 'down'"/>
          </a>
        </nebula-col>
      </nebula-row>
    </nebula-form>
  </main>
</template>

<script>
export default {
  data() {
    return {
      expand: false,
      form: this.$form.createForm(this)
    };
  },
  computed: {
    count() {
      return this.expand ? 11 : 7;
    }
  },
  methods: {
    handleSearch(e) {
      e.preventDefault();
      this.form.validateFields((error, values) => {
        console.log("error", error);
        console.log("Received values of form: ", values);
      });
    },

    handleReset() {
      this.form.resetFields();
    },

    toggle() {
      this.expand = !this.expand;
    }
  }
};
</script>
<style>
.ant-advanced-search-form {
  padding: 24px;
  background: #fbfbfb;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
}

.ant-advanced-search-form .ant-form-item {
  display: flex;
}

.ant-advanced-search-form .ant-form-item-control-wrapper {
  flex: 1;
}

#components-form-demo-advanced-search .ant-form {
  max-width: none;
}

#components-form-demo-advanced-search .search-result-list {
  width: 600px;
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}
</style>

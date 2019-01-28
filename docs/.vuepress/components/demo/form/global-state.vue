<template>
  <main id='components-form-demo-global-state'>
    <section class="global-state-form">
      <customized-form
        :username="fields.username"
        @change="handleFormChange"
      />
      <pre class='language-bash'>{{JSON.stringify(fields, null, 2)}}</pre>
    </section>
  </main>
</template>

<script>
const CustomizedForm = {
  props: ["username"],
  template: `
    <nebula-form layout='inline' :form="form">
      <nebula-form-item label='Username'>
        <nebula-input
          v-decorator="[
            'username',
            {
              rules: [{ required: true, message: 'Username is required!' }],
            }
          ]"
        />
      </nebula-form-item>
    </nebula-form>
  `,
  created() {
    this.form = this.$form.createForm(this, {
      onFieldsChange: (_, changedFields) => {
        this.$emit("change", changedFields);
      },
      mapPropsToFields: () => {
        return {
          username: this.$form.createFormField({
            ...this.username,
            value: this.username.value
          })
        };
      },
      onValuesChange(_, values) {
        console.log(values);
      }
    });
  },
  watch: {
    username() {
      this.form.updateFields({
        username: this.$form.createFormField({
          ...this.username,
          value: this.username.value
        })
      });
    }
  }
};

export default {
  data() {
    return {
      fields: {
        username: {
          value: "benjycui"
        }
      }
    };
  },
  methods: {
    handleFormChange(changedFields) {
      console.log("changedFields", changedFields);
      this.fields = { ...this.fields, ...changedFields };
    }
  },
  components: {
    CustomizedForm
  }
};
</script>

<style>
#components-form-demo-global-state .language-bash {
  max-width: 400px;
  border-radius: 6px;
  margin-top: 24px;
}

.global-state-form {
  display: flex;
  flex-direction: column;
  align-items: self-start !important;
}
</style>

<template>
  <main>
    <section>
      <NebulaInputNumber
        :defaultValue="1000"
        :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
        :parser="value => value.replace(/\$\s?|(,*)/g, '')"
        @change="onChange"
      />
    </section>
    <section>
      <NebulaInputNumber
        :defaultValue="100"
        :min="0"
        :max="100"
        :formatter="value => `${value}%`"
        :parser="value => value.replace('%', '')"
        @change="onChange"
      />
    </section>
  </main>
</template>

<script>
export default {
  methods: {
    onChange(value) {
      console.log("changed", value);
    }
  }
};
</script>

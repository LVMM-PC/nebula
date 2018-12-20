<template>
  <section>
    <NebulaTextarea
      :rows="4"
      v-model="value"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      value:
        "Lorem ipsum dolor sit amet, " +
        "consectetur adipisicing elit. " +
        "Ad adipisci, " +
        "aliquam aut consequatur cumque dolor error esse et explicabo ipsam " +
        "magnam minima molestias nemo officiis possimus reprehenderit rerum tenetur voluptatum?"
    };
  }
};
</script>

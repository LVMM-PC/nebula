<template>
  <section>
    <nebula-button @click="countDown">Open modal to close in 5s</nebula-button>
  </section>
</template>

<script>
export default {
  methods: {
    countDown() {
      let secondsToGo = 5;
      const modal = this.$success({
        title: "This is a notification message",
        content: `This modal will be destroyed after ${secondsToGo} second.`
      });
      const interval = setInterval(() => {
        secondsToGo -= 1;
        modal.update({
          content: `This modal will be destroyed after ${secondsToGo} second.`
        });
      }, 1000);
      setTimeout(() => {
        clearInterval(interval);
        modal.destroy();
      }, secondsToGo * 1000);
    }
  }
};
</script>

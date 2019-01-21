<template>
  <main>
    <NebulaButton @click="countDown">Open modal to close in 5s</NebulaButton>
  </main>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    countDown() {
      let secondsToGo = 5;
      const modal = this.$success({
        title: "This is a notification message",
        content: `This modal will be destroyed after ${secondsToGo} second.`
      });
      const timer = setInterval(() => {
        secondsToGo -= 1;
        modal.update({
          content: `This modal will be destroyed after ${secondsToGo} second.`
        });
      }, 1000);
      setTimeout(() => {
        clearInterval(timer);
        modal.destroy();
      }, secondsToGo * 1000);
    }
  }
};
</script>

<template>
  <div>
    <HelloPoyo />
    <p style="text-align:center;">
      <a href="poyos/1">1</a> <a href="poyos/2">2</a> <a href="poyos/3">3</a>
    </p>
  </div>
</template>

<script>
import HelloPoyo from "@/components/HelloPoyo.vue";

export default {
  name: "Poyo",
  components: {
    HelloPoyo
  }
};
</script>

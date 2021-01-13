<template>
  <div style="display:flex; justify-content: center;">
    <button type="button" @click="poyo">
      ぽよ
    </button>
  </div>
</template>

<script>
export default {
  name: "HelloPoyo",
  methods: {
    poyo() {
      window.alert("ぽよ");
    }
  }
};
</script>

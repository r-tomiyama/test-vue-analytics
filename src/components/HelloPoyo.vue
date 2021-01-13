<template>
  <div style="display:flex; justify-content: center;">
    <button
      type="button"
      @click="poyo"
      :v-ga="$ga.event('click', 'bark', 'poyo')"
    >
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

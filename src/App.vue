<template>
  <div>
    <header>
      <img
        src="https://bankingthefuture.com/wp-content/uploads/2019/04/dummylogo.jpg"
        alt="ダミーロゴ"
      />
      <div class="user" v-show="userStore.user">
        <p>{{ userStore.user.department }}: {{ userStore.user.name }}</p>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import { configureUserStore } from "./userStore.ts";

export default defineComponent({
  name: "App",
  setup() {
    const userStore = configureUserStore();

    return {
      userStore
    };
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}

body {
  margin: 0;
}

header {
  background: #2c3e50;
  height: 60px;
  margin-bottom: 100px;
  display: flex;
  justify-content: space-between;
}

img {
  width: 15%;
  padding: 5px;
}

.user {
  background: #ffffff;
  display: inline-flex;
  height: 40px;
  border-radius: 50px;
  margin: auto 10px;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
}

button {
  display: inline-block;
  padding: 0.5em 1em;
  background: #ee82ee;
  color: #fff;
  border-radius: 150px;
  border: none;
  box-shadow: 3px 10px 10px gray;
  font-size: 8em;
}

button:active {
  -webkit-transform: translateY(4px);
  transform: translateY(4px);
  box-shadow: 0px 1px 10px gray;
  border-bottom: none;
}
</style>

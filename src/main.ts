import Vue from "vue";
import VueAnalytics from "vue-analytics";
import VueCompositionApi from "@vue/composition-api";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(VueCompositionApi);
Vue.use(VueAnalytics, {
  id: "",
  router
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

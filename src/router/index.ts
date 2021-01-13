import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Poyo from "@/views/Poyo.vue";
import Poyos from "@/views/Poyos.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    redirect: { name: "poyo" }
  },
  {
    path: "/poyo",
    name: "poyo",
    component: Poyo
  },
  {
    path: "/poyos/:id",
    name: "poyoById",
    component: Poyos
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

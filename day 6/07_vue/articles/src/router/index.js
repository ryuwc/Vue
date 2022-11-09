import Vue from "vue";
import VueRouter from "vue-router";
import IndexView from "../views/IndexView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "index",
    component: IndexView,
  },
  {
    path: "/create",
    name: "create",
    component: () => import("../views/CreateView.vue"),
  },
  {
    path: "/404-not-found",
    name: "NotFound404",
    component: () => import("../views/NotFound404.vue"),
  },
  {
    path: "/:id",
    name: "detail",
    component: () => import("../views/DetailView.vue"),
  },
  {
    path: "*",
    redirect: { name: 'NotFound404' }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

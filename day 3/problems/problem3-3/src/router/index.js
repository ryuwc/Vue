import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const about = () =>
  import(/* webpackChunkName: "about" */ "../views/AboutView.vue");

const one = () => import(/* webpackChunkName: "about" */ "../views/One.vue");

const fnf = () => import(/* webpackChunkName: "about" */ "../views/Fnf.vue");

const two = () => import(/* webpackChunkName: "about" */ "../views/Two.vue");

const three = () =>
  import(/* webpackChunkName: "about" */ "../views/Three.vue");

const four = () => import(/* webpackChunkName: "about" */ "../views/Four.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: about,
  },
  {
    path: "/One",
    name: "one",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: one,
  },
  {
    path: "*",
    name: "fzf",
    component: fnf,
  },
  {
    path: "/Two",
    name: "two",
    component: two,
  },
  {
    path: "/Three",
    name: "three",
    component: three,
  },
  {
    path: "/Four",
    name: "four",
    component: four,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

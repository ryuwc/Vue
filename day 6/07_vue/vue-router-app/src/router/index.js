import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
// import HelloView from '@/views/HelloView'

Vue.use(VueRouter);

const isLogin = true

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/hello/:userName",
    name: "hello",
    component: () => import("../views/HelloView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
    beforeEnter(to, from, next) {
      if (isLogin === true) {
        alert('이미 로그인 되어있다..')
        console.log('이미 로그인 되어있음');
        next({ name: 'home' })
      }else{
        next()
      }
    }
  },
  {
    path: "/404",
    name: 'Notfound404',
    component: () => import("../views/NotFound404.vue")

  },
  {
    path: "/dog/:breed",
    name: 'dog',
    component: () => import("../views/DogView.vue")
  },
  {
    path: '*',
    redirect: '/404',
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 1. 전역 가드
// router.beforeEach((to, from, next) => {
//   // 로그인 여부
//   const isLogin = false;

//   // 로그인이 필요한 페이지
//   // const authPages = ["hello", 'home', 'about'];

//   const allowAllPages = ['login']

//   // const isAuthRequired = authPages.includes(to.name);
//   const isAuthRequired = !allowAllPages.includes(to.name);

//   if (isAuthRequired && !isLogin) {
//     console.log('login으로 이동');
//     next({ name: "login" });
//   } else {
//     console.log('to로 이동');
//     next();
//   }
// });

// 2. 라우터 가드


export default router;

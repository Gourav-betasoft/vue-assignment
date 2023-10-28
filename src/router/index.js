import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    meta: {
      auth: true,
      requiresAuth: true,
    },
  },
  {
    path: "/shop",
    name: "ShopPage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ShopPage.vue"),
      meta: {
        auth: true,
        requiresAuth: true,
      },
  },
  {
    path: "/cart",
    name: "CartView",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CartView.vue"),
    meta: {
      auth: true,
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "LoginPage",
    component: () => import("../views/LoginPage.vue"),
    meta: {
      guest: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/RegistrationPage.vue"),
    meta: {
      guest: true,
    },
  },
 
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  const isloggedIn = parseInt(localStorage.getItem("IsloggedIn") ?? "0");
  console.log("isLogged ", isloggedIn);
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isloggedIn) {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    if (isloggedIn) {
      next({
        path: "/",
      });
    } else {
      next();
    }
  } else {
    
    next(); 
  }
});

export default router;

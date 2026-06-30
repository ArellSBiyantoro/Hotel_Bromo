import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "../views/Home.vue";
// import LoginView from "../views/auth/LoginView.vue";
// import DashboardView from "../views/dashboard/DashboardView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
//   {
//     redirect: "/login",
//   },
//   {
//     path: "/login",
//     name: "Login",
//     component: LoginView,
//   },
//   {
//     path: "/dashboard",
//     name: "Dashboard",
//     component: DashboardView,
//   },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
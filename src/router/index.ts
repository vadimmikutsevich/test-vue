import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/works",
    name: "Works",
    component: () => import("../pages/Works.vue"), // Lazy-loaded
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("../pages/Blog.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../pages/Contact.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

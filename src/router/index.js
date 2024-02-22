import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard_view from "../views/Dashboard_view.vue";
import Projects_view from "../views/Projects_view.vue";
import Team_view from "../views/Team_view.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard_view,
  },
  {
    path: "/projects",
    name: "projects",
    component: Projects_view,
  },
  {
    path: "/team",
    name: "team",
    component: Team_view,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

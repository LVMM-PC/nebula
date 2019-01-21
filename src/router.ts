import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/button",
      name: "button",
      component: () => import("./views/Button.vue")
    },
    {
      path: "/checkbox",
      name: "checkbox",
      component: () => import("./views/Checkbox.vue")
    },
    {
      path: "/radio",
      name: "radio",
      component: () => import("./views/Radio.vue")
    },
    {
      path: "/select",
      name: "select",
      component: () => import("./views/Select.vue")
    },
    {
      path: "/switch",
      name: "switch",
      component: () => import("./views/SwitchDemo.vue")
    },
    {
      path: "/input",
      name: "input",
      component: () => import("./views/InputDemo.vue")
    },
    {
      path: "/input-number",
      name: "input-number",
      component: () => import("./views/InputNumber.vue")
    },
    {
      path: "/modal",
      name: "modal",
      component: () => import("./views/Modal.vue")
    }
  ]
});

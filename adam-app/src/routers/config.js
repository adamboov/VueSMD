import Login from "@/views/Login";
export default {
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("@/views/Home"),
    },
    {
      path: "/login",
      component: Login,
    },
  ],
};

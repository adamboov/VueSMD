import Login from "@/views/Login";

export default {
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/Home"),
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/reg",
      name: "Reg",
      component: () => import("@/views/Reg"),
    },
    {
      path: "/channel/:channelId",
      name: "ChannelNews",
      component: () => import("@/views/ChannelNews"),
    },
    {
      path: "*",
      name: "404",
      component: () => import("@/views/NotFound"),
    },
  ],
};

import VueRouter from "vue-router";
import Vue from "vue";
import config from "@/routers/config";

//  1、安装
Vue.use(VueRouter);

//  2 创建路由对象
const router = new VueRouter(
  config
  // {
  // mode: "history",
  //  配置
  // routes
  // }
);

export default router;

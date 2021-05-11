import Vue from "vue";
import App from "./App.vue";
import "./assets/style/reset.css";
import "./assets/style/global.css";
import router from "@/routers/index";
// import "./services/newsService";
// import { getNewsChannels, getNews } from "@/services/newsService";
// import VueRouter from "vue-router";

Vue.config.productionTip = false;

//  第一种使用方式
// getNewsChannels().then((resp) => {
//   console.log(resp);
// });

//  第二种使用方式
// async function test() {
//   let resp = await getNewsChannels();
//   console.log(resp);
//   let res = await getNews(resp[0].channelId);
//   console.log(res);
// }

// test();
//  1、安装
// Vue.use(VueRouter);

//  2 创建路由对象
// const routers = new VueRouter({
//  配置
// });

new Vue({
  render: (h) => h(App),
  //  3 配置路由到vue实例
  router,
}).$mount("#app");

import Vue from "vue";
import App from "./App.vue";
import "./assets/style/reset.css";
import "./assets/style/global.css";
import "./services/newsService";
// import { getNewsChannels, getNews } from "@/services/newsService";

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

new Vue({
  render: (h) => h(App),
}).$mount("#app");

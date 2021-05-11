<template>
  <div id="app">
    <Header />
    <!--        <div style="width: 1080px; margin: 0 auto">-->
    <!--          <Banner :banners="banners" :duration="3000" />-->
    <!--         <Channels @change="handleChange" />-->
    <!--      <NewsList :news="news" />-->
    <!--    <modal>-->
    <!--      <Center>-->
    <!--        <Loading />-->
    <!--      </Center>-->
    <!--    </modal>-->
    <!--    </div>-->
    <div class="container">
      <!--      <Home />-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import Banner from "./components/Banner";
// import Channels from "@/components/news/Channels";
// import NewsList from "./components/news/NewsList";
// import { getNews } from "./services/newsService";
// import Loading from "./components/Loading";
// import Center from "./components/Center";
// import Modal from "@/components/Modal";
// import Home from "@/views/Home";
import Header from "@/components/Header";

export default {
  components: {
    // Modal,
    // Banner,
    // Channels,
    // NewsList,
    // Loading,
    // Center,
    // Home,
    Header,
  },
  data() {
    return {
      // banners: [
      //   {
      //     url: "https://dark-star.top/images/pic/1.jpg",
      //     link: "https://dark-star.top/images/pic/1.jpg",
      //   },
      //   {
      //     url: "https://dark-star.top/images/pic/2.jpg",
      //     link: "https://dark-star.top/images/pic/2.jpg",
      //   },
      //   {
      //     url: "https://dark-star.top/images/pic/3.jpg",
      //     link: "https://dark-star.top/images/pic/3.jpg",
      //   },
      // ],
      // news: [],
    };
  },

  async created() {
    // var resp = await getNews("5572a108b3cdc86cf39001cd");
    // this.news = resp.contentlist
  },

  methods: {
    handleChange(newId) {
      console.log(newId);
    },
  },
};
</script>

<style scoped>
.container {
  margin: 30px auto;
}
</style>

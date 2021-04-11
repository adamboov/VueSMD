<template>
  <div id="app">
    <div style="width: 1080px; margin: 0 auto">
      <!--      <Banner :banners="banners" :duration="3000" />-->
      <!--         <Channels @change="handleChange" />-->
      <NewsList :news="news" />
    </div>
  </div>
</template>

<script>
// import Banner from "./components/Banner";
// import Channels from "@/components/news/Channels";
import NewsList from "./components/news/NewsList";
import { getNews } from "./services/newsService";

export default {
  components: {
    // Banner,
    // Channels,
    NewsList,
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
      news: [],
    };
  },

  async created() {
    var resp = await getNews("5572a108b3cdc86cf39001cd");
    this.news = resp.contentlist
  },

  methods: {
    handleChange(newId) {
      console.log(newId);
    },
  },
};
</script>

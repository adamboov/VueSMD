<template>
  <div>
    <Banner :banners="banners" :duration="3000" />
    <Channels @change="handleChange" />
    <Loading v-show="isLoading" />
    <NewsList v-show="!isLoading" :news="news" />
  </div>
</template>

<script>
import Banner from "@/components/Banner";
import Channels from "@/components/news/Channels";
import NewsList from "@/components/news/NewsList";
import Loading from "@/components/Loading";

import { getNews } from "@/services/newsService";

export default {
  name: "Home",
  components: {
    Banner,
    Channels,
    NewsList,
    Loading,
  },
  data() {
    return {
      banners: [
        {
          url: "https://dark-star.top/images/pic/1.jpg",
          link: "https://dark-star.top/images/pic/1.jpg",
        },
        {
          url: "https://dark-star.top/images/pic/2.jpg",
          link: "https://dark-star.top/images/pic/2.jpg",
        },
        {
          url: "https://dark-star.top/images/pic/3.jpg",
          link: "https://dark-star.top/images/pic/3.jpg",
        },
      ],
      news: [],
      isLoading: true,
    };
  },

  methods: {
    async handleChange(channelId) {
      this.isLoading = true;
      let resp = await getNews(channelId, 1, 10);
      this.news = resp.contentlist;
      this.isLoading = false;
    },
  },
};
</script>

<style scoped></style>

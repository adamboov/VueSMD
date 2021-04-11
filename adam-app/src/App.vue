<template>
  <div id="app">
    <div style="width: 1080px; margin: 0 auto">
      <!--      <Banner :banners="banners" :duration="3000" />-->
      <Channels @change="handleChange" />
    </div>
  </div>
</template>

<script>
// import Banner from "./components/Banner";
import Channels from "@/components/news/Channels";

export default {
  components: {
    // Banner,
    Channels,
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
    };
  },

  methods: {
    handleChange(newId) {
      console.log(newId)
    },
  },
};
</script>

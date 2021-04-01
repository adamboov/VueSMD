<template>
  <div id="app">
    <div style="width: 1080px; margin: 0px auto">
      <Banner :banners="banners" />
    </div>
  </div>
</template>

<script>
import Banner from "./components/Banner";
export default {
  components: {
    Banner,
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
};
</script>

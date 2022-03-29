<template>
  <Center> some 组件id {{ $route.params.channelId }}</Center>
</template>

<script>
import Center from "@/components/Center";

export default {
  name: "ChannelNews",
  components: { Center },
  created() {
    console.log(this.$route)
  },
};
</script>

<style scoped></style>

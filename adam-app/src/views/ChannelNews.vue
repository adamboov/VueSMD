<template>
  <div>
    <Pager
      :page="page"
      :limit="10"
      :total="100"
      :panelNumber="7"
      @pageChange="handleChange"
    ></Pager>
  </div>
</template>

<script>
import Pager from "@/components/Pager";

export default {
  name: "ChannelNews",
  components: { Pager },
  data() {
    return {
      page: 3,
    };
  },
  methods: {
    handleChange(newPage) {
      this.page = newPage;
    },
  },
};
</script>

<style scoped></style>

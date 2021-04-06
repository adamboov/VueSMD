<template>
  <div class="news-types" v-if="channels.length > 0">
    <div
      class="item"
      v-for="item in showChannels"
      :key="item.channelId"
      :class="{ active: item.channelId === chooseId }"
      @click="switchTo(item.channelId)"
    >
      <span>{{ item.name }}</span>
    </div>
    <!--    prevent 阻止事件的默认行为-->
    <a href="" @click.prevent="isCollapse = !isCollapse">{{
      isCollapse ? "展开" : "收起"
    }}</a>
  </div>
</template>

<script>
import { getNewsChannels } from "@/services/newsService";

export default {
  name: "Channels",
  data() {
    return {
      channels: [],
      //  当前是否为折叠状态
      isCollapse: true,
      //  选中的频道id
      chooseId: null,
    };
  },
  computed: {
    showChannels() {
      if (this.isCollapse) {
        //  折叠状态只需要显示8条
        return this.channels.slice(0, 8);
      } else {
        //  展开状态
        return this.channels;
      }
    },
  },
  created() {
    getNewsChannels().then((resp) => {
      //  渲染数据
      this.channels = resp;

      // this.chooseId = this.channels[0].channelId;
      this.switchTo(this.channels[0].channelId);
    });
  },
  methods: {
    //  切换选中的id
    switchTo(id) {
      this.chooseId = id;
    },
  },
};
</script>

<style scoped>
.news-types {
  margin: 30px 0;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  padding-bottom: 15px;
}

.item {
  padding: 10px 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin: 7px 15px 7px 0;
  cursor: pointer;
  position: relative;
}

.item:hover {
  background: #ccc;
}

.item.active {
  background: #000;
  color: #fff;
}

.news-types a {
  align-self: flex-end;
  margin-bottom: 20px;
  color: #409eff;
}
</style>

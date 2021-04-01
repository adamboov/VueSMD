<template>
  <div class="banner-container">
    <ul
      class="images"
      :style="{
        width: banners.length * 100 + '%',
        marginLeft: -index * 100 + '%',
      }"
    >
      <li v-for="(item, index) in banners" :key="index">
        <a :href="item.link"><img :src="item.url" alt="" /></a>
      </li>
    </ul>
    <ul class="dots">
      <li
        v-for="(item, i) in banners"
        :key="i"
        :class="{ active: i === index }"
        @click="index = i"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  //
  props: {
    banners: {
      //  属性类型必须是数组
      type: Array,
      //  必须要传递该属性类型
      required: true,
    },
  },
  //
  data() {
    return {
      //  当前显示的是第几张
      index: 1,
      //  计时器状态
      timer: null,
    };
  },
  //
  methods: {
    //  开始自动切换
    autoStart() {
      if (this.timer) {
        return;
      }
      setInterval(() => {
        this.index = (this.index + 1) % this.banners.length;
      }, 2000);
    },
    //  停止自动切换
    autoStop() {
      clearInterval(this.timer);
      this.timer = null;
    },
  },
  //  组件生命周期开始
  //  无提取的数据 无响应式
  beforeCreate() {},
  //  提取信息 响应式
  created() {},
  //  无真实DOM
  beforeMount() {},
  //  真实DOM已经呈现
  mounted() {
    this.autoStart();
  },
  //  data prop变动 重新渲染之前
  beforeUpdate() {},
  //  重新渲染之后
  updated() {},
  //  组件不需要再呈现
  beforeDestroy() {},
  //  销毁组件
  destroyed() {},
  //  组件生命周期结束
};
</script>

<style>
.banner-container {
  height: 350px;
  position: relative;
  overflow: hidden;
}

.banner-container li {
  display: block;
  width: 1080px;
  height: 100%;
  float: left;
}

.images {
  height: 100%;
  transition: 0.5s;
}

.banner-container img {
  width: 1080px;
  height: 100%;
}

.dots {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
}

.dots li {
  width: 10px;
  cursor: pointer;
  height: 10px;
  margin: 0 3px;
  border-radius: 50%;
  border: 1px solid;
  color: #fff;
}

.dots li.active {
  background: #fff;
}
</style>

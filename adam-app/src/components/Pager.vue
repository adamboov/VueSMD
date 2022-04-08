<template></template>

<script>
export default {
  name: "Pager",
  props: {
    page: {
      // 当前页面
      default: 1,
      type: Number,
    },
    total: {
      default: 0,
      type: Number,
    },
  },
};
</script>

<style scoped>
.pager {
  text-align: center;
  margin: 20px 0;
}

.pager .pager-item {
  display: inline-block;
  padding: 5px 7px;
  border: 1px solid #ccc;
  margin: 8px;
  cursor: pointer;
  color: rgb(96, 96, 244);
}

.pager .pager-item.disabled {
  color: #ccc;
  cursor: not-allowed;
}

.pager .pager-item.active {
  color: #f40;
  border: none;
  cursor: auto;
}
</style>

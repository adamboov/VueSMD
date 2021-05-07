<template>
  <div class="modal">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Modal",
};
</script>

<style scoped>
.modal {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 200;
  background: rgba(0, 0, 0, 0.4);
  left: 0;
  top: 0;
}
</style>

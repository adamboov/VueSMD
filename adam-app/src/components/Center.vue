<template>
  <div class="center">
    <slot>插槽默认值</slot>
  </div>
</template>

<script>
export default {
  name: "Center",
};
</script>

<style scoped>
.center {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>

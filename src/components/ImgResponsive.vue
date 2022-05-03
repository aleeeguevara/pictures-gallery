<template>
  <img :src="image" :alt="title" class="img-card">
</template>
<script>
export default {
  props: ['image', 'title'],

};
</script>

<style scoped>
  .img-card {
    width: 100%;
    height: 200px;

  }
</style>

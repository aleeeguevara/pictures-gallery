<template>
  <div class="home">
    <h1>Pictures</h1>
    <CardComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import CardComponent from '@/components/Card.vue';

export default {
  name: 'HomeView',
  components: {
    CardComponent,
  },
};
</script>

<style scoped>
 .home{
   width: 100%;
 }
</style>

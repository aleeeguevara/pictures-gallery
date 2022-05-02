<template>
  <nav>
    <router-link
      v-for="(route, index) in routes"
      :to="route.path"
      :key="index"
    >
      {{ route.name }}
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'MenuComponent',
  props: {
    routes: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>

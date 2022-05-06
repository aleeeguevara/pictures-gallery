<template>
  <div id="app">
    <MenuComponent :routes="routes"/>
    <transition name="page">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import { routes } from './router/index';
import MenuComponent from './components/Menu.vue';

export default {
  data() {
    return {
      routes: routes.filter((route) => route.menu),
    };
  },
  components: {
    MenuComponent,
  },
};
</script>

<style>
* {
 margin: 0;
  background-color: #222;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
nav {
  padding: 30px;
  display: flex;
  font-size: 20px;
  justify-content: flex-end;
  text-decoration: none;
  height: 30px;
  background: #0a0a0a;
  border-bottom: 2px solid #b84eff;

}

nav a {
  font-weight: bold;
  color: #875dbd;
  background: transparent;
  text-decoration: none;
  text-transform: capitalize;
  margin: 1rem;
}

nav a.router-link-exact-active {
  color: #5a18c4;
}

h1{
 margin: 2rem;
 color: #8c8a92;
}
.page-enter, .page-leave-active{
  opacity: 0;
}
.page-leave-active, .page-leave-active{
  transition: opacity .4s;
}
</style>

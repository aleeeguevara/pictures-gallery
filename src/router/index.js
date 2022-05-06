import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import RegisterView from '../views/RegisterView.vue';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    menu: true,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
    menu: true,
  },
  {
    path: '/register/:id',
    name: 'edit',
    component: RegisterView,
    menu: false,
  },
  {
    path: '*',
    component: HomeView,
    menu: false,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

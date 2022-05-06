import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App.vue';
import router from './router';
import './directives/Transform';

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';
new Vue({
  // vue instance com obj de configuracao
  router,
  render: (h) => h(App),
}).$mount('#app');

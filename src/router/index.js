import Vue from 'vue';
import Router from 'vue-router';
import DemosHome from '@/views/DemosHome';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DemosHome',
      component: DemosHome
    }
  ]
});

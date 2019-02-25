import Vue from 'vue';
import Router from 'vue-router';
import DemosHome from '@/views/DemosHome';
import DemosField from '@/views/DemosField';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DemosHome',
      component: DemosHome
    }, {
      path: '/field',
      name: 'DemosField',
      component: DemosField
    }
  ]
});

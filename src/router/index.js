import Vue from 'vue';
import Router from 'vue-router';
import DemosHome from '@/views/DemosHome';
import DemosField from '@/views/DemosField';
import DemosRadio from '@/views/DemosRadio';
import DemoCheckbox from '@/views/DemoCheckbox';

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
    }, {
      path: '/radio',
      name: 'DemosRadio',
      component: DemosRadio
    }, {
      path: '/checkbox',
      name: 'DemoCheckbox',
      component: DemoCheckbox
    }
  ]
});

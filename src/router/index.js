import Vue from 'vue';
import Router from 'vue-router';
import DemosHome from '@/views/DemosHome';
import DemosField from '@/views/DemosField';
import DemosRadio from '@/views/DemosRadio';
import DemoCheckbox from '@/views/DemoCheckbox';
import DemosCount from '@/views/DemosCount';
import DemosTodoList from '@/views/DemosTodoList';

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
    }, {
      path: '/count',
      name: 'DemosCount',
      component: DemosCount
    }, {
      path: '/todolist',
      name: 'DemosTodoList',
      component: DemosTodoList
    }
  ]
});

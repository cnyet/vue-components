import Vue from 'vue';
import Router from 'vue-router';
import DemosHome from '@/views/DemosHome.vue';
import DemosField from '@/views/DemosField.vue';
import DemosRadio from '@/views/DemosRadio.vue';
import DemoCheckbox from '@/views/DemoCheckbox.vue';
import DemosCount from '@/views/DemosCount.vue';
import DemosTodoList from '@/views/DemosTodoList.vue';
import DemosLazyLoad from '@/views/DemosLazyLoad.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
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
    }, {
      path: '/lazyload',
      name: 'DemosLazyLoad',
      component: DemosLazyLoad
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
});

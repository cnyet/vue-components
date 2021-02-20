/*
 * @Descripttion:
 * @Author: 天泽
 * @Date: 2020-06-28 21:02:58
 * @LastEditors: 天泽
 * @LastEditTime: 2021-01-04 18:01:54
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

// const plugins = require.context('./plugins/', false, /\.ts$/);
// plugins.keys().forEach(plugins);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');

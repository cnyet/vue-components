/*
 * @Descripttion:
 * @Author: 天泽
 * @Date: 2020-06-28 21:02:58
 * @LastEditors: 天泽
 * @LastEditTime: 2021-01-04 16:09:40
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import DialPanel from './plugins';
import './registerServiceWorker';

const plugins = require.context('./plugins/', false, /\.ts$/);
plugins.keys().forEach(plugins);

Vue.use(DialPanel);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');

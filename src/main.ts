import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Toast from './plugins/use/Toast';
import './registerServiceWorker';

const plugins = require.context('./plugins/', false, /\.ts$/);
plugins.keys().forEach(plugins);

Vue.use(Toast);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
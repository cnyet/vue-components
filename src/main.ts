import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;
// 全局调用 axios 插件
Vue.use(VueAxios, axios);
// 在请求或响应被 then 或 catch 处理前添加拦截器
axios.interceptors.request.use(function(config) {
  console.log(config);
  return config;
}, function(error) {
  console.log(error);
  return Promise.reject(error);
});
axios.interceptors.response.use(function(response) {
  const res = response.data;
  console.log(res);
  return res;
}, function(error) {
  console.log(error);
  return Promise.reject(error);
});

Vue.component('component-a', {
  data: function() {
    return {
      name: 'componentA'
    };
  },
  render(h) {
    return h('h3', this.name);
  }
});

Vue.component('component-b', {
  data: function() {
    return {
      name: 'componentB'
    };
  },
  render(h) {
    return h('h3', this.name);
  }
});

Vue.directive('focus', {
  // 钩子函数
  bind: function(el, binding, vnode, oldVnode) {
    // 只调用一次，指令第一次绑定到元素时调用
    el.setAttribute('class', 'focus');
    el.style.lineHeight = '20px';
  },
  inserted: function(el) {
    // 被绑定元素插入父节点时调用
    el.focus();
  },
  update: function() {
    // 所在组件的 VNode 更新时调用, 但是可能发生在其子 VNode 更新之前
  },
  componentUpdated: function() {
    // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
  },
  unbind: function() {
    // 只调用一次，指令与元素解绑时调用
  }
});
// 实用基础的vue构造器创建一个子类
var Profile = Vue.extend({
  data: function() {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    }
  },
  render: function(h) {
    return h('p', `${this.firstName} ${this.lastName} aka ${this.alias}`);
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');

var profile = new Profile().$mount();
document.body.appendChild(profile.$el);
console.log(profile.$el);

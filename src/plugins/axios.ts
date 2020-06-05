/**
 * axios 全局配置
 */
import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

// 在发送请求之前，被then或catch处理前添加拦截器
axios.interceptors.request.use(function(config) {
  return config;
}, function(error) {
  return new Error('fail');
});

// 在收到响应之前，添加拦截器
axios.interceptors.response.use(function(response) {
  const res = response.data;
  return res;
}, function(error) {
  return new Error('fail');
});
/**
 * @description 全局注册vue指令
 */
import Vue from 'vue';

Vue.directive('focus', {
  inserted(el) {
    console.log(el);
    el.focus();
  }
});


/**
 * @description 全局注册vue指令
 */
import Vue from 'vue';

Vue.directive('focus', function () {
  inserted: function(el) {
    console.log(el);
    el.focus();
  }
});


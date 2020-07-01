/**
 * vue 插件
 */
import Vue from 'vue';

function install (vue: any) {
  // 1. 添加全局方法或属性
  // Vue.myGlobalMethod = function() {
  //   console.log('全局方法');
  // };
  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      console.log('添加全局方法或属性');
      console.log(el);
    }
  });
  // 3. 注入组件选项
  Vue.mixin({
    created() {
      const self: any = this;
      console.log(self.$options.name, '注入组件选项');
    }
  });
  // 4. 添加实例方法
  Vue.prototype.$myMethod = function(methodOptions: any) {
    console.log('添加实例方法');
  };
}

export default {
  install
};

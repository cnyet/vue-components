/**
 * 全局注册vue指令
 */
import Vue from 'vue';

Vue.directive('focus', {
  // 钩子函数
  bind(el, binding, vnode, oldVnode) {
    // 只调用一次，指令第一次绑定到元素时调用
    console.log('bind');
    el.setAttribute('class', 'focus');
    el.style.lineHeight = '20px';
  },
  inserted(el) {
    console.log('focus');
    // 被绑定元素插入父节点时调用
    el.focus();
  },
  update() {
    // 所在组件的 vnode 更新时调用，但是可能发生在其子组件 vnode  更新之前
    console.log('update');
  },
  componentUpdated() {
    // 指令所在组件的 vnode 及其子组件vnode 全部更新后调用
    console.log('componentUpdated');
  },
  unbind() {
    // 只调用一次，指令与元素解绑时调用
    console.log('unbind');
  }
});

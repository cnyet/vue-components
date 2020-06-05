/**
 * 注册全局组件
 */
import Vue from 'vue';

Vue.component('component-a', {
  data: function() {
    return {
      name: 'Component'
    };
  },
  render(h) {
    return h('h3', this.name);
  } 
});
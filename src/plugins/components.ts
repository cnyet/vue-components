/**
 * 注册全局组件
 */
import Vue from 'vue';

Vue.component('component-a', {
  data() {
    return {
      name: 'Component'
    };
  },
  render(h) {
    const self: any = this;
    return h('h3', self.name);
  }
});


Vue.component('component-b', {
  render (h) {
    return h('h1', 123);
  }
});
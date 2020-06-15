/**
 * toast 插件
 */
import Vue from 'vue';
import MyToast from './toast.jsx';

class Toast {
  static install () {
    // extend
    const MyExtend = Vue.extend({
      data: function() {
        return {
          firstName: 'Walter',
          lastName: 'White',
          alias: 'Heisenberg'
        };
      },
      render (h) {
        // return <MyToast></MyToast>;
        return h(
          'p',
          `${this.firstName} ${this.lastName} aka ${this.alias}`
        );
      }
    });
    const node = new MyExtend().$mount();
    document.body.appendChild(node.$el);
  }
}

export default Toast;
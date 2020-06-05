/**
 * 用vue构造器创建一个子类
 */
import Vue from 'vue';

const SubComponent = Vue.extend({
  data: function() {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg'
    };
  },
  render: function(h) {
    return h(
      'p',
      `${this.firstName} ${this.lastName} aka ${this.alias}`
    );
  }
});

// var node = new SubComponent().$mount();
// document.body.appendChild(node.$el);
// const.log(node);
/*
 * @Descripttion:
 * @Author: 天泽
 * @Date: 2020-09-11 17:38:33
 * @LastEditors: 天泽
 * @LastEditTime: 2021-01-04 16:09:58
 */
import Panel from './panel.vue';
import { VueConstructor } from 'vue/types/vue';

export default {
  install(Vue: VueConstructor, options: any) {
    Vue.prototype.$myMethod = function(arr: any[]) {
      if (arr.length < 0) {
        return false;
      } else {
        const result = arr.join('$myMethod');
        return result;
      }
    };
    Vue.component('dial-panel', Panel);
  }
};

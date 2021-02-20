import { CreateElement } from 'vue/types/umd';
import { VueConstructor } from 'vue/types/vue';
import './style.scss';

export default class ProgressBar {
  public static node: any;
  public static install (Vue: VueConstructor) {
    // 创建一个子类
    const VueInstance = Vue.extend({
      data() {
        return {
          status: false,
          loadingRate: 0,
          timer: null
        };
      },
      render(h: CreateElement) {
        const self: any = this;
        return h('div',
          {
            class: {
              'v-progress-bar': true
            },
            style: {
              display: self.status ? 'block' : 'none'
            }
          },
          [
            h('div',
              {
                class: {
                  'progress-bar-inner': true
                },
                style: {
                  width: `${self.loadingRate}%`
                }
              }
            )
          ]
        );
      }
    });
    this.node = new VueInstance().$mount();
    const hasNode = document.getElementsByClassName('v-progress-bar').item(0);
    if (!hasNode) {
      document.body.appendChild(this.node.$el);
    }
  }
  public static show () {
    let remainRate = 0;
    this.node.status = true;
    this.node.timer = setInterval(() => {
      if (remainRate >= 98) {
        clearInterval(this.node.timer);
        return;
      }
      if (remainRate >= 80) {
        remainRate += 2;
        this.node.loadingRate = remainRate;
        return;
      }
      remainRate += 10;
      this.node.loadingRate = remainRate;
    }, 1000);
  }
  public static hide () {
    this.node.loadingRate = 100;
    setTimeout(() => {
      this.node.status = false;
    }, 500);
    clearInterval(this.node.timer);
  }
}

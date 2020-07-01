/**
 * toast 插件
 */
// import MyToast from './toast.jsx';

class Toast {
  static node = null;
  public static install (Vue: any, options: any) {
    const MyExtend = Vue.extend({
      data() {
        return {
          status: false,
          firstName: 'Walter',
          lastName: 'White',
          alias: 'Heisenberg'
        };
      },
      render (h: function) {
        const self: any = this;
        return h(
          'p',
          {
            attrs: {
              id: 'bar'
            },
            style: {
              display: self.status ? 'block': 'none',
            }
          },
          `${self.firstName} ${self.lastName} aka ${self.alias}`
        );
      }
    });
    this.node = new MyExtend().$mount();
    document.body.appendChild(this.node.$el);
  }
  static show() {
    this.node.status = true;
    console.log('show');
  }
  static hide() {
    this.node.status = false;
    console.log('hide');
  }
}

export default Toast;

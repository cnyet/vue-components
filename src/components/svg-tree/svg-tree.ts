import Vue from 'vue';
import Component from 'vue-class-component';
import CubicBezier from '../cubic-bezier/cubic-bezier.vue';

@Component({
  props: {
    title: String,
    data: Array
  },
  components: { CubicBezier }
})
export default class SvgTree extends Vue {
  public size = 300;
  public lists = [];
  get rectX() {
    return 0;
  }
  get rectY() {
    return this.halfSize - 14;
  }
  get textX() {
    return this.rectX + 10;
  }
  get textY() {
    return this.rectY + 20;
  }
  get topHeight() {
    return this.size * 0.2;
  }
  get bottomHeight() {
    return this.size * 0.8;
  }
  get rightHeight() {
    return this.size * 0.8;
  }
  get width() {
    return this.size;
  }
  get halfSize() {
    return this.size * 0.5;
  }
  get distance() {
    const items = this.$props.data;
    const len = items.length || 1;
    return Math.round(this.size / items.length);
  }
  get offsetLeft() {
    return 120;
  }
  get viewbox() {
    return '0 0 ' + this.width + ' ' + this.width;
  }
  public created() {
    this.lists = this.$props.data;
  }
}

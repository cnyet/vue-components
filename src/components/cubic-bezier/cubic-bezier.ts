import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    index: Number,
    title: String,
    halfSize: Number,
    topHeight: Number,
    rightHeight: Number,
    offsetLeft: Number,
    distance: Number,
    item: Object
  }
})
export default class CubicBezier extends Vue {
  public size = 1000;
  get xPosition() {
    const distance = this.$props.distance;
    const index = this.$props.index;
    return distance * index + distance * 0.5;
  }
  get yPosition() {
    const distance = this.$props.distance;
    const index = this.$props.index;
    return distance * index + distance * 0.5;
  }
}

<template>
  <div class="carousel-container">
    <ul class="carousel-list">
      <li v-for="(item, index) of items" :key="index"
        :class="['carousel-item', (index === activeIndex || index === activeIndex-1) ? 'is-animating':'']"
        :style="itemStyle(index)">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  data () {
    return {
      items: [1, 2, 3],
      activeIndex: 0,
      timer: null
    };
  },
  methods: {
    setActiveItem () {
      this.timer = setInterval(() => {
        if (this.activeIndex >= 2) {
          this.activeIndex = 0;
        } else {
          this.activeIndex ++;
        }
      }, 3000);
    },
    itemStyle(index) {
      let calcTranslate = 0;
      if (this.activeIndex === 0 && index === this.items.length - 1) {
        calcTranslate = -600;
      } else if (this.activeIndex === this.items.length - 1 && index === 0) {
        calcTranslate = 600;
      } else if (index === this.activeIndex) {
        calcTranslate = 0;
      } else {
        calcTranslate = (index - this.activeIndex) * 600;
      }
      return {
        transform: `translateX(${calcTranslate}px)`
      };
    }
  },
  created () {
    this.setActiveItem();
  }
};
</script>

<style lang="scss">
.carousel-container{
  width: 600px;
  position: relative;
  overflow: hidden;
  .carousel-list{
    height: 200px;
    .carousel-item{
      background-color: #d3dce6;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: inline-block;
      overflow: hidden;
      z-index: 0;
      &:nth-child(2n) {
        background-color: #99a9bf;
      }
      &.active{
        z-index: 2;
        transform: translateX(0);
      }
      &.prev-child{
        transform: translateX(-600px);
      }
      &.next-child{
        transform: translateX(600px);
      }
      &.is-animating{
        transition: transform .3s ease-in-out;
      }
    }
  }
}
</style>

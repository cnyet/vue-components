<template>
  <div class="carousel-item"
    :class="{
      'is-active': active
    }">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'CarouselItem',
  props: {
    name: String,
    label: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
      hover: false,
      translate: 0,
      scale: 1,
      active: false,
      ready: false,
      inStage: false,
      animating: false
    };
  }
}
</script>
<style lang="scss">
.carousel-item{
  height: 200px;
  background-color: #d3dce6;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: inline-block;
  overflow: hidden;
  z-index: 0;
}
.is-active{
  transform: translateX(0);
}
</style>

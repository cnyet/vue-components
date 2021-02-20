<template>
  <div class="carousel-group">
    <h1>轮播图</h1>
    <Carousel />
  </div>
</template>

<script>
import Carousel from '../components/carousel/index.vue';
export default {
  name: 'CarouselGroup',
  components: { Carousel }
};
</script>
<style lang="scss">
.carousel-group{

}
</style>

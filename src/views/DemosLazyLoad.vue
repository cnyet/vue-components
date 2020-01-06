<template>
  <ul class="lazyload-wrapper" ref="group" @scroll="onScrollHandle">
    <li class="lazyload-item">
      <!-- <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"> -->
      <img class="lazyload-img" role="presentation" src="https://dummyimage.com/200x200/ddd/fff" :data-src="lazyLoadImg">
    </li>
    <li class="lazyload-item">
      <img class="lazyload-img" role="presentation" src="https://dummyimage.com/200x200/ddd/fff" :data-src="lazyLoadImg">
    </li>
    <li class="lazyload-item">
      <img class="lazyload-img" role="presentation" src="https://dummyimage.com/200x200/ddd/fff" :data-src="lazyLoadImg">
    </li>
    <li class="lazyload-item">
      <img class="lazyload-img" role="presentation" src="https://dummyimage.com/200x200/ddd/fff" :data-src="lazyLoadImg">
    </li>
    <li class="lazyload-item">
      <img class="lazyload-img" role="presentation" src="https://dummyimage.com/200x200/ddd/fff" :data-src="lazyLoadImg">
    </li>
  </ul>
</template>
<script type="text/javascript">
export default {
  name: 'DemosLazyLoad',
  data() {
    return {
      lazyLoadImg: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
    };
  },
  mounted() {
    this.lazyload();
  },
  methods: {
    lazyload() {
      const groupRef = this.$refs.group;
      const groupHeight = groupRef.clientHeight;
      const list = document.getElementsByClassName('lazyload-item');
      for (let i = 0; i < list.length; i++) {
        const itemHeight = list.item(i).clientHeight;
        const itemOffsetTop = list.item(i).offsetTop;
        const offsetX = groupHeight + groupRef.scrollTop - itemOffsetTop;
        if (offsetX > 0 && offsetX <= groupHeight) {
          const item = list.item(i).children.item(0);
          const dataSrc = item.getAttribute('data-src');
          setTimeout(function() {
            item.src = dataSrc;
          }, 500);
        }
      }
    },
    onScrollHandle() {
      this.lazyload();
    }
  }
};
</script>
<style type="text/css" lang="scss">
.lazyload-wrapper{
  height: 100%;
  overflow: auto;
  .lazyload-item{
    padding: 10px;
    .lazyload-img{
      width: 200px;
      height: 200px;
    }
  }
}

</style>

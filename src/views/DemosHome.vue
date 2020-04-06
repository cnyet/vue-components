<template>
  <div class="demosHome-container">
    <h1 class="demosHome-title">
      <img class="logo" src="../assets/logo.png" alt="logo">
    </h1>
    <h4 class="demosHome-desc">移动端UI组件库</h4>
    <demos-nav
      v-for="(item, index) in navData"
      :key="index"
      :data="item">
    </demos-nav>
    <component :is="currentComponent"></component>
    <button @click="changeComponent">切换公共组件</button>
  </div>
</template>

<script>
import DemosNav from './DemosNav.vue';
import { HOMENAVS } from '../mock/home-nav.ts';
import api from '../api';

export default {
  name: 'DemosHome',
  props: { },
  components: {
    DemosNav
  },
  data () {
    return {
      navData: HOMENAVS,
      currentComponent: 'component-a'
    };
  },
  created() {
    this.$http.get(api.test, {
      params: {
        name: 'hello'
      }
    }).then(function(res) {

    }).catch(function(err) {

    });
  },
  methods: {
    changeComponent() {
      this.currentComponent = 'component-b';
    }
  }
};
</script>

<style lang="scss">
.demosHome-container{
  padding: 50px 15px 20px;
  .demosHome-title{
    margin: 0;
    text-align: center;
    .logo{
      width: 36px;
      display: inline-block;
      vertical-align: middle;
    }
  }
  .demosHome-desc{
    text-align: center;
    font-weight: normal;
  }
  .demosHome-nav{

  }
}
</style>

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
  </div>
</template>

<script>
import Vue from 'vue';
import DemosNav from './DemosNav.vue';
import { HOMENAVS } from '../api/mock/home-nav.ts';
// import ProgressBar from '@/plugins/progress-bar';
import api from '../api';

// Vue.use(ProgressBar);

export default {
  name: 'DemosHome',
  props: { },
  components: {
    DemosNav
  },
  data () {
    return {
      navData: HOMENAVS
    };
  }
};
</script>

<style lang="scss">
.demosHome-container{
  padding: 50px 15px 20px;
  .demosHome-title{
    margin: 10px auto;
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
    padding: 15px;
  }
  .demosHome-nav{

  }
}
</style>

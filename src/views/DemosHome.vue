<template>
  <div class="demosHome-container">
    <h1 class="demosHome-title">
      <img class="logo" src="../assets/images/logo.png" alt="logo">
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
import DemosNav from './DemosNav.vue';

export default {
  name: 'DemosHome',
  props: { },
  components: {
    DemosNav
  },
  data () {
    return {
      navData: [{
        title: '基础组件',
        group: [{
          link: 'javascript:;',
          title: 'Button 按钮'
        }, {
          link: 'javascript:;',
          title: 'Cell 单元格'
        }, {
          link: 'javascript:;',
          title: 'Icon 图标'
        }, {
          link: 'javascript:;',
          title: 'Layout 布局'
        }, {
          link: 'javascript:;',
          title: 'Popup 弹出层'
        }]
      }, {
        title: '表单组件',
        group: [{
          link: 'javascript:;',
          title: 'Button 按钮'
        }]
      }, {
        title: '反馈组件',
        group: [{
          link: 'javascript:;',
          title: 'Button 按钮'
        }]
      }, {
        title: '展示组件',
        group: [{
          link: 'javascript:;',
          title: 'Button 按钮'
        }]
      }, {
        title: '业务组件',
        group: [{
          link: 'javascript:;',
          title: 'Button 按钮'
        }]
      }]
    };
  },
  computed: {

  },
  created () {

  },
  destroyed () {

  },
  watch: {

  },
  methods: {

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

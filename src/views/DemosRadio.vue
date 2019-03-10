<template>
  <div class="radio-wrapper">

  </div>
</template>

<script>
import VRadio from '../components/radio/index.vue';
export default {
  name: 'DemosRadio',
  components: {
    VRadio
  },
  data () {
    return {

    };
  },
  created () {

  },
  watch: {

  },
  methods: {
    changeCollapse (value) {
      this.expand = value;
    }
  }
};
</script>
<style lang="scss">
  @import "../assets/styles/variable.scss";
  .radio-wrapper{
    background-color: $defaultBgColor;
  }
</style>

<template>
  <div class="radio-container">
    <radio-group
      title="性别"
      name="sex"
      v-model="value">
      <v-radio value="1">男</v-radio>
      <v-radio value="2">女</v-radio>
      <v-radio value="0">保密</v-radio>
    </radio-group>
  </div>
</template>

<script>
import RadioGroup from '../components/radio-group/index.vue';
import VRadio from '../components/radio/index.vue';
export default {
  name: 'DemosRadio',
  components: {
    RadioGroup,
    VRadio
  },
  data () {
    return {
      value: '1'
    };
  },
  created () {

  },
  watch: {

  },
  methods: {

  }
};
</script>
<style lang="scss">
  @import "../assets/styles/variable.scss";
  .radio-container{
    background-color: $defaultBgColor;
  }
</style>

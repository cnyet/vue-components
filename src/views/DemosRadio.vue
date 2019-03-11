<template>
  <div class="radio-container">
    <radio-group title="性别" v-model="value" $change="change">
      <v-radio name="1" radioText="男"></v-radio>
      <v-radio name="2" radioText="女"></v-radio>
      <v-radio name="0" radioText="保密"></v-radio>
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
    value (value, oldVal) {
      console.log(value);
    }
  },
  methods: {
    change (value) {
      console.log('emit');
    }
  }
};
</script>
<style lang="scss">
  @import "../assets/styles/variable.scss";
  .radio-container{
    background-color: $defaultBgColor;
  }
</style>

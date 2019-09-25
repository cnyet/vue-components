<template>
  <div class="radio-container">
    <radio-group
      title="性别">
      <v-radio
        v-for="(item, index) in radioGroup"
        :key="index"
        :value="item.value"
        name="sex"
        v-model="radioVal">
        {{item.label}}
      </v-radio>
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
      radioVal: null,
      radioGroup: [{
        label: '男',
        value: '1'
      }, {
        label: '女',
        value: '2'
      }, {
        label: '保密',
        value: '0'
      }]
    };
  }
};
</script>
<style lang="scss">
  @import "../assets/styles/variable.scss";
  .radio-container{
    background-color: $defaultBgColor;
  }
</style>

<template>
  <div class="checkbox-container">
    <checkbox-group
      title="学科">
      <v-checkbox
        v-for="(item, index) in checkboxGroup"
        :key="index"
        :value="item.value"
        v-model="checkboxVal">
        {{item.label}}
      </v-checkbox>
    </checkbox-group>
  </div>
</template>
<script>
import CheckboxGroup from '../components/checkbox-group/index.vue';
import VCheckbox from '../components/checkbox/index.vue';
export default {
  name: 'DemoCheckbox',
  components: {
    CheckboxGroup,
    VCheckbox
  },
  data () {
    return {
      checkboxVal: [],
      checkboxGroup: [{
        label: '语文',
        value: '1'
      }, {
        label: '数学',
        value: '2'
      }, {
        label: '英语',
        value: '3'
      }, {
        label: '马克思主义理论',
        value: '4'
      }]
    };
  }
};
</script>
<style lang="scss" scoped>
.checkbox-container{}
</style>

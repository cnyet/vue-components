<template>
  <div class="field-container">
    <v-field
      title="基础用法"
      labelText="姓名"
      labelIcon="user"
      fieldValue="小明"
      placeholder="请输入姓名"
      @change="getValue"
      clearable
      required />
  </div>
</template>

<script>
import VField from '../components/field/index.vue';
export default {
  name: 'DemosField',
  components: { VField },
  data () {
    return {

    };
  },
  methods: {
    getValue (value) {
      console.log(value);
    }
  }
};
</script>

<style lang="scss">
@import "../assets/styles/variable.scss";
.field-container{
  background-color: $defaultBgColor;
}

</style>

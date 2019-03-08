<template>
  <div class="field-container">
    <cell-group title="基础用法">
      <v-field
        labelText="姓名"
        labelIcon="user"
        fieldValue="小明"
        placeholder="请输入姓名"
        @change="getValue"
        clearable
        required />
      <v-field
        labelText="密码"
        type="password"
        placeholder="请输入密码"
        @change="getValue"
        clearable
        required />
    </cell-group>
    <cell-group title="禁止输入">
      <v-field
        labelText="用户名"
        placeholder="禁止输入"
        @change="getValue"
        disabled
        required />
    </cell-group>
  </div>
</template>

<script>
import VField from '../components/field/index.vue';
import CellGroup from '../components/cell-group/index.vue';
export default {
  name: 'DemosField',
  components: { VField, CellGroup },
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

<template>
  <div class="field-container">
    <cell-group title="基础用法">
      <v-field
        labelText="姓名"
        labelIcon="user"
        v-model="formData.name"
        placeholder="请输入姓名"
        clearable
        required />
      <v-field
        labelText="密码"
        type="password"
        placeholder="请输入密码"
        v-model="formData.password"
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
      formData: {
        name: '小明',
        password: ''
      }
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

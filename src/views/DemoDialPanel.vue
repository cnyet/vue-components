<!--
 * @Descripttion:
 * @Author: 天泽
 * @Date: 2020-09-11 17:33:32
 * @LastEditors: 天泽
 * @LastEditTime: 2021-01-05 12:01:49
-->
<template>
  <div class="contianer">
    <h3>DialPanel</h3>
    <dial-panel @change="onChangeHandle" />
    <dial-toast :text="dailNumber" />
  </div>
</template>
<script>
import DialPanel from '@/plugins/panel.vue';
import DialToast from '@/plugins/toast.vue';

export default {
  name: 'DemoDialPanel',
  components: { DialPanel, DialToast },
  data() {
    return {
      dailNumber: ''
    };
  },
  methods: {
    onChangeHandle(value) {
      this.dailNumber = value;
    }
  }
};
</script>
<style lang="scss" scoped>
.container{

}
</style>

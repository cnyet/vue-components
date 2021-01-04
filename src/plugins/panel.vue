<!--
 * @Descripttion:
 * @Author: 天泽
 * @Date: 2020-09-11 17:37:34
 * @LastEditors: 天泽
 * @LastEditTime: 2021-01-04 16:13:45
-->
<template>
  <div class="contianer">
    <div class="number-panel">
      <p v-show="checkedNumber.length>0" class="number-show">{{checkedNumber}}</p>
      <p v-show="!checkedNumber" class="number-show"></p>
      <ul>
        <li @click="clickThisNumber($event)" v-for="index in 9" :key="index">{{index}}</li>
        <li @click="clickThisNumber($event)">0</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Panel',
  data() {
    return {
      checkedNumber: ''
    };
  },
  components: {},
  methods: {
    clickThisNumber(e) {
      this.checkedNumber = this.checkedNumber.concat(e.currentTarget.innerHTML);
    }
  }
};
</script>
<style lang="scss" scoped>
.number-show {
  height: 20px;
}
.number-panel ul {
  padding: 0;
}
.number-panel ul li {
  display: inline-block;
  width: 28%;
  height: 50px;
  line-height: 50px;
  margin-top: 20px;
  background: #ddd;
  border-radius: 8px;
  margin-right: 10px;
}
.number-panel ul li input {
  display: none;
}
</style>

<!--
 * @Descripttion:
 * @Author: 天泽
 * @Date: 2020-09-11 17:37:34
 * @LastEditors: 天泽
 * @LastEditTime: 2021-01-04 18:16:11
-->
<template>
  <div class="contianer">
    <div class="number-panel">
      <p class="number-show">
        <span v-show="checkedNumber">{{checkedNumber}}</span>
      </p>
      <ul>
        <li @click="clickThisNumber(index)" v-for="index in 9" :key="index">{{index}}</li>
        <li @click="clickThisNumber(0)">0</li>
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
  methods: {
    clickThisNumber(value) {
      this.$emit('change', value);
      this.checkedNumber = this.checkedNumber + value;
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

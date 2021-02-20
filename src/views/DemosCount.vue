<!--
 * @Descripttion:
 * @Author: 天泽
 * @Date: 2020-05-06 11:15:43
 * @LastEditors: 天泽
 * @LastEditTime: 2021-01-04 16:52:35
-->
<template>
  <div class="count-container">
    <count-up :value="countValue">
      <template v-slot:header="{head: title}">
        {{title}}
      </template>
      <template v-slot:footer="slotScope">
        {{slotScope.data.firstName}}
      </template>
    </count-up>
    <h4>倒计时</h4>
    <input v-focus>
    <count-down v-show="showCount" class="count" :start="status" @finish="onFinish"></count-down>
    <button class="btn" @click="onClick">开始倒计时</button>
  </div>
</template>

<script >
import CountUp from '../components/count-up/index.vue';
import CountDown from '../components/count-down/index.vue';
export default {
  name: 'DemosCount',
  components: { CountUp, CountDown },
  data() {
    return {
      countValue: 3268701,
      showCount: false,
      status: false
    };
  },
  methods: {
    onFinish(value) {
      console.log(value);
    },
    onClick() {
      this.status = this.showCount = true;
    }
  }
};
</script>
<style lang="scss">
.count-container{
  padding: 50px;
}
.count{
  font-size: 30px;
  color: red;
  font-weight: bold;
}
.finish{
  font-size: 20px;
}
.btn{
  color: #fff;
  background-color: #1890ff;
  border-color: #1890ff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
}
.star_five{
  margin: 50px 0;
  position: relative;
  display: block;
  color: #f7f7f7;
  width: 0px;
  height: 0px;
  border-right:  100px solid transparent;
  border-bottom: 70px  solid #f7f7f7;
  border-left:   100px solid transparent;
  transform:    rotate(35deg);
  &:before{
    border-bottom: 80px solid #f7f7f7;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    position: absolute;
    height: 0;
    width: 0;
    top: -45px;
    left: -65px;
    display: block;
    content: '';
    transform: rotate(-35deg);
  }
  &:after{
    position: absolute;
    display: block;
    color: #f7f7f7;
    top: 3px;
    left: -105px;
    width: 0px;
    height: 0px;
    border-right: 100px solid transparent;
    border-bottom: 70px solid #f7f7f7;
    border-left: 100px solid transparent;
    transform: rotate(-70deg);
    content: '';
  }
}
</style>

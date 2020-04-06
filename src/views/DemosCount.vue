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
</style>

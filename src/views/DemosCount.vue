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
  </div>
</template>

<script >
import CountUp from '../components/count-up/index.vue';
export default {
  name: 'DemosCount',
  components: { CountUp },
  data() {
    return {
      countValue: 3268701
    };
  }
};
</script>
<style lang="scss">
.count-container{
  padding: 50px;
}
</style>

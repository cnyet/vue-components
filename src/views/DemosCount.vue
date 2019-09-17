<template>
  <div class="count-container">
    <v-count>3268701</v-count>
  </div>
</template>

<script >
import VCount from '../components/count/index.vue';
export default {
  name: 'DemosCount',
  components: { VCount }
};
</script>
<style lang="scss">
.count-container{
  padding: 50px;
}
</style>

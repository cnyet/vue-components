<template>
  <v-collapse :title="data.title">
    <v-collapse-item
      v-for="(item, index) in data.group"
      :key="index"
      :data="item">
    </v-collapse-item>
  </v-collapse>
</template>

<script>
import VCollapse from '../components/collapse/index.vue';
import VCollapseItem from '../components/collapse-item/index.vue';

export default {
  name: 'DemosNav',
  props: {
    data: Object
  },
  components: {
    VCollapse,
    VCollapseItem
  },
  data () {
    return {

    };
  }
};
</script>
<style lang="scss">

</style>

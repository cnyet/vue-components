<template>
  <v-collapse
    :title="data.title"
    @change="changeCollapse">
    <v-collapse-item>
      <v-cell
        v-for="(item, index) in data.group"
        :key="index"
        :data="item"
        isLink>
      </v-cell>
    </v-collapse-item>
  </v-collapse>
</template>

<script>
import VCollapse from '../components/collapse/index.vue';
import VCollapseItem from '../components/collapse-item/index.vue';
import VCell from '../components/cell/index.vue';

export default {
  name: 'DemosNav',
  props: {
    data: Object
  },
  components: {
    VCollapse,
    VCollapseItem,
    VCell
  },
  data () {
    return {
      expand: false
    };
  },
  created () {

  },
  watch: {

  },
  methods: {
    changeCollapse (value) {
      this.expand = value;
    }
  }
};
</script>
<style lang="scss">

</style>

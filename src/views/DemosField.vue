<template>
  <div class="field-container">
    <v-field></v-field>
  </div>
</template>

<script>
import VField from '../components/field/index.vue';
export default {
  name: 'DemosField',
  data () {
    return {

    };
  },
  components: { VField }
};
</script>

<style lang="scss">
@import "../assets/styles/variable.scss";
.field-container{
  background-color: $defaultBgColor;
}

</style>

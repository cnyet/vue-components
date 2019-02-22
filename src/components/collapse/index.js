export default {
  name: 'VCollapse',
  props: {
    title: String,
    group: Array
  },
  components: { },
  data () {
    return {
      show: false
    }
  },
  created () {

  },
  mounted() {

  },
  destroyed () {

  },
  watch: {

  },
  methods: {
    toggleExpand(event) {
      this.show = !this.show;
      this.$emit('change', this.show);
    }
  }
}

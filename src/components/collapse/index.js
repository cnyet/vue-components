export default {
  name: 'VCollapse',
  props: {
    title: String,
    group: Array
  },
  components: { },
  data () {
    return {
      showExpand: false
    }
  },
  created () {

  },
  destroyed () {

  },
  watch: {

  },
  methods: {
    toggleExpand () {
      this.showExpand = !this.showExpand;
    }
  }
}

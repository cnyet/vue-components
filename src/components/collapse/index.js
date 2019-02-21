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
    toggleExpand(event) {
      if (this.showExpand) {
        this.showExpand = false;
      } else {
        this.showExpand = true;
      }
    }
  }
}

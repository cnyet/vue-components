export default {
  name: 'VCollapse',
  props: {
    title: String,
    group: Array
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    toggleExpand(event) {
      this.show = !this.show;
      this.$emit('change', this.show);
    }
  }
}

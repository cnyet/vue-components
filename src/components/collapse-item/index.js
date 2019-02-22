export default {
  name: 'VCollapseItem',
  components: { },
  props: { },
  data () {
    return {
      contentHeight: 0
    }
  },
  computed: {
    expand() {
      return this.$parent.show;
    }
  },
  created () {

  },
  watch: {
    expand(newVal, oldVal) {
      this.$nextTick(() => {
        const {content, group} = this.$refs;
        if (!content || !group) {
          return;
        }
        this.contentHeight = `${group.clientHeight}px`;
        content.style.height = newVal ? this.contentHeight : 0;
      });
    }
  },
  methods: {
    afterEnter: function (el) {
      this.$refs.content.removeAttribute('style');
    },
    beforeLeave: function (el) {
      this.$refs.content.style.height = this.contentHeight;
    },
  }
}

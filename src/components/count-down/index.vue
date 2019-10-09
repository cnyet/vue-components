<script>
export default {
  name: 'CountDown',
  props: {
    value: Number,
    start: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      interval: null,
      index: 0,
      currentTime: 60
    };
  },
  watch: {
    start(newVal, oldVal) {
      if (newVal === true && oldVal === false && this.currentTime > 0) {
        this.tick();
      }
      if (newVal === false && oldVal === true) {
        this.stop();
      }
    }
  },
  created() {
    if (this.value) {
      this.currentTime = this.value;
    }
  },
  mounted() {
    if (this.start) {
      this.tick();
    }
  },
  methods: {
    tick() {
      const self = this;
      this.interval = setInterval(function() {
        if (self.currentTime > 0) {
          self.currentTime-- ;
        } else {
          self.stop();
          self.index ++ ;
          self.$emit('finish', self.index);
        }
      }, 1000);
    },
    stop() {
      clearInterval(this.interval);
    }
  },
  render(h) {
    return h('p', {}, this.currentTime);
  }
};
</script>

export default {
  name: 'VRadio',
  props: {
    name: String,
    radioText: String
  },
  data () {
    return {
      currentValue: null,
      checked: false
    };
  },
  created () {
    this.currentValue = this.$parent.value;
    if (this.name === this.currentValue) {
      this.checked = true;
    }
  },
  watch: {

  },
  methods: {
    checkRadio() {
      this.$emit('click');
      // this.$parent.value = value;
    }
  }
}

export default {
  name: 'RadioGroup',
  props: {
    title: String,
    name: String,
    value: String
  },
  data () {
    return {
      currentValue: null,
    };
  },
  watch: {
    currentValue (value, oldVal) {
      this.$parent.value = value;
    }
  },
  created () {
    this.currentValue = this.value;
  },
  methods: {

  }
};

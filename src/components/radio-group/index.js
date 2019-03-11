export default {
  name: 'RadioGroup',
  props: {
    title: String,
    value: null
  },
  data () {
    return {

    };
  },
  watch: {
    value(value) {
      this.$emit('change', value);
    }
    // value (value, oldVal) {
    //   this.$parent.value = value;
    //   this.$children.forEach(item => {
    //     if (item.name === value) {
    //       item.checked = true;
    //     } else {
    //       item.checked = false;
    //     }
    //   })
    // }
  },
  created () {
    console.log(this.value);
  },
  methods: {
    change(value) {
      console.log('emit');
    }
  }
};

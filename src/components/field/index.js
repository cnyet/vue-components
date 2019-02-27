export default {
  name: 'VField',
  data () {
    return {
      value: ''
    };
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    fieldValue: {
      type: String,
      default: ''
    },
    labelText: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    label: {
      type: String,
      default: ''
    },
    labelIcon: {
      type: String,
      default: ''
    },
    invalid: {
      type: Boolean,
      default: false
    }
  },
  computed: {

  },
  created () {
    this.value = this.fieldValue;
  },
  destroyed () {

  },
  watch: {

  },
  methods: {
    onFocus() {

    },
    onBlur() {
      console.log(this.value);
    }
  }
}

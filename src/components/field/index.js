export default {
  name: 'VField',
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
    },
    clearable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      value: '',
      showClose: false
    };
  },
  computed: {

  },
  created () {
    this.value = this.fieldValue;
  },
  destroyed () {

  },
  watch: {
    value(value, oldVal) {
      if (value) {
        this.showClose = true;
      } else {
        this.showClose = false;
      }
    }
  },
  methods: {
    onFocus() {

    },
    onBlur() {
      this.$emit('change', this.value);
    },
    close() {
      this.value = '';
    }
  }
}

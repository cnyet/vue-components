export default {
  name: 'VField',
  props: {
    value: {
      type: String,
      default: ''
    },
    labelText: {
      type: String,
      default: '',
      required: true,
      validator: function(value) {
        return ['test', 'sync', 1].indexOf(value) === -1;
      }
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
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showClose: false
    };
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
    onFocus() {},    // tslint: disable-line
    onBlur() {
      this.$emit('change', this.value);
    },
    close() {
      this.value = '';
    }
  }
}

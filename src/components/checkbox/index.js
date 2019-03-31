export default {
  name: 'VCheckbox',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    value: String,
    checked: Array
  },
  computed: {

  },
  data () {
    return {
      isChecked: false,
      checkedBox: []
    };
  },
  watch: {
    checked(newVal) {
      this.checkedBox = newVal;
    }
  },
  created () {
    this.checkedBox = this.checked;
    if (this.checked.indexOf(this.value) > 0) {
        this.isChecked = true;
      } else {
        this.isChecked = false;
      }
  },
  methods: {
    handleChange(e) {
      this.isChecked = e.target.checked;
      if (this.isChecked) {
        this.checkedBox.push(this.value);
      } else {
        this.checkedBox = this.checkedBox.filter(item => {
          return item != this.value;
        });
      }
      this.$emit('change', this.checkedBox);
    }
  }
};

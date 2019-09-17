
export default {
  name: 'VCount',
  props: {
    value: [String, Number]
  },
  data() {
    return {
      user: {
        firstName: 'Leborn',
        lastName: 'James'
      }
    };
  },
  created() {
    console.log(this.$slots.default);
  }
}

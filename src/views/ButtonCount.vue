<script>
const ButtonCounter = {
  name: 'button-counter',
  props: ['count'],
  methods: {
    onClick() {
      console.log(this.propsCount);
      this.$emit('change', this.count + 1);
    }
  },
  render() {
    return (
      <button onClick={this.onClick}>click me {this.count} times.</button>
    );
  }
};

export default {
  name: 'ButtonCounterContainer',
  data() {
    return {
      count: 0
    };
  },
  methods: {
    onChange(val) {
      this.count = val;
    }
  },
  render() {
    const { count, onChange } = this;
    const btnProps = {
      props: {
        count
      },
      on: {
        change: onChange
      },
      attrs: {
        type: 'button'
      },
      style: {
        marginTop: '10px'
      }
    };
    return (
      <div>
        <ButtonCounter
          style={{marginTop: '10px'}}
          type='button'
          count={count}
          onChange={onChange}>
        </ButtonCounter>
      </div>
    );
  }
};
</script>
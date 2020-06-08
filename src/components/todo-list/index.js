import MyTodo from './MyTodo.jsx';

export default {
  name: 'TodoList',
  components: {
    MyTodo
  },
  data () {
    return {
      list: [{
        index: 1,
        gender: 'male',
        name: 'Joseph'
      }, {
        index: 2,
        gender: 'male',
        name: 'Thomas'
      }, {
        index: 3,
        gender: 'female',
        name: 'Amy'
      }, {
        index: 4,
        gender: 'female',
        name: 'Lewis'
      }, {
        index: 5,
        gender: 'female',
        name: 'Sarah'
      }]
    }
  },
  methods: {
    onChangeHandle(value) {
      console.log(value);
    } 
  }
}

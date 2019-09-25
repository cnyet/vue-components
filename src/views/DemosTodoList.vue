<template>
  <todo-list>
    <template v-slot:todo="{ todo }">
      <span v-if="todo.index > 3">{{todo.name}} ✓</span>
    </template>
  </todo-list>
</template>

<script>
import TodoList from '../components/todo-list/index.vue';
export default {
  name: 'DemosTodoList',
  components: { TodoList }
};
</script>
<style lang="scss">

</style>

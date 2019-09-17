<template>
  <div class="todolist-wrapper">
    <ul>
      <li v-for="todo in list" :key="todo.index">
        <slot name="todo" :todo="todo">
          {{todo.index}}
        </slot>
      </li>
    </ul>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss" scoped></style>

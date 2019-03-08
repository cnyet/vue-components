<template>
  <div class="cell-group-wrapper">
    <div class="cell-group__title" v-if="title">{{title}}</div>
    <div class="cell-group__content">
      <slot></slot>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>

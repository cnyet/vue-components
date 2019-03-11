<template>
  <div class="radio-group">
    <div class="radio-group__title" v-if="title">{{title}}</div>
    <div class="radio-group__content">
      <slot></slot>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>

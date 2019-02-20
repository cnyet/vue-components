<template>
  <div :class="['vue-cell', isLink ? 'is-link' : '']">
    <div class="vue-cell__title">{{data.title}}</div>
    <i class="vue-cell__icon fa fa-angle-right" aria-hidden="true"></i>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>

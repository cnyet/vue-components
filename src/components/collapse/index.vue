<template>
  <div class="vue-collapse">
    <div class="collapse-head">
      <div class="collapse-head__title">{{title}}</div>
      <i class="collapse-head__icon fa fa-angle-down" aria-hidden="true"></i>
    </div>
    <div class="collapse-body" v-show="showExpand">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/javascript" src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>

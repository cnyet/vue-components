<template>
  <div class="cell-wrapper">
    <router-link class="cell-wrapper__item is-link" v-if="isLink" :to="data.link">
      <div class="cell-title">{{data.title}}</div>
      <i class="cell-icon fa fa-angle-right" aria-hidden="true"></i>
      <slot></slot>
    </router-link>
    <div class="cell-wrapper__item" v-else>
      <div class="cell-title">{{data.title}}</div>
      <i class="cell-icon fa fa-angle-right" aria-hidden="true"></i>
      <slot></slot>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>

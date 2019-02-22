<template>
  <div :class="['vue-collapse', show ? 'expanded' : '']">
    <div class="collapse-head" @click="toggleExpand">
      <div class="collapse-head__title">{{title}}</div>
      <i class="collapse-head__icon fa fa-angle-right" aria-hidden="true"></i>
    </div>
    <slot></slot>
  </div>
</template>

<script type="text/javascript" src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>

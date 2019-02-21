<template>
  <div :class="['vue-collapse', showExpand ? 'collapse-expand' : '']">
    <div class="collapse-head" @click="toggleExpand">
      <div class="collapse-head__title">{{title}}</div>
      <i class="collapse-head__icon fa fa-angle-right" aria-hidden="true"></i>
    </div>
    <transition name="slide">
      <div class="collapse-body" v-show="showExpand">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script type="text/javascript" src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>

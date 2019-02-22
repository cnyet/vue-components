<template>
  <transition
    name="slide"
    v-on:after-enter="afterEnter"
    v-on:before-leave="beforeLeave">
    <div class="collapse-content" ref="content" v-show="expand">
      <div class="collapse-item" ref="group">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script type="text/javascript" src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>

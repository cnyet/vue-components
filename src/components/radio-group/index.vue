<template>
  <div class="radio-group">
    <template v-if="inline">
      <div class="radio-inline">
        <div class="radio-inline__title" v-if="title">{{title}}</div>
        <div class="radio-inline__content">
          <slot></slot>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="radio-group__title" v-if="title">{{title}}</div>
      <div class="radio-group__content">
        <slot></slot>
      </div>
    </template>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>

<template>
  <div class="radio-wrapper">
    <div class="radio-wrapper__icon">
      <i v-if="checked" class="fa fa-check-circle" aria-hidden="true"></i>
      <i v-else class="fa fa-circle-thin" aria-hidden="true"></i>
    </div>
    <span class="radio-wrapper__label">{{radioText}}</span>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>

<template>
  <div class="radio-wrapper" :name="name">
    <div class="radio-wrapper__icon" @click="checkRadio(name)">
      <i :class="['fa', checked ? 'fa-check-circle' : 'fa-circle-thin']" aria-hidden="true"></i>
    </div>
    <span class="radio-wrapper__label" @click="checkRadio(name)">{{radioText}}</span>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>

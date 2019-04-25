<template>
  <div class="radio-wrapper">
    <input class="radio-item"
      :id="name+value"
      type="radio"
      :name="name"
      :value="value"
      @change="$emit('change', value)">
    <i :class="['fa', value == checked ? 'fa-check-circle' : 'fa-circle-thin']" aria-hidden="true"></i>
    <label class="radio-label" :for="name+value">
      <slot></slot>
    </label>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>

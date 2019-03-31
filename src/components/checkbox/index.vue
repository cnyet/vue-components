<template>
  <div class="checkbox-wrapper">
    <input class="checkbox-item"
      :id="'check'+value"
      :value="value"
      type="checkbox"
      :checked="isChecked"
      @change="handleChange">
    <i :class="['fa', isChecked ? 'fa-check-square' : 'fa-square-o']" aria-hidden="true"></i>
    <label class="checkbox-label" :for="'check'+value">
      <slot></slot>
    </label>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" src="./index.scss" scoped></style>

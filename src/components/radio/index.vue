<template>
  <div class="radio-wrapper">
    <div class="radio-wrapper__content">
      <input class="radio-item"
        :id="radioName+value"
        type="radio"
        :name="radioName"
        :value="value"
        v-model="$parent.currentValue">
      <i :class="['fa', $parent.currentValue == value ? 'fa-check-circle' : 'fa-circle-thin']" aria-hidden="true"></i>
      <label class="radio-label" :for="radioName+value">
        <slot></slot>
      </label>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>

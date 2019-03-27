<template>
  <div class="field-wrapper">
    <div :class="['field-wrapper__item', required ? 'required': '']">
      <div class="field-item__label">
        <span class="field-label__icon" v-if="labelIcon">
          <i class="fa fa-user-o" aria-hidden="true"></i>
        </span>
        <span>{{labelText}}</span>
      </div>
      <div class="field-item__content">
        <div class="field-item__body">
          <input class="field-item__input"
          :value="value"
          @input="$emit('input', $event.target.value)"
          :type="type"
          :placeholder="placeholder"
          :disabled="disabled">
        </div>
        <i v-if="clearable && showClose" class="fa fa-times-circle" aria-hidden="true" @click="close"></i>
        <div class="field-item__error" v-if="invalid">错误</div>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss" scoped></style>

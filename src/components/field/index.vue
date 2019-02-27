<template>
  <div class="field-wrapper">
    <div class="field-wrapper__title" v-if="title">{{title}}</div>
    <div class="field-group">
      <div :class="['field-group__item', required ? 'required': '']">
        <div class="field-item__label">
          <span class="field-label__icon" v-if="labelIcon">
            <i class="fa fa-user-o" aria-hidden="true"></i>
          </span>
          <span>{{labelText}}</span>
        </div>
        <div class="field-item__content">
          <div class="field-item__body">
            <input class="field-item__input"
            v-model="value"
            :type="type"
            :placeholder="placeholder"
            @focus="onFocus"
            @blur="onBlur">
          </div>
          <div class="field-item__error" v-if="invalid">错误</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>

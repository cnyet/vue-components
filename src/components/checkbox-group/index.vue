<template>
  <div class="checkbox-group">
    <template v-if="inline">
      <div class="checkbox-inline">
        <div class="checkbox-inline__title" v-if="title">{{title}}</div>
        <div class="checkbox-inline__content">
          <slot></slot>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="checkbox-group__title" v-if="title">{{title}}</div>
      <div class="checkbox-group__content">
        <slot></slot>
      </div>
    </template>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" src="./index.scss" scoped></style>

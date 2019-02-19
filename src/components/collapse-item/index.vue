<template>
  <div class="collapse-item-wrapper">
    <div class="collapse-item-content" v-if="typeof data === 'string'">
      {{data}}
    </div>
    <div class="collapse-item-group" v-if="typeof data === 'object'">
      <v-cell :title="data.title"></v-cell>
    </div>
  </div>
</template>

<script type="text/javascript" src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>

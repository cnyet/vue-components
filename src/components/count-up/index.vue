<template>
  <div class="count-wrapper">
    <header>
      <slot name="header" v-bind:head="header"></slot>
    </header>
    <main ref="count">
      <slot></slot>
    </main>
    <footer>
      <slot name="footer" v-bind:data="user"></slot>
    </footer>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss" scoped></style>

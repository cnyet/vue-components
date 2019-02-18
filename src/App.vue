<template>
  <div id="app">
    <transition name="fade">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style lang="scss" src="./assets/styles/main.scss"></style>

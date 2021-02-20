<!--
 * @Descripttion:
 * @Author: 天泽
 * @Date: 2020-09-11 17:37:47
 * @LastEditors: 天泽
 * @LastEditTime: 2021-01-04 19:24:31
-->
<template>
  <div>
    <div class="toast"  ref='toastPosition' :class="{active: toastHidden}">
      <div class="toast-warpper">
        {{number}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  props: {
    text: [String, Number]
  },
  data () {
    return {
      toastHidden: false
    };
  },
  computed: {
    number() {
      this.toastPlugin(this.text);
      return this.text;
    }
  },
  methods: {
    toastPlugin (msg, time) {
      this.text = msg;
      this.toastHidden = true;
      setTimeout(() => {
        this.toastHidden = false;
      }, 500);
    }
  }
};
</script>

<style>
  .toast {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 0px;
    min-height: 0px;
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    color: #fff;
    transition: opacity 0.5s;
    z-index: -1;
    opacity: 0;
  }
  .toast.active {
    width: 100px;
    min-height: 25px;
    opacity: 1;
    z-index: 11;
  }
</style>

<template>
  <div id="app">
    <transition :enter-active-class="transitionName" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      transitionName: 'animated fade'
    }
  }
}
</script>
<style>
  @import './assets/css/common.css';
  @import './assets/css/animate.css';
</style>

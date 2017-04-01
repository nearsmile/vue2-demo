<template>
  <div id="app">
    <transition :name="transitionName" mode="out-in">
      <router-view class="app-view"></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      transitionName: 'slide-left',
    }
  },
  watch: {
    '$router' (to, from) {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    }
  }
}
</script>
<style>
  @import './assets/css/common.css';
  @import './assets/css/animate.css';

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(50vw, 0, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0.1;
  transform: translate3d(-50vw, 0, 0);
}

.app-view {
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  z-index: 1;
  transition: tranform 0.3s ease;
}

</style>

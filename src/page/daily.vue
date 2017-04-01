<template>
	<div>
		<header class="header">
			<i class="iconfont icon-ic_menu" v-if="!flag" @click="toggle(true)"></i>
			<i class="iconfont icon-ic_back" v-if="flag" @click="back()"></i>
		</header>
		<transition>
			<keep-alive>
			<router-view></router-view>
			</keep-alive>
		</transition>
	</div>
</template>

<script>
	// import swipe from '@/components/daily/swipe/swipe'
	import { mapState } from 'vuex'
export default {
	name: "daily",
	data() {
		return {

		}
	},
	computed: {
		...mapState({
			circle: state => state.circleFlag,
			num: state => state.num,
			flag: state => state.drawer
		})
	},
	components: {
		// swipe
	}
}
</script>
<style>
	@import '../assets/css/daily_icon.css';
.header {
  width: 100%;
  height: 0.8rem;
  z-index: 9;
  padding-left: 5%;
  position: fixed;
  background-image: linear-gradient(0deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.51) 95%);
}
.header .iconfont {
  color: #fff;
  font-size: 0.4rem;
  top: 20%;
  position: relative;
  }
</style>
<template>
	<div>
		<swiper swipeid="swipe" effect="slide">
			<div class="swiper-slide" slot="swiper-item" v-for="top in tops">
				<img :src="top.image">
				<!-- <h3>{{top.tile}}</h3> -->
			</div>
		</swiper>
		<!-- <img v-for="item in tops" :src="item.image" alt=""> -->
	</div>
</template>
<script>
import swiper from '@/components/daily/swipe/swipe'
	export default {
		data() {
			return {
				tops: [
					{image: 'http://img1.imgtn.bdimg.com/it/u=66250564,3253305393&fm=23&gp=0.jpg'},
					{image: 'http://img3.imgtn.bdimg.com/it/u=3793300909,3748657602&fm=214&gp=0.jpg'}
				]
			}
		},
		components: {
			swiper
		},
		/*mounted() {
			let swiper = this.$refs.swiper;
			if (swiper.dom) {
				this.swiper = swiper.dom;
			}
		}*/
	}
</script>
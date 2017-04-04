<template>
	<div class="infinite-scroll">
		<div class="infinite-loader" v-show="loading">
			<svg class="loader-circular" viewBox="25 25 50 50">
				<circle class="loader-path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"></circle>
			</svg>
		</div>
		<span class="infinite-scroll-text" v-show="loading">
			{{ loadingText }}
		</span>
	</div>
</template>

<script>
import Scroll from './scroll'	

export default {
	name: 'infinite-scroll',
	mixins: [Scroll],
	props: {
		loading: {
			type: Boolean,
			default: false
		},
		loadingText: {
			type: String,
			default: '正在加载...'
		}
	},
	methods: {
		onScroll() {
			if (this.loading) return
			const scroller = this.scroller;
			const isWindow = scroller === window;
			const scrollTop = isWindow ? scroller.scrollY : scroller.scrollTop;
			const scrollHeight = isWindow ? document.documentElement.scrollHeight || document.body.scrollHeight : scroller.scrollHeight;
			let contentHeight = scrollHeight - scrollTop - 5;
			let slideHeight = isWindow ? window.innerHeight : scroller.offsetHeight;
			// 滑动距离大于内容高度触发加载事件
			if (contentHeight <= slideHeight) {
				console.warn('emit-load');
				this.$emit('load');
			}
		}
	}
}

</script>

<style>

.infinite-scroll {
	display: flex;
	justify-content: center;
	align-items: center;
	padding-bottom: 0.1rem;
	line-height: 0.4rem;
	width: 100%;
}
.infinite-loader {
	position: relative;
	width: 0.35rem;
	height: 0.35rem;
}
.loader-circular {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	transform-origin: center center;
	width: 100%;
	height: 100%;
	animation: rotate 2s linear infinite;
}
.loader-path {
	stroke-dasharray: 1, 200;
	stroke-dashoffset: 0;
	animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
	stroke-linecap: round;
}

.infinite-scroll-text {
	margin-left: 0.2rem;
	font-size: 0.2rem;
}

@keyframes rotate {
	from { transform: rotate(0deg); }
	50% { transform: rotate(180deg); }
	to { transform: rotate(360deg); }
}

@keyframes dash {
	0% { stroke-dasharray: 1, 200; stroke-dashoffset: 0; }
	50% { stroke-dasharray: 89, 200; stroke-dashoffset: -35; }
	100% { stroke-dasharray: 89, 200; stroke-dashoffset: -124; }
}

@keyframes color {
	0%, 100% { stroke: #FFD300; }
	40% { stroke: #5B7492; }
	66% { stroke: #FFD300; }
	80%, 90% { stroke: #ACB9C8; }
}

</style>

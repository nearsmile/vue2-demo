<template>
	<section class="theme-box" :class="{'theme-box-show': isShow}">
		<div class="theme">
			<h1 class="theme-title">
				点击切换主题色
			</h1>
			<ul class="theme-list">
				<li @click="switchTheme(item.name)" v-for="item in list">
					<span class="list-item-dot" :style="{background: item.color}"></span>{{ item.color }}
				</li>
			</ul>
		</div>
	</section>
</template>

<script>
	export default {
		props: {
			isShow: {
				type: Boolean,
				default: false,
			}
		},
		data() {
			return {
				list: [
					{name: 'green', color: '#00d1b2'},
					{name: 'blue', color: '#00b0f0'},
					{name: 'orange', color: '#f4b976'},
					{name: 'pink', color: '#f39894'},
					{name: 'cyan', color: '#26b6be'},
				],
			}
		},
		methods: {
			switchTheme(color) {
				this.$emit('close');
				this.$store.dispatch('switch_theme',color);
			}
		}
	}
</script>
<style>
	.theme-box {
		position: absolute;
		left: 40%;
		top: 0.8rem;
		bottom: 0;
		width: 60%;
		transform: translate3d(100%, 0, 0);
		transition: transform 0.3s ease-in;
		background: #F8F8F8;
		z-index: 100;
	}
	.theme-box-show {
		transform: translate3d(0, 0, 0);
	}
	.theme-list li {
		width: 1.5rem;
		height: 0.6rem;
		border: 1px solid #d8d8d8;
		line-height: 0.6rem;
		background-color: #fff;
		margin: 0.2rem auto;
		text-align: center;
		border-radius: 0.04rem;
		font-size: 0.18rem;

	}
	.theme-list .list-item-dot {
		display: inline-block;
		width: 0.36rem;
		height: 0.36rem;
		vertical-align: middle;
		margin-right: 0.05rem;
	}
</style>
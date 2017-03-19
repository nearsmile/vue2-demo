<template>
	<header>
		<h1>
			 记事本
			 <a href="javascript:;" @click="showTools" class="btn-list clearfix">
			 	<span></span>
			 </a>
		</h1>
	</header>
</template>

<script>
	
export default {
	methods: {
		showTools() {
			this.$emit('tools');
		}
	}
}
</script>
<style scoped>
	header {
		position: relative;
		width: 100%;
		height: 0.8rem;
		font-size: 0.20rem;
		text-align: center;
		color: #fff;
		line-height: 0.8rem;
	}
	.btn-list {
		position: absolute;
		right: 0;
		top: 0;
		display: block;
		padding: 0.38rem;
	}
	.btn-list span {
		display: block;
		position: relative;
		width: 0.3rem;
		height: 0.04rem;
		background: #fff;

	}
	a span::before ,
	a span::after {
		content: '';
		position: absolute;
		left: 0;
		width: 0.3rem;
		height: 0.04rem;
		background: #fff;
	}
	a span::before {
		top: 0.1rem;
	}
	a span::after {
		bottom: 0.1rem;
	}

</style>
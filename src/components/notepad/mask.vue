<template>
	<div class="mask" :class="{'mask-none': isMask}">
		
	</div>
</template>

<script>
	
	export default {
		props: {
			isMask: {
				type: Boolean,
				default: false
			}

		}
	}
</script>
<style>
	.mask {
		display: none;
		position: absolute;
		top: 0.8rem;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.8);
		z-index: 99;
	}
	.mask-none {
		display: block;
	}
</style>
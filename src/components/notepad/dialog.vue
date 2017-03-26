<template>
	<div class="dialog" :class="{'dialog-show': isShow}">
		<div class="dialog-wrap">
			<header class="dialog-header">
				提示
			</header>
			<section class="dialog-content">
				{{ msg }}
			</section>
			<section class="dialog-btns">
				<button class="dialog-cancel" @click="cancelEvent">取消</button>
				<button class="dialog-sure" @click="sureEvent">确定</button>
			</section>
		</div>
	</div>
</template>
<script>
	
	export default {
		data() {
			return {

			}
		},
		props: {
			isShow: {
				type: Boolean,
				default: false
			},
			msg: {
				default: ''
			}
		},
		methods: {
			cancelEvent() {
				this.$emit('cancel');
			},
			sureEvent() {
				this.$emit('sure');
			}
		}
	}
</script>
<style>
	.dialog {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.4);
		z-index: -1;
		opacity: 0;
		transition: all 0.3s linear;
	}
	.dialog-show {
		opacity: 1;
		z-index: 1000;
	}
	.dialog-wrap {
		position: absolute;
		top: 20%;
		left: 50%;
		width: 100%;
		max-width: 4rem;
		padding: 0.1rem;
		background: #fff;
		transform: translate3d(-50%,-50%,0);
		transition: top 0.3s ease;
		border-radius: 0.04rem;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
	}
	.dialog-show .dialog-wrap {
		top: 30%;
	}
	.dialog-header {
		font-size: 24px;
		padding: 0.05rem;
		background: #fff;
	}
	.dialog-content {
		margin: 0.05rem 0 0.15rem;
		padding: 0.1rem;
		font-size: 0.18rem;
	}
	.dialog-btns {
		float: right;
	}
	.dialog-btns button {
		padding: 0.1rem 0.2rem;
		margin: 0 0.1rem;
		font-size: 0.16rem;
		color: #fff;
		border-radius: 0.04rem;
	}
	.dialog-cancel {
		background: #f57067;
	}
</style>
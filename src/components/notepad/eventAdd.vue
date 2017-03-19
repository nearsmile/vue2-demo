<template>
	<div class="event-add">
		<input type="text" class="add-input" v-model="content" placeholder="待办事项" @keyup.enter="submit">
		<button class="add-submit" @click="submit">
			提交
		</button>
	</div>
</template>

<script>
	
	export default {
		data() {
			return {
				content: ''
			}
		},
		methods: {
			submit() {
				let self = this;
				let params = {
					id: 0,
					type: 1,
					content: '',
					time: ''
				};
				self.content = self.content.trim();
				if (self.content) {
					params.content = self.content;
					self.$store.dispatch('addevent',params);
					self.content = '';
				}
			}
		}
	}
</script>
<style scoped>
	input {
		display: block;
		float: left;
		width: 80%;
		height: 0.5rem;
		line-height: 0.5rem;
		border: 1px solid #c0ccda;
		padding: 0.07rem 0.1rem;
		border-radius: 0.04rem;
		font-size: 0.16rem;
		margin-right: 2%;
	}
	button {
		display: inline-block;
		float: left;
		width: 18%;
		height: 0.5rem;
		border-radius: 0.04rem;
		border: none;
		font-size: 0.16rem;
		color: #fff;
	}
</style>
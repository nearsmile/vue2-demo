<template>
	<div>
		<ul>
			<li>demo列表：</li>
			<li v-for="(item, index) in linkList">
				<router-link class="router-link" :to="item.link">{{index+1}}. {{item.name}}</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				linkList: [
					{name: 'notepad-记事本', link: '/notepad'},
					{name: 'practice', link: '/practice'},
				],
			}
		}
	}
</script>
<style scoped>
	li {
		width: 100%;
		height: 0.5rem;
		padding: 0 5%;
		line-height: 0.5rem;
		border-bottom: 1px dashed #eee;
	}
	.router-link {
		color: inherit;
	}
</style>
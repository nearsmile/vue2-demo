<template>
	<div>
		<ul>
			<router-link class="router-default" tag="li" :to="`/${item.name}`" :key="item.name" v-for="item in routerLists">{{item.name}}</router-link>
		</ul>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				routerLists: [
				{name: 'notepad'},
				{name: 'daily'},
				],
			}
		}
	}
</script>
<style>
	.router-default {
		width: 100%;
		padding: 0 5%;
		line-height: 0.4rem;
		border-bottom: 1px solid #eee;
	}
</style>
<template>
	<div>
		<ul>
			<router-link class="router-default" tag="li" :to="`/${item.name}`" :key="item.name" v-for="item in routerLists">{{item.name}}</router-link>
			<li @click="toast()" class="router-default">
				<span>toast演示</span>
			</li>
		</ul>
	</div>
</template>
<script>
import Toast from '@/components/common/toast.js'

	export default {
		data() {
			return {
				routerLists: [
					{name: 'notepad'},
					{name: 'daily'},
				],
			}
		},
		methods: {
			toast() {
				Toast({
	        message : "有位置的设定和时间设定",
	        position: 'bottom',
	        duration : 1000
	    	})
			}
		}
	
	}
</script>
<style>
	.router-default {
		width: 100%;
		padding: 0 5%;
		line-height: 1.5rem;
		border-bottom: 1px solid #eee;
	}
</style>
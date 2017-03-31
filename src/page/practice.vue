<template>
	<div class="practice">
		<button @click.native="alert">alert</button>
		<ul class="fixed-list">
			<li v-for="item in telephone">
				{{item | newtel }}
			</li>
		</ul>
		<div @touchmove.prevent class="layer"></div>
	</div>
</template>

<script>

	export default {
		data() {
			return {
				list: [1,2,3,4,5,6,7,8,9,10],
				telephone: [
					10000000000,
           10000000001,
           10000000002,
           10000000003,
           10000000004,
           10000000005,
           10000000006,
           10000000007,
           10000000008,
           10000000009,
           10000000000,
				],
			}
		},
		methods: {
			alert() {
				alert('alert it');
			}
		},
		filters: {
			newtel(value) {
				if (!value) return '';
				value = value.toString().substr(7,4);
				value= '*'.repeat(7) + value;
				let endMember = value.substr(-1,1);
				if (endMember % 2) {
					value = value + '中奖';
				} else {
					value = value + '谢谢参与';
				}
				return value;
			}
		}
	}
</script>
<style>
.practice {
	font-size: 0.2rem;
}
.fixed-list {
	
}

li { float: left; padding: 0.05rem; }
</style>
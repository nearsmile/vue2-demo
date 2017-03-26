<template>
	<div class="event-tools" :class="{'show-event-tools': isShow}">
		<ul class="tools-sidebar">
			<li>
				<button class="tools-btn" @click="openTheme">切换主题</button>
			</li>
			<li>
				<button class="tools-btn" @click="downloadData('notepad.text',getData)">下载数据</button>
			</li>
			<li>
				<button class="tools-btn" @click="openTable">编辑数据</button>
			</li>
			<li>
				<button class="tools-btn" @click="showDialog">清空数据</button>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: ['isShow'],
		computed: {
			getData() {
				const self = this;
				return JSON.stringify(self.$store.state);
			}
		},
		methods: {
			openTable() {
				this.$emit('opentable');
			},
			openTheme() {
				this.$emit('opentheme');
			},
			showDialog() {
				this.$emit('cleardialog');
			},
			downloadData(fileName, content) {
				let aTag = document.createElement('a');
				let blob = new Blob([content]);
				aTag.download = fileName;
				aTag.href = URL.createObjectURL(blob);
				aTag.click();
				URL.revokeObjectURL(blob);
			}
		}
	}
</script>
<style>
	.event-tools {
		position: absolute;
		top: 0.8rem;
		width: 60%;
		right: 0;
		left: 40%;
		bottom: 0;
		padding: 0.3rem 0.2rem;
		transform: translate3d(100%, 0, 0);
		transition: transform 0.3s;
		text-align: center;
		background: rgba(255,255,255,0.9);
		font-size: 0.16rem;
		z-index: 100;
	}
	.show-event-tools {
		transform: translate3d(0, 0, 0);
	}
	.tools-sidebar li {
		margin: 0.2rem 0;
	}
	.tools-btn {
		width: 1.5rem;
		height: 0.6rem;
		line-height: 0.5rem;
		color: #fff;
		transition: background 0.3s ease-in;
	}
</style>
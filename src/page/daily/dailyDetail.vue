<template>
	<div class="daily-detail">
		<div class="daily-loading" v-if="!data.body">
			<span class="daily-loading-left"></span>
			<span class="daily-loading-middle"></span>
			<span class="daily-loading-right"></span>
		</div>
		<div class="daily-detail-img">
			<img :src="data.image" />
			<div class="daily-detail-mask"></div>
			<h2>{{ data.title }}</h2>
		</div>
		<div class="daily-detail-content" @click.prevent="toLink($event)" v-html="data.body"></div>
		<back-scroll :scroller="scroller" :flag="circle"></back-scroll>
	</div>
</template>

<script>
import backScroll from '@/components/daily/backScroll'
import api from '@/config/api'
import { mapState } from 'vuex'
export default {
	name: 'daily-detail',
	data() {
		return {
			data: '',
			scroller: window,
		}
	},
	computed: {
		...mapState({
			circle: state => state.daily.circleFlag
		})
	},
	components: {
		backScroll
	},
	mounted() {
		this.scroller = this.$el;
	},
	activated() {
		let self = this;
		api.getNewsById(this.$route.query.id).then(data => {
			self.data = data.data;
			console.info('detail-content:',self.data);
		});
	},
	deactivated() {
		this.data = '';
	},
	methods: {
		toLink(e) {
			let href = e.target.href;
			href && window.open(href);
		}
	}
}
</script>
<style>
.daily-detail {
	color: #666;
	height: 100vh;
}

.daily-detail-img {
	position: relative;
	height: 3rem;
	overflow: hidden;
}

.daily-detail-img img {
	position: relative;
	top: 50%;
	transform: translate(0 -50%);
}
.daily-detail-img h2 {
	position: absolute;
	bottom: 0.5rem;
	right: 5%;
	text-align: right;
	font-size: 0.2rem;
	width: 60%;
	color: rgba(255, 255, 255, 0.9);
	text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.daily-detail-content {
	position: relative;
	padding: 0 5%;
}
.daily-detail-content p,
.daily-detail-content li,
.daily-detail-content h2 {
	text-align: justify;
}

.daily-detail-content h2 {
	color: #5b7492;
	position: relative;
	z-index: 1;
}

.daily-detail-content img {
	max-width: 100%;
}

.daily-detail-content .view-more {
	text-align: center;
	margin-bottom: 0.25rem;
}

.daily-detail-content .content {
	font-size: 0.15rem;
}

.daily-detail-content .meta {
	text-align: left;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	margin: 0.1rem 0;
}
.daily-detail-content .avatar {
	vertical-align: middle;
	display: inline-block;
	width: 0.3rem;
	margin-right: 0.05rem;
}

.daily-loading {
	position: relative;
	margin: 50% auto 0;
	height: 0.2rem;
	width: 25%;
}
.daily-loading span {
	position: absolute;
	display: block;
	width: 0.2rem;
	height: 0.2rem;
	border-radius: 50%;
	background: #5B7492;
	transform: translate(-50%, 0);
}
.daily-loading .daily-loading-left {
	background: #FFD300;
	animation: movingLeft 2.5s ease infinite;
}
.daily-loading .daily-loading-middle {
	left: 50%;
	animation: movingMiddle 2.5s ease infinite;
}
.daily-loading .daily-loading-right {
	left: 100%;
	background: #acb9c8;
	animation: movingRight 2.5s ease infinite;
}

@keyframes movingLeft {
	0% { left: 0; }
	25% { left: 50%; background: #FFD300; }
	50% { left: 100%; background: #5B7492; }
	75% { left: 50%; background: #ACB9C8; }
	100% { left: 0; }
}
@keyframes movingMiddle {
	0% { }
	25% { background: #5B7492; }
	50% { background: #FFD300; }
	75% { background: #5B7492; }
	100% { }
}
@keyframes movingRight {
	0% { left: 100%; }
	25% { left: 50%; }
	50% { left: 0; background: #ACB9C8; }
	75% { left: 50%; background: #FFD300; }
	100% { left: 100%; }
}

</style>
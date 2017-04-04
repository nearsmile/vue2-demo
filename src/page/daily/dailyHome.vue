<template>
	<div>
		<swiper swipeid="swipe" ref="swipe">
			<div class="swiper-slide" slot="swiper-item" v-for="top in tops">
				<img :src="top.image">
				<div></div>
				<h3>{{top.title}}</h3>
			</div>
		</swiper>
		<div class="daily-list clear" v-for="list in lists" :key="list.date">
			<p class="daily-list-time">{{ list.date | dateBeautify }}</p>
			<div class="daily-list-item" @click="toDetail(item.id)" v-for="item in list.stories" :key="item.id">
				<img :src="item.images[0]">
				<p>{{ item.title }}</p>
			</div>
		</div>
		<!-- 加载中 -->
		<div class="daily-loading" v-if="!lists.length && !refreshing">
			<span class="daily-loading-left"></span>
			<span class="daily-loading-middle"></span>
			<span class="daily-loading-right"></span>
		</div>
		<!-- 回到顶部组件 -->
		<back-scroll :scroller="scroller" :flag="circle"></back-scroll>
		<infinite-scroll :scroller="scroller" :loading="loading" @load="loadmore"></infinite-scroll>
	</div>
</template>
<script>
import swiper from '@/components/daily/swipe/swipe'
import backScroll from '@/components/daily/backScroll'
import infiniteScroll from '@/components/daily/infiniteScroll'
import api from '@/config/api'
import { mapState } from 'vuex'
export default {
	data() {
		return {
			tops: [],
			lists: [],
			loading: false,
			count: 1,
			refreshing: false,
			swipe: '',
			scroller: null,
		}
	},
	computed: {
		...mapState({
			circle: state => state.daily.circleFlag,
		})
	},
	components: {
		swiper,
		backScroll,
		infiniteScroll,
	},
	mounted() {
		this.getList(1);
		this.scroller = this.$el;
		let swipe = this.$refs.swipe;
		if (swipe.dom) {
			this.swipe = swipe.dom;
		}
	},
	methods: {
		getList(type) {
			const self = this;
			if (type) {
				api.getNews().then(data => {
					console.info('dailyHome-data-list:', data);
					self.tops = data.data.top_stories;
					self.lists.push(data.data);
					self.loading = false;
				})
			} else {
				api.getNewsByDate(self.getDate(self.count)).then(data => {
					self.lists.push(data.data);
					self.loading = false;
				});
			}
		},
		getDate(count) {
			let date = new Date();
			date.setDate(date.getDate() + count);
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			month = month > 10 ? month : '0' + month;
			let day = date.getDate();
			day = day > 10 ? day : '0' + day;
			return year + '' + month + '' + day; 
		},
		loadmore() {
			let self = this;
			this.loading = true;
			setTimeout(() => {
				self.count--;
				self.getList();
			},500);
		},
		toDetail(id) {
			console.log('toDetail',id);
			this.$router.push({
				path: 'detail',
				query: {
					id: id
				}
			})
		}
	},
	filters: {
		dateBeautify(date) {
			return date.substring(0,4) + '/' + date.substring(4,6) + '/' + date.substring(6,8)
		}
	}
}
</script>
<style>
.app-view .swiper-container .swiper-pagination {
		text-align: right;
		padding-right: 10%;
	}
.app-view .swiper-conatainer img {
		width: 100%;
	}

.app-view .swiper-slide {
	position: relative;
	height: 4rem;
	overflow: hidden;
}
.app-view .swiper-slide img {
	position: relative;
	/*top: 50%;*/
	width: 100%;
}
.app-view .swiper-slide div {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	opacity: 0.4;
	background: #5b7492;
}
.app-view .swiper-slide h3 {
	position: absolute;
	right: 5%;
	bottom: 40%;
	text-align: right;
	line-height: 0.44rem;
	color: #fff;
	width: 70%;
	text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
	z-index: 10;
}
.app-view .swiper-slide h3::after {
	content: '';
	position: absolute;
	right: 0;
	bottom: -13%;
	display: block;
	border: 2px solid #ffd300;
	width: 1.5rem;
}

/*--  list  --*/
.daily-list {
	position: relative;
	width: 100%;
	padding: 0 5%;
	margin-top: 0.4rem;
}

.daily-list-time {
	position: absolute;
	top: -0.6rem;
	color: #fff;
	font-size: 0.2rem;
	line-height: 0.4rem;
	letter-spacing: 0.05rem;
	background: #FFD300;
	border-radius: 1rem;
	padding: 0 0.2rem;
	z-index: 1;
	box-shadow: 0 3px 10px 0 rgba(91, 115, 146, 0.2);
}

.daily-list-item {
	display: flex;
	align-items: center;
	padding: 0.15rem;
	margin-bottom: 0.2rem;
	border-radius: 0.07rem;
	box-shadow: 0 3px 10px 0 rgba(91, 115, 146, 0.2);
}
.daily-list-item img {
	width: 1rem;
	min-height: 1rem;
	margin-right: 0.2rem;
}
.daily-list-item p {
	color: #5B7492;
	font-size: 0.2rem;
	text-align: justify;
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
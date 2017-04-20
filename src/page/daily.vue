<template>
	<div class="daily">
		<header class="header">
			<i class="iconfont icon-ic_menu" v-if="!flag" @click="toggle(true)"></i>
			<i class="iconfont icon-ic_back" v-if="flag" @click="back()"></i>
		</header>
		<aside class="aside" :class="{open: open, docked: docked}" @click="toggle()">
			<ul>
				<li :class="{chose:num == 1}" @click="change(1)">
					<span>首页</span>
					<i class="iconfont" :class="{'iconcolor icon-ic_star_black': num == 1, 'icon-ic_star': num != 1}"></i>
				</li>
				<li :class="{chose: num == index + 2}" v-for="(item, index) in list" @click="change(index + 2, item.id)" :key="item.id">
					<span>{{ item.name }}</span>
					<i class="iconfont" :class="{'iconcolor icon-ic_star_bllack': num== index + 2, 'icon-ic_star': num != index + 2}"></i>
				</li>
				<li @click="jum()">
					<span>项目地址</span>
					<i class="iconfont icon-github"></i>
				</li>
			</ul>
			<div class="cover" @touchmove="prevent"></div>
		</aside>
		<section class="circle" v-if="circle" @click="toScrollTop()">
			<i class="iconfont icon-ic_top"></i>
		</section>
		<transition :name="transitionName">
			<keep-alive>
			<router-view class="app-viewer" :class="{'app-view-hidden': docked}"></router-view>
			</keep-alive>
		</transition>
	</div>
</template>

<script>
import api from '@/config/api'
	import { mapState } from 'vuex'
export default {
	name: "daily",
	data() {
		return {
			list: [],
			open: false,
			docked: false,
			transitionName: 'slide-left',
		}
	},
	computed: {
		...mapState({
			circle: state => state.daily.circleFlag,
			num: state => state.num,
			flag: state => state.drawer
		})
	},
	components: {},
	mounted() {
		let self = this;
		api.getTopics().then(function(data) {
			self.list = data.data.others;
			console.info('self.list:', self.list);
		});
	},
	methods: {
		// 跳转 项目地址
		jump() {
			window.open("https://github.com/nearsmile/vue2-demo");
		},
		prevent(event) {
			event.preventDefault();
			event.stopPropagation();
		},
		// 返回 判断
		back(n) {
			if (n) {
				this.$router.push({
					path: 'home'
				});
			} else {
				window.history.back()
			}
		},
		// 切换 侧边栏
		toggle(flag) {
			if (!this.open) {
				this.docked = true;
				this.open = true;
			} else {
				this.open = false;
				let self = this;
				setTimeout(function() {
					self.docked = false;
				}, 300);
			}
		},
		// 切换 栏目
		change(n, id) {
			let path = n === 1 ? 'home' : 'theme'; // 调试 路由跳转
			this.$router.push({
				path: path,
				query: {
					id: id || ''
				}
			});
		},
		// scrollTop
		toScrollTop() {
			let self = this;
			let dom = document.querySelector('.app-viewer');
			let height = dom.scrollTop;
			let scrollTop = parseInt(height / 50);
			console.log('dom', height, scrollTop);
			let time = setInterval(function() {
				height -= scrollTop;
				if (height <= 0) {
					dom.scrollTop = 0;
					self.$store.commit('toggle');
					clearInterval(time);
				} else {
					dom.scrollTop = height;
				}
			}, 1);
		},
		
	}
}
</script>
<style scoped>
	@import '../assets/css/daily_icon.css';

.app-viewer {
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  z-index: 1;
  transition: tranform 0.3s ease-in;
}

.daily .header {
  width: 100%;
  height: 0.8rem;
  z-index: 9;
  padding-left: 5%;
  position: fixed;
  background-image: linear-gradient(0deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.51) 95%);
}
.daily .header .iconfont {
  position: relative;
  color: #fff;
  font-size: 0.4rem;
  top: 20%;
}
/*-----  sidebar  -------*/
.daily .aside {
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 11;
	visibility: hidden;
}
.daily .aside.docked {
	visibility: visible;
}

.daily .aside ul {
	position: relative;
	float: left;
	width: 60%;
	height: 100%;
	padding: 0.8rem 0 0.5rem;
	color: #fff;
	transform: translate3d(-100%, 0, 0);
	transition: transform 0.3s ease-out;
	background: rgba(0,0,0,0.7);
	z-index: 9;
}
.daily .aside.open ul {
	transform: translate3d(0, 0, 0);
}

.daily .aside li {
	padding: 0 8%;
	line-height: 0.5rem;
}

.daily .aside li .iconfont {
	font-size: 0.3rem;
	float: right;
}

.daily .cover {
	display: none;
	width: 100%;
	height: 100%;
	opacity: 0;
	background: rgba(0,0,0,0.4);
	transition: opacity 0.3s ease-out;
}
.daily .aside.open .cover {
	opacity: 1;
}
.daily .aside.docked .cover {
	display: block;
}
/* scrollTop */
.daily .circle {
	position: fixed;
	bottom: 5vw;
	right: 5%;
	width: 0.6rem;
	height: 0.6rem;
	border-radius: 50%;
	background: rgba(255, 255, 255, 0.8);
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
	z-index: 9;
}
.daily .circle i {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 0.36rem;
	color: #acb9c9;
}



</style>
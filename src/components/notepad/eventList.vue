<template>
	<div class="event-content">
			<section class="event-tab" @click="changeCollapse(0, $event)">
				未完成
				<span :class="{'close-arrow': collapse[0].show }"></span>
			</section>
			<section class="event-box" :style="{'height':'auto', 'display':'block'}">
				<ul>
					<li class="event-list clearfix" v-for="value in getToDo">
						<input type="checkbox" :key="value.id" @click="moveToDone(value.id)">
						<div :title="value.content">{{ value.content }}</div>
						<button class="cancel-btn" @click="moveCancel(value.id)">
							取消
						</button>
					</li>
				</ul>
			</section>

			<section class="event-tab" @click="changeCollapse(1, $event)">
				已完成
				<span :class="{ 'close-arrow': !collapse[1].show }"></span>
			</section>
			<section class="event-box">
				<ul>
					<li class="event-list" v-for="value in getDone">
						<input type="checkbox" :key="value.id" checked @click="moveToDo(value.id)">
						<div>{{ value.content }}</div>
						<span class="event-time">
							{{ value.time }}
						</span>
					</li>
				</ul>
			</section>

			<section class="event-tab" @click="changeCollapse(2, $event)">
				已取消
				<span :class="{'close-arrow': !collapse[2].show}"></span>
			</section>
			<section class="event-box" :class="{'event-box-hide': false}">
				<ul>
					<li class="event-list" v-for="value in getCancel">
						<div class="event-delete" :title="value.content">
							{{ value.content }}
						</div>
						<button class="cancel-btn" @click="moveToDo(value.id)">
							恢复
						</button>
					</li>
				</ul>
			</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				collapse: [
					{ show: true, },
					{ show: true, },
					{ show: true, },
				],
			}
		},
		computed: {
			getToDo() {
				return this.$store.getters.getToDo;
			},
			getDone() {
				return this.$store.getters.getDone;
			},
			getCancel() {
				return this.$store.getters.getCancel;
			}
		},
		methods: {
			changeCollapse(index,event) {
				const show = this.collapse[index].show;
				show ? this.closeCollapse(event)
						 : this.openCollapse(event);
				this.collapse[index].show = !show;
			},
			closeCollapse(event) {
				let ulElement = event.currentTarget.nextElementSibling;
				let children = ulElement.getElementsByTagName('ul')[0];
				ulElement.style.height = children.offsetHeight + 'px';
				setTimeout(() => {
					ulElement.style.height = '0px';
					setTimeout(() => {
						ulElement.style.display = 'none';
					}, 300)
				}, 10)
			},
			openCollapse(event) {
				let ulElement = event.currentTarget.nextElementSibling;
				let children = ulElement.getElementsByTagName('ul')[0];
				ulElement.style.display = 'block';
				ulElement.style.height = children.offsetHeight + 'px';
				setTimeout(() => {
					ulElement.style.height = 'auto';
				}, 300);
			},
			moveToDone(id) {
				this.$store.dispatch('eventdone', id);
			},
			moveToDo(id) {
				this.$store.dispatch('eventtodo', id);
			},
			moveCancel(id) {
				this.$store.dispatch('eventcancel', id);
			}
		}
	}
</script>
<style>
	.event-content .event-tab {
		position: relative;
		height: 0.5rem;
		line-height: 0.5rem;
		padding-left: 0.2rem;
		border-bottom: 1px solid #fff;
		color: #fff;
		cursor: pointer;
	}
	.event-content .event-tab span {
		display: block;
		position: absolute;
		right: 0.2rem;
		top: 0.17rem;
		width: 0.12rem;
		height: 0.12rem;
		border-top: 0.02rem solid #fff;
		border-right: 0.02rem solid #fff;
		-webkit-transform: rotate(135deg);
		-ms-transform: rotate(135deg);
		-o-transform: rotate(135deg);
		transform: rotate(135deg);
		transition: transform 0.3s ease-out;
	}
	.event-content .event-tab span.close-arrow {
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		-o-transform: rotate(45deg);
		transform: rotate(45deg);
	}
	.event-list {
		position: relative;
		height: 0.5rem;
		line-height: 0.5rem;
		width: 100%;
		border-bottom: 1px dashed transparent;
	}
	.event-list:last-child {
		border-color: transparent;
	}
	.event-list input[type=checkbox] {
		display: block;
		position: absolute;
		width: 0.18rem;
		height: 0.18rem;
		margin: 0.16rem 0.1rem;
	}
	.event-list input[type=checkbox] + div , .event-delete {
		width: 80%;
		margin: 0 11% 0 7%;
		height: 100%;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.event-list .cancel-btn {
		display: block;
		position: absolute;
		right: 0;
		top: 0;
		height: 0.34rem;
		margin-top: 0.08rem;
		padding: 0 0.15rem;
		font-size: 0.14rem;
		color: #fff;
		border: 1px solid #fff;
		border-radius: 0.03rem;
	}
	.event-delete {
		text-decoration: line-through;
		float: left;
	}

	.event-list .event-time {
		position: absolute;
		right: 0;
		top: 0;
		color: inherit;
	}
	.event-delete {
		width: 87%;
		margin: 0 11% 0 0;
	}
	

</style>
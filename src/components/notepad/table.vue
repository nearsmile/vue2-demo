<template>
	<section class="event-all" :class="{'event-all-show': isShow}">
		<div class="table-box">
			<section class="edit-input" :class="{'edit-input-show': isEdit}">
				<textarea class="edit-input-content" type="text" v-model="info.content" ref="content" @keyup.enter="editData"></textarea>
				<button @click="editData">确定</button>
			</section>
			<section class="screen-bar clear">
				<div class="bar-select clear" :class="{'active': selected}">
					<div class="select-value" @click="selected= !selected">{{getTypeName}}</div>
					<ul class="select-list">
						<li :value="item.name" @click="selectItem(index)" v-for="(item,index) in typeList">{{ item.name }}</li>
					</ul>
				</div>
				<input type="text" class="screen-search" v-model="searchKey" placeholder="筛选关键词">
			</section>
			<table class="event-table">
				<thead>
					<tr>
						<th>#</th>
						<th>所有事项</th>
						<th>类型</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(value, index) in notepad">
						<td>{{ index + 1 }}</td>
						<td class="table-content">{{ value.content }}</td>
						<td>{{ getType(value.type) }}</td>
						<td>
							<button class="table-edit" @click="showEditContent(index)">编辑</button>
							<button class="table-delete" @click="showDialog(index,value.id)">删除</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</template>

<script>
	export default {
		props: {
			isShow: {
				type: Boolean,
				default: false,
			}
		},
		data() {
			return {
				typeList: [
					{name: '筛选类型',},
					{name: '未完成',},
					{name: '已完成',},
					{name: '已取消',},
				],
				selectName: '筛选类型',
				searchKey: '',
				screenType: 0,
				selected: false,
				isEdit: false,
				info: {
					content: '',
					id: 0,
					index: 0
				}
			}
		},
		computed: {
			notepad() {
				var self = this;
				return self.$store.getters.getEventList.filter(function(d) {
					if (self.screenType !== 0 && self.searchKey === '') {
						if (d.type === self.screenType) {
							return d;
						}
					} else if (self.screenType !== 0 && self.searchKey !== '') {
							if (d.type === self.screenType && d.content.indexOf(self.searchKey) !== -1) {
								return d;
							}
					} else if (self.screenType === 0 && self.searchKey !== '') {
						if (d.content.indexOf(self.searchKey) !== -1) {
							return d;
						}
					} else {
						return d;
					}
				});
			},
			getTypeName() {
				const self = this;
				return self.getType(self.screenType) || '筛选类型';
			}
		},
		methods: {
			selectItem(type) {
				this.screenType = type;
				this.selected = false;
			},
			getType(type) {
				let str = '';
				switch(type) {
					case 1: 
						str = '未完成';
						break;
					case 2:
						str = '已完成';
						break;
					case 3:
						str = '已取消';
						break;
				}
				return str;
			},
			showEditContent(index) {
				this.isEdit = true;
				this.info = {
					index : index,
					content: this.notepad[index].content,
					id: this.notepad[index].id
				}
				this.$refs.content.focus();
			},
			editData() {
				this.info.content = this.info.content.trim();
				if (this.info.content) {
					this.$store.dispatch('editevent', this.info);
					this.isEdit = false;
				}
			},
			showDialog(index, id) {
				this.$emit('deldialog',index, id);
			}
		}
	}
</script>

<style>
	.event-all {
		/*display: none;*/
		position: absolute;
		top: 0.8rem;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #fff;
		overflow-y: scroll;
		z-index: 10;
		transform: translate3d(100%,0,0);
		transition: transform 0.3s;
	}
	.event-all-show {
		/*display: block;*/
		transform: translate3d(0,0,0);

	}
	.table-box {
		position: relative;
	}
	.edit-input {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 1rem;
		padding: 0.08rem 2% 0;
		background: #fefefe;
		z-index: 20;
		opacity: 0;
		transform: translate3d(0, -2.8rem, 0);
		transition: transform  0.3s;
		transition: all  0.3s;
		border-bottom: 1px solid #eee;
	}
	.edit-input-show {
		opacity: 1;
		transform: translate3d(0, 0, 0);
	}
	.edit-input-content  {
		float: left;
		width: 80%;
		height: 0.8rem;
		margin-right: 2%;
		font-size: 0.16rem;
		padding: 0 0.1rem;
		resize: none;
		overflow-y: scroll;
		border: 1px solid #eee;
		border-radius: 0.04rem;
	}
	.edit-input button {
		float: left;
		width: 18%;
		height: 0.5rem;
		margin-top: 0.15rem;
		border-radius: 0.04rem;
		color: #fff;
		font-size: 0.16rem;

	}
	.screen-bar {
		padding:0.2rem 0.1rem 0.1rem 0.1rem;
	}
	.bar-select {
		position: relative;
		float: left;
		width: 20%;
		margin-right: 2%;

	}
	.select-value {
		width: 100%;
		height: 0.4rem;
		line-height: 0.38rem;
		padding-left: 0.1rem;
		border: 1px solid #d8d8d8;
		border-radius: 0.03rem;

	}
	.select-value::after {
		content: '';
		display: block;
		position: absolute;
		right: 0.1rem;
		top: 0.1rem;
		width: 0.1rem;
		height: 0.1rem;
		border: solid #d8d8d8;
		border-width: 0 1px 1px 0;
		transform: rotate(45deg);
	}
	.bar-select .select-list {
		display: none;
		position: absolute;
		top: 0.5rem;
		left: 0;
		border: 1px solid #eee;
		width: 100%;
		line-height: 0.3rem;
		padding: 0.05rem 0;
		background: #fff;
		border-radius: 0.04rem;
		transition: all 0.3s;
		z-index: 10;
	}
	.bar-select .select-list li {
		padding: 0 0.1rem;
	}
	.bar-select .select-list li:active {
		background: #d8d8d8;
	}
	.bar-select.active .select-list {
		display: block;
	}
	.screen-bar input {
		float: left;
		border: 1px solid #d8d8d8;
		height: 0.4rem;
		width: 78%;
		padding: 0 0.1rem;
		font-size: 0.16rem;
		border-radius: 0.03rem;
	}
	.event-table {
		margin: 0.1rem 0 0;
		width: 100%;
		border: solid #eee;
		border-width: 1px 0 0 1px;
		text-align: center;
	}
	.event-table th ,
	.event-table td {
		border: solid #eee;
		border-width: 0 1px 1px 0;
		padding: 0.05rem 0.05rem;
		font-size: 0.16rem;
	}
	.event-table .table-content {
		text-align: left;
		width: 60%;
		text-overflow: ellipsis;
		max-height: 1rem;
	}
	.event-table .table-edit ,
	.event-table .table-delete {
		padding: 0.04rem 0.1rem;
		display: block;
		margin: 0.05rem auto;
		color: #fff;
		border-radius: 0.02rem;
	}
	.event-table .table-delete {
		background: #f57067;
	}
</style>
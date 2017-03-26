<template>
	<div :class="getTheme">
		<note-header @tools="changePages"></note-header>	
		<section class="container" :class="{'hide': tablePanel}">
			<event-add class="event-add clear"></event-add>
			<event-list></event-list>
			<note-sidebar :isShow="tools"
										@cleardialog="clearData"
										@opentable="table = true; tools =false"
										@opentheme="theme = true; tools = false"
			></note-sidebar>
		</section>
		<note-mask :isMask="tools || theme"></note-mask>
		<note-theme :isShow="theme" @close="theme=false"></note-theme>
		<note-table @deldialog="delData" :isShow="table" @close="table = false"></note-table>
		<note-dialog :is-show="dialog" :msg="tips" @cancel="dialog = false" @sure="sureDialog"></note-dialog>
	</div>
</template>

<script>

	import noteHeader from '@/components/notepad/noteHeader'
	import eventAdd from '@/components/notepad/eventAdd'
	import eventList from '@/components/notepad/eventList'
	import noteSidebar from '@/components/notepad/sidebar'
	import noteMask from '@/components/notepad/mask'
	import noteTheme from '@/components/notepad/theme'
	import noteTable from '@/components/notepad/table'
	import noteDialog from '@/components/notepad/dialog'
	import { mapState } from '@/store/index'

export default {
	data() {
		return {
			tablePanel: false,
			tools: false,
			theme: false,
			table: false,
			dialog: false,
			tips: '',
		}
	},
	methods: {
		changePages() {
			console.log('table:',this.table);
      console.log('theme:',this.theme);
      console.log('tools:',this.tools);
			if (this.table) {
				this.table = !this.table;
			} else if (this.theme) {
				this.theme = !this.theme;
			} else {
				this.tools = !this.tools;
			}
		},
		clearData() {
			this.dialog = true;
			this.dialogType = 'clear';
			this.tips = '清空数据后无法恢复，确认清空吗？';
		},
		delData(index, id) {
			this.dialog = true;
			this.dialogType = 'del';
			this.tips = ' 删除后无法恢复，确认删除吗？';
			this.delInfo = {
				index: index,
				id: id
			}
		},
		closeTable() {
			this.$emit('close');
		},
		sureDialog() {
			const self = this;
			switch (self.dialogType) {
				case 'clear':
					self.$store.dispatch('clearevent');
					break;
				case 'del':
					self.$store.dispatch('delevent', self.delInfo);
					break;
			}
			this.dialog = false;
		}
	},
	computed: {
		getTheme() {
			return this.$store.getters.getTheme
		}
	},
	components: {
		noteHeader,
		eventAdd,
		eventList,
		noteSidebar,
		noteMask,
		noteTheme,
		noteTable,
		noteDialog,
	}
}
</script>
<style>

	.container {
		padding: 0 2%;
	}
	.event-add {
		margin: 0.4rem 0;
	}

	.cyan .note-header , .cyan .add-submit , .cyan .event-tab {background: #26b6be; }
	.cyan .add-input:focus {border-color: #26b6be; }
	.cyan .cancel-btn {background: #26b6be; }
	.cyan .event-list {border-color: #26b6be; }
	.cyan .tools-btn {background-color: #26b6b3; }
	.cyan .screen-bar input:focus {border-color: #26b6b3; }
	.cyan .event-table .table-edit { background: #26b6b3; }
	.cyan .edit-input button { background: #26b6b3; }
	.cyan .edit-input-content:focus { border-color: #26b6b3; }
	.cyan .dialog-sure { background: #26b6b3; }

	.green .note-header , .green .add-submit , .green .event-tab {background: #00d1b2; }
	.green .add-input:focus {border-color: #00d1b2; }
	.green .cancel-btn {background: #00d1b2; }
	.green .event-list {border-color: #00d1b2; }
	.green .tools-btn {background-color: #00d1b2; }
	.green .screen-bar input:focus {border-color: #00d1b2; }
	.green .event-table .table-edit { background: #00d1b2; }
	.green .edit-input button { background: #00d1b2; }
	.green .edit-input-content:focus { border-color: #00d1b2; }
	.green .dialog-sure { background: #00d1b2; }

	.orange .note-header , .orange .add-submit , .orange .event-tab {background: #f4b976; }
	.orange .add-input:focus {border-color: #f4b976; }
	.orange .cancel-btn {background: #f4b976; }
	.orange .event-list {border-color: #f4b976; }
	.orange .tools-btn {background-color: #f4b976; }
	.orange .screen-bar input:focus {border-color: #f4b976; }
	.orange .event-table .table-edit { background: #f4b976; }
	.orange .edit-input button { background: #f4b976; }
	.orange .edit-input-content:focus { border-color: #f4b976; }
	.orange .dialog-sure { background: #f4b976; }

	.pink .note-header , .pink .add-submit , .pink .event-tab {background: #f39894; }
	.pink .add-input:focus {border-color: #f39894; }
	.pink .cancel-btn {background: #f39894; }
	.pink .event-list {border-color: #f39894; }
	.pink .tools-btn {background-color: #f39894; }
	.pink .screen-bar input:focus {border-color: #f39894; }
	.pink .event-table .table-edit { background: #f39894; }
	.pink .edit-input button { background: #f39894; }
	.pink .edit-input-content:focus { border-color: #f39894; }
	.pink .dialog-sure { background: #f39894; }

	.blue .note-header , .blue .add-submit , .blue .event-tab {background: #00b0f0; }
	.blue .add-input:focus {border-color: #00b0f0; }
	.blue .cancel-btn {background: #00b0f0; }
	.blue .event-list {border-color: #00b0f0; }
	.blue .tools-btn {background-color: #00b0f0; }
	.blue .screen-bar input:focus {border-color: #00b0f0; }
	.blue .event-table .table-edit { background: #00b0f0; }
	.blue .edit-input button { background: #00b0f0; }
	.blue .edit-input-content:focus { border-color: #00b0f0; }
	.blue .dialog-sure { background: #00b0f0; }
 
 .mask {
		position: absolute;
		top: 0.8rem;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		background: rgba(0,0,0,0.8);
		transition: background 0.3s ease-in;
	}
	.event-add {
		margin: 0.3rem 0;
	}
	
	
</style>
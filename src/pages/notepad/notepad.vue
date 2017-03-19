<template>
	<div :class="getTheme">
		<note-header @tools="changePages"></note-header>	
		<section class="container" :class="{'hide': tablePanel}">
			<event-add class="event-add clearfix"></event-add>
			<event-list></event-list>
		</section>
	</div>
</template>

<script>

	import noteHeader from '@/components/notepad/noteHeader'
	import eventAdd from '@/components/notepad/eventAdd'
	import eventList from '@/components/notepad/eventList'

export default {
	data() {
		return {
			getTheme: 'cyan',
			tablePanel: false,
		}
	},
	methods: {
		changePages: function() {
			console.log('changePages')
		}
	},
	components: {
		noteHeader,
		eventAdd,
		eventList,
	}
}
</script>
<style>

	.container {
		padding: 0 2%;
	}
	.event-add {
		margin: .4rem 0;
	}

	.cyan header ,
	.cyan .add-submit ,
	.cyan .event-tab {
		background: #26b6be;
	}
	.cyan .add-input:focus {
		border-color: #26b6be;
	}
	.cyan .cancel-btn {
		background: #26b6be;
	}
	.cyan .event-list {
		border-color: #26b6be;
	}

	
	
</style>
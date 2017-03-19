
export default {
	getEventList(state) {
		return state.event;
	},
	getToDo(states) {
		return states.event.filter(function(d) {
			if (d.type === 1) {
				return d;
			}
		});
		// return states.event;
	},
	getDone(state) {
		return state.event.filter(function(d) {
			if (d.type === 2) {
				return d;
			}
		});
	},
	getCancel(state) {
		return state.event.filter(function(d) {
			if (d.type === 3) {
				return d;
			}
		});
	}
}

import * as type from './mutations_type';
import * as func from '../localStorage';

export default {
	[type.ADDEVENT](state, obj) {
		state.count++;
		obj.item.id = state.count;
		state.event.unshift(obj.item);
		func.local.set(state);
	},
	[type.EVENTDONE](state, obj) {
		for (let i = 0; i < state.event.length; i++) {
			if (state.event[i].id === obj.id) {
				state.event[i].type = 2;
				state.event[i].time = func.getDate();
				var item = state.event[i];
				state.event.splice(i, 1);
				break;
			}
		}
		state.event.unshift(item);
		func.local.set(state);
	},
	[type.EVENTTODO](state, obj) {
		for (let i = 0; i < state.event.length; i++) {
			if (state.event[i].id === obj.id) {
				state.event[i].type = 1;
				var item = state.event[i];
				state.event.splice(i, 1);
				break;
			}
		}
		state.event.unshift(item);
		func.local.set(state);
	},
	[type.CLEAREVENT](state) {
		state.event = [];
		func.local.clear();
	},
	[type.DELEVENT](state, info) {
		if (state.event[info.index].id === info.id) {
			state.event.splice(info.index, 1);
		} else {
			state.event.filter(function(d, i) {
				state.event.splice(i, 1);
			})
		}
		func.local.set(state);
	},
	[type.EDITEVENT](state, info) {
		if (state.event[info.index].id === info.id) {
			state.event[info.index].content = info.content;
		} else {
			state.event.filter(function(d) {
				if (d.id == info.id) {
					d.content = info.content;
				}
			})
		}
		func.local.set(state);
	},
	[type.EVENTCANCEL](state, obj) {
		for (let i = 0; i < state.event.length; i++) {
			if (state.event[i].id === obj.id) {
				state.event[i].type = 3;
				var item = state.event[i];
				state.event.splice(i, 1);
				break;
			}
		}
		state.event.unshift(item);
		func.local.set(state);
	}
}



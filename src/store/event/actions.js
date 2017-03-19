/**
 * Created YangYusheng on 2017/03/17
 */

export default {
	addevent: ({commit}, param) => commit('ADDEVENT', {item: param}),
	eventdone: ({commit}, param) => commit('EVENTDONE', {id: param}),
	eventtodo: ({commit}, param) => commit('EVENTTODO', {id: param}),
	eventcancel: ({commit}, param) => commit('EVENTCANCEL', {id: param}),
	clearevent: ({commit}) => commit('CLEAREVENT'),
	delevent: ({commit}, param) => commit('DELEVENT', param),
	editevent: ({commit}, param) => commit('EDITEVENT', param)
}
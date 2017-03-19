/**
 * Created YangYusheng on 2017/03/17
 */
import * as func from '../localStorage'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = func.local.get() || {
	event: [],
	count: 0
}

export default {
	state,
	getters,
	actions,
	mutations
}
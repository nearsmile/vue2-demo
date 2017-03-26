/**
 * Created by YangYusheng on 201703/24
 */

import * as func from '../localStorage'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = func.themeLocal.get() || {
	theme: 'cyan'
}

export default {
	state,
	actions,
	mutations,
	getters
}
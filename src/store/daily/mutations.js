/*
 * Created by YangYusheng on 2017-04-01
 */

 export default {
 	add: (state, n) => state.num = n,
 	back(state, n) {
 		if (n) {
 			state.drawer = false;
 		} else {
 			state.drawer = true;
 		}
 	},
 	toggle( state, n ) {
		if ( n ) {
			state.circleFlag = true
		} else {
			state.circleFlag = false
		}
	}
}
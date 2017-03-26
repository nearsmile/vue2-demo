
import * as func from '../localStorage';

export default {
	SWITCHTHEME(state, obj) {
		state.theme = obj.theme;
		func.themeLocal.set(state);
	}
}
/*
 * Created by YangYusheng on 2017-04-03
 */

export default {
	props: {
		scroller: {
			type: [HTMLDocument, Element, Window],
			default() {
				return window
			}
		}
	},
	mounted() {
		this.$bindScoll();
	},
	methods: {
		$bindScoll() {
			if (!this.scroller) { 
				return 
			}
			this._handleScroll = (e) => {
				// 滑动屏幕回调函数
				if (this.onScroll) this.onScroll();
			};
			this.scroller.addEventListener('scroll', this._handleScroll);
		},
		$unbindScoll(scroller) {
			scroller = scroller || this.scroller;
			if (this._handleScroll) scroller.removeEventListener('scroll', this._handleScroll);
		}
	},
	beforeDestory() {
		this.$unbindScoll();
	},
	watch: {
		scroller(scroller, oldScroller) {
			if (scroller === oldScroller) return
			this.$unbindScoll(oldScroller);
			this.$bindScoll(scroller);
		}
	}
}
;(function(doc, win) {
	var docEl = doc.documentElement;
	var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
	var recalc = function() {
		var clientWidth = docEl.clientWidth;
		if (!clientWidth) return;
		docEl.style.fontSize = 26 * (clientWidth / 150) + 'px';
	};
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
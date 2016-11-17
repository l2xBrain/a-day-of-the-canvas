if(!window.requestAnimationFrame){
	winodw.requestAnimationFrame = (
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function(callback){
			return window.setTimeout(callback, 1000/60);
		}
	);
}

if(!window.cancelAnimationFrame){
	window.cancelAnimationFrame = (
		window.cancelRequestAnimationFrame ||
		window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame ||
		window.mozCancelAnimationFrame || window.mozCancelRequestAnimationFrame ||
		window.oCancelAnimationFrame || window.oCancelRequestAnimationFrame ||
		window.msCancelAnimationFrame || window.msCancelAnimationFrame ||
		window.clearTimeout
	);
}
window.util = {};

window.util.captureMouse = function(element){
	var mouse = {x:0, y:0};

	element.addEventListener('mousemove', function(event){
		var x, y;
		if(event.pageX || event.pageY){
			x = event.pageX;
			y = event.pageY;
		} else {
			x = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			y = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}
		// console.log(element.offsetLeft);
		// console.log(element.offsetTop);

		x -= element.offsetLeft;
		y -= element.offsetTop;

		mouse.x = x;
		mouse.y = y;

	},false);

	return mouse;

}
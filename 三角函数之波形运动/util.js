window.Util = {};

Util.parseColor = function(color,toNumber){
	if(toNumber === true){
		if(typeof color === 'number'){
			return (color | 0);
		}
		if(typeof color === 'string' && color[0] === '#'){
			color = color.slice(1);
		}

		return window.parseInt(color, 16);
	} else {
		if(typeof color === 'number'){
			color = '#' + ('00000' + (color | 0).toString(16)).substr(-6);
		}

		return color;
	}
}
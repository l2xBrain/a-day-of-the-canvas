function Ball(radius, color){
	if(!radius) {radius = 40;}
	if(!color) {color = '#ffff00';}

	this.x = 0;
	this.y = 0;
	this.vx = 0;
	this.vy = 0;
	this.radius = radius;
	this.rotation = 0;
	this.scaleX = 1;
	this.scaleY = 1;
	this.mass = 1;
	this.color = Util.parseColor(color);
	this.lineWidth = 1;
}

Ball.prototype.draw = function(context){
	context.save();
	context.translate(this.x,this.y);
	context.rotate(this.rotation);
	context.scale(this.scaleX, this.scaleY);
	context.lineWidth = this.lineWidth;
	context.fillStyle = this.color;
	context.strokeStyle = this.color;
	context.beginPath();
	context.arc(0, 0, this.radius, 0, Math.PI * 2, false);
	context.closePath();
	context.fill();
	context.stroke();
	context.restore();
}
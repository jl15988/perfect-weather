/**
 * Star
 *
 * @param int x
 * @param int y
 * @param int length
 * @param float opacity
 */
function Star(x, y, length, opacity, screenW, screenH) {
    this.x = parseInt(x);
    this.y = parseInt(y);
    this.length = parseInt(length);
    this.opacity = opacity;
    this.factor = 1;
    this.increment = Math.random() * 0.03;
    this.screenW = screenW;
    this.screenH = screenH;
}

//对象原型方法
/**
 * 画星星
 *
 * @param context
 */
Star.prototype.draw = function (context) {
    context.rotate(Math.PI * 1 / 10);

    //save the context
    context.save();
    //move into the middle of the canvas,just make room
    context.translate(this.x, this.y);
    //change the opacity
    if (this.opacity > 1) {
        this.factor = -1;
    } else if (this.opacity <= 0) {
        this.factor = 1;

        // 更新一次星星位置
        this.x = Math.round(Math.random() * this.screenW);
        this.y = Math.round(Math.random() * this.screenH);
    }

    // factor 控制方面，淡入淡出，每次重绘，星星的透明度都在变化
    this.opacity += this.increment * this.factor;

    context.beginPath();
    //画线
    for (var i = 5; i > 0; i--) {
        context.lineTo(0, this.length);
        context.translate(0, this.length);
        context.rotate(Math.PI * 2 / 10);
        context.lineTo(0, -this.length);
        context.translate(0, -this.length);
        context.rotate(-(Math.PI * 6 / 10));
    }

    context.lineTo(0, this.length);
    context.closePath();

    context.fillStyle = 'rgba(255,255,200, ' + this.opacity + ')';
    context.shadowBlur = 5;
    context.shadowColor = '#ffff33';
    context.fill();

    context.restore();
}

export default Star;
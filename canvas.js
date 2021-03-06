//function constructor canvas2d
function Canvas2D() {
  //two data members: canvas and canvasContext

  this._canvas = document.getElementById('screen');

  //object that has functionalities to interact with canvas
  //clears screen
  //draws object
  this._canvasContext = this._canvas.getContext('2d');
}

Canvas2D.prototype.clear = function() {
  this._canvasContext.clearRect(0, 0, this._canvas.width, this.canvas.heigth);
};

Canvas2D.prototype.drawImage = function(image, position) {
  this._canvasContext.drawImage(image, position.x, position.y);
};

let Canvas = new Canvas2D();

//Testing
let image = new Image();
image.src = './assets/sprites/spr_background4.png';
// Canvas.drawImage(image, { x: 0, y: 0 });

// let draw = () => {};
// draw();

setTimeout(() => {
  Canvas.drawImage(image, { x: 0, y: 0 });
}, 1000);

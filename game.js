var canvas = null,
   ctx = null
   lastPress = null,
   x = 50,
   y = 50;
   
var KEY_LEFT = 37,
   KEY_UP = 38,
   KEY_RIGHT = 39,
   KEY_DOWN = 40;

function paint(ctx) {
   ctx.fillStyle = '#000';
   ctx.fillRect(0, 0, canvas.width, canvas.height);

   ctx.fillStyle = '#0f0';
   ctx.fillRect(x, y, 10, 10);

   ctx.fillText('Last Press: ' + lastPress, 0, 20);
}

function act() {
   x += 2;
   if (x > canvas.width) {
      x = 0;
   }
}

function run() {
   window.requestAnimationFrame(run);
   act();
   paint(ctx);
}

function init() {
   canvas = document.getElementById('canvas');
   ctx = canvas.getContext('2d');
   run()
}
window.addEventListener('load', init, false);

document.addEventListener('keydown', function (evt) {
   lastPress = evt.which;
}, false);


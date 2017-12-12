var pingball = [];
var paddleR;
var paddleL;
function setup() {
  var canvas = createCanvas(400,400);
    canvas.parent('sketch-folder');
  fill(255);
  pingball = new Pingball (50,25);
  paddleR = new Paddle (380,300,191,222);
  paddleL = new Paddle (5,100,90,65);
}

function draw() {
  background (230);
  pingball.bounceBottomAndTop();
  pingball.bouncePaddle(paddleR);
  pingball.bouncePaddle(paddleL);
  pingball.update ();
  pingball.display();
  paddleR.display();
  paddleR.update();
  paddleL.display();
  paddleL.update();
}

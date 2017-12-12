var pingball = [];
var paddleR;
var paddleL;
function setup() {
  createCanvas(800,600);
    canvas.parent('sketch-folder');
  fill(115);
  pingball = new Pingball (50,25);
  paddleR = new Paddle (770,100,191,222);
  paddleL = new Paddle (10,100,65,90);
}

function draw() {
  background (50,89, 100);
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

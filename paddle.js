function Paddle(x, y, down, up) {
  this.x = x;
  this.y = y;
  this.w = 15;
  this.h = 150;
  this.down = down;
  this.up = up;
  this.speed = 12;

  this.display = function() {
    fill(50, 50, 0);
    rect(this.x, this.y, this.w, this.h)
  }

  this.update = function() {
    if (keyIsDown(this.down) === true) {
      if (this.y + this.h < height - 5) {
        this.y = this.y + this.speed
      }
    }
    if (keyIsDown(this.up) === true) {
      if (this.y > 5) {
        this.y = this.y - this.speed
      }
    }
  }
}
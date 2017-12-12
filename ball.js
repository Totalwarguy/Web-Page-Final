function Pingball(x, y) {
  this.x = 50;
  this.y = 300;
  this.diam = 25;
  this.speedX = 4;
  this.speedY = 4;

  this.bounceBottomAndTop = function() {
      if (this.y + 12.5 > height || this.y < 12.5 && this.x > 1 && this.x < width && this.y > 0 && this.y < height) {
        this.speedY = this.speedY * -1;
        this.y = this.y + this.speedY;
        print("pow");
      } //closes "if" statement
    } //closes .bounceBottomAndTop function
    
  this.bouncePaddle = function(paddle) {
    if (this.x  > paddle.x && this.x  < paddle.w + paddle.x && this.y  > paddle.y && this.y  < paddle.y + paddle.h){
      this.speedX = this.speedX * -1.1; //This reverses the direction
      print(this.speedX);
    }
  }
  this.display = function() {
    fill(198, 237, 44);
    ellipse(this.x, this.y, this.diam, this.diam);

  }

  this.update = function() {
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
  }
}
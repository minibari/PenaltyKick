class Ball {
  constructor() {
    this.x = 400;    //x and y define the middle of the ball
    this.y = 265;
    this.radius = 8;   // radius="poloměr"
    this.startAngle = 0;
    this.endAngle = Math.PI * 2;
    this.colour = 'white';
    this.velocityX = 0; // ball speed
    this.velocityY = 0;
    this.speed = 5;
    this.targetX = null; // ball direction
    this.targetY = null;
  }

  createBall() {
    let context = document.querySelector('canvas').getContext('2d');
    context.fillStyle = this.colour;
    context.beginPath();
    context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle); //ball as a circle using arc
    context.closePath();
    context.fill();


    // show physical line of the direction the ball is going to shoot
    if (this.targetX !== null && this.targetY !== null) {
      context.beginPath();
      context.setLineDash([10, 10]); // dash line
      context.moveTo(this.x, this.y);
      context.lineTo(this.targetX, this.targetY);
      context.strokeStyle = 'yellow';
      context.stroke();
      context.setLineDash([]);
      context.closePath();
    }

  }

  //how to get coordinates for shooting direction???
  //how to reset position after a goal?
  //normalizing speed? need to know distance
  //get distance with pythagoras (imagine triangle on XY axis)
  directball(userX, userY) {

    this.targetX = userX;
    this.targetY = userY;


  }
  //how to detect collision with goalkeeper or scoring goal?
  shootBall() {

    this.x += this.velocityX;
    this.y += this.velocityY;

    this.createBall();
  }
}


class Ball {
  constructor() {
    this.x = 400;    //x and y define the middle of the ball
    this.y = 250;
    this.radius = 6;   //scale of the ball
    this.startAngle = 0;
    this.endAngle = Math.PI * 2;
    this.colour = 'white';
    this.velocityX = 0; // ball speed
    this.velocityY = 0;
    this.targetX = null; // ball direction
    this.targetY = null;
    this.speed = 1.5;
    //encountered a problem when if clicked on canvas again, the ball would change direction.
    //needed to add condition to not be able to change direction if the ball is already moving
    this.isMoving = false;
  }



  createBall() {
    let context = document.querySelector('canvas').getContext('2d');
    context.fillStyle = this.colour;
    context.beginPath();
    context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle); //ball as a circle using arc
    context.closePath();
    context.fill();


    // show physical line of the direction the ball is going to shoot
    // if (this.targetX !== null && this.targetY !== null) {
    //   context.beginPath();
    //   context.setLineDash([10, 10]); // dash line
    //   context.moveTo(this.x, this.y);
    //   context.lineTo(this.targetX, this.targetY);
    //   context.strokeStyle = 'yellow';
    //   context.stroke();
    //   context.setLineDash([]);
    //   context.closePath();
    // }

  }

  //how to get coordinates for shooting direction???
  //how to reset position after a goal or end the game with GK's save?
  //normalizing speed? need to know distance
  //get distance with pythagoras (imagine triangle on XY axis)


  directBall(targetX, targetY) {
    if (this.isMoving == true) //if the ball is already moving this function does nothing
      return;

    let dx = targetX - this.x;  //distance on X axis
    let dy = targetY - this.y; //distance on Y axis
    let length = Math.sqrt(dx * dx + dy * dy); // calculating hypotenus length 

    this.velocityX = (dx / length) * this.speed; //speed normalization (elimination of speed issues based on mouseclick position)
    this.velocityY = (dy / length) * this.speed;
    this.isMoving = true;
  }


  shootBall() {

    this.x += this.velocityX;
    this.y += this.velocityY;

    this.createBall();
  }


  resetBall() {
    this.x = 400;
    this.y = 250;
    this.radius = 6;
    this.startAngle = 0;
    this.endAngle = Math.PI * 2;
    this.colour = 'white';
    this.velocityX = 0;
    this.velocityY = 0;
    this.targetX = null;
    this.speed = 1.5;
    this.isMoving = false;
  }

}



// function getClickCoordinates(){
//   const pageX = document.getElementById("x");
//   const pageY = document.getElementById("y");


//   function mouseClickPosition(event) {

//     pageX.innerText = "X coord: " + event.pageX;
//     pageY.innerText = "Y coord: " + event.pageY;
//   }


//   document.addEventListener("click", mouseClickPosition);
// }

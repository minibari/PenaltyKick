class Goalkeeper {
  constructor() {
    this.width = 28;
    this.height = 28;
    this.colour = 'black';
    this.x = 390;
    this.y = 100;
    this.velocityX = 1; //movement on X-axis
  }
  createGoalkeeper() {
    let context = document.querySelector('canvas').getContext('2d');
    context.fillStyle = this.colour;
    context.fillRect(this.x, this.y, this.width, this.height); //goalkeeper as rectangle
  }

  directGoalkeeper(score) {
    // console.log(this.x)
    //move right if far left
    if (this.x - this.width <= 275) {
      if (score == 0)
        score = 1;
      this.velocityX = score;

    }
    //move left if far right
    if (this.x + this.width >= 500) {
      if (score == 0)
        score = 1;
      this.velocityX = -score;

    }

  }

  moveGoalkeeper() {
    this.x += this.velocityX;

    this.createGoalkeeper();
  }

}



// window.onload = () => {
//     const goalkeeper = new Goalkeeper();
//     goalkeeper.createGoalkeeper();
// }
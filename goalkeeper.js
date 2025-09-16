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

  directGoalkeeper(){ 
    //move right if far left
    if (this.x - this.width <= 225){
        this.velocityX = 1;
    } 
    //move left if far right
    if (this.x + this.width >= 550){
        this.velocityX = -1;
    }
  }

  moveGoalkeeper(){
    this.x += this.velocityX;

    this.createGoalkeeper();
  }

}

// window.onload = () => {
//     const goalkeeper = new Goalkeeper();
//     goalkeeper.createGoalkeeper();
// }
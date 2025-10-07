class Game {
  constructor(ball, field, goalkeeper, goal) {
    this.ball = ball;
    this.field = field;
    this.goal = goal;
    this.goalkeeper = goalkeeper;
    this.score = 0;
  }

  startGame() {
    this.field.createField();
    this.ball.createBall();
    this.goalkeeper.createGoalkeeper();
    this.goal.createGoal();
    this.score = 0;
  }

  updateGame() {
    let context = document.querySelector('canvas').getContext('2d');
    context.clearRect(0, 0, 800, 600);
    this.field.createField();
    this.goalkeeper.directGoalkeeper(this.score);
    this.goalkeeper.moveGoalkeeper();
    this.ball.shootBall();
    this.goal.createGoal();
    this.detectCollision();
    this.field.updateScore(this.score)
    requestAnimationFrame(() => this.updateGame());
  }

  //there will be collisions with ball between goal and goalkeeper 
  //collision with goal adds up +1 to score, collision with GK make the game over.
  //also need to restart the game if there are no collisions and the ball would run out of the field
  //https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Collision_detection
  detectCollision() {
    if (
      this.ball.x > this.goal.x &&
      this.ball.x < this.goal.x + this.goal.width &&
      this.ball.y > this.goal.y &&
      this.ball.y + this.ball.radius * 2 < this.goal.y + this.goal.height //the ball must be cross the line entirely
    ) {
      this.ball.resetBall();
      // console.log(this.score);
      this.score++;
    }

    if (
      this.ball.x > this.goalkeeper.x &&
      this.ball.x < this.goalkeeper.x + this.goalkeeper.width &&
      this.ball.y > this.goalkeeper.y &&
      this.ball.y < this.goalkeeper.y + this.goalkeeper.height ||
      this.ball.x < 0 || this.ball.x > 800 || this.ball.y < 0 || this.ball.y > 600  //if the ball goes outside the canvas
    ) {
      this.endGame();
    }


  }
  endGame(){
  let context = document.querySelector('canvas').getContext('2d');
  context.clearRect(0, 0, 800, 600);
  this.field.createField();
  this.field.endGameMessage(this.score);
  cancelAnimationFrame();
}

}



let gameField = new Field();
let gameGoalkeeper = new Goalkeeper();
let gameBall = new Ball();
let gameGoal = new Goal();


let newGame = new Game(gameBall, gameField, gameGoalkeeper, gameGoal)

let canvas = document.getElementById("field")

canvas.addEventListener("click", (event) => {
  let clickX = event.pageX;
  let clickY = event.pageY;

  gameBall.directBall(clickX, clickY);
});

newGame.startGame();
newGame.updateGame();

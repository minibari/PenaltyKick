class Game {
  constructor(ball, field, goalkeeper, goal) {
    this.ball = ball;
    this.field = field;
    this.goal = goal;
    this.goalkeeper = goalkeeper;
    this.score = 0;
    this.animationId;
    this.isRunning = true;
  }

  startGame() {
    this.field.createField();
    this.ball.createBall();
    this.goalkeeper.createGoalkeeper();
    this.goal.createGoal();
    this.score = 0;
    this.updateGame();
  }

  updateGame() {
    if (!this.isRunning) return;
    let canvasContext = document.querySelector('canvas').getContext('2d');
    canvasContext.clearRect(0, 0, 800, 600);
    this.field.createField();
    this.detectCollision();
    this.goalkeeper.directGoalkeeper(this.score);
    this.goalkeeper.moveGoalkeeper();
    this.ball.shootBall();
    this.goal.createGoal();
    this.field.updateScore(this.score);
    this.animationId = requestAnimationFrame(this.updateGame.bind(this));
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
      console.log("Goal scored")
      this.score++;
      console.log(this.score);
    }

    if (
      this.ball.x > this.goalkeeper.x &&
      this.ball.x < this.goalkeeper.x + this.goalkeeper.width &&
      this.ball.y > this.goalkeeper.y &&
      this.ball.y < this.goalkeeper.y + this.goalkeeper.height ||
      this.ball.x < 0 || this.ball.x > 800 || this.ball.y < 0 || this.ball.y > 600  //if the ball goes outside the canvas
    ) {
      console.log("Penalty missed")
      this.endGame();
    }


  }
  endGame() {
    this.isRunning = false;
    cancelAnimationFrame(this.animationId);
    this.field.endGameMessage();
  }

  restartGame() {
  cancelAnimationFrame(this.animationId);
  this.isRunning = true;
  this.score = 0;
  this.ball.resetBall();
  this.startGame();
}

}

let gameField = new Field();
let gameGoalkeeper = new Goalkeeper();
let gameBall = new Ball();
let gameGoal = new Goal();

let newGame = new Game(gameBall, gameField, gameGoalkeeper, gameGoal);

//shooting ball
let canvas = document.getElementById("field");
canvas.addEventListener("click", (event) => {
  let clickX = event.offsetX; //target node is canvas
  let clickY = event.offsetY;
  gameBall.directBall(clickX, clickY);
});

//restart
let restartButton = document.getElementById("restart");
restartButton.addEventListener("click", () => {
  newGame.restartGame();
});
newGame.startGame();




class Game {
  constructor(ball, field, goalkeeper, goal) {
    this.ball = ball;
    this.field = field;
    this.goal = goal;
    this.goalkeeper = goalkeeper;
    this.score = 0;
  }

  startGame() {
    (function () {
      var requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;
      window.requestAnimationFrame = requestAnimationFrame;
    })();

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
      this.ball.y < this.goal.y + this.goal.height
    ) {
      this.ball.resetBall();
      // console.log(this.score);
      this.score++;
    }


  }

}

let gameField = new Field();
let gameGoalkeeper = new Goalkeeper();
let gameBall = new Ball();
let gameGoal = new Goal();


let newGame = new Game(gameBall, gameField, gameGoalkeeper, gameGoal)

let canvas = document.getElementById("field")

canvas.addEventListener("click", (event) => {
  let clickX = event.offsetX;
  let clickY = event.offsetY;

  gameBall.directBall(clickX, clickY);
});

newGame.startGame();
newGame.updateGame();

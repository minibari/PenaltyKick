class Game {
  constructor(ball, field, goalkeeper) {
    this.ball = ball;
    this.field = field;
    // this.goal = goal;
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
    this.score = 0;
  }

  updateGame() {
    let context = document.querySelector('canvas').getContext('2d');
    context.clearRect(0, 0, 800, 600);
    this.field.createField(); 
    this.goalkeeper.directGoalkeeper();
    this.goalkeeper.moveGoalkeeper();
    this.ball.createBall();
    this.ball.shootBall();
    requestAnimationFrame(() => this.updateGame());
  }

}

let gameField = new Field();
let gameGoalkeeper = new Goalkeeper();
let gameBall = new Ball();

// let goal;

let newGame = new Game(gameBall, gameField, gameGoalkeeper)



// let canvas = document.querySelector('canvas');

// canvas.addEventListener("mousemove", (event) => {
//     const rect = canvas.getBoundingClientRect();
//     newGame.ball.targetX = event.clientX - rect.left;
//     newGame.ball.targetY = event.clientY - rect.top;
// });

// canvas.addEventListener("click", (event) => {
//     const rect = canvas.getBoundingClientRect();
//     newGame.ball.directBall(event.clientX - rect.left, event.clientY - rect.top);
// });

newGame.startGame();
newGame.updateGame();

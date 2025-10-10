class Field {
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.canvas.width = 800;
        this.canvas.height = 500;
        this.canvasContext = this.canvas.getContext('2d');
    }

    createField() {
        this.canvasContext.fillStyle = 'green';
        this.canvasContext.strokeStyle = 'white';
        this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height); //field
        this.canvasContext.strokeRect(150, 100, 500, 250) //penalty box
        this.canvasContext.strokeRect(250, 100, 300, 75) //goalkick area

    }




    updateScore(score) {
        this.canvasContext.font = "50px Arial";;
        this.canvasContext.fillStyle = "yellow";
        this.canvasContext.fillText("Goals scored: " + score, 0, 480);
    }

    endGameMessage() {
        this.canvasContext.font = "50px Arial ";;
        this.canvasContext.fillStyle = "#a5331cff";
        this.canvasContext.fillText("Game Over!", 200, 300);
    }
}



// window.onload = () => {
//     const penaltyBox = new PenaltyBox();
//     penaltyBox.createPenaltyBox();
// }
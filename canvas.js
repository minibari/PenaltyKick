class Field {
    constructor() {
        this.canvas = document.querySelector('canvas');
        this.score = 0;
    }

    createField() {
        this.canvas.width = 800;
        this.canvas.height = 600;
        this.context = this.canvas.getContext('2d');

        this.context.fillStyle = 'green';
        this.context.strokeStyle = 'white';
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height); //field
        this.context.strokeRect(150, 100, 500, 250) //penalty box
        this.context.strokeRect(250, 100, 300, 75) //goalkick area
    }
}

// window.onload = () => {
//     const penaltyBox = new PenaltyBox();
//     penaltyBox.createPenaltyBox();
// }
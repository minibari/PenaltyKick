class Goal {
    constructor() {
        this.width = 185;
        this.height = 65;
        this.colour = 'white';
        this.x = 310;
        this.y = 35;
    }


    
    createGoal() {
        let context = document.querySelector('canvas').getContext('2d');
        context.strokeStyle = 'white';
        context.strokeRect(this.x, this.y, this.width, this.height); 
    }
}

//test github
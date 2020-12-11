class Bar {
    constructor(canvas, canvasW, canvasH) {
        this.canvas = canvas,
        this.ctx = this.canvas.getContext("2d"),
        this.canvasH = canvasH,
        this.canvasW = canvasW,
        this.barWidth = 740,
        this.barHeight = 520,
        this.barXposition = 35,
        this.barYposition = 15;
    }
    
}
        class Reaction {
            constructor(canvas, canvasW, canvasH) {
                this.canvas = canvas;
                this.ctx = this.canvas.getContext("2d");
                this.canvasH = canvasH,
                this.canvasW = canvasW,
                this.reactionWidth = 200,
                this.reactionHeight = 300,
                this.reactionX = bar.barWidth - 160,
                this.reactionY = bar.barYposition + 140,
                this.imgURL = './images/cabeca3.png';       
            }
    
}
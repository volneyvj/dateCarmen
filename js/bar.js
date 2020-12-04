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
         
        const imgBarback = new Image();

        imgBarback.addEventListener('load', () => {
            this.imgBarback = imgBarback
        });

        imgBarback.src = './images/bar-background.jpg';
    }

    // drawBarback() {
        
    //     this.ctx.filter = "blur(2px)";
    //     this.ctx.filter = "contrast(45%)"
    //     this.ctx.drawImage(this.imgBarback, this.barXposition, this.barYposition, this.barWidth, this.barHeight);
    //     // reaction.drawReaction();
    //     }
    
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
                this.imgURL = './images/carmen-bar.png';       
            }

        

        
}
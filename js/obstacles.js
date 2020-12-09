class Obstacle {
    constructor(canvas, canvasW) {
        this.canvas = canvas,
            this.ctx = this.canvas.getContext("2d"),
            this.img1X = 740,
            this.img2X = 0,
            this.img3X = 0,
            this.img4X = 730,
            this.img1Y = 430,
            this.img2Y = 340,
            this.img3Y = 260,
            this.img4Y = 160,
            this.imgsWidth = 60,
            this.imgsHeight = 75,
            this.signal1 = 'left',
            this.signal2 = 'right',
            this.signal3 = 'right',
            this.signal4 = 'left',
            this.canvasW = canvasW;
    }


    // desenha o obstáculo
    drawObst() {
        this.img1 = new Image();
        this.img2 = new Image();
        this.img3 = new Image();
        this.img4 = new Image();
        this.img1.src = './images/bettyfeia.png'
        this.img2.src = './images/vandiesel.png'
        this.img3.src = './images/davidh.png'
        this.img4.src = './images/noah.png'
        
        this.ctx.drawImage(this.img1, this.img1X, this.img1Y, this.imgsWidth, this.imgsHeight);
        this.ctx.drawImage(this.img2, this.img2X, this.img2Y, this.imgsWidth, this.imgsHeight);
        this.ctx.drawImage(this.img3, this.img3X, this.img3Y, this.imgsWidth, this.imgsHeight);
        this.ctx.drawImage(this.img4, this.img4X, this.img4Y, this.imgsWidth, this.imgsHeight);
    }


    // atualiza a posição do obstáculo
    newObstpos() {

        if (this.img1X <= 5) {
            this.signal1 = 'right';
        } else if (this.img1X >= (this.canvasW - 50)) {
            this.signal1 = 'left';
        }

        if (this.img2X <= 5) {
            this.signal2 = 'right';
        } else if (this.img2X >= (this.canvasW - 50)) {
            this.signal2 = 'left';
        }

        if (this.img3X <= 5) {
            this.signal3 = 'right';
        } else if (this.img3X >= (this.canvasW - 50)) {
            this.signal3 = 'left';
        }

        if (this.img4X <= 5) {
            this.signal4 = 'right';
        }
        if (this.img4X >= (this.canvasW - 50)) {
            this.signal4 = 'left';
        }

        if (this.signal1 === 'right') {
            this.img1X += 10;
        } else {
            this.img1X -= 10;
        }

        if (this.signal2 === 'right') {
            this.img2X += 20;
        } else {
            this.img2X -= 20;
        }

        if (this.signal3 === 'right') {
            this.img3X += 35;
        } else {
            this.img3X -= 35;
        }

        if (this.signal4 === 'right') {
            this.img4X += 65;
        } else {
            this.img4X -= 65;
        }
    }
    
      top1() {
        return this.img1Y;
      }
      bottom1() {
        return this.img1Y + this.imgsHeight - 25;
      }
      left1() {
        return this.img1X + 25;
      }
      right1() {
        return this.img1X + this.imgsWidth - 25;
      }

      top2() {
        return this.img2Y;
      }
      bottom2() {
        return this.img2Y + this.imgsHeight - 25;
      }
      left2() {
        return this.img2X + 25;
      }
      right2() {
        return this.img2X + this.imgsWidth - 25;
      }

      top3() {
        return this.img3Y;
      }
      bottom3() {
        return this.img3Y + this.imgsHeight - 25;
      }
      left3() {
        return this.img3X + 25;
      }
      right3() {
        return this.img3X + this.imgsWidth - 25;
      }

      top4() {
        return this.img4Y;
      }
      bottom4() {
        return this.img4Y + this.imgsHeight - 25;
      }
      left4() {
        return this.img4X + 25;
      }
      right4() {
        return this.img4X + this.imgsWidth - 25;
      }

}
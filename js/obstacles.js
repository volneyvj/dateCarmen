class Obstacle {
    constructor(canvas, canvasW, source, x, y, signal, speed) {
        this.canvas = canvas,
            this.ctx = this.canvas.getContext("2d"),
            this.imgX = x,
            this.imgY = y,
            this.imgsWidth = 60,
            this.imgsHeight = 75,
            this.signal = signal,
            this.canvasW = canvasW,
            this.source = source,
            this.speed = speed;
    }

   
    // desenha o obstáculo
    drawObst(i) {
      // console.log (obstacles[i].source);
        this.img = new Image();
        this.img.src = obstacles[i].source;
        obstacles[i].ctx.drawImage(obstacles[i].img, obstacles[i].imgX, obstacles[i].imgY, obstacles[i].imgsWidth, obstacles[i].imgsHeight);
  }


    // atualiza a posição do obstáculo
    newObstpos(i) {
        if (obstacles[i].imgX <= 5) {
            obstacles[i].signal = 'right';
        } else if (obstacles[i].imgX >= (obstacles[i].canvasW - 50)) {
            obstacles[i].signal = 'left';
        }

        if (obstacles[i].signal === 'right') {
            obstacles[i].imgX += obstacles[i].speed;
        } else {
            obstacles[i].imgX -= obstacles[i].speed;
        }

    }
    
      top() {
        return this.imgY;
      }
      bottom() {
        return this.imgY + this.imgsHeight - 25;
      }
      left() {
        return this.imgX + 25;
      }
      right() {
        return this.imgX + this.imgsWidth - 25;
      }

}
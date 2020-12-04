class playerOne {
    constructor(canvas, canvasW, canvasH) {
        this.canvas = canvas,
        this.ctx = this.canvas.getContext("2d"),
        this.playerWidth = 90,
            this.playerHeight = 90,
            this.name = "",
            this.score = -1,
            this.playerXposition = (canvasW / 2 - 80),
            this.playerYposition = (canvasH - 90),
            this.canvasH = canvasH,
            this.canvasW = canvasW;


        const imgPlayer = new Image();

        imgPlayer.addEventListener('load', () => {
            this.imgPlayer = imgPlayer
            this.drawPlayer();
        });

        imgPlayer.src = './images/cepacol-guy.png';
    }


    drawPlayer() {
        this.ctx.drawImage(this.imgPlayer, this.playerXposition, this.playerYposition, this.playerWidth, this.playerHeight);
    }

    moveLeft() {
        if (this.playerXposition <= 10) {
            this.playerXposition = 10
        } else {
            this.playerXposition -= 7;
        }
    }
    moveRight() {
        if (this.playerXposition >= (this.canvasW - 65)) {
            this.playerXposition = (this.canvasW - 65)
        } else {
            this.playerXposition += 7;
        }
    }

    moveUp() {
        if (this.playerYposition <= 10) {
            this.playerYposition = 10
        } else {
            this.playerYposition -= 7;
        }
    }
    moveDown() {
        if (this.playerYposition >= (this.canvasH - 55)) {
            this.playerYposition = (this.canvasH - 55)
        } else {
            this.playerYposition += 7;
        }
    }


    top() {
        return this.playerYposition;
      }
      bottom() {
        return this.playerYposition + this.playerHeight - 25;
      }
      left() {
        return this.playerXposition;
      }
      right() {
        return this.playerXposition + this.playerWidth - 25;
      }


    crashWith() {
        return !(
            this.top() > obstacles.bottom1() ||
            this.bottom() < obstacles.top1() ||
            this.left() > obstacles.right1() ||
            this.right() < obstacles.left1() 
            )
      }


    playerPosition() {
        if (this.playerYposition <155) {
            floor.grayscale = 0;
            floor.blur = 0;
        }
      return this.playerYposition;
    }

}
    
     
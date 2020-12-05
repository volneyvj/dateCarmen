class danceFloor {
  constructor(canvas, canvasW, canvasH) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.canvasW = canvasW,
    this.canvasH = canvasH,
    this.barArea = 150,
    this.danceBlockx = 75,
    this.danceBlocky = 75,
    this.numberOfBlocks = ((this.canvasW / this.danceBlockx) * ((this.canvasH - this.barArea) / this.danceBlocky)+1),
    this.colors = ["#ff80ff", "#b3ffcc", "#99ebff"],
    this.colors2 = ["#99ffe6", "#ff99cc", "#ffbb99", "#ffffff"],
    this.blur = 1,
    this.textCome ='Hey you, come to the bar!',
    this.grayscale = "80";


    const imgBar = new Image();
    const imgCarmen1 = new Image();

    imgCarmen1.addEventListener('load', () => {
      this.imgCarmen1 = imgCarmen1    
    });

    imgBar.addEventListener('load', () => {
      this.imgBar = imgBar;
    });

    imgBar.src = './images/bar.jpg';
    imgCarmen1.src = './images/carmen-main.png'

  }

  drawBar() {
    this.ctx.strokeStyle = '#922984'; 
    this.ctx.lineWidth = 14; 
    this.ctx.setLineDash([20, 3, 3, 3, 3, 3, 3, 3]);
    this.ctx.filter = `blur(${this.blur}px)`;
    this.ctx.filter = `grayscale(${this.grayscale}%)`;
    this.ctx.drawImage(this.imgBar, 0, 0, this.canvasW, this.barArea);
    this.ctx.strokeRect(0, 0, this.canvasW, this.barArea);
  }

  drawCarmen() {
    this.ctx.filter = `blur(${this.blur}px)`;
    this.ctx.filter = `grayscale(${this.grayscale}%)`;
    this.ctx.drawImage(this.imgCarmen1, 570, 12, 160, 180);
    this.ctx.font = 'bold 28px Verdana';
    this.ctx.fillStyle = this.colors2[Math.floor(Math.random() * this.colors2.length - 1)];
    this.ctx.fillText(this.textCome, 200, 50);
  }

  shuffleColor() {
    let axisX = 0;
    let axisY = this.barArea;
    this.ctx.clearRect(0, axisY, this.canvasW, this.canvasH - this.barArea);
    let k = 0;
    let bright = 100;
   
    for (let i = 0; i <= this.numberOfBlocks; i += 1) {

      // let color = this.colors[Math.floor(Math.random() * this.colors.length - 1)];

k = Math.floor(Math.random() * this.colors.length);
bright = Math.floor(Math.random() * 80) + 65;

this.ctx.strokeStyle = '#000000'; 
this.ctx.lineWidth = 1; 
this.ctx.setLineDash([]);
this.ctx.filter = `opacity(90%)`;
this.ctx.filter = `brightness(${bright}%)`;
this.ctx.fillStyle = this.colors[k];
this.ctx.fillRect(axisX, axisY, this.danceBlockx, this.danceBlocky);

this.ctx.strokeRect(axisX, axisY, this.danceBlockx, this.danceBlocky);


      if (axisX >= this.canvasW - this.danceBlockx) {
        axisX = 0;
        axisY += this.danceBlocky;
      } else {
        axisX += this.danceBlockx;
        axisY += 0;
      }

    
   
    }
  }
}



//  colors :
//  #b3daff blue
//  #ff80ff pink
// 99ffeb green
// ffeecc orange


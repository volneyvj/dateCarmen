class danceFloor {
  constructor(canvas, canvasW, canvasH) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.canvasW = canvasW,
    this.canvasH = canvasH,
    this.barArea = 150,
    this.danceBlockx = 50,
    this.danceBlocky = 50,
    this.numberOfBlocks = ((this.canvasW / this.danceBlockx) * ((this.canvasH - this.barArea) / this.danceBlocky)),
    this.colors = ["#4d4dff", "#00ffbf", "#f2f2f2"],
    this.colors2 = ["#dfff80", "#ffffff", "#99ffcc", "#ff66a3"],
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
    imgCarmen1.src = './images/carmen-bar.png'

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
    this.ctx.drawImage(this.imgCarmen1, 570, 8, 140, 140);
    this.ctx.font = '32px serif';
    this.ctx.fillStyle = this.colors2[Math.floor(Math.random() * this.colors2.length - 1)];
    this.ctx.fillText(this.textCome, 280, 50);
  }

  shuffleColor() {
    let axisX = 0;
    let axisY = this.barArea;
    this.ctx.filter = "blur(0px)";
    this.ctx.clearRect(0, axisY, this.canvasW, this.canvasH - this.barArea);

    for (let i = 0; i <= this.numberOfBlocks; i += 1) {

      let color = this.colors[Math.floor(Math.random() * this.colors.length - 1)];

      // this.ctx.beginPath();
      this.ctx.fillStyle = color;
      this.ctx.fillRect(axisX, axisY, this.danceBlockx, this.danceBlocky);
      // ctx.lineWidth = 100;
      // ctx.strokeStyle = "black";
      // ctx.stroke();
      // ctx.closePath();

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

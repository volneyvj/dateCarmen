function checkGameOver() {


    if (player.crashWith()) {
      ouchAudio.play();
      stop();
      return true;
     
    }
    if (chat.n === 11) {
      stop();
      return true;
    }
    if (player.score === -3) {
       stop();
       return true;
    }
    if (player.score === 5) {
        win();
        return true;
    }
    if (timeCouting.time <=0) {
        stop()
        return true;
    }
  }
  
  function stop() {
    setTimeout(gameOver, 2000);
    setTimeout(showStart, 9000);   
  }

  function win() {
    setTimeout(winner, 1500);
    setTimeout(showStart, 12000);
  }
  
  function gameOver(url) {
    barMusic.pause();
    document.getElementById('chat-area').style.display = 'none'
    imgOver = new Image();
    imgOver.addEventListener('load', () => {  
    });
    imgOver.src = './images/uglybettyfull.png';
    ctx.textAlign = 'center'
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, myCanvas.canvasW, myCanvas.canvasH);
    ctx.fillStyle = 'red';
    ctx.font = '38px serif';
    ctx.fillText('GAME OVER', myCanvas.canvasW / 2, myCanvas.canvasH / 2);
    ctx.fillText("Here's a friend of mine you should meet", myCanvas.canvasW / 2, myCanvas.canvasH * 2 / 3);
    ctx.drawImage(imgOver, 150, 150, 100, 180);
  }

  function winner() {
    document.getElementById('chat-area').style.display = 'none'
    imgWin = new Image();
    imgWin.src = './images/gif1.gif'
    ctx.textAlign = 'center'
    ctx.fillStyle = 'purple';
    ctx.fillRect(0, 0, myCanvas.canvasW, myCanvas.canvasH);
    ctx.fillStyle = 'red';
    ctx.font = '38px serif';
    ctx.fillText('!! WE GOT A WINNER !!', myCanvas.canvasW / 2, myCanvas.canvasH / 2);
    ctx.fillText(`FINAL SCORE: ${player.score}`, myCanvas.canvasW / 2, myCanvas.canvasH * 2 / 3);
    ctx.drawImage(imgWin, 300, 25, 120, 220);

  }

  function showStart() {
    window.location.reload(false);
  }


 



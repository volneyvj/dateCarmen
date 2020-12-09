function checkGameOver() {

    if (player.crashWith() || player.crashWith2() || player.crashWith3() || player.crashWith4() ) {
      ouchAudio.play();
      stop();
      return true;
    }

    if (player.score === 5) {
      win();
      return true;
  }

    if (newQuestions.answeredQuestions.length > 11) {
      stop();
      return true;
    }
    if (player.score === -3) {
       stop();
       return true;
    }
    if (timeCounting.time <=0) {
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
    setTimeout(showStart, 13000);
  }
  
  function gameOver(url) {
    barMusic.pause();
    document.getElementById('chat-area').style.display = 'none'
    imgOver = new Image();
    imgOver.addEventListener('load', () => { 
      ctx.drawImage(imgOver, myCanvas.canvasW / 2 - 50, myCanvas.canvasH /2 - 200, 140, 240) ; 
     });
    imgOver.src = './images/uglybettyfull.png';
    ctx.textAlign = 'center'
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, myCanvas.canvasW, myCanvas.canvasH);
    ctx.fillStyle = 'red';
    ctx.font = '38px serif';
    ctx.fillText(`GAME OVER - Your Final Score was: ${player.score}`, myCanvas.canvasW / 2, myCanvas.canvasH / 4 - 100);
    ctx.fillText("Here's a friend of mine you should meet", myCanvas.canvasW / 2, myCanvas.canvasH / 2  + 120);
  }

  function winner() {
    document.getElementById('chat-area').style.display = 'none'
    imgWin = new Image();
    imgWin.addEventListener('load', () => {  
    ctx.drawImage(imgWin, myCanvas.canvasW / 2 - 50, myCanvas.canvasH / 2 - 250, 140, 185);
    });
    imgWin.src = './images/gif1.gif'
    ctx.textAlign = 'center'
    ctx.fillStyle = 'purple';
    ctx.fillRect(0, 0, myCanvas.canvasW, myCanvas.canvasH);
    ctx.fillStyle = 'white';
    ctx.font = '38px serif';
    ctx.fillText('!! WE GOT A WINNER !! ', myCanvas.canvasW / 2, myCanvas.canvasH / 2 - 25);
    ctx.fillText(`Final Score: ${player.score} - Completed in: ${(250 - timeCounting.time)} seconds`, myCanvas.canvasW / 2, myCanvas.canvasH * 2 / 3);
    

  }

  function showStart() {
    window.location.reload(false);
  }


 



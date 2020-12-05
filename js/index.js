const canvas = document.getElementById('main-canvas');
// const canvasBar = document.getElementById('bar-canvas');

const ctx = canvas.getContext('2d');
// const ctxBar = canvasBar.getContext('2d');


class canvasArea {
  constructor() {
    this.canvasW = 800,
      this.canvasH = 600;
  }
};

const myCanvas = new canvasArea();
const floor = new danceFloor(canvas, myCanvas.canvasW, myCanvas.canvasH);
const player = new playerOne(canvas, myCanvas.canvasW, myCanvas.canvasH);
const obstacles = new Obstacle(canvas, myCanvas.canvasW);
const bar = new Bar(canvas, myCanvas.canvasW, myCanvas.canvasH);
const reaction = new Reaction(canvas, myCanvas.canvasW, myCanvas.canvasH);
const chat = new chatBoards(canvas, myCanvas.canvasW, myCanvas.canvasH);
const newQuestions = new questionsGame(questions);
const timeCounting = new timeCount();

const audioMusic = new Audio();
audioMusic.src = "./sounds/eletronic.mp3";
audioMusic.volume = 0.08;

const barMusic = new Audio();
barMusic.src = "./sounds/barsound.mp3";
barMusic.volume = 0.07;

const ouchAudio = new Audio();
ouchAudio.src = "./sounds/ouch.mp3";
ouchAudio.volume = 0.2;

function clearCanvas() {
  ctx.clearRect(0, 0, myCanvas.canvasW, myCanvas.canvasH);
}

let loop = 0;
let contagem = 0;



document.getElementById('start_button').onclick = () => {
  startMyGame();
};

document.onkeydown = function(e) {
  var keyCode = e.keyCode;
  if(keyCode === 32) startMyGame();
}



  function startMyGame() {
  clearCanvas();
  loop = setInterval(startGame, 300);
  document.getElementById('start_button').style.display = 'none'
  document.getElementById('first').style.display = 'inherit'
  document.getElementById('time').style.display = 'inherit'
  contagem = setInterval(timeMid, 1000);
  audioMusic.play();
  }


function startGame() {
  clearCanvas();
  floor.drawBar();
  floor.drawCarmen();
  floor.shuffleColor();
  player.drawPlayer();
  player.playerPosition();
  obstacles.drawObst();
  obstacles.newObstpos();
  checkGameOver();

  if (checkGameOver()) {
    clearInterval(loop);
    clearInterval(contagem);
  }

}

document.addEventListener('keydown', e => {
  switch (e.keyCode) {
    case 37:
      player.moveLeft();
      break;
    case 39:
      player.moveRight();
      break;
    case 38:
      player.moveUp();
      break;
    case 40:
      player.moveDown();
      break;
  }
});

const checkPlayerpos = setInterval(checkPlayerPosition, 300);

function checkPlayerPosition() {

  if (player.playerYposition < 100) {
    let htmlBar = '';
    htmlBar += `<button type="button" choice="0" class="btn start-bar btn-outline-danger btn-lg" onclick="rollChat(this)">Start Conversation</button>`;
    document.getElementById('chat-area').innerHTML = htmlBar;
    floor.textCome = '';
    clearInterval(checkPlayerpos);
  }
}

function timeMid() {
  timeCounting.countTime();
  let htmlTempo = '';
  htmlTempo += `${timeCounting.time}`;
  document.getElementById('timeMid').innerHTML = htmlTempo;
}
  
function barMusicstart() {
  barMusic.play();
}

function rollChat(clicked_btn) {
  audioMusic.pause();
  setTimeout(barMusicstart, 1000);

  let ans1 = parseInt(clicked_btn.getAttribute("choice"), 10);

  newQuestions.answeredQuestions.push(ans1);

  let lastAnswer = newQuestions.answeredQuestions.slice(-1)[0];
  let chatNumber = 1;

  if (chat.n !== 0) {

    if (newQuestions.randomQuestions[chat.n - 1].answers[lastAnswer].point === -1) {
      reaction.imgURL = './images/cabeca2.png';
    } else if (newQuestions.randomQuestions[chat.n - 1].answers[lastAnswer].point === 0) {
      reaction.imgURL = './images/cabeca5.png';
    } else if (newQuestions.randomQuestions[chat.n - 1].answers[lastAnswer].point === 1) {
      reaction.imgURL = './images/cabeca4.png';
    }
  } else {
    reaction.imgURL = './images/cabeca3.png';
  }
  if (chat.n !== 0) {
    chatNumber = chat.n
  } else {
    chatNumber = 1;
  }

  player.score += newQuestions.randomQuestions[chatNumber - 1].answers[lastAnswer].point

  let html = '';
  html += `<section class="bar"> <div class="bar-background"> <img src="./images/bg-date-carmen.png" width="790" height="500"></div>`;
  html += `<div class="chat">`;
  if (chat.n !== 0) {
    html += `<div class="carmen-chat"><div class="questions"><div class="carmen-reaction">${newQuestions.randomQuestions[chatNumber-1].answers[lastAnswer].cReaction}</div>`;
  } else {
    html += `<div class="carmen-chat"><div class="questions"><div class="carmen-reaction">Hello you there ! </div>`;
  }
  html += `<div class="carmen-question">${newQuestions.randomQuestions[newQuestions.questionNumber].cQuestions}</div></div>`;
  html += `<div class="face_img"><img class="carmen-chat-img" src="${reaction.imgURL}"></div></div>`;
  html += `<div class="player-chat"><div><img class="player-chat-img" src="./images/cepacol-guy-right.png"></div>`;
  html += `<div class="answers"><button type="button" choice="0" class="btn btn-primary btn-lg btn-block" onclick="rollChat(this)">${newQuestions.randomQuestions[chat.n].answers[0].pAnswers}</button>`;
  html += `<button type="button" choice="1" class="btn btn-primary btn-lg btn-block" onclick="rollChat(this)">${newQuestions.randomQuestions[chat.n].answers[1].pAnswers}</button>`;
  html += `<button type="button" choice="2" class="btn btn-primary btn-lg btn-block" onclick="rollChat(this)">${newQuestions.randomQuestions[chat.n].answers[2].pAnswers}</button></div>`;
  html += `</div></section>`;


  document.getElementById('chat-area').innerHTML = html;
  newQuestions.questionNumber += 1;
  chat.n += 1;

};


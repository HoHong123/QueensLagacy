var currentPlay = 1;
var listPlay = false;

function onLoad(){
  switch (window.location.hash) {
    case "#1":
        musicCalled(1);
      break;
    case "#2":
        musicCalled(2);
      break;
    case "#3":
        musicCalled(3);
      break;
    case "#4":
        musicCalled(4);
      break;
    case "#5":
        musicCalled(5);
      break;
    case "#6":
        musicCalled(6);
      break;
    case "#7":
        musicCalled(7);
      break;
    case "#8":
        musicCalled(8);
      break;
    case "#9":
        musicCalled(9);
      break;
    case "#10":
        musicCalled(10);
      break;
    case "#11":
        musicCalled(11);
      break;
    case "#12":
        musicCalled(12);
      break;
    default:
  }
}
function volumOver(t){document.getElementById('myAudio').volume = (t / 100);}
function nextPlay(){
  if(currentPlay < 13) {
    musicCalled(currentPlay);
    currentPlay++;
  } else {
    currentPlay = 1;
  }
}
function checkEnd(){
  if(listPlay){
    nextPlay();
  } else {
    currentPlay = 1;
  }
}

function musicCalled(t){
  if(t == 0){ t = currentPlay; }
  var audio = document.getElementById('myAudio');

  switch (t){
    case 1:
        audio.src = "music/01.Bohemian Rhapsody.mp3";
      break;
    case 2:
        audio.src = "music/02.We Will Rock You.mp3";
      break;
    case 3:
        audio.src = "music/03.Under Pressure.mp3";
      break;
    case 4:
        audio.src = "music/04.Fat Bottomed Girls.mp3";
      break;
    case 5:
        audio.src = "music/05.Killer Queen.mp3";
      break;
    case 6:
        audio.src = "music/06.Don't Stop Me Now.mp3";
      break;
    case 7:
        audio.src = "music/07.We Are the Champions.mp3";
      break;
    case 8:
        audio.src = "music/08.Crazy Little Thing Called Love.mp3";
      break;
    case 9:
        audio.src = "music/09.You're My Best Friend.mp3";
      break;
    case 10:
        audio.src = "music/10.Stone Cold Crazy.mp3";
      break;
    case 11:
        audio.src = "music/11.Another One Bites the Dust.mp3";
      break;
    case 12:
        audio.src = "music/12.Somebody to Love.mp3";
      break;
    default:
      audio.stop();
  }

  audio.play();
}

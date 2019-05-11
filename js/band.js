var checkDouble = 0;
var checkDoubleTap = 1;


function onBandLoad(){
  switch (window.location.hash) {
    case "#1":
        band_intro(2);
      break;
    case "#2":
        band_intro(3);
      break;
    case "#3":
        band_intro(4);
      break;
    case "#4":
        band_intro(5);
      break;
    default:
  }
}


function band_intro(t){
  var move = (t*100)-100;

  if(checkDouble != t || checkDoubleTap == 2) {
    checkDouble = t;
    checkDoubleTap = 1;
    $('.band_introduction_wrap').stop().animate({right:move+'%'},1000);
  } else {
    checkDoubleTap++;
    $('.band_introduction_wrap').stop().animate({right:0+'%'},1000);
  }
}

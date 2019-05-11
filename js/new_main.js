var position = 0;
var positionIndex = 1;
var timeT = 2;
var firstChange = true;


function imgStart(tp){
    if(tp== 'L'){
        Left();
    }
    else
    {
        Right();
    }
}

function Left(){ // 왼쪽으로 이동
    if(positionIndex<4){ // 맨 마지막이 아니면 이동
        positionIndex++;
        radioIndex(positionIndex)
    }
}

function Right(){ // 오른쪽으로 이동
    if(positionIndex>1){ // 맨 첫번째 이미지만 아니면 이동
        positionIndex--;
        radioIndex(positionIndex)
    }
}

function radioIndex(t){
  if(window.innerWidth > 749){
    if(!firstChange){
      timeT = 1;
      firstChange = true;
    }

    if(t<=4){
        // 각 이미지의 왼편으로 이동
        position = (t*100)-100;
        // window.alert(window.innerWidth + ", pc");
        // 받은 t값의 라디오 헤드를 체크해줌
        $('#checkIndex'+t).prop('checked', true);
        // 컨테이너를 1초안에 오른쪽의 위치를 position%로 이동
        $('.banner_item_warp').stop().animate({right:position+'%'},1000);
    }
  } else {
    if(firstChange){
      timeT = 1;
      firstChange = false;
    }

    if(t<=5){
        // 각 이미지의 왼편으로 이동
        position = (t*100)-100;
        //window.alert(window.innerWidth + ", mobile");
        // 받은 t값의 라디오 헤드를 체크해줌
        $('.banner_wrap_mobile_item').stop().animate({right:position+'%'},1000);
    }
  }
  timeT=t;
}

function PrintTime(){
    radioIndex(timeT);
    timeT++;

    if(timeT==6){
       timeT=1;
    }
}
setInterval(PrintTime,8000); // 8초마다 반복

function moremore(){
    var menu_Text = $('.more_btn').text();

    var el = $('.forth_area_warp'),
    curHeight = el.height(),
    autoHeight = el.css('height', 'auto').height();

    if(menu_Text == '앨범보기'){
        el.height(curHeight).stop().animate({height: autoHeight}, 1500);

        $('.more_btn').text('앨범닫기');
    }
    else{
        el.height(curHeight).stop().animate({height: 0}, 1500);

        $('.more_btn').text('앨범보기');
    }
}

$(document).ready(function(){
    var HH = $(".forth_area_product").width();
    $(".forth_area_product").css("height",HH);
})

$(function(){
    $(".menu_btn").click(function(){
        $(this).toggleClass("open");
        $(".menu_area").toggleClass("open");
    })

    $(window).resize(function(){
        var HH = $(".forth_area_product").width();
        $(".forth_area_product").css("height",HH);

        var w = $(window).width();

        if(w >= 550){
            $(".menu_btn, .menu_area").removeClass("open");
        }
        else{
            $(".list_item_wrap").css("left", "0");
        }
    })
})

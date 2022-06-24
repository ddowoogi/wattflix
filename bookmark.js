
$(document).ready(function(){

    // 툴바 버튼
    let $btns = $('.toolbar .btn');
    $('.toolbar .btn:first-child').addClass('active');

    $('.toolbar .btn').on('click',function(){
        let index = $(this).index();
        $btns.removeClass('active');
        $(this).addClass('active');
    });

    // 영화 추천 버튼
    let $markCount = $('.movieItem img').length;
    let $userName = "왓플릭스";

    $('.comment').html("<h3>"+$userName+" 님,<br>더 많은 영화를<br>찾아보세요.</h3><br>보고싶어요 표시한 영화 <b>"+$markCount+"</b>개");

    let $movieItem = $('.movieItem');
    let $img = $('.movieItem img');
    let $movieInfo = $('.movieItem .movieInfo');

    // $movieItem.on('mouseover',function(index){
    //     $(this).hover(
    //             function(){
    //                 $img.css('opacity',0.4);
    //                 $movieInfo.css('opacity',1);
    //             },
    //             function(){
    //                 $img.css('opacity',1);
    //                 $movieInfo.css('opacity',0);
    //             })
    // });

    $movieItem.on('mouseover',function(index){
            $img.css('opacity',0.4);
            $movieInfo.css('opacity',1);
        });

    $movieItem.on('mouseout',function(index){
        $img.css('opacity',1);
        $movieInfo.css('opacity',0);
    });

    console.log($img);
    console.log($movieItem);
    console.log($movieInfo);
});



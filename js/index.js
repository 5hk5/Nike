window.onload=()=>{
    
    let winWidth;
    $(window).resize(()=>{
        winWidth=$(this).width();
        if(winWidth<=1024){
            $('.main-menu').off('mouseenter');  //on 이벤트 삭제
            $('.main-menu').off('mouseleave');
            $('nav').prependTo('.h-top');
            $('.jordan-logo').find('img').attr('src','./images/AIR-JORDAN-LOGO-b.svg');
        }else{
            $('nav').appendTo('header');
            $('.jordan-logo').find('img').attr('src','./images/AIR-JORDAN-LOGO.svg');
            $('.main-menu').on({
                mouseenter:()=>{
                    $('.sub-menu, .sub-bg').stop().show();
                },
                mouseleave:()=>{
                    $('.sub-menu, .sub-bg').stop().hide();
                }
            });
        }
    }); //resize 이벤트 종료

    $(window).trigger('resize'); //윈도우 사이즈 변할 때마다 강제 이벤트 발생


    $('.menu-btn').click((event)=>{
        event.stopPropagation();
        $('.index-wrap').css('filter','blur(10px)');
        $('body, html').css({
            height:'100vh',
            overflow:'hidden'  /*화면, 높이 고정*/
        });
        $('.menu-area').show();
        $('.h-top').animate({
            right:'0%'
        },'fast');
    }) //태블릿, 모바일 메뉴 종료

    
    //햄버거 메뉴 
    $('.main-menu>li>a').click(function(){
        $(this).siblings('.sub-menu').animate({
            left:'0%'
        },'fast');
    });

    $('.all>a').click(function(){
        $(this).parents('.sub-menu').animate({left:'150%'},'fast');
    });

    $('.menu-area').click(function(event){
        console.log($(this).has(event.target).length); 
        //event.target : 이벤트버블링 최하위요소 반환
        console.log($(this).has(event.target));
        if($(this).has(event.target).length==0){
            $('.index-wrap').css('filter','blur(0px)');
            $('body, html').css({height:'auto',overflow:'visible'});
            $('.h-top').animate({
                right:'-100%'
            },'fast',()=>{
                $('.menu-area').hide();
            });
        }
    });


    //모바일용 이미지
    if (winWidth<=480){
        $('.main-01 img').attr('src','images/M-01-mobile.png');
        $('.main-02 img').attr('src','images/M-02-mobile.png');
        $('.main-03 img').attr('src','images/M-03-mobile.png');
    }else{
        $('.main-01 img').attr('src','images/M-01.png');
        $('.main-02 img').attr('src','images/M-02.png');
        $('.main-03 img').attr('src','images/M-03.png');
    }



    //swiper 플러그인
    let swiperSlide = new Swiper('.Featured-slide',{
        //기본: 모바일
        slidesPerView:'auto',
        spaceBetween:8,
        pagination:{
            el:'.f-pager',
            clickable:true,
            type:'fraction'  /* < > 화살표 / bullets : 버튼들*/
        },
        navigation:{
            prevEl:'.f-prev',
            nextEl:'.f-next'
        },
        //반응형(화면 넓이에 따라 레이아웃 변경)
        breakpoints:{
            1025:{
                slidesPerView:3,
                spaceBetween:24
            },
            480:{
                slidesPerView:'auto',
                spaceBetween:16
            }
        }
    });

}

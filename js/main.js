$(function(){
    $('.main__info-button-3').on('click', function(){
        $('.main__info-photos').toggleClass('show');
        $('.slick-slider').toggleClass('show-slider');
    });
      
    $('.main__info-button').on('click', function(){
        if($(this).hasClass('btn-active')){
            $(this).removeClass('btn-active');
        }
        else{
            $('.main__info-button').removeClass('btn-active');
            $(this).addClass('btn-active');
        }
    
    });
    $('.main__info-button-1, .main__info-button-2, .main__info-button-4').on('click', function(){
            $('.main__info-photos').removeClass('show');
            $('.slick-slider').removeClass('show-slider');
    });

    $('.main__info-photos').slick({
        slidesToShow: 2.5,
        slidesToSckroll: 1,
        arrows: false,
        infinite: false,
        // responsive:[
        //     {
        //         breakpoint: 1024,
        //         settings: {

        //         }
        //     },
        //     {
        //         breakpoint: 640,
        //         settings: {
        //             arrows: false   

        //         }
        //     }
        // ]
    });
});
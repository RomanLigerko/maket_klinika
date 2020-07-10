$(function(){
    $('.main__info-button-3').on('click', function(){
        $('.main__info-photos').toggleClass('show');
        $('#slider').toggleClass('show-slider');
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
        dots:false,
        slidesToShow: 2.5,
        slidesToSckroll: 1,
        arrows: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 414,
                settings: {
                    slidesToShow: 2.5,
                }
            }
        ]

    });
    $('.card__slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToSckroll: 1,
    })
});
$(function(){
    $('#hideSliderBtn').on('click', function(){
        $(this).css('display', 'none');
        $('#showSliderBtn').css('display', 'block');
        $('.card__slider').css('height', '0');
        $('.card__slider').css('visibility', 'hidden');
        $('.card__container').css('display', 'flex');
        $('.card__container').css('flex-wrap', 'wrap');

       
        
    });
    $('#showSliderBtn').on('click', function(){
        $(this).css('display', 'none');
        $('#hideSliderBtn').css('display', 'block');
        // $('.card__slider').css('display', 'block');
        $('.card__slider').css('height', '100%');
        $('.card__slider').css('visibility', 'visible');
        $('.card__container').css('display', 'none');
    });

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
        slidesToShow: 9,
        slidesToSckroll: 1,
        arrows: false,
        infinite: false,
        responsive: [
            {
                breakpoint: "1200",
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: "1024",
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: "760",
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: "520",
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: "440",
                settings: {
                    slidesToShow: 2.5,
                }
            }
        ]
    });
    $('.card__slider').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToSckroll: 1,
        // variableWidth: true,
        responsive: [
            {
                breakpoint: "1124",
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: "760",
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })
});
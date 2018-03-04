$(document).ready(function() {

    $('.top_bar li').click(function(){
        $('.top_bar li').removeClass('active');
        $(this).addClass('active');
    });

   
    $('header .slick_wrap').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        loop:true,
        autoplay:true,
        autoplaySpeed:5000,
        speed:2000,
        fade:true,
        pauseOnFocus:false,
        pauseOnHover:false
    });

    $('.slide_btn').click(function(){
        $(this).siblings('.hid_content').slideToggle();
        $(this).toggleClass('rotate');
    });


    $('.masonry_wrap a img').load(function(){
        $('.masonry_wrap').masonry({
          itemSelector: '.tab_content_block',
          columnWidth: '.tab_content_block'
        });
    });

    $('#all_tab').click(function(){
        $(this).siblings('.tab').removeClass('active');
        $(this).addClass('active');

        $('.tab_content').fadeOut().removeClass('active');
        $('#all_content').fadeIn().addClass("active");
    });
    
    $('#wedding_tab').click(function(){
        $(this).siblings('.tab').removeClass('active');
        $(this).addClass('active');

        $('.tab_content').fadeOut().removeClass('active');
        $('#wedding_content').fadeIn().addClass("active");
    });
    
    $('#family_tab').click(function(){
        $(this).siblings('.tab').removeClass('active');
        $(this).addClass('active');

        $('.tab_content').fadeOut().removeClass('active');
        $('#family_content').fadeIn().addClass("active");
    });
    
    $('#love_tab').click(function(){
        $(this).siblings('.tab').removeClass('active');
        $(this).addClass('active');

        $('.tab_content').fadeOut().removeClass('active');
        $('#love_content').fadeIn().addClass("active");
    });
    


    $(document).ready(function(){
        $("body").on("click",".top_bar a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 500);
        });
    });

    $('.mobile_btn').click(function(){
        $(this).toggleClass('active');
        $(this).siblings('.mobile_nav').toggleClass('active');
    });
    $('.mobile_nav ul li a').click(function(){
        $('.mobile_btn').toggleClass('active');
        $('.mobile_nav').toggleClass('active');
    });
    

});


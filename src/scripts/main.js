$( window ).on( 'load', function() {
    const burger = $('.menu__mobile');
    const menu = $('.menu');
    const videoButton = $('.video-tour__button');
    const videoPlayer = $('.video__player');
    const numberOfPerson = $('.number-of-person-list__item');
    const orderTitle = $('.order__title');
    const orderBtn = $('#orderBtn');
    const orderSucceeded = $('.order__succeeded');
    const orderForm = $('#effect');
    let windowWidth = $(window).width();
    let inputs = $('.order__input');
    let isChecked;
    let reviewsCarousel = $('.reviews__carousel');
    let itineraryCarousel = $('.itinerary__carousel');

    // WOW effects activation
    new WOW({
        offset:       50,
    }).init();

    // Burger Menu

    burger.on('click', () => {
        burger.toggleClass('active');
        menu.toggleClass('open');
    });

    $('.menu *').on('click',() => {
        burger.removeClass('active');
        menu.removeClass('open');
    })

    // Video Player

    videoButton.on('click', () => {
        videoButton.addClass('active');
        videoButton.prev().addClass('active');
        videoPlayer.addClass('open');
        if (windowWidth < 481) {
            videoButton.parent().addClass('active');
        }
    })

    $(document).click(function(event) {
        if (!$(event.target).closest(".video__player, .video-tour__button").length && videoPlayer.hasClass('open')) {
            videoPlayer.each(function() {
                $(this).attr('src', $(this).attr('src'));
                return false;
            });
            videoPlayer.removeClass("open");
            videoButton.removeClass('active');
            if (windowWidth > 480){
                videoButton.prev().removeClass('active');
            } else {
                videoButton.parent().removeClass('active');
            }
        }
    });

    // Order Block

    numberOfPerson.each( function () {
        $(this).on('click', function () {
            if (!$(this).hasClass('active')) {
                numberOfPerson.removeClass('active');
                $(this).addClass('active');
            }
        })
    });

    $('.order__phone').mask('+375 (00) 000-00-00');

    function runEffect() {
        orderForm.hide( "clip", { direction: "horizontal" }, 2000, callback );
        orderSucceeded.addClass('active');
        orderTitle.css('opacity', '0');
    }

    function callback() {
        setTimeout(function() {
            orderForm[0].reset();
            orderForm.removeAttr( "clip" ).hide().fadeIn();
            orderSucceeded.removeClass('active');
            orderTitle.css('opacity', '1');
        }, 5000 );
    }

    orderBtn.on('click', () => {
        let orderData = {};
        $('.error-input').hide();
        isChecked = true;

        inputs.each(function() {
            if (!$(this).val()) {
                $('.order__wrapper').addClass('error');
                $(this).css('border-color', 'red');
                $(this).next().css('display', 'block');
                isChecked = false;
            } else {
                $(this).css('border-color', '#FFFFFFFF');
                orderData[$(this).attr('name')] = $(this).val();
            }
        });

        if (isChecked) {
            $('.order__wrapper').removeClass('error');
            $.ajax({
                method: "POST",
                url: "https://testologia.ru/checkout",
                data: orderData
            })
                .done(function( msg ) {
                    setTimeout(() => {
                        if (msg.success) {
                            runEffect();
                        } else {
                            alert("Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ.");
                        }
                    }, 500)
                });
        }
    })

    // Carousels Slick

    itineraryCarousel.slick({
        slidesToShow: 1,
        infinite: false,
    });

    $('.itinerary__button-prev').on('click', function() {
        itineraryCarousel.slick('slickPrev');
        document.activeElement.blur(); // Remove the focus from the active element
    });

    $('.itinerary__button-next').on('click', function() {
        itineraryCarousel.slick('slickNext');
        document.activeElement.blur(); // Remove the focus from the active element
    });

    reviewsCarousel.slick({
        slidesToShow: 1,
        infinite: false,
    });

    $('.reviews__button-prev').on('click', function() {
        reviewsCarousel.slick('slickPrev');
        document.activeElement.blur(); // Remove the focus from the active element
    });

    $('.reviews__button-next').on('click', function() {
        reviewsCarousel.slick('slickNext');
        document.activeElement.blur(); // Remove the focus from the active element
    });

    $('.gallery__carousel').slick({
        dots: true,
        slidesToShow: 1,
    });
    $('.gallery__carousel-mobile').slick({
        dots: true,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 880,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    // Photo View by Magnific Popup

    $('.magnific__popup-library').each(function() {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled:true
            },
        });
    });

    $('.magnific__popup').magnificPopup({
        type: 'image'
    });

});
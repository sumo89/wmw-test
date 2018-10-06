$(document).ready(function(){
    $('.gallery-wrap').slick({
        dots: true,
        arrows: true,
        slidesToShow: 1
    });

    function checkWindowWidth(){
        var windowWidth = $(window).width();
        if (windowWidth <= 650){
            $('.body-wrapper').addClass('mobile');
        } 
        else {
            $('.body-wrapper').removeClass('mobile')
        }
    };
    checkWindowWidth();

    $(window).resize( function(){
        checkWindowWidth();
    });

    var itemCost = 60.00;

    $(document).on('click', function(event){
        var target = $(event.target);

        if ( target.parents().hasClass('popups') || target.parents().hasClass('cart-wrap') ){
            // do nothing
        }
        else if ( target.is('.option') ){
            $('.popups').removeClass('showing');
            $('.cart-wrap').removeClass('showing');
            var dataName = target.attr('data');
            $('.'+ dataName +'-popup').addClass('showing');
        }
        else if ( target.parent().hasClass('option') ){
            $('.popups').removeClass('showing');
            $('.cart-wrap').removeClass('showing');
            var dataName = target.parent().attr('data');
            $('.'+ dataName +'-popup').addClass('showing');
        } 
        else if ( target.hasClass('icon-cart') ){
            $('.popups').removeClass('showing');
            $('.cart-wrap').addClass('showing');
        }
        else {
            $('.popups').removeClass('showing');
            $('.cart-wrap').removeClass('showing');
        }
    })

    $('.plus-symbol').click(function(event){
        var target = $(event.target).parents()[0];
        var amount = $(target).find('.counter-amount').text();
        amount ++;
        $(target).find('.counter-amount').text(amount);

        var cost = $(event.target).parents()[1];
        var newCost = amount * itemCost;
        $(cost).find('.product-amount span').text(newCost);
    })
    $('.minus-symbol').click(function(event){
        var target = $(event.target).parents()[0];
        var amount = $(target).find('.counter-amount').text();
        if (amount > 0){
            amount --;
        }
        $(target).find('.counter-amount').text(amount)

        var cost = $(event.target).parents()[1];
        var newCost = amount * itemCost;
        $(cost).find('.product-amount span').text(newCost);
    })

    var menuIsShowing = false;
    $('.mobile-menu').click(function(){
        if (!menuIsShowing){
            $('.gallery-wrap').addClass('move-down');
            $('.gallery-text-wrap').addClass('move-down');
            menuIsShowing = true;
        }
        else {
            $('.move-down').removeClass('move-down')
            menuIsShowing = false;
        }
    });

  });
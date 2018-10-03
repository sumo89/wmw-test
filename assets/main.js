$(document).ready(function(){
    $('.gallery-wrap').slick({
        dots: true,
        arrows: true,
        slidesToShow: 1
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
            $('.cart-wrap').removeClass('showing');
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


  });
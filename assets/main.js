$(document).ready(function(){
    $('.gallery-wrap').slick({
        dots: true,
        arrows: true,
        slidesToShow: 1
    });

    $(document).on('click', function(event){
        var target = $(event.target);

        if ( target.parents().hasClass('popups') ){
            // do nothing
        }
        else if ( target.is('.option') ){
            $('.popups').removeClass('showing');
            var dataName = target.attr('data');
            console.log('dataName ', dataName)
            $('.'+ dataName +'-popup').addClass('showing');
        }
        else if ( target.parent().hasClass('option') ){
            $('.popups').removeClass('showing');
            var dataName = target.parent().attr('data');
            console.log('dataName ', dataName)
            $('.'+ dataName +'-popup').addClass('showing');
        }
        else {
            $('.popups').removeClass('showing');
        }
    })


  });
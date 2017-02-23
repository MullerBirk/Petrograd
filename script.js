


$('.scroll').click(function(){
    console.log("hdj")

    var selected = $(this).attr('href');

    var afstandfratoppen = ($(selected).offset().top);

    $('html, body').animate({
        scrollTop: afstandfratoppen
        },600);
    });


$('.navbar-nav a').click(function(){
          var navbar_toggle = $('.navbar-toggle');

            if (navbar_toggle.is(':visible')){
                navbar_toggle.trigger('click');
            }

       });

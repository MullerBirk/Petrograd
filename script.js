window.addEventListener("load", siden_vises);

function siden_vises(){
     console.log("siden vises")

     vis_produkt();
}

function vis_produkt(){
    //klon produkt_template

    var klon = document.querySelector("#produkt_template").content.cloneNode(true);
    //indsæt data i klon

    //append klon til produktliste
    document.querySelector(".produktliste").appendChild(klon);
}


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

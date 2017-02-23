window.addEventListener("load", siden_vises);

function siden_vises(){
     console.log("siden vises")

     //læs data (produktliste)
     $.getJSON("http://petlatkea.dk/2017/dui/api/productlist?callback=?", vis_produkt_liste)

}

function vis_produkt_liste(listen){
    console.table(listen);

    listen.forEach(vis_produkt);
}

function vis_produkt(produkt){
    console.log (produkt)
    //klon produkt_template

    var klon = document.querySelector("#produkt_template").content.cloneNode(true);
    //indsæt data i klon
        //background-image: url(imgs/medium/bochkarev-md.jpg);
    var imgPath = produkt.billede;
    klon.querySelector('.data_pic').style.backgroundImage="url(imgs/medium/"+imgPath+"-md.jpg)";

    klon.querySelector(".data_navn").innerHTML = produkt.navn;
    klon.querySelector(".data_pris").innerHTML = produkt.pris;

    var rabatpris = Math.ceil(produkt.pris - (produkt.pris*produkt.rabatsats/100));
    klon.querySelector(".data_rabat").innerHTML = rabatpris;

    if(produkt.udsolgt == false){
        //produkt er ikke udsolgt
        //udsolgt tekst fjernes
        var udsolgttekst = klon.querySelector(".udsolgt");
        udsolgttekst.parentNode.removeChild( udsolgttekst);
    }
    else{
        var udsolgttekst = klon.querySelector(".udsolgt");
        udsolgttekst.parentNode.removeChild( udsolgttekst);

        var prisen = klon.querySelector(".pris");
        prisen.parentNode.removeChild( prisen );
        var rabatten = klon.querySelector(".rabat");
        rabatten.parentNode.removeChild( rabatten );
    }

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

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

            //MODAL:
               // var klon_modal = document.querySelector("#modal_template").content.cloneNode(true);


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


        var prisen = klon.querySelector(".pris");
        prisen.parentNode.removeChild( prisen );
        var rabatten = klon.querySelector(".rabat");
        rabatten.parentNode.removeChild( rabatten );
    }


//
//   if(produkt.rabatsats == 0){
//      var rabatNej = klon.querySelector(".rabat");
//       rabatNej.parentNode.removeChild( rabatNej );
//    }


             //MODAL:

    /*
                klon_modal.querySelector(".modal_splash_img").src = "imgs/medium/"+produkt.billede+"-md.jpg"
                klon_modal.querySelector(".modal_navn").innerHTML = produkt.navn;
                klon_modal.querySelector(".modal_pris").innerHTML = produkt.pris;

                klon_modal.querySelector(".modal_rabat").innerHTML = rabatpris;
                klon_modal.querySelector(".modal_beskrivelse").innerHTML = produkt.kortbeskrivelse;

                if(produkt.udsolgt == false){
                    //produkt er ikke udsolgt
                    //udsolgt tekst fjernes
                    var modal_udsolgttekst = klon_modal.querySelector(".modal_udsolgt");
                    klon_modal.querySelector(".modal_udsolgt").parentNode.removeChild(modal_udsolgttekst);
                }

                if(produkt.vegetar == false){
                    //produkt er ikke vegetarisk
                    //vegetarisk tekst fjernes
                    var veggietekst = klon_modal.querySelector(".modal_viggie");
                    veggietekst.parentNode.removeChild( veggietekst);
                }

       */
    klon.querySelector('.data_pic').addEventListener('click', function(){
        var modal = document.querySelector('.modal-body');
        modal.querySelector('.modal_navn').textContent=produkt.navn;
        modal.querySelector('.modal_pris').textContent=produkt.pris;
        modal.querySelector('.modal_rabat').textContent=rabatpris;
        modal.querySelector('.modal_beskrivelse').textContent=produkt.kortbeskrivelse;

       if(produkt.vegetar == false){
           var veggietekst = modal.querySelector(".modal_viggie");
           veggietekst.parentNode.removeChild(veggietekst);
       }
    })

    //append klon til produktliste
    document.querySelector(".produktliste").appendChild(klon);

            //MODAL:
                //document.querySelector(".modal-content").appendChild(klon_modal);

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

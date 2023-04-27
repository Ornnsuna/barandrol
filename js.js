jQuery("document").ready(function($){

    var menuButton = $(".contenedor");
        menu =  $("header div");

    menuButton.click(function() {

        if(menu.hasClass("navcategorias")) {
            menu.removeClass("navcategorias");
        } else {
            menu.addClass("navcategorias");
        }
    });
});
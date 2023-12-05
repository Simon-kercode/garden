$(document).ready(function(){
        if ($("main").hasClass("mainAccueil"))  {
            $("#lienPropos, #lienServices, #lienContact").removeClass("choix");
            $("#lienAccueil").addClass("choix");
        };
        if ($("main").hasClass("mainPropos")) {
            $("#lienAccueil, #lienServices, #lienContact").removeClass("choix");
            $("#lienPropos").addClass("choix");
        };
        if ($("main").hasClass("mainGalerie")) {
            $("#lienAccueil, #lienServices, #lienContact").removeClass("choix");
            $("#lienGalerie").addClass("choix");
        };
        if ($("main").hasClass("mainServices")) {
            $("#lienAccueil, #lienPropos, #lienContact").removeClass("choix");
            $("#lienServices").addClass("choix");
        };
        if ($("main").hasClass("mainContact")) {
            $("#lienAccueil, #lienServices, #lienPropos").removeClass("choix");
            $("#lienContact").addClass("choix");
        };
});

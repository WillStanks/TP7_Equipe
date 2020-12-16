$(function(){
    

    
    $("#accordion-1").accordion({create: function(event, ui){
        $("#resultat").append("<p>Menu créé</p>");
    },
    activate: function(event, ui){
        $("#resultat").append("<p>Bouton activé</p>");
    },
    beforeActivate: function(event, ui){
        $("#resultat").append("<p>Avant l'activation du bouton</p>");
    }    
})
})
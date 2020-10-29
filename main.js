// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi, vengono rimossi i numeri dalla pagina e l'utente deve inserire (tramite prompt) i numeri che ha visto precedentemente, uno alla volta.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// BONUS: visualizzare in pagina anche un timer con il countdown dei 30 secondi





var secondi = 3 * 1000;

$(document).ready(function() {

var numeri_array = [];
var numeri_array_utente = [];
var punti = 0;

    for (var i = 0; i < 5; i++) {
        var numero = getRndInteger(1, 100);
        numeri_array.push(numero);
        $('#rettangolo').append(' ' + numero)
    }

    setTimeout(function(){
        $('#rettangolo').hide();
        for (var i = 0; i < 5; i++) {
            var numero_utente = parseInt(prompt('Inserisci un numero'));
            numeri_array_utente.push(numero_utente);
            if (numeri_array_utente.lenght == numeri_array.lenght) {
                $('#rettangolo').show('');

            }
        }
    }, secondi);

});




function getRndInteger(min, max) {
return Math.floor(Math.random() * (max - min + 1) ) + min;
}

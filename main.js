// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi, vengono rimossi i numeri dalla pagina e l'utente deve inserire (tramite prompt) i numeri che ha visto precedentemente, uno alla volta.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// BONUS: visualizzare in pagina anche un timer con il countdown dei 30 secondi



var secondi = 30 * 1000;

$(document).ready(function() {

var numeri_array = [];
var numeri_array_utente = [];
var numeri_corretti = [];



    for (var i = 0; i < 5; i++) {
        var numero = getRndInteger(1, 100);
        numeri_array.push(numero);
        $('#numeri_computer').append(' ' + numero)
    }

    setTimeout(function(){
        $('#numeri_computer').hide();
    }, secondi - 1000);


    setTimeout(function(){

        for (var i = 0; i < 5; i++) {
            var numero_utente = parseInt(prompt('Inserisci un numero'));
            numeri_array_utente.push(numero_utente);

            // verifico se il numero è dentro l'array numeri_array_utente.
            if (numeri_array.includes(numero_utente)) {

                // se entra qui vuol dire che il numero inserito dall'utente è presente in quelli random
                numeri_corretti.push(numero_utente);
            }
        }
        $('#numeri_trovati').text('I numeri trovati sono = ' + numeri_corretti);
        $('#numeri_totali').text('Totali = ' + numeri_corretti.length);
    }, secondi);


});


function getRndInteger(min, max) {
return Math.floor(Math.random() * (max - min + 1) ) + min;
}

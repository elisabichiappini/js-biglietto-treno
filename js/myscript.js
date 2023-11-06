// file Javascript


// 1) chiedere all'utente (input) quanti kilometri deve percorrere (numero) e salvare in una variabile;
const kmInput = prompt ('Quanti km devi percorrere?');
console.log(parseInt(kmInput));

// 2) chiedere all'untente (input) quanti anni ha (numero) e salvare in una variabile;
const etaInput = prompt ('Quanti hanni hai?');
console.log(parseInt(etaInput));

// 3) condizione:


// SE etàInput < 18 { Stampo: ok sconto! e quindi (kmInput * 0.21€) - sconto 20%};
if (etaInput < 18) {
    console.log('Hai diritto allo sconto minori 18');
    const costoMinorenne = ((kmInput * 0.21) * 0.2);
    const costoMinorenneDecimale2 = costoMinorenne.toFixed(2);
    console.log(costoMinorenneDecimale2);
}
// ALTRIMENTI SE etàInput >= 65 { Stampo: ok sconto! e quindi (kmInput * 0.21€) - sconto 40%};
else if (etaInput >= 65) {
    console.log('Hai diritto allo sconto senior65');
    const costoSenior = ((kmInput * 0.21) * 0.4);
    const costoSeniorDecimale2 = costoSenior.toFixed(2);
    console.log(costoSeniorDecimale2);
}
// ALTRIMENTI { Stampo: no sconto! e quindi (kmInput * 0.21€)};
else {
    console.log('non hai diritto a nessuno sconto');
    const prezzoPieno = (kmInput * 0.21);
    console.log(prezzoPieno);
}
// 4) prezzoUtenteFinale {massimo due decimali};


// 5) in HTML modificare valore id=prezzobiglietto //errore in console

let prezzoBiglietto = document.getElementById ('prezzobiglietto');
prezzoBiglietto.innerHTML = 'Il prezzo del tuo biglietto è: ' + prezzoBiglietto ;

if ((costoMinorenneDecimale2 >= 0) && (costoSeniorDecimale2 === 0) && (prezzoPieno === 0)) {
    prezzoBiglietto.innerHTML = costoMinorenneDecimale2;
}

else if ((costoSeniorDecimale2 >= 0) && (costoMinorenneDecimale2 === 0) && (prezzoPieno === 0)) {
    prezzoBigliett = costoSeniorDecimale2;
}

else {
    prezzoBiglietto = prezzoPieno;
};
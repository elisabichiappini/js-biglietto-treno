// file Javascript


// 1) chiedere all'utente (input) quanti kilometri deve percorrere (numero) e salvare in una variabile;
const kmInput = prompt ('Quanti km devi percorrere?');
console.log(parseInt(kmInput));

// 2) chiedere all'untente (input) quanti anni ha (numero) e salvare in una variabile;
const etaInput = prompt ('Quanti hanni hai?');
console.log(parseInt(etaInput));
// 3) condizione:
// SE etàInput < 18 { Stampo: ok sconto! e quindi (kmInput * 0.21€) - sconto 20%};

// ALTRIMENTI SE etàInput >= 65 { Stampo: ok sconto! e quindi (kmInput * 0.21€) - sconto 40%};

// ALTRIMENTI { Stampo: no sconto! e quindi (kmInput * 0.21€)};
// 4) prezzoUtenteFinale {massimo due decimali};
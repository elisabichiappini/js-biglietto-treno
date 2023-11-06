# Calcolo del prezzo del biglietto del treno

Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


1) chiedere all'utente (input) quanti kilometri deve percorrere (numero) e salvare in una variabile;
2) chiedere all'untente (input) quanti anni ha (numero) e salvare in una variabile;
3) condizione
se etàInput < 18 { Stampo: ok sconto! e quindi (kmInput * 0.21€) - sconto 20%};
altrimenti se etàInput >= 65 { Stampo: ok sconto! e quindi (kmInput * 0.21€) - sconto 40%};
altrimenti { Stampo: no sconto! e quindi (kmInput * 0.21€)};
4) prezzoUtenteFinale {massimo due decimali};
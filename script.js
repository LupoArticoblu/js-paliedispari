/**Palidroma**
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
**Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//chiediamo all'utente di inserire un palindromo

//solita const tratta dall elemento html
const insertWord = document.querySelector('.ask');

//const che fa riferimento alla funzione
const wordReaded = rollWord(insertWord);

//funzione
function rollWord(richiesta){
  let wordRolled ='';

  for (let i = richiesta.length -1; i >= 0; i--){
    wordRolled += richiesta[i]; 
  }

  console.log(wordRolled);
  return wordRolled;
}

//non riesco a continuare (non ho appreso le competenze necessarie)

//PARI O DISPARI

const number = document.querySelector('.number');

const pairOrNot = prompt('scrivimi se pari o dispari');

const pcNum = getRandomNumber(1, 5);

let somma = number + pcNum;

const result = checkResult(somma);

function getRandomNumber(max, min){
  return Math.floor(Math.random() * (max - min +1)) + min;
}
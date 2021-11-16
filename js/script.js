// JSnack 1
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while

// VERSIONE CON FOR

// let somma= 0;

// for(let i = 0; i < 5;i++){
//     let numero = parseInt(prompt("Inserisci un numero"));
//     console.log(numero);
//     somma += numero;
// }

// console.log(somma);

// VERSIONE CON WHILE

// let somma= 0;
// let i = 0;

// while( i < 5){
//     i++
//     let numero = parseInt(prompt("Inserisci un numero"));
//     console.log(numero);
//     somma += numero;
// }

// console.log(somma);

// JSnack 2
// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

// let parolaUno = prompt("Inserisci una parola");
// console.log("Parola inserita : "+parolaUno);
// let parolaDue = prompt("Inserisci una seconda parola");
// console.log("Parola inserita : "+parolaDue);

// puno = parolauno.length;
// pdue = paroladue.length;

// if(puno == pdue){
//     console.log("prima parola : "+ parolauno + " uguale alla seconda :" +paroladue);
    
// }else if(puno > pdue){
//     console.log("parola più grande stampata : "+parolauno);
// }else{
//     console.log("parola più grande stampata : "+parolauno);
// }

// JSnack 3
//  Stampa le potenze di 2 fino a 1000.

let potenza =2;
let i =0;
while(i < 1000){
    i++;
    potenza = potenza * 2; 
    if(potenza >= 1000){
        potenza = potenza/2;
    }
}
console.log(potenza);






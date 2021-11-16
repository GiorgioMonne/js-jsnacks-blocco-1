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

let somma= 0;
let i = 0;

while( i < 5){
    i++
    let numero = parseInt(prompt("Inserisci un numero"));
    console.log(numero);
    somma += numero;
}

console.log(somma);

// JSnack 2
// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

let parolaUno = prompt("Inserisci una parola");
console.log("Parola inserita : "+parolaUno);
let parolaDue = prompt("Inserisci una seconda parola");
console.log("Parola inserita : "+parolaDue);

pUno = parolaUno.length;
pDue = parolaDue.length;

if(pUno == pDue){
    console.log("prima parola : "+ parolaUno + " uguale alla seconda :" +parolaDue);
    
}else if(pUno > pDue){
    console.log("parola più grande stampata : "+parolaUno);
}else{
    console.log("parola più grande stampata : "+parolaUno);
}

// JSnack 3
//  Stampa le potenze di 2 fino a 1000.

let potenza =2;
let j =0;
while(j < 1000){
    j++;
    potenza = potenza * 2; 
    if(potenza >= 1000){
        potenza = potenza/2;
    }
}
console.log("Ultima potenza di 2 prima di 1000"+potenza);






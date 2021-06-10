var output=document.getElementById("out");
var word = prompt("Inserisci una parola per verificare se è palindroma");

// Prima maiuscola e il resto minuscolo


function palindromo(pali){
    for(var i = 0; i< pali.length; i++){
        if(pali[i]!= pali[((pali.length - 1)-i)]){
            return false;
        }
    }
    return true;

}

if(palindromo(word)){
    output.innerText += "\n La parola "+ word +" è palindroma" ;
} else {
    output.innerText += "\n La parola "+ word +" non è palindroma" ;
}
    

var num = parseInt( prompt("Ora giochiamo a pari o dispari, scegli un numero da 1 a 5"));

while(num > 5 || num < 1 || Number.isNaN(num)){
    num = parseInt(prompt("Attento, scegli un numero da 1 a 5"));
}

var flag = 0;

while(flag==0){
    var pDWord =  prompt("Scegli pari o dispari");
    
    if (pDWord === "pari"||pDWord === "Pari"|| pDWord === "P"|| pDWord === "p"){
        var pari = 0;
        flag = 1;
    } else {
        if (pDWord === "dispari"||pDWord === "Dispari"|| pDWord === "D"|| pDWord === "d"){
            var pari = 1;
            flag = 1;
        }
    }
}


//Generatore di numeri random tra 1 e 5
function getRandomNumber(){
    return (Math.floor(Math.random() * 5)+1);
}

var p2Num = getRandomNumber();
var total = num + p2Num;

// Funzione che prende il totale e la scelta tra pari o dispari
function winner(a, c){
    if (a%2 == c) {
        output.innerText += "\n Hai vinto!!" ;
    } else {
            output.innerText += "\n Ha vinto il pc!!" ;
    }
}

winner(total, pari);

// output.innerText += "\n"+  total + "\n" + pari+ "\n" +p2Num + "\n" +num  ;
     
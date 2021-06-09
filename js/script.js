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
    




function palindromo(){
palavraEscolhida = prompt("digite uma palavra")
palavraInvertida = palavraEscolhida.split('').reverse().join('');
    if(palavraInvertida==palavraEscolhida){
        alert('true é uma palavra palindromo')
    }
    else{
        alert('false, não é uma palavra palindromo')
    }
}

alert(palindromo())
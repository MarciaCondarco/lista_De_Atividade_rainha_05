function numerosPares(){ 
numeroPares = []
    while(true){
        numero=parseInt(prompt("digite o numero"))
        if(numero % 2==0){
            numeroPares.push(numero)
        }    
        if (numero==0){
            break
        }
    }
    return numeroPares
}
alert (numerosPares())
alert(numeroPares)
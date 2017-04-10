function isValidCard(creditCardNumber) {
    // Escribe tu código aquí
        if(typeof creditCardNumber==="undefined"){return "Ingresa un numero";}
        var creditNumber = creditCardNumber.toString();
        var string=creditNumber.split("");
        var numPares=[];
        var numImpares=[];
        var numeroTotal=0;
        var numerosSumados=[];
        var num2=[];   

        if(typeof creditCardNumber!="number"){return "Error de dato"; }
        if(creditNumber.length!=16){return "Faltan numeros";} 
        if(creditNumber===""){return "Ingresa un numero"}   
            
            string.map(function(num,i){
                if(i%2===0){
                return numPares.push(num);
                }else {
                return numImpares.push(parseInt(num));
                }});
                
            numerosSumados = numPares.map(function(num){
                var num1=num*2;
                if(num1>9){
                    return num1-9
                }else{
                    return num1
                }
                });
                
                
            num2 = numerosSumados.map(function (num,i){
                    return num + numImpares[i];
                });
                
            numeroTotal = num2.reduce(function(valorAnterior, valorActual, indice, vector){
                return valorAnterior + valorActual;
                });
                
            if(numeroTotal%10===0){
                return true;
            }else{
                return false;
            }
    
    
}

// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}

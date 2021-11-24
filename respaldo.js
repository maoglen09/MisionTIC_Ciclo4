const calcularIMC = (peso,estatura) =>{
    
    let IMC = {};
    let peso2 = peso.toString();
    let estatura2 = (estatura**2).toString();

    if (peso == 0 || estatura == 0){
        IMC = {formula:0}
    } 
    else{
        IMC = {formula:peso/(estatura**2)};
    }


    return IMC;
}

const registrarIMC = (value) =>{

    let registroIMC;
    let pertenece = [];

    rangosIMC.forEach(myFunction);

    function myFunction(item,index){
        if (value >= item.de && value <= item.hasta){
            pertenece[index] = true
        }
        else{
            pertenece[index] = false;
        }
    }

    index = pertenece.indexOf(true);
    if (index == -1){
        registroIMC = "fuera_de_rango";
    }
    else{
        registroIMC = rangosIMC[index].etiqueta;
    }


    return registroIMC;
}

module.exports.registrarIMC = registrarIMC;
module.exports.calcularIMC = calcularIMC;

global.rangosIMC = [
    {etiqueta: 'Bajo peso', de: 0, hasta:18.5},
    {etiqueta: 'Normal', de: 18.6, hasta:24.9},
    {etiqueta: 'Sobrepeso', de: 25, hasta:29.9},
    {etiqueta: 'Obesidad', de: 30, hasta:50}
]
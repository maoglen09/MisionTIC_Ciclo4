const calcularIMC = async (peso,estatura) => {
    let response = await fetch("https://misiontic2022upb.vercel.app/api/calculate-your-body-mass-index/limits");
    let limits = await response.json();
    let IMC = {};

    if (peso == 0 || estatura == 0){
        IMC = {formula:0}
    } 
    else{
        /*IMC = {formula:peso/(estatura**2)}*/;
        IMC = {formula:0};
    }


    return IMC;
}

const registrarIMC = async (value) =>{
    let response = await fetch("https://misiontic2022upb.vercel.app/api/calculate-your-body-mass-index/imc-ranges");
    let rangosIMC = await response.json();

    // Se crea un arreglo vacío que va a almacenar verdadero o falso
    let pertenece = [];
    let registroIMC;

    // Se recorre el arreglo para evaluar si el IMC se encuentra entre los rangos establecidos
    rangosIMC.forEach(myFunction);
    function myFunction(item,index){
        if (value >= item.de && value <= item.hasta){
            pertenece[index] = true
        }
        else{
            pertenece[index] = false;
        }
    }

    // Si el IMC no se encuentra en los rangos establecidos se devuelve fuera de rango
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
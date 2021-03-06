const calcularIMC = async (peso,estatura) => {
    let response = await fetch("https://misiontic2022upb.vercel.app/api/calculate-your-body-mass-index/limits");
    let limits = await response.json();
    let IMC = {};

    if (peso == 0 || estatura == 0){
        IMC = {formula:0}
    } 
    else{
        IMC = {formula:peso/(estatura**2)};
    }


    return IMC;
}

const registrarIMC = async (value) =>{
    let response = await fetch("https://misiontic2022upb.vercel.app/api/calculate-your-body-mass-index/imc-ranges");
    let rangosIMC = await response.json();

    let registroIMC;

    rangosIMC.forEach(myFunction);

    function myFunction(item,index){
        if (value >= item.de && value <= item.hasta){
            response[index] = true
        }
        else{
            response[index] = false;
        }
    }

    index = response.indexOf(true);
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
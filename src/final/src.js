const frutasProteina = async() => {
    let response = await fetch("https://www.fruityvice.com/api/fruit/all");
    let proteinas = await response.json();
    let pertenece = [];
    let frutasProteina;

    proteinas.array.forEach(valorProteina);

    function valorProteina(){
        if (protein != 0){
        pertenece[index] = true
    }
        else{
        pertenece[index] = false;
    }

    }
    if (index = pertenece.indexOf(true));{
        frutasProteina = proteinas[index].name;
    }
    return frutasProteina

};

module.exports.frutasProteina = frutasProteina;
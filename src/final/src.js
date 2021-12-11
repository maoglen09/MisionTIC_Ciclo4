const frutasProteina = async() => {
    // Se obtiene la información de la url
    let response = await fetch('https://www.fruityvice.com/api/fruit/all');
    // Se transforma la información a un arreglo de objetos json
    let fruits = await response.json();
    // Se crea un arreglo vacío 
    let highProteinFruit = [];

    // Se recorre el arreglo
    fruits.forEach(myFunction);

    function myFunction(item){
        // Se accede al contenido de proteina en la fruta y se comprueba si su valor es superior a 1
        if (item.nutritions.protein >= 1){
            // En caso afirmativo se añade el elemento al arreglo declarado anteriormente
            highProteinFruit.push(item)
        }
    }

    return highProteinFruit;

};

module.exports.frutasProteina = frutasProteina;

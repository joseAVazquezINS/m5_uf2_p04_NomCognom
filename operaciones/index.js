/**
 * Aquesta funcio suma tots els valors passats per parametre
 * 
 * @param  {...Number} valors els valors amb els que realitzar la operacio
 * @returns {Number} el resultat de la operacio
 */
function suma(...valors) {
    let resultat = 0 // Creo una variable per guardar el resultat
    
    for (let i = 0; i < valors.length; i++) {
        
        // Itero les files de la matriu fins que la variable i sigui menor que la variable valors.length
        
        resultat += valors[i] // Afegeixo el valor de l'argument actual a la suma total
    }

    return resultat
}



/**
 * Aquesta funcio multiplica tots els valors passats per parametre
 * 
 * @param  {...Number} valors els valors amb els que realitzar la operacio
 * @returns {Number} el resultat de la operacio
 */
function multiplica(...valors) {
    if(valors.length === 0){
        return 1
    }
    let total = valors[0];
    for (let i = 1; i < valors.length; i++) {
        total *= valors[i];
    }

    return total;
}

module.exports.suma = suma;
module.exports.multiplica = multiplica;
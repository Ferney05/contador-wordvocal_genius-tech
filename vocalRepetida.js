
const dataInputText = document.querySelector('[dataInputText]');
const dataResult = document.querySelector('[dataResult]');
const dataBotonResult = document.querySelector('[dataBotonResult]');


dataInputText.addEventListener('keyup', () => {
    if(dataInputText.value.length >= 1){
        dataResult.innerText = 'Verificando...';
    } else if(dataInputText.value.length === 0){
        dataResult.innerText = '';
    }
})

const VocalRepetida = (texto) => {
    const regexp = /[AEIOU]/g;
    let contadorLetters = 1;
    let letterUnicas = [];
    let vecesRepetidas = [];

    texto = texto.toUpperCase().split('').sort().join('').match(regexp);
    
    if(texto){
        for(let i = 0; i < texto.length; i++){
            if(texto[i + 1] === texto[i]){
                contadorLetters++;
            } else {
                letterUnicas.push(texto[i]);
                vecesRepetidas.push(contadorLetters);
                contadorLetters = 1;
            }
        }
    
        const numberMax = Math.max(...vecesRepetidas);
        let vocalRepetida = '';
    
        for(let i = 0; i < vecesRepetidas.length; i++){
            if(vecesRepetidas[i] === numberMax){
                vocalRepetida = letterUnicas[i];
            }
        }

        dataResult.innerText = `La vocal '${vocalRepetida}' es la que más se repite.\nSe repite ${numberMax} veces.`;
    } else {
        dataResult.innerText = 'El texto ingresado no contiene ninguna vocal.'
    }
}


const buscarVocalRepetida = () => {
    VocalRepetida(dataInputText.value);
}

dataBotonResult.addEventListener('click', buscarVocalRepetida);




const textInput = document.getElementById('text-input');
const cantidadPalabras = document.getElementById('cantidad-palabras');
const cantidadCaracteresConEspacios = document.getElementById('cantidad-caracteres');
const cantidadCaracteresSinEspacios = document.getElementById('cantidad_chart-sinEspacios');

// PALABRAS

textInput.addEventListener('keyup', () => {
    if(textInput.value.length >= 1){

        const alm_palabras = textInput.value;
        const contandoWords = alm_palabras.split(' '); 
        
        let contador2 = 0;
        const space = contandoWords.forEach(element => {
            if(element === ''){
            return contador2++
            }
        });

        const spc = space;

        cantidadPalabras.innerText = `${contandoWords.length - contador2}`;
    }  
})

// CARACTERES CON ESPACIOS

textInput.addEventListener('keyup', () => {
    if(textInput.value.length >= 1){

        const wordsCount = textInput.value;
        const caracteresCount = wordsCount.split(''); 

        let contador = 0;
        const caracteresss = caracteresCount.forEach(element => {
            if(element === ' '){
               return contador++
            }
        });

        const charact = caracteresss;
        cantidadCaracteresConEspacios.innerText = `${caracteresCount.length}`;
    }
})

// CARACTERES SIN ESPACIOS

textInput.addEventListener('keyup', () => {
    if(textInput.value.length >= 1){

        const wordsCount_2 = textInput.value;
        const caracteresCount2 = wordsCount_2.split(''); 

        let contador3 = 0;
        const caracteresSinSpace = caracteresCount2.forEach(element => {
            if(element === ' '){
               return contador3++
            }
        });

        const caracterSinSpacio = caracteresSinSpace;
        cantidadCaracteresSinEspacios.innerText = `${caracteresCount2.length - contador3}`;

    }
})

// INICIALIZANDO EL CONTADOR A 0

textInput.addEventListener('keyup', () => {
    if(textInput.value.length == " "){
        cantidadCaracteresConEspacios.innerText = 0;

        cantidadPalabras.innerText = 0;

        cantidadCaracteresSinEspacios.innerText = 0;
    }
})
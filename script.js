
const boton_VocalRepetida = document.querySelector('[dataBoton-VocalRepetida]');
const boton_ContadorPalabras = document.querySelector('[dataBoton-ContadorPalabras]');
const TitleActual = document.querySelector('[dataTitle]');

const sect_VocalRepetida = document.querySelector('.vocalRepetida');
const sect_ContadorPalabras = document.querySelector('.contadorWords');

const databotones_home = document.querySelector('[databotones_home]');

const titleContadorPalabras = () => {
    TitleActual.innerText = 'Word counter';
    sect_ContadorPalabras.style.display = 'block';
    databotones_home.style.display = 'none';
}

const titleVocalRepetida = () => {
    TitleActual.innerText = 'Repeated vowel';
    sect_VocalRepetida.style.display = 'block';
    databotones_home.style.display = 'none';
}

boton_ContadorPalabras.addEventListener('click', titleContadorPalabras);
boton_VocalRepetida.addEventListener('click', titleVocalRepetida);

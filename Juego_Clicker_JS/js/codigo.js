let tiempoRestante = 20; // 20 segundos para la cuenta atrás
let contadorClics = 0;   // Contador de clics
let interval;            // Intervalo para la cuenta regresiva

// Elementos del DOM
const countdownElement = document.getElementById('countdown');
const puntosElement = document.getElementById('puntos');
const resultadoElement = document.getElementById('resultado');
const totalClicksElement = document.getElementById('totalClicks');
const botonReset = document.getElementById('botonReset');
const imagen = document.getElementById('jaimemingla');

// Función que inicia el juego y la cuenta regresiva
function iniciarJuego() {
    interval = setInterval(() => {
        tiempoRestante--;
        countdownElement.textContent = tiempoRestante;

        if (tiempoRestante <= 0) {
            clearInterval(interval); // Detener la cuenta regresiva
            finalizarJuego();        // Llamar a la función para finalizar el juego
        }
    }, 1000);
}

// Función que incrementa el contador de clics
function incrementarContador() {
    if (tiempoRestante > 0) {
        contadorClics++;
        puntosElement.textContent = contadorClics;
    }
}

// Función para finalizar el juego
function finalizarJuego() {
    // Mostrar el resultado final
    resultadoElement.classList.remove('hidden');
    totalClicksElement.textContent = contadorClics;
    
    // Deshabilitar la imagen para evitar más clics
    imagen.onclick = null;

    // Mostrar el botón de reset
    botonReset.style.display = 'block';
}

// Función para resetear el juego
function resetearContador() {
    // Restablecer los valores
    tiempoRestante = 20;
    contadorClics = 0;
    countdownElement.textContent = tiempoRestante;
    puntosElement.textContent = contadorClics;
    resultadoElement.classList.add('hidden');
    botonReset.style.display = 'none';

    // Volver a habilitar los clics en la imagen
    imagen.onclick = incrementarContador;

    // Reiniciar la cuenta regresiva
    iniciarJuego();
}

// Iniciar el juego automáticamente cuando la página cargue
window.onload = iniciarJuego;

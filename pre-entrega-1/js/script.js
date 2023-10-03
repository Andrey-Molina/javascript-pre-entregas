

//expresion incial, contador, issa counter variable
//condicion, loop hasta que ya no sea mas verdad, AS LONG AS
//expresion final/ actualizacion

// Creamos un array con objetos que contienen las propiedades preguntas y respuestas

const preguntas = [
    {
        pregunta: "¿Qué animal pasa gran parte de su vida durmiendo?",
        respuesta: "koala"
    },
    {
        pregunta: "¿Qué le da el color rosado a los flamencos?",
        respuesta: "camaron"
    },
    {
        pregunta: "¿Qué insecto no duerme?",
        respuesta: "hormiga"
    },
    {
        pregunta: "¿Cuál es el animal marino más largo del mundo?",
        respuesta: "tiburon ballena"
    }
];


let score = 0;
let nombre = prompt("Ingresa tu nombre!");



function realizarPregunta(pregunta, respuestaCorrecta) {
    const respuestaUsuario = prompt(pregunta);

    if (respuestaUsuario !== null) {
        if (respuestaUsuario.toLowerCase() === respuestaCorrecta.toLowerCase()) {
            alert("¡Correcto!");
            score++;
        } else {
            alert("Incorrecto. La respuesta correcta es: " + respuestaCorrecta);
        }
    }

}

for (let i = 0; i < preguntas.length; i++) {

    // Utilizamos el index del loop for para iterar dentro del array preguntas

    realizarPregunta(preguntas[i].pregunta, preguntas[i].respuesta);


    //Ejecuta tod0 este codigo y vuelve a repetir en cada pregunta hasta que i sea menos que el
    // largo del array preguntas, que son 4 en este caso.
}


// Mostramos el puntaje al final


if (score < 4){
    alert(nombre + " tu puntaje final es: " + score + " de " + preguntas.length);

}else{
    alert("Felicitaciones, has acertado todas las preguntas!");
}





// functions

// learn and explain it to yourself in simple words, if that doesn't work then watch again and
// repeat

// reausable task

// I can pass a value when I'm calling the function if I have given the function parameters

// Un juego de piedra, papel o tijera


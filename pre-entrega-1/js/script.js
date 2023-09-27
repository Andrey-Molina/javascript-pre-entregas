

//expresion incial, contador, issa counter variable
//condicion, loop hasta que ya no sea mas verdad, AS LONG AS
//expresion final/ actualizacion


const preguntas = [
    {
        pregunta: "¿Cuál es el animal más grande del mundo?",
        respuesta: "ballena azul"
    },
    {
        pregunta: "¿Cuál es el animal más rápido?",
        respuesta: "guepardo"
    },
    {
        pregunta: "¿Qué animal es conocido por su trompa larga?",
        respuesta: "elefante"
    }
];

let score = 0;
let nombre = prompt("Ingresa tu nombre!");

// Iteramos las preguntas
for (let i = 0; i < preguntas.length; i++) {

    const respuestaUsuario = prompt(preguntas[i].pregunta);

    // Comparamos la respuesta del usuario con la respuesta correcta (ignorando mayúsculas/minúsculas)

    if (respuestaUsuario.toLowerCase() === preguntas[i].respuesta.toLowerCase()) {
        alert("¡Correcto!");
        score++;
    } else {
        alert("Incorrecto. La respuesta correcta es: " + preguntas[i].respuesta);
    }
}

// Mostramos el puntaje al final

alert(nombre + " tu puntaje final es: " + score + " de " + preguntas.length);



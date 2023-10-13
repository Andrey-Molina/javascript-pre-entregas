
const preguntas = [
    {
        pregunta: "¿Qué animal pasa gran parte de su vida durmiendo?",
        respuesta: "koala",
    },
    {
        pregunta: "¿Qué le da el color rosado a los flamencos?",
        respuesta: "camaron",
    },
    {
        pregunta: "¿Qué insecto no duerme?",
        respuesta: "hormiga",
    },
    {
        pregunta: "¿Cuál es el animal marino más largo del mundo?",
        respuesta: "tiburon ballena",
    },
    {
        pregunta: "¿En que año se descubrio el pulpo fantasma?",
        respuesta: "2016",
    }
];

const btn =  document.getElementById("button-id");
btn.addEventListener(`click`, game);



function game(){

    const nombre = prompt("Ingresa tu nombre!");
    let score = 0;


    let randomSet = new Set();
    for (let x = 0; x < 100; x++){
        randomSet.add(Math.floor(Math.random()* 5));
    }

    let randomSetToArray =Array.from(randomSet).slice(0,6);

    function startGame(){
        for (let i = 0; i < preguntas.length; i++) {

            let index = randomSetToArray[i];
            realizarPregunta(preguntas[index].pregunta, preguntas[index].respuesta);
        }
    }

    if (nombre !== null){
        startGame();
    }else {
        alert("Debes ingresar un nombre valido.")
    }

    function realizarPregunta(pregunta, respuestaCorrecta, ) {
        let respuestaUsuario = prompt(pregunta);
        if (respuestaUsuario !== null) {
            if (respuestaUsuario.toLowerCase() === respuestaCorrecta.toLowerCase()) {
                alert("¡Correcto!");
                score++;
            } else {
                alert("Incorrecto. La respuesta correcta es: " + respuestaCorrecta);
            }
        }
    }

    if (score < preguntas.length){
        alert(nombre + " tu puntaje final es: " + score + " de " + preguntas.length);
    }else{
        alert("Felicitaciones, has acertado todas las preguntas!");
    }
}



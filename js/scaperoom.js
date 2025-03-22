// =============================================
// FUNCIONES PRINCIPALES DEL JUEGO
// =============================================

/**
 * Función para iniciar el juego después de aceptar el disclaimer.
 */
function iniciarJuego() {
  // Ocultar el disclaimer
  document.getElementById("disclaimer").style.display = "none";

  // Mostrar la escena principal del juego
  document.getElementById("principal").style.display = "block";
  document.getElementById("bocadillo").style.display = "block";
}

/**
 * Función que se ejecuta al hacer clic en la señal.
 * Cambia la escena y muestra los portales y el diablillo.
 */
function bifurcacion() {
  // Reproducir audio
  let audio = new Audio("../sound/soy añañin.mp3");
  audio.play();

  // Cambiar la imagen de fondo
  document.getElementById("principal").style.backgroundImage = 'url("../img/Escenarios/2 puertas.jpg")';

  // Ocultar la señal
  document.getElementById("señal1").style.display = "none";

  // Actualizar los mensajes
  document.getElementById("parrafo1").innerHTML = "-Seguro que ese diablillo sabe algo";
  document.getElementById("parrafo2").innerHTML = "Añañin: Soy Añañiiin, si quieres recuperar a Enrique tendrás que pasar mis pruebas, elige una puerta";

  // Mostrar portales y diablillo
  document.getElementById("portalIzq").style.display = "block";
  document.getElementById("portalDer").style.display = "block";
  document.getElementById("diablillo").style.display = "block";
}

/**
 * Función que maneja la elección de camino (izquierda o derecha).
 * @param {string} direccion - La dirección elegida ("izq" o "der").
 */
function preguntas1(direccion) {
  if (direccion === "izq") {
    // Cambiar la imagen de fondo
    document.getElementById("principal").style.backgroundImage = 'url("../img/Escenarios/3puertas.jpg")';

    // Ocultar la señal
    document.getElementById("señal1").style.display = "none";

    // Actualizar los mensajes
    document.getElementById("parrafo1").innerHTML = "Pregunta 1";
    document.getElementById("parrafo2").innerHTML = "Añañin: Si una troll fan de Taylor Swift se tira tremendo cuesco en las montañas y nadie está cerca para escucharlo, ¿hace ruido?";

    // Ocultar portales
    document.getElementById("portalIzq").style.display = "none";
    document.getElementById("portalDer").style.display = "none";

    // Mostrar el contenedor de respuestas
    document.getElementById("respuestasContainer").style.display = "flex";
  } else if (direccion === "der") {
    // Cambiar la imagen de fondo
    document.getElementById("principal").style.backgroundImage = 'url("../img/Escenarios/3puertas.jpg")';

    // Ocultar la señal
    document.getElementById("señal1").style.display = "none";

    // Actualizar los mensajes
    document.getElementById("parrafo1").innerHTML = "Pregunta 1";
    document.getElementById("parrafo2").innerHTML = "Añañin: Si una persona con una mochila sospechosa te pregunta que dia es y tu respondes 11 de marzo de 2004, ¿Que va a pasar?";

    // Ocultar portales
    document.getElementById("portalIzq").style.display = "none";
    document.getElementById("portalDer").style.display = "none";

    // Mostrar el contenedor de respuestas
    document.getElementById("respuestasContainerDer").style.display = "flex";
  }
}

/**
 * Función que maneja la respuesta del usuario a la pregunta 1.
 * @param {string} respuesta - La respuesta elegida ("A", "B" o "C").
 */
function mostrarRespuesta1Izq(respuesta) {
  if (respuesta !== "A") {
    // Cambiar la imagen de fondo
    document.getElementById("principal").style.backgroundImage = 'url("../img/Escenarios/montañasombria.jpg")';

    // Actualizar los mensajes
    document.getElementById("parrafo1").innerHTML = "Voz Misteriosa: La troll te mira indignada y con ojos de desquiciada, sabes que tu respuesta no le ha gustado.";
    document.getElementById("parrafo2").innerHTML = "Voz Misteriosa: En tus últimos segundos de vida ves como se dirige hacia ti corriendo, es el fin... Mueres";

    // Mostrar troll, censuras y botón de reinicio
    document.getElementById("troll").style.display = "block";
    document.getElementById("censure1").style.display = "block";
    document.getElementById("censure2").style.display = "block";
    document.getElementById("censure3").style.display = "block";
    document.getElementById("reiniciar").style.display = "block";

    // Ocultar diablillo y contenedor de respuestas
    document.getElementById("diablillo").style.display = "none";
    document.getElementById("respuestasContainer").style.display = "none";
  } else {
    document.getElementById("respuestasContainer").style.display = "none";
    mostrarCentralP2
  ();
  }
}

function mostrarRespuesta1Dere(respuesta) {
  // Mensajes según la respuesta
  if (respuesta === "C") {
    // Cambia la imagen de fondo
    document.getElementById("principal").style.backgroundImage = 'url("../img/Escenarios/metroDeMadrid.jpg")';
    document.getElementById("parrafo1").innerHTML = "Voz Misteriosa: Pero que te crees que la vida es una película";
    document.getElementById("parrafo2").innerHTML = "La mochila explota y mueres";
  } else if (respuesta === "B") {
    // Cambia la imagen de fondo
    document.getElementById("principal").style.backgroundImage = 'url("../img/Escenarios/metroDeMadrid.jpg")';
    document.getElementById("parrafo1").innerHTML = "Voz Misteriosa: No prestabas atención en historia... Se nota";
    document.getElementById("parrafo2").innerHTML = "El vagón en el que ibas explota y evidentemente mueres, bien hecho campeón";
  } else {
    document.getElementById("reiniciar").style.display = "none";
    mostrarCentralP2
  ();

  }

  // Mostrar botón de reinicio y ocultar lo que no necesitas
  document.getElementById("reiniciar").style.display = "block";
  document.getElementById("diablillo").style.display = "none";
  document.getElementById("respuestasContainerDer").style.display = "none";
}


/**
 * Función divertida que se ejecuta al hacer clic en las censuras.
 */
function pervertido() {
  document.getElementById("parrafo1").innerHTML = "Troll: ¡¡PERVERTIDO!!";
  document.getElementById("parrafo2").innerHTML = "Voz Misteriosa: Resulta que la troll tiene OF, te costará $4.99 suscribirte";
}

/**
 * Función para reiniciar el juego.
 */
function reiniciarJuego() {
  location.reload(); // Recarga la página para reiniciar el juego
}

// =============================================
// FUNCIONES ADICIONALES (CAMINO 2)
// =============================================

/**
 * Función que maneja la elección de camino en la segunda fase.
 * @param {string} direccion - La dirección elegida ("izq" o "der").
 */
function pregunta3Izq() {

  // Cambiar la imagen de fondo
  document.getElementById("principal").style.backgroundImage = 'url("../img/Escenarios/3puertas.jpg")';

  // Actualizar los mensajes
  document.getElementById("parrafo1").innerHTML = "Pregunta 3";
  document.getElementById("parrafo2").innerHTML =
    '<span style="font-size: 24px;">Añañin: Estás en un concurso y tienes que elegir entre tres puertas. ' +
    'Detrás de una de ellas hay un premio, y detrás de las otras dos la muerte. Tú eliges una puerta, ' +
    'pero antes de abrirla, el presentador (que sabe dónde está el premio) abre otra puerta la cual no tiene premio. ' +
    'Ahora solo quedan dos puertas: la que elegiste y otra. El presentador te da la opción de cambiar tu elección. ' +
    '¿Cambias de puerta o no, genio?</span>';

  // Ocultar portales
  document.getElementById("portalIzq").style.display = "none";
  document.getElementById("portalDer").style.display = "none";

  // Modificar las respuestas
  document.getElementById("respuestaA").innerHTML = "Me quedo con mi elección";
  document.getElementById("respuestaB").innerHTML = "Da igual, tienes un 50% de posibilidades";
  document.getElementById("respuestaC").innerHTML = "Cambio a la otra puerta"; // Correcta. Problema de Monty Hall

  // Asignar nuevas funciones a los botones de respuesta
  document.getElementById("respuestaA").onclick = function () { mostrarRespuesta3Izq('A'); };
  document.getElementById("respuestaB").onclick = function () { mostrarRespuesta3Izq('B'); };
  document.getElementById("respuestaC").onclick = function () { mostrarRespuesta3Izq('C'); };

  // Mostrar el contenedor de respuestas y al diablillo
  document.getElementById("diablillo").style.display = "block";
  document.getElementById("respuestasContainer").style.display = "flex";

}

/**
 * Función que maneja la respuesta del usuario a la pregunta 3.
 * @param {string} respuesta - La respuesta elegida ("A", "B" o "C").
 */
function mostrarRespuesta3Izq(respuesta) {
  if (respuesta !== "C") {
    // Cambiar la imagen de fondo
    document.getElementById("principal").style.backgroundImage = 'url("../img/Escenarios/pantano.jpg")';

    // Actualizar los mensajes
    document.getElementById("parrafo1").innerHTML = "Voz Misteriosa: Te encuentras en un pantano asqueroso que huele a la clase de DAW, ves a 2 estudiantes de DAM intentando conseguir prácticas";
    document.getElementById("parrafo2").innerHTML = "Voz Misteriosa: Una bruja traviesa aparece de repente, te lanza la maldición del eterno estudiante... Mueres";

    // Mostrar bruja, estudiantes, gnomo y botón de reinicio
    document.getElementById("reiniciar").style.display = "block";
    document.getElementById("bruja").style.display = "block";
    document.getElementById("dam1").style.display = "block";
    document.getElementById("dam2").style.display = "block";

    // Ocultar diablillo y contenedor de respuestas
    document.getElementById("diablillo").style.display = "none";
    document.getElementById("respuestasContainer").style.display = "none";
  }else {
    document.getElementById("respuestasContainer").style.display = "none";
    mostrarCentralP4()
  }
}

/**
 * Función especial al hacer click en la bruja.
 */
function transformacion(){
  document.getElementById("bruja").style.display = "none";
  document.getElementById("gnomo").style.display = "block";
  document.getElementById("parrafo1").innerHTML = "Voz Misteriosa: Notas algo en la bruja, su belleza es demasiado... artificial. Te das cuenta que es un hechizo de ilusión y que realmente hay un gnomo haciendo cosplay";
  document.getElementById("parrafo2").innerHTML = "Gnomo: Besame amor mio hihihi";
}

function mostrarCentralP2() {
  // Cambiar la imagen de fondo
  document.getElementById("principal").style.backgroundImage = 'url("../img/Escenarios/3puertas.jpg")';

  // Ocultar la señal
  document.getElementById("señal1").style.display = "none";
  document.getElementById("reiniciar").style.display = "none";

  // Actualizar los mensajes
  document.getElementById("parrafo1").innerHTML = "Pregunta 3";
  document.getElementById("parrafo2").innerHTML = "Añañin: Cuantos gays se nesesitan para cambiar una bombilla? ";


  // Mostrar el contenedor de respuestas
  document.getElementById("respuestasContainerCentralP2").style.display = "flex";

}
function mostrarRespuestaCentralP2(respuesta) {
  document.getElementById("diablillo").style.display = "none";
  if (respuesta === "A") {
    // Cambia la imagen de fondo
    document.getElementById("principal").style.backgroundImage = 'url("../img/Escenarios/escenarioCentralP3.jpg")';
    document.getElementById("parrafo1").innerHTML = "Añañin: Cuantos gays se nesesitan para cambiar una bombilla? ";
    document.getElementById("parrafo2").style.display = "none";
    document.getElementById("reiniciar").style.display = "block";
    document.getElementById("respuestasContainerCentralP2").style.display = "none";
    document.getElementById("reiniciar").style.display = "block";
  } else if (respuesta === "B") {
    document.getElementById("respuestasContainerCentralP2").style.display = "none";
    // la funcion de laura
  } else if (respuesta === "C") {
    document.getElementById("respuestasContainerCentralP2").style.display = "none";
    pregunta3Izq();
  }
}


function mostrarCentralP4() {
  // Cambiar la imagen de fondo
  document.getElementById("principal").style.backgroundImage = 'url("../img/Escenarios/2 puertas.jpg")';

  // Actualizar los mensajes
  document.getElementById("parrafo1").innerHTML = "Final";
  document.getElementById("parrafo2").innerHTML = "Añañin: ¿Raúl apoya a Perro Sanche?";

  // Mostrar el contenedor de respuestas y ocultar reinicio
  document.getElementById("respuestasContainerCentralP4").style.display = "flex";
  document.getElementById("reiniciar").style.display = "none";

}

/**
 * Función que maneja la respuesta del usuario a la pregunta 4.
 * @param {string} respuesta - La respuesta elegida ("A" o "B").
 */

function mostrarRespuestaCentralP4(respuesta) {
  
  if (respuesta === "A") { //muerte
    // Cambia la imagen de fondo
    document.getElementById("principal").style.backgroundImage = 'url("../img/Escenarios/escenarioCentralP3.jpg")';
    document.getElementById("parrafo1").innerHTML = "Añañin: Ahora estaras en el infierno socialista eternamente";
    document.getElementById("parrafo2").style.display = "none";
    document.getElementById("reiniciar").style.display = "block";
    // Mover al diablillo a una nueva posición
    let diablillo = document.getElementById("diablillo");
    diablillo.style.position = "absolute"; 
    diablillo.style.top = "60%"; 
    diablillo.style.left = "80%"; 
  } else if (respuesta === "B") { //final feliz
    // la funcion de laura

  }
  // Mostrar botón de reinicio y ocultar lo que no necesitas
  document.getElementById("reiniciar").style.display = "block";
  document.getElementById("diablillo").style.display = "block";
  document.getElementById("respuestasContainerCentralP4").style.display = "none";
}
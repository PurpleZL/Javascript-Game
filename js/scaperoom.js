// =============================================
// FUNCIONES PRINCIPALES DEL JUEGO
// =============================================

/**
 * Función que se ejecuta al hacer clic en la señal.
 * Cambia la escena y muestra los portales y el diablillo.
 */
function moverse1() {
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
function camino1(direccion) {
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
  }
  // else if (direccion === "der") { ... }
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
  }
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
function camino2(direccion) {
  if (direccion === "izq") {
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

    // Mostrar el contenedor de respuestas
    document.getElementById("respuestasContainer").style.display = "flex";
  }
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

    // Mostrar troll y botón de reinicio
    document.getElementById("troll").style.display = "block";
    document.getElementById("reiniciar").style.display = "block";

    // Ocultar diablillo y contenedor de respuestas
    document.getElementById("diablillo").style.display = "none";
    document.getElementById("respuestasContainer").style.display = "none";
  }
}
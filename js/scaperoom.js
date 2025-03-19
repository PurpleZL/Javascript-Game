
function moverse1() {
  /*audio añañin*/
  let audio = new Audio("../sound/soy añañin.mp3");
  audio.play();

  document.getElementById("principal").style.backgroundImage = 'url("../img/Escenarios/2 puertas.jpg")';
  document.getElementById("señal1").style.display = "none";
  document.getElementById("parrafo1").innerHTML = "-Seguro que ese diablillo sabe algo";
  document.getElementById("parrafo2").innerHTML = "Añañin: Soy Añañiiin, si quieres recuperar a Enrique tendras que pasar mis pruebas, elige una puerta";

  document.getElementById("portalIzq").style.display = "block";
  document.getElementById("portalDer").style.display = "block";

  document.getElementById("diablillo").style.display = "block";
}


function camino1(direccion) {
  if (direccion === "izq") {
    document.getElementById("principal").style.backgroundImage = 'url("../img/Escenarios/3puertas.jpg")';
    document.getElementById("señal1").style.display = "none";
    document.getElementById("parrafo1").innerHTML = "Pregunta 1";
    document.getElementById("parrafo2").innerHTML = "Añañin: Si una troll fan de Taylor Swift se tira tremendo cuesco en las montañas y nadie está cerca para escucharlo, ¿hace ruido?";

    document.getElementById("portalIzq").style.display = "none";
    document.getElementById("portalDer").style.display = "none";

    // Mostrar el contenedor de respuestas
    document.getElementById("respuestasContainer").style.display = "flex";
  }//else if direccion es derecha ...
}

function mostrarRespuesta1Izq(respuesta) {
  if (respuesta == "A") {

  } else {//Respuesta Incorrecta
    document.getElementById("principal").style.backgroundImage = 'url("../img/Escenarios/montañasombria.jpg")';

    document.getElementById("parrafo1").innerHTML = "Voz Misteriosa: La troll te mira indignada y con ojos de desquiciada, sabes que tu respuesta no le ha gustado.";
    document.getElementById("parrafo2").innerHTML = "Voz Misteriosa: En tus ultimos segundos de vida ves como se dirige hacia ti corriendo, es el fin... Mueres ";

    document.getElementById("troll").style.display = "block";
    document.getElementById("censure1").style.display = "block";
    document.getElementById("censure2").style.display = "block";
    document.getElementById("censure3").style.display = "block";
    document.getElementById("reiniciar").style.display = "block";

    document.getElementById("diablillo").style.display = "none";
    document.getElementById("respuestasContainer").style.display = "none";
  }
}

//Funcion divertida
function pervertido() {
  document.getElementById("parrafo1").innerHTML = "Troll: ¡¡PERVERTIDO!!";
  document.getElementById("parrafo2").innerHTML = "Voz Misteriosa: Resulta que la troll tiene OF, te costara $4.99 suscribirte";
}

//Esta es la funcion que sirve para reiniciar el juego en caso de muerte o victoria
function reiniciarJuego() {
  location.reload(); // Recarga la página para reiniciar el juego
}

function camino2(direccion) {
  if (direccion === "izq") {
    document.getElementById("principal").style.backgroundImage = 'url("../img/Escenarios/3puertas.jpg")';
    document.getElementById("parrafo1").innerHTML = "Pregunta 3";
    document.getElementById("parrafo2").innerHTML =
      '<span style="font-size: 24px;">Añañin: Estás en un concurso y tienes que elegir entre tres puertas. ' +
      'Detrás de una de ellas hay un premio, y detrás de las otras dos la muerte. Tú eliges una puerta, ' +
      'pero antes de abrirla, el presentador (que sabe dónde está el premio) abre otra puerta la cual no tiene premio. ' +
      'Ahora solo quedan dos puertas: la que elegiste y otra. El presentador te da la opción de cambiar tu elección. ' +
      '¿Cambias de puerta o no, genio?</span>';

    document.getElementById("portalIzq").style.display = "none";
    document.getElementById("portalDer").style.display = "none";
    //document.getElementById("portalCen").style.display = "none";

    //modifico las respuestas
    document.getElementById("respuestaA").innerHTML = "Me quedo con mi eleccion";
    document.getElementById("respuestaB").innerHTML = "Da igual, tienes un 50% de posibilidades";
    document.getElementById("respuestaC").innerHTML = "Cambio a la otra puerta"; //Correcta. Problema de Monty Hall
    document.getElementById("respuestaA").onclick = function () {mostrarRespuesta3Izq('A');};
    document.getElementById("respuestaB").onclick = function () {mostrarRespuesta3Izq('B');};
    document.getElementById("respuestaC").onclick = function () {mostrarRespuesta3Izq('C');};

    // Mostrar el contenedor de respuestas
    document.getElementById("respuestasContainer").style.display = "flex";
  }//else if direccion es derecha y centro
}

function mostrarRespuesta3Izq(respuesta) {
  if (respuesta == "C") {

  } else {//Respuesta Incorrecta
    document.getElementById("principal").style.backgroundImage = 'url("../img/Escenarios/pantano.jpg")';

    document.getElementById("parrafo1").innerHTML = "Voz Misteriosa: Te encuentras en un pantano asqueroso que huele a la clase de DAW, ves a 2 estudiantes de DAM intentando conseguir practicas";
    document.getElementById("parrafo2").innerHTML = "Voz Misteriosa: Una bruja traviesa aparece de repente, te lanza la maldicion del eterno estudiante... Mueres ";

    document.getElementById("troll").style.display = "block";
    document.getElementById("reiniciar").style.display = "block";

    document.getElementById("diablillo").style.display = "none";
    document.getElementById("respuestasContainer").style.display = "none";
  }
}
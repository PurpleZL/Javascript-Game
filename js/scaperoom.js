
function moverse1() {
  /*audio añañin*/
  let audio = new Audio("../sound/soy añañin.mp3");
  audio.play();

  document.getElementById("principal").style.backgroundImage = 'url("../img/Escenarios/2 puertas.jpg")';
  document.getElementById("señal1").style.display = "none";
  document.getElementById("parrafo1").innerHTML = "-Seguro que ese diablillo sabe algo";
  document.getElementById("parrafo2").innerHTML = "+Soy Añañiiin, si quieres recuperar a Enrique tendras que pasar mis pruebas, elige una puerta";

  document.getElementById("portalIzq").style.display = "block";
  document.getElementById("portalDer").style.display = "block";

  document.getElementById("diablillo").style.display = "block";
}


function camino(direccion) {
  if (direccion === "izq") {
    document.getElementById("principal").style.backgroundImage = 'url("../img/Escenarios/3puertas.jpg")';
    document.getElementById("señal1").style.display = "none";
    document.getElementById("parrafo1").innerHTML = "Pregunta 1";
    document.getElementById("parrafo2").innerHTML = "+Si una troll fan de Taylor Swift se tira tremendo cuesco en las montañas y nadie está cerca para escucharlo, ¿hace ruido?";

    document.getElementById("portalIzq").style.display = "none";
    document.getElementById("portalDer").style.display = "none";

    // Mostrar el contenedor de respuestas
    document.getElementById("respuestasContainer").style.display = "flex";
  }
}
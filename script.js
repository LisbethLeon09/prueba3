// Función para que el usuario haga su elección= makeChoice
//eleccionUsuario un atributo que recibe la funcion o variable
function eleccion(eleccionUsuario) {
    // Generar una elección aleatoria para la computadora (piedra, papel o tijera)
    //opcionescompu variable o un arreglo que se utiliza para juegos
    const opcionescompu = ["piedra", "papel", "tijeras"];
    const opcionrandon = opcionescompu[1];
    //const opcionrandon = opcionescompu[Math.floor(Math.random() * 3)];
  
    // Determinar el resultado del juego
    const message = document.getElementById("message");
    if (eleccionUsuario === opcionrandon) {
      message.textContent = "Empate.";  
      // Si la elección del usuario es igual a la de la computadora
    } else if (
      (eleccionUsuario === "piedra" && opcionrandon === "tijeras") ||  
      // Si el usuario elige piedra y la computadora tijera
      (eleccionUsuario === "tijeras" && opcionrandon === "papel") ||  
      // Si el usuario elige tijera y la computadora papel
      (eleccionUsuario === "papel" && opcionrandon === "piedra")  
      // Si el usuario elige papel y la computadora piedra
    ) {
      message.textContent = "¡Ganaste!";  
      // El usuario gana
    } else {
      message.textContent = "La computadora ganó.";  
      // En cualquier otro caso, la computadora gana
    }
  }
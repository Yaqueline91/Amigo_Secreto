// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array para almacenar los amigos
const amigos = [];

// Función para agregar un nuevo amigo a la lista "amigo" y devolver un nombre aleatorio de la lista.
function agregarAmigo() {
    const amigoSecreto = document.getElementById("amigo").value.trim();

// Expresión para validar ingresar solo texto 
    const nombreValido = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;

    if (amigoSecreto === "" || !nombreValido.test(amigoSecreto)) {
        alert("Debe ingresar un nombre válido (solo letras, NO se permiten números ni caracteres especiales).");
        return;
    }
    //agregar nombre al array "amigoSecreto" y limpiar la casilla
    amigos.push(amigoSecreto);    
    mostrarAmigos();
    limpiarCaja();
    return;   
}

// Función para mostrar la lista de amigos en la pantalla

function mostrarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigos.forEach(amigo => {
        let item = document.createElement("li");
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

//funcion para limpiar la caja de amigos

function limpiarCaja() {
    document.getElementById("amigo").value = "";  

}

// Función para sortear un amigo aleatorio de la lista "amigoSecreto"

function sortearAmigo() {
    if(amigos.length === 0 || amigos.length <2){
        alert("No hay amigos para sortear");
        return;
    }
    const indiceAmigoSecreto = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAmigoSecreto];
    //mostrar el resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    //agregar el resultado al DOM
    let item = document.createElement("li");
    item.textContent = `El amigo secreto es: ${amigoSorteado}`;
    resultado.appendChild(item);
}
    // funcion para reiniciar el juego y volver al comienzo
    function reiniciarJuego(){
    // Limpiar el array de amigos
    amigos.length = 0;

    // Limpiar la lista de amigos en el DOM
    document.getElementById("listaAmigos").innerHTML = "";

    // Limpiar el resultado del sorteo
    document.getElementById("resultado").innerHTML = "";

    // Limpiar la caja de entrada
    document.getElementById("amigo").value = "";        
 
    }

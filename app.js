let nombreAmigos = [];
let lista = document.getElementById("listaAmigos");

function agregarAmigo() {
    // Capturar el valor del input como String
    let nombreIngresado = document.getElementById("amigo").value.trim();
    // Validar que no esté vacío
    if (nombreIngresado === "") {
        alert("Por favor, ingresa un nombre válido");
        return;
    }
    // Validar que no esté duplicado
    if (nombreAmigos.includes(nombreIngresado)) {
        alert("Este nombre ya fue agregado");
        return;
    }    
    // Agregar el nombre al array
    nombreAmigos.push(nombreIngresado);
    // Mostrar el nombre en la lista
    actualizarLista();
    // Limpiar el input
    document.getElementById("amigo").value = "";
}

function actualizarLista() {
    // Limpiar la lista antes de actualizarla
    lista.innerHTML = "";
    // Recorrer el array y agregar cada nombre a la lista
    nombreAmigos.forEach(function(nombre) {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo(){
    let numeroAleatorio = Math.floor(Math.random() * nombreAmigos.length);
    let amigoSeleccionado = nombreAmigos[numeroAleatorio];
    borrarLista();
    lista.innerHTML = amigoSeleccionado;
}

function borrarLista(){
    lista.innerHTML = "";
    nombreAmigos = [];
}
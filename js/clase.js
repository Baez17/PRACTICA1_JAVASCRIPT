const Celular = {
    nombre: "Iphone",
    marca: "Apple",
    modelo: 15282,
    color: "morado",
    fabricacion: {
        pais: "EUA",
        fecha: "01 marzo 2023"
    }
};

function mostrarCelular() {
    const mensaje = `Mi celular es un ${Celular.nombre} de la marca ${Celular.marca}, modelo ${Celular.modelo}, de color ${Celular.color} fabricado en ${Celular.fabricacion.pais} el ${Celular.fabricacion.fecha}.`;
    document.getElementById("message-container").innerHTML = `<p class="message">${mensaje}</p>`;
}

// Llamada a la función para mostrar el celular
mostrarCelular();
 
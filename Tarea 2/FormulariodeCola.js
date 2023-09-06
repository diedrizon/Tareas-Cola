let cola = [];

function isNumber(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

function enqueue() {
    const elemento = document.getElementById("element").value.trim();
    if (elemento === "") {
        alert("El elemento no puede estar vacío.");
        return;
    }
    if (!isNumber(elemento)) {
        alert("Solo se permiten números.");
        return;
    }
    cola.push(parseFloat(elemento));
    document.getElementById("element").value = "";
    updateQueue();
}

function dequeue() {
    if (cola.length > 0) {
        const primerElemento = cola.shift();
        alert("Elemento dequeued: " + primerElemento);
        updateQueue();
    } else {
        alert("La cola está vacía.");
    }
}

function peek() {
    if (cola.length > 0) {
        alert("Primer elemento: " + cola[0]);
    } else {
        alert("La cola está vacía.");
    }
}

function size() {
    alert("Tamaño de la cola: " + cola.length);
}

function print() {
    alert("Contenido de la cola: " + cola.join(", "));
}

function updateQueue() {
    document.getElementById("queue").textContent = cola.join(", ");
}
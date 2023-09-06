class Queue {
    constructor() {
        this.queue = [];
    }

    enqueue(element) {
        this.queue.push(element);
        return this.queue;
    }

    dequeue() {
        return this.queue.shift();
    }

    peek() {
        return this.queue[0];
    }

    size() {
        return this.queue.length;
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    print() {
        div.innerHTML += "<h2>Datos de cola:</h2>" + this.queue.join(', ');
    }
}

var div = document.getElementById("datos");
const cola = new Queue();

cola.enqueue('Ton 618');
cola.enqueue('Andromeda');
cola.enqueue('Via lastea');
cola.enqueue('Aguegero de gusano');
cola.enqueue('Super nova');

div.innerHTML += "<h2>Cantidad de datos en cola: </h2>" + cola.size();
cola.print();

div.innerHTML += "<h2>Datos en el frente de la cola: </h2>" + cola.peek();

div.innerHTML += "<h2>Se ha eliminado el dato: </h2>" + cola.dequeue();

if (cola.isEmpty()) {
    div.innerHTML += "<h2>La cola está vacía:</h2>";
} else {
    div.innerHTML += "<h2>La cola no está vacía:</h2>";
}

cola.print();


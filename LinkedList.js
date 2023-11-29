export default class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  magnitud() {
    let contador = 0;
    let nodo = this.head;
    while (nodo) {
      contador++;
      nodo = nodo.next;
    }
    console.debug("🚀 ~ contador:", contador);
    return contador;
  }

  vaciar() {
    this.head = null;
  }

  obtenerUltimo() {
    let nodo = this.head;
    if (!nodo) {
      return null;
    }
    while (nodo.next) {
      nodo = nodo.next;
    }
    return nodo;
  }

  obtenerPrimero() {
    return this.head;
  }

  insertarPrimero(nodo = null) {
    if (!nodo || !nodo.dato) {
      console.debug("🚧 not a valid nodo ");
      return;
    }

    if (!this.head) {
      this.head = nodo;
      return;
    }
    let firstPointer = this.head;

    nodo.next = firstPointer;
    this.head = nodo;
  }

  insertarUltimo(nodo = null) {
    if (!nodo) {
      console.debug("🚧 not a valid nodo ");
      return;
    }

    let lastNodo = this.head;
    while (lastNodo?.next) {
      if (!lastNodo.next) {
        break;
      }
      lastNodo = lastNodo.next;
    }

    if (lastNodo === null) {
      this.head = nodo;
      return;
    }
    lastNodo.next = nodo;
  }

  imprimirLista() {
    let contador = 0;
    let nodo = this.head;
    while (nodo) {
      contador++;
      console.debug("🚀 ~ nodo:", nodo.dato);
      nodo = nodo.next;
    }
  }

  insertAfter(nodoInsert, nodoValorAfter) {
    let newNodo = nodoInsert;
    if (!newNodo || !newNodo.dato || !nodoValorAfter || !nodoValorAfter.dato) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode && currentNode.dato !== nodoValorAfter.dato) {
      currentNode = currentNode.next;
    }
    if (!currentNode) {
      return null;
    }
    let nextOfCurrent = currentNode.next;
    newNodo.next = nextOfCurrent;
    currentNode.next = newNodo;
    return "New node inserted correctly";
  }

  deleteNode(nodo) {
    if (!nodo || !nodo.dato) {
      return null;
    }
    let currentNode = this.head;
    let previousNode = null;
    while (currentNode.dato !== nodo.dato) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (!previousNode || !currentNode) {
      console.log("node couldnt been delete ");
      return null;
    }
    previousNode.next = currentNode.next;
  }
}

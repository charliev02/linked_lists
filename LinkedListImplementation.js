import DoubleLinkedList from "./DoubleLinkedList.js";
import LinkedList from "./LinkedList.js";
import { nodoDLL1, nodoDLL2, nodoDLL3, nodoDLL4 } from "./NodosDLL.js";
import {
  nodo1,
  nodo2,
  nodo3,
  nodo4,
  nodo5,
  nodo6,
  nodo7,
  nodo8,
  nodo9,
} from "./NodosLL.js";
console.clear();

// Simple Linked List
console.log(`✨ Linked List ✨`);

let lista = new LinkedList();

lista.insertarUltimo(nodo1);
lista.insertarUltimo(nodo2);
lista.insertarUltimo(nodo3);
lista.insertarUltimo(nodo4);
lista.insertarUltimo(nodo5);
lista.insertarUltimo(nodo6);
lista.insertarUltimo(nodo7);
lista.insertAfter(nodo8, nodo4);
lista.insertAfter(nodo9, null);

lista.deleteNode(nodo6);
lista.imprimirLista();
lista.magnitud();
console.log("First nodo: ", lista.obtenerPrimero()?.dato || null);
console.log("Last nodo: ", lista.obtenerUltimo()?.dato || null);

console.clear();
console.log(`✨ Double Linked List ✨`);
const doubleLista = new DoubleLinkedList();
doubleLista.addFirst(nodoDLL1);
doubleLista.addFirst(nodoDLL2);
doubleLista.addFirst(nodoDLL3);
doubleLista.addLast(nodoDLL4);

console.log("\n✨ Printing List");
doubleLista.print();

doubleLista.deleteFirst();

console.log("\n✨ Printing List");
doubleLista.print();

doubleLista.deleteLast();

console.log("\n✨ Printing List");
doubleLista.print();

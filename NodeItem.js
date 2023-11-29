export default class NodoItem {
  constructor(dato, double = false) {
    this.dato = dato;
    this.next = null;
    if (double) {
      this.prev = null;
    }
  }
}

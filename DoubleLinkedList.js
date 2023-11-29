export default class DoubleLinkedList {
  constructor(head = null) {
    this.head = head;
  }

  print() {
    let magnitud = 0;
    let nodosString = "";
    let head = this.head;
    // let lastElement = null;
    while (head) {
      console.debug("🚀 ~ Nodo:", head.dato);
      magnitud = magnitud + 1;

      // if (!head.next && lastElement == null) {
      //   lastElement = true;
      //   console.debug("🚀 ~ lastElement:", lastElement);
      // }

      // head = !lastElement ? head.next : head.prev;
      head = head.next;
    }
    console.debug("🚀 ~ magnitud:", magnitud);
    return { magnitud, nodosString };
  }

  addFirst(nodo = null) {
    if (this.head) {
      const currentHead = this.head;
      this.head = nodo;
      this.head.next = currentHead;
      currentHead.prev = this.head;
      return;
    }
    this.head = nodo;
  }

  addLast(newNodo = null) {
    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    const lastNode = currentNode;
    const nodeToInsert = newNodo;

    nodeToInsert.prev = lastNode;
    lastNode.next = nodeToInsert;
  }

  deleteFirst() {
    const nodeToRemove = this.head;
    this.head = nodeToRemove.next;
    this.head.prev = null;
  }

  deleteLast() {
    let head = this.head;

    while (head.next) {
      head = head.next;
    }
    head.prev.next = null;
  }
}

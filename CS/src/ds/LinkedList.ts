class Node {
  data: any;
  next: Node;

  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  head: Node;
  tail: Node;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: any) {
    const node = new Node(value, null);

    if (this.head === null) {
      this.head = this.tail = node;
      this.length++;
      return;
    }

    this.tail.next = node;
    this.tail = node;

    this.length++;
  }

  pop() {
    // empty
    if (!this.length) return null;

    // only one element
    if (this.head === this.tail) {
      const lastNode = this.tail;
      this.tail = this.head = null;
      this.length--;

      return lastNode.data;
    }

    // more than one element
    let lastSecondNode = this._findPreNode(this.tail);
    const lastNodde = this.tail;

    lastSecondNode.next = null;
    this.tail = lastSecondNode;

    this.length--;

    return lastNodde.data;
  }

  _findNode(index) {
    let i = 0,
      currentNode = this.head;

    while (i < index) {
      currentNode = currentNode.next;
      i++;
    }

    return currentNode;
  }

  _findPreNode(node) {
    let preNode = this.head;

    while (preNode.next !== node) {
      preNode = preNode.next;
    }

    return preNode;
  }

  get(index) {
    return this._findNode(index).data;
  }

  delete(index) {
    // empty
    if (!this.length) return null;

    // only one element
    if (this.head === this.tail) {
      const lastNode = this.tail;
      this.tail = this.head = null;
      this.length--;

      return lastNode.data;
    }

    // delete the head
    if (index === 0) {
      const headNode = this.head;

      this.head = this.head.next;
      headNode.next = null;
      this.length--;

      return headNode.data;
    }

    // delete the tail
    if (index === this.length - 1) {
      return this.pop();
    }

    //delete the normal node
    let currentNode = this._findNode(index);
    let preNode = this._findPreNode(currentNode);

    preNode.next = currentNode.next;
    currentNode.next = null;
    this.length--;

    return currentNode.data;
  }
}

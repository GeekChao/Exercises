class ArrayList {
  length: number;
  data: object;

  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(ele) {
    this.data[this.length] = ele;
    this.length++;
  }

  pop() {
    return this.delete(this.length - 1);
  }

  get(index) {
    return this.data[index];
  }

  delete(index) {
    const ele = this.data[index];

    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;

    return ele;
  }
}

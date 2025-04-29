class OneWayNode<T> {
  constructor(public data: T, public next: OneWayNode<T> | null = null) {}
}

class OneWayLinkedList<T> {
  head: OneWayNode<T> | null;
  private size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  private initializeHead(node: OneWayNode<T>) {
    this.head = node;

    return true;
  }

  // I can think of two reasons for this abstraction: 1) we might forgot to increase the size after creating a newNode. 2) Another case might be happen which is: newNode can not be created because of memory shortage (very rare case but possible), in this case we will throw an error message from this function.
  // Third, This is more declarative.
  private createNode(data: T) {
    const newNode = new OneWayNode(data);
    this.size++;

    return newNode;
  }

  insertAtFirst(data: T) {
    const newNode = this.createNode(data);

    if (this.head === null) {
      return this.initializeHead(newNode);
    }

    newNode.next = this.head;
    this.head = newNode;

    return true;
  }

  insertAtLast(data: T) {
    const newNode = this.createNode(data);

    if (this.head === null) {
      return this.initializeHead(newNode);
    }

    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }

    temp.next = newNode;

    return true;
  }

  //   private insertNode(index: number, data: T, place: "After" | "Before") {
  //     const newNode = this.createNode(data);

  //     let count = 0;
  //     let temp = this.head as OneWayNode<T>; // Here we know [[temp]] can not be null

  //     const condition =
  //       place === "Before" ? count !== index - 1 : count !== index;

  //     while (condition) {
  //       temp = temp.next as OneWayNode<T>; // Similarly, here also we know [[temp.next]] can not be null
  //       count++;
  //     }

  //     newNode.next = temp.next;
  //     temp.next = newNode;
  //     return true;
  //   }

  insertAt(
    index: number,
    data: T,
    place: "After" | "Before" = "Before"
  ): boolean | never {
    if (index < 0 || index > this.size) {
      throw new Error(
        `Index is out of bound! Please provide a valid index (0 - ${this.size})`
      );
    }

    if (index === 0 && place === "Before") {
      return this.insertAtFirst(data);
    }

    if (index === this.size) {
      return this.insertAtLast(data);
    }

    const newNode = this.createNode(data);

    let count = 0;
    let temp = this.head as OneWayNode<T>; // Here we know [[temp]] can not be null

    const condition =
      place === "Before" ? count !== index - 1 : count !== index;

    while (condition) {
      temp = temp.next as OneWayNode<T>; // Similarly, here also we know [[temp.next]] can not be null
      count++;
    }

    newNode.next = temp.next;
    temp.next = newNode;

    return true;
  }

  insertBefore(index: number, data: T): boolean | never {
    if (index < 0 || index >= this.size) {
      throw new Error(
        `Index is out of bound! Please provide a valid index (0 - ${
          this.size - 1
        })`
      );
    }

    return this.insertAt(index, data);
  }

  insertAfter(index: number, data: T): boolean | never {
    if (index < 0 || index >= this.size) {
      throw new Error(
        `Index is out of bound! Please provide a valid index (0 - ${
          this.size - 1
        })`
      );
    }

    return this.insertAt(index, data, "After");
  }
}

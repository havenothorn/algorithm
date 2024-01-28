// filter()를 Linked List에 적용하려면 어떻게 해야할까?
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    if (value !== undefined) {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head = null;
      this.tail = null;
    }
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  filter(callback) {
    let temp = this.head;
    let newList = new LinkedList();

    while (temp) {
      if (callback(temp.value)) {
        newList.push(temp.value);
      }
      temp = temp.next;
    }

    return newList;
  }
}

function test() {
  let myLinkedList = new LinkedList();
  myLinkedList.push(1);
  myLinkedList.push(2);
  myLinkedList.push(3);
  myLinkedList.push(4);

  console.log(myLinkedList.filter((value) => value % 2 === 0));
}

test();

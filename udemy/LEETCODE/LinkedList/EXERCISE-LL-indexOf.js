// int indexOf<ENTRY>(const ENTRY entry)를 정의하려면 어떻게 해야할까?
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
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

  indexOf(entry) {
    // 임시 변수 temp를 선언하고 head를 향하게 한다.
    let temp = this.head;
    // index 값으로 쓸 변수 선언해주기
    let index = 0;

    // 순회
    while (temp !== null) {
      if (temp.value === entry) {
        // temp의 value가 entry 값과 같게 된다면 해당하는 index 값을 반환한다.
        return index;
      }
      // temp의 value가 entry값과 같지 않다면 순회를 계속한다.
      temp = temp.next;
      // 순회하면서 index값을 더해준다.
      index++;
    }
    return -1;
  }
}

function test() {
  let myLinkedList = new LinkedList(1);
  myLinkedList.push(2);
  myLinkedList.push(3);
  myLinkedList.push(4);
  myLinkedList.push(5);
  myLinkedList.push(6);
  myLinkedList.push(7);
  myLinkedList.push(8);
  myLinkedList.push(9);
  myLinkedList.push(10);

  console.log(myLinkedList.indexOf(1));
}

test();

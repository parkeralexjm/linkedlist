/* eslint-disable no-console */
// eslint-disable-next-line import/extensions
import Node from "./Node.js"

const createNode = (value) => {
  const newNode = new Node(value)
  return newNode
}

export default class LinkedList {
  constructor(head = null) {
    this.head = head
  }

append(value) {
  const lastNode = this.tail();
  lastNode.next = createNode(value);
}

prepend(value) {
  const firstNode = createNode(value)
  firstNode.next = this.head
  this.head = firstNode
}

size() {
  let count = 0;
  let node = this.head
  while (node) {
    count += 1;
    node = node.next;
  }
  return count;
}

head() {
  return this.head
}

tail() {
  let lastNode = this.head;
  if (lastNode) {
    while (lastNode.next) {
      lastNode = lastNode.next
    }
  }
  return lastNode
}

at(index) {
  let count = 1;
  let node = this.head
  while (node) {
    if (index === count) {
      return node;
    } 
      count += 1;
      node = node.next    
  }
  return 'Node does not exist'
}

pop() {
  const length = this.size()
  this.at(length - 1).next = null;
}

contains(value) {
  let node = this.head;
  while (node) {
    if (node.value === value) {
      return true;
    }
    node = node.next;
  }
  return false;
}

find(value) {
  let count = 1;
  let node = this.head;
  while (node) {
    if (node.value === value){
      return count;
    }
  node = node.next;
  count += 1;
  }
  return 'Value not found';
}

toString() {
  let output = '';
  let node = this.head;
  while (node) {
    output += `( ${node.value} ) -> `
    node = node.next
  }
  output += `null`
  return output
}

}
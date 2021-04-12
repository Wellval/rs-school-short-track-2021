const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  get size() {
    return this.length.value;
  }

  enqueue(x) {
    const node = new ListNode();
    node.value = x;
    let curr;
    if (this.head === null) {
      this.head = node;
    } else {
      curr = this.head;

      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.length++;
  }

  dequeue() {
    const curr = this.head;
    this.head = curr.next;
    this.length--;
    return curr.value;
  }
}

module.exports = Queue;

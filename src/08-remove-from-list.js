/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function listFromArray(arr) {
  return arr.reverse().reduce((a, b) => {
    if (a) {
      const node = new ListNode(b);
      node.next = a;
      return node;
    }
    return new ListNode(b);
  }, null);
}

function makeArray(l, k, curr) {
  const nextCurr = [...curr];
  if (l) {
    if (l.value !== k) {
      nextCurr.push(l.value);
    }
    return makeArray(l.next, k, nextCurr);
  }
  return nextCurr;
}

function removeKFromList(l, k) {
  return listFromArray(makeArray(l, k, []));
}

module.exports = removeKFromList;

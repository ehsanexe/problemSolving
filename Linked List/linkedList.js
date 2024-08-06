class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function arrayToLinkedList(arr) {
  if (arr.length === 0) return null; // Return null if the array is empty

  // Create the head node of the linked list
  let head = new Node(arr[0]);
  let current = head;

  // Iterate through the array, creating nodes and linking them
  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }

  return head;
}

function printLinkedList(head) {
  let current = head;
  let output = "";
  while (current !== null) {
    output += current.val + " -> ";
    current = current.next;
  }
  console.log(output + "null");
}

module.exports = { arrayToLinkedList, printLinkedList };

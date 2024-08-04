/** Node: node for a singly linked list. */
class Node {
  constructor(val) {
    this.val = val; // Value of the node
    this.next = null; // Pointer to the next node in the list
  }
}

/** LinkedList: chained together nodes. */
class LinkedList {
  constructor(vals = []) {
    this.head = null; // Start of the list
    this.tail = null; // End of the list
    this.length = 0; // Number of nodes in the list

    // Initialize the list with the provided values
    for (let val of vals) this.push(val);
  }

  /** _get(idx): retrieve node at idx. */
  _get(idx) {
    let cur = this.head; // Start at the head of the list
    let count = 0; // Counter to keep track of the index

    // Traverse the list until the desired index is reached
    while (cur !== null && count != idx) {
      count += 1; // Move to the next node
      cur = cur.next;
    }

    return cur; // Return the node at the specified index
  }

  /** push(val): add new value to end of list. */
  push(val) {
    let newNode = new Node(val); // Create a new node with the given value

    if (!this.head) {
      // If the list is empty, set head and tail to the new node
      this.head = newNode;
      this.tail = this.head;
    } else {
      // Otherwise, append the new node to the end and update the tail
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1; // Increment the length of the list
  }

  /** unshift(val): add new value to start of list. */
  unshift(val) {
    let newNode = new Node(val); // Create a new node with the given value

    if (this.head === null) {
      // If the list is empty, set head and tail to the new node
      this.head = newNode;
    } else {
      // Otherwise, insert the new node at the start and update the head
      newNode.next = this.head;
      this.head = newNode;
    }

    // If the list was previously empty, update the tail to the new head
    if (this.length === 0) this.tail = this.head;

    this.length += 1; // Increment the length of the list
  }

  /** pop(): return & remove last item. */
  pop() {
    return this.removeAt(this.length - 1); // Remove and return the last item
  }

  /** shift(): return & remove first item. */
  shift() {
    return this.removeAt(0); // Remove and return the first item
  }

  /** getAt(idx): get val at idx. */
  getAt(idx) {
    if (idx >= this.length || idx < 0) {
      // Check for invalid index
      throw new Error("Invalid index.");
    }

    return this._get(idx).val; // Retrieve and return the value at the specified index
  }

  /** setAt(idx, val): set val at idx to val */
  setAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      // Check for invalid index
      throw new Error("Invalid index.");
    }

    let cur = this._get(idx); // Get the node at the specified index
    cur.val = val; // Update the node's value
  }

  /** insertAt(idx, val): add node w/val before idx. */
  insertAt(idx, val) {
    if (idx > this.length || idx < 0) {
      // Check for invalid index
      throw new Error("Invalid index.");
    }

    if (idx === 0) return this.unshift(val); // Insert at the start if index is 0
    if (idx === this.length) return this.push(val); // Insert at the end if index is equal to the length

    // Get the node before the insertion point
    let prev = this._get(idx - 1);

    let newNode = new Node(val); // Create a new node with the given value
    newNode.next = prev.next; // Set the new node's next pointer to the current next node
    prev.next = newNode; // Link the previous node to the new node

    this.length += 1; // Increment the length of the list
  }

  /** removeAt(idx): return & remove item at idx. */
  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      // Check for invalid index
      throw new Error("Invalid index.");
    }

    if (idx === 0) {
      // Special case: remove the first item
      let val = this.head.val; // Store the value of the head node
      this.head = this.head.next; // Move the head to the next node
      this.length -= 1; // Decrement the length

      // If the list has fewer than 2 nodes, update the tail
      if (this.length < 2) this.tail = this.head;
      return val; // Return the removed value
    }

    // Get the node before the one to be removed
    let prev = this._get(idx - 1);

    if (idx === this.length - 1) {
      // Special case: remove the tail node
      let val = prev.next.val; // Store the value of the tail node
      prev.next = null; // Set the previous node's next to null
      this.tail = prev; // Update the tail to the previous node
      this.length -= 1; // Decrement the length
      return val; // Return the removed value
    }

    // Normal case: remove a node from the middle
    let val = prev.next.val; // Store the value of the node to be removed
    prev.next = prev.next.next; // Skip over the node to be removed
    this.length -= 1; // Decrement the length
    return val; // Return the removed value
  }

  /** average(): calculate the average of all node values. */
  average() {
    if (this.length === 0) return 0; // Return 0 if the list is empty

    let total = 0; // Variable to store the sum of values
    let current = this.head; // Start at the head of the list

    // Traverse the list and sum the values
    while (current) {
      total += current.val; // Add the node's value to the total
      current = current.next; // Move to the next node
    }

    return total / this.length; // Return the average value
  }
}

module.exports = LinkedList; // Export the LinkedList class for use in other modules

const LinkedList = require("./linked-list");

// Tests for the 'push' method
describe("push", function() {
  it("appends node and increments length", function() {
    let lst = new LinkedList(); // Create a new LinkedList instance

    lst.push(5); // Add a node with value 5
    expect(lst.length).toBe(1); // Verify the length is 1
    expect(lst.head.val).toBe(5); // Verify the head node's value is 5
    expect(lst.tail.val).toBe(5); // Verify the tail node's value is 5

    lst.push(10); // Add a node with value 10
    expect(lst.length).toBe(2); // Verify the length is 2
    expect(lst.head.val).toBe(5); // Verify the head node's value is still 5
    expect(lst.head.next.val).toBe(10); // Verify the second node's value is 10
    expect(lst.tail.val).toBe(10); // Verify the tail node's value is 10

    lst.push(15); // Add a node with value 15
    expect(lst.length).toBe(3); // Verify the length is 3
    expect(lst.head.val).toBe(5); // Verify the head node's value is still 5
    expect(lst.head.next.next.val).toBe(15); // Verify the third node's value is 15
    expect(lst.tail.val).toBe(15); // Verify the tail node's value is 15
  });
});

// Tests for the 'unshift' method
describe("unshift", function() {
  it("adds node at start and increments length", function() {
    let lst = new LinkedList(); // Create a new LinkedList instance

    lst.unshift(5); // Add a node with value 5 at the start
    expect(lst.length).toBe(1); // Verify the length is 1
    expect(lst.head.val).toBe(5); // Verify the head node's value is 5
    expect(lst.tail.val).toBe(5); // Verify the tail node's value is 5

    lst.unshift(10); // Add a node with value 10 at the start
    expect(lst.length).toBe(2); // Verify the length is 2
    expect(lst.head.val).toBe(10); // Verify the new head node's value is 10
    expect(lst.head.next.val).toBe(5); // Verify the second node's value is 5
    expect(lst.tail.val).toBe(5); // Verify the tail node's value is still 5

    lst.unshift(15); // Add a node with value 15 at the start
    expect(lst.length).toBe(3); // Verify the length is 3
    expect(lst.head.val).toBe(15); // Verify the new head node's value is 15
    expect(lst.head.next.next.val).toBe(5); // Verify the third node's value is 5
    expect(lst.tail.val).toBe(5); // Verify the tail node's value is still 5
  });
});

// Tests for the 'pop' method
describe("pop", function() {
  it("removes node at end and decrements length", function() {
    let lst = new LinkedList([5, 10]); // Create a LinkedList with initial values 5 and 10

    expect(lst.pop()).toBe(10); // Remove the last node (10) and verify its value
    expect(lst.head.val).toBe(5); // Verify the head node's value is 5
    expect(lst.tail.val).toBe(5); // Verify the tail node's value is 5
    expect(lst.length).toBe(1); // Verify the length is 1

    expect(lst.pop()).toBe(5); // Remove the last node (5) and verify its value
    expect(lst.tail).toBe(null); // Verify the tail is now null
    expect(lst.head).toBe(null); // Verify the head is now null
    expect(lst.length).toBe(0); // Verify the length is 0
  });
});

// Tests for the 'shift' method
describe("shift", function() {
  it("removes node at start and decrements length", function() {
    let lst = new LinkedList([5, 10]); // Create a LinkedList with initial values 5 and 10

    expect(lst.shift()).toBe(5); // Remove the first node (5) and verify its value
    expect(lst.tail.val).toBe(10); // Verify the remaining node (10) is now the tail
    expect(lst.length).toBe(1); // Verify the length is 1

    expect(lst.shift()).toBe(10); // Remove the remaining node (10) and verify its value
    expect(lst.tail).toBe(null); // Verify the tail is now null
    expect(lst.head).toBe(null); // Verify the head is now null
    expect(lst.length).toBe(0); // Verify the length is 0
  });
});

// Tests for the 'getAt' method
describe("getAt", function() {
  it("gets val at index", function() {
    let lst = new LinkedList([5, 10]); // Create a LinkedList with initial values 5 and 10

    expect(lst.getAt(0)).toBe(5); // Verify the value at index 0 is 5
    expect(lst.getAt(1)).toBe(10); // Verify the value at index 1 is 10
  });
});

// Tests for the 'setAt' method
describe("setAt", function() {
  it("sets val at index", function() {
    let lst = new LinkedList([5, 10]); // Create a LinkedList with initial values 5 and 10

    expect(lst.setAt(0, 1)); // Set the value at index 0 to 1 and verify the operation
    expect(lst.setAt(1, 2)); // Set the value at index 1 to 2 and verify the operation
    expect(lst.head.val).toBe(1); // Verify the head node's value is 1
    expect(lst.head.next.val).toBe(2); // Verify the second node's value is 2
  });
});

// Tests for the 'insertAt' method
describe("insertAt", function() {
  it("inserts node and adjusts nearby nodes", function() {
    let lst = new LinkedList([5, 10, 15, 20]); // Create a LinkedList with initial values 5, 10, 15, 20

    lst.insertAt(2, 12); // Insert a node with value 12 at index 2
    expect(lst.length).toBe(5); // Verify the length is 5
    expect(lst.head.val).toBe(5); // Verify the head node's value is 5
    expect(lst.head.next.val).toBe(10); // Verify the second node's value is 10
    expect(lst.head.next.next.val).toBe(12); // Verify the newly inserted node's value is 12
    expect(lst.head.next.next.next.val).toBe(15); // Verify the node after the inserted node's value is 15
    expect(lst.head.next.next.next.next.val).toBe(20); // Verify the tail node's value is 20

    lst.insertAt(5, 25); // Insert a node with value 25 at the end
    expect(lst.head.next.next.next.next.next.val).toBe(25); // Verify the newly inserted node's value is 25
    expect(lst.tail.val).toBe(25); // Verify the tail node's value is 25
  });

  it("inserts into empty list", function() {
    let lst = new LinkedList(); // Create an empty LinkedList

    lst.insertAt(0, 5); // Insert a node with value 5 at index 0
    expect(lst.length).toBe(1); // Verify the length is 1
    expect(lst.head.val).toBe(5); // Verify the head node's value is 5
    expect(lst.tail.val).toBe(5); // Verify the tail node's value is 5
  });
});

// Tests for the 'removeAt' method
describe("removeAt", function() {
  it("removes from 1-item list", function() {
    let lst = new LinkedList(["a"]); // Create a LinkedList with a single value "a"

    lst.removeAt(0); // Remove the node at index 0
    expect(lst.length).toBe(0); // Verify the length is 0
    expect(lst.head).toBe(null); // Verify the head is now null
    expect(lst.tail).toBe(null); // Verify the tail is now null
  });
});

// Tests for the 'average' method
describe("average", function() {
  it("calculates the average of items in a list", function() {
    let lst = new LinkedList([2, 3, 1, 1, 7, 6, 9]); // Create a LinkedList with values 2, 3, 1, 1, 7, 6, 9
    expect(lst.average()).toBeCloseTo(4.1429, 4); // Verify the average is approximately 4.1429
  });

  it("returns 0 for empty lists", function() {
    let lst = new LinkedList(); // Create an empty LinkedList
    expect(lst.average()).toBe(0); // Verify that the average is 0 for an empty list
  });
});

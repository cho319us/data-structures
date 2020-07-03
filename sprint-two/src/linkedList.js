var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // create a new instance of the node
    var newNode = Node(value);
    // if node does not exist
    if (!list.head) {
      // assign the node to head
      list.head = newNode;
    } else {
      // add new node to end of the tail
      list.tail.next = newNode;
    }
    // assign the node to tail
    list.tail = newNode;
  };

  list.removeHead = function() {
    // if head does not exist
    if (!list.head) {
      return null;
    } else {
      // save the old head value
      var oldHead = list.head;
      // assign head.next to head
      list.head = list.head.next;
      // return old head val
      return oldHead.value;
    }
  };

  list.contains = function(target) {
    // assign head node to a variable currentNode
    var currentNode = list.head;
    // while currentNode exist
    while (currentNode) {
      // check if currentNode's value is equal the target
      if (currentNode.value === target) {
        return true;
      } else {
        // assign head.next to currentNode
        currentNode = currentNode.next;
      }
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail - O(1)
 * removeHead - O(1)
 * contains - O(n)
 */

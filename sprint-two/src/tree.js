var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newNode = Tree(value);
  this.children.push(newNode);
};

treeMethods.contains = function(target) {
  // if the value of current node match the target
  if (this.value === target) {
    return true;
  }
  // check if the children of the current node exist
  if (this.children) {
    // iterate over the children nodes
    for (var i = 0; i < this.children.length; i++) {
      /*
      note: (wrong implementation. Ends loop too soon and return false if target value is not found in only one side of the tree before even having chance to check the other side)
      * return this.children[i].contains(target)
      */
      // if calling child.contains(target) is true
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild - O(1)
 * contains - O(n)
 */

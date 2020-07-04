var BinarySearchTree = function(value) {
  // root value
  this.value = value;
  this.left = null;
  this.right = null;

};

/*
{
  value: 10,
  left: {
    value: 2,
    left: { value: 0, left: null, right: null },
    right: { value: 8, left: null, right: null }
  },
  right: {
    value: 20,
    left: { value: 13, left: null, right: null },
    right: null
  }
}
*/

BinarySearchTree.prototype.insert = function(node) {
  // if node is smaller than root
  if (node < this.value) {
    // if left of root exist
    if (this.left) {
      // call insert function with left of root
      this.left.insert(node);
    } else {
      // insert node at left of root
      this.left = new BinarySearchTree(node);
    }
  // else if node is larger than root
  } else if (node > this.value) {
    // if right of root exist
    if (this.right) {
      // call insert function with right of root
      this.right.insert(node);
    } else {
      // insert node at right of root
      this.right = new BinarySearchTree(node);
    }
  }
}

BinarySearchTree.prototype.contains = function(value) {
  // if value is equal to value of root
  if (value === this.value) {
    return true;
  // else if value is smaller than value of root
  } else if (value < this.value) {
    // if left of root exist
    if (this.left) {
      // call contains fn on current left of root
      return this.left.contains(value);
    } else {
      return false;
    }
  // else if value is larger than value of root
  } else if (value > this.value) {
    // if right of root exist
    if (this.right) {
      // call contains fn on current right of root
      return this.right.contains(value);
    } else {
      return false;
    }
  }
}

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  // call callback on the root
  callback(this.value);
  // if left of root exist
  if (this.left) {
    // then call depthFirstLog on left of root
    this.left.depthFirstLog(callback);
  }
  // if right of root exist
  if (this.right) {
    // then call depthFirstLog on right of root
    this.right.depthFirstLog(callback);
  }
}
/*
 * Complexity: What is the time complexity of the above functions?
 * insert - O(log n)
 * contains - O(log n)
 * depthFirstLog - O(n)
 */

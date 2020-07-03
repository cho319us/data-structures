// Instantiate a new graph
var Graph = function() {
  this.adjacencyList = {};
};

// adjacencyList : {
//   1: [2,3],
//   2: []
// }

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // if input node does not exist
  if (!this.adjacencyList[node]) {
    // add node as property to adjacencyList
    this.adjacencyList[node] = [];
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // if input node exist, return true else false
  return this.adjacencyList[node] ? true : false
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // if input node does exist
  if (this.adjacencyList[node]) {
    // delete input node
    delete this.adjacencyList[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // if both fromNode and toNode exist
  if (this.adjacencyList[fromNode] && this.adjacencyList[toNode]) {
    // if toNode is inside array of fromNode && fromNode is inside array of toNode
    if (this.adjacencyList[fromNode].includes(toNode) && this.adjacencyList[toNode].includes(fromNode)) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // if both fromNode and toNode exist
  if (this.adjacencyList[fromNode] && this.adjacencyList[toNode]){
    // push toNode into fromNode
    this.adjacencyList[fromNode].push(toNode);
    // push fromNode into toNode
    this.adjacencyList[toNode].push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // if both fromNode and toNode exist
  if (this.adjacencyList[fromNode]
    && this.adjacencyList[toNode]
    && this.hasEdge(fromNode, toNode)) {
    // check index of toNode inside fromNode array
    var idx1 = this.adjacencyList[fromNode].indexOf(toNode);
    // delete toNode from fromNode array
    this.adjacencyList[fromNode].splice(idx1, 1);
    // check index of fromNode inside toNode array
    var idx2 = this.adjacencyList[toNode].indexOf(fromNode);
    // delete fromNode from toNode array
    this.adjacencyList[toNode].splice(idx2, 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var nodeKeys = Object.keys(this.adjacencyList);
  // iterate over property key of adjacencyList
  for(var i = 0; i < nodeKeys.length; i++) {
    // call cb function with that key
    cb(Number(nodeKeys[i]));
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode - O(1)
 * contains - O(1)
 * removeNode - O(1)
 * hasEdge - O(n)
 * addEdge - O(1)
 * removeEdge - O(n)
 * forEachNode - O(n)
 */



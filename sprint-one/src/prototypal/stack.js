var Stack = function() {
  var someInstance = Object.create(stackMethods);

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  // declare a index variable
  someInstance.length = 0;

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  // add a property to storage
  this.storage[this.length] = value;
  // add one to length
  this.length++;
  // return the length of storage
  return this.length;
};

stackMethods.pop = function() {
  // if length is larger than 0
  if (this.length > 0) {
    // then length subtract one
    this.length--;
    // backup the value that gonna to delete
    var backup = this.storage[this.length];
    // delete the last added property from storage
    delete this.storage[this.length];
    // return the deleted value
    return backup;
  }
};

stackMethods.size = function() {
  // return the length of storage
  return this.length;
};


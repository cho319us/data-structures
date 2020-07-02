var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // declare a index variable
  var length = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    // add a property to storage
    storage[length] = value;
    // add one to length
    length++;
    // return the length of storage
    return length;
  };

  someInstance.pop = function() {
    // if length is larger than 0
    if (length > 0) {
      // then length subtract one
      length--;
      // backup the value that gonna to delete
      var backup = storage[length];
      // delete the last added property from storage
      delete storage[length];
      // return the deleted value
      return backup;
    }
  };

  someInstance.size = function() {
    // return the length of storage
    return length;
  };

  return someInstance;
};

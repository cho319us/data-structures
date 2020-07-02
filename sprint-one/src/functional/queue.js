var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // declare a index variable
  var length = 0;

  // Implement the methods below
  someInstance.enqueue = function(value) {
    // add a property to storage
    storage[length] = value;
    // add one to length
    length++;
    // return the length of storage
    return length;
  };

  someInstance.dequeue = function() {
    // if length is larger than 0
    if (length > 0) {
      // then length subtract one
      length--;
      // backup the value that gonna to delete
      var backup = storage[0];
      // delete the first added property from storage
      delete storage[0];

      // for each property, move one key forward
      /* For example, storage: { '0': 4, '1': 9, '2': 12 }
       * after delete -> storage: { '1': 9, '2': 12 }
       * move one key forward -> storage: { 0: 9, '1': 12 } */
      for (var i = 0; i < length; i++) {
        storage[i] = storage[i + 1];
      }

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

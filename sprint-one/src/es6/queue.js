class Queue {
  constructor() {
    // Use an object with numeric keys to store values
    this.storage = {};
    // declare a index variable
    this.length = 0;
  }

  enqueue(value) {
    // add a property to storage
    this.storage[this.length] = value;
    // add one to length
    this.length++;
    // return the length of storage
    return this.length;
  }

  dequeue() {
    // if length is larger than 0
    if (this.length > 0) {
      // then length subtract one
      this.length--;
      // backup the value that gonna to delete
      var backup = this.storage[0];
      // delete the first added property from storage
      delete this.storage[0];

      // for each property, move one key forward
      /* For example, storage: { '0': 4, '1': 9, '2': 12 }
        * after delete -> storage: { '1': 9, '2': 12 }
        * move one key forward -> storage: { 0: 9, '1': 12 } */
      for (var i = 0; i < this.length; i++) {
        this.storage[i] = this.storage[i + 1];
      }

      // return the deleted value
      return backup;
    }
  }

  size() {
    // return the length of storage
    return this.length;
  }
}


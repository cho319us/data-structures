var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // declare count variable to store number of tuples
  this._count = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // declare bucket
  var bucket = this._storage.get(index);
  // check if no bucket exist
  if (!bucket) {
    // create an empty bucket
    bucket = [];
    // add the bucket at the index
    this._storage.set(index, bucket);
  }
  // declare a boolean
  var found = false;
  // iterate over the bucket
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    // if tuple has the same key as input key
    if (tuple[0] === k) {
      // set found to true
      found = true;
      // update the value of the key to input value in the tuple
      tuple[1] = v;
      break;
    }
  }
  // if there are no tuple with the same key found in the bucket
  if (!found) {
    // then we add a new tuple with input key and value
    bucket.push([k, v]);
    // increment count by one
    this._count++;
    // if count is greater than 75% of storage array
    if (this._count > (this._limit * 0.75)) {
      // double the storage size by calling resize function
      this.resize(this._limit * 2);
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // declare bucket
  var bucket = this._storage.get(index);
  // if bucket does not exist
  if (!bucket) {
    return undefined;
  }
  // iterate over bucket
  for (var i = 0; i < bucket.length; i++) {
    // declare tuple
    var tuple = bucket[i];
    // if tuple has the same key as input key
    if (tuple[0] === k) {
      // return the value of current tuple
      return tuple[1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // delcare a bucket
  var bucket = this._storage.get(index);
  // if bucket does not exist
  if (!bucket) {
    return undefined;
  }
  // iterate over the bucket
  for (var i = 0; i < bucket.length; i++) {
    // declare a tuple
    var tuple = bucket[i];
    // if the tuple has the same key as input key
    if (tuple[0] === k) {
      // then delete the current tuple
      bucket = bucket.splice(i, 1);
      // count decrease by one
      this._count--;
      // if count is less than 25% of storage array
      if (this._count < (this._limit * 0.25)) {
        // halve the storage size by calling resize function
        this.resize(this._limit / 2);
      }
    }
  }
  return undefined;
};

HashTable.prototype.resize = function(newLimit) {
  // create a variable to store old storage
  var oldStorage = this._storage;
  // update old limit to new limit
  this._limit = newLimit;
  // update old storage to new storage
  this._storage = LimitedArray(this._limit);
  // reset count back to 0
  this._count = 0;
  // iterate over the old storage
  oldStorage.each(function(currentBucket) {
    // if no bucket found in the current index of storage array, return
    if (!currentBucket) {
      return;
    }
    // iterate over the bucket
    for (var i = 0; i < currentBucket.length; i++) {
      // declare the current tuple
      var currentTuple = currentBucket[i];
      // re-insert the tuple to new array by calling insert function
      this.insert(currentTuple[0], currentTuple[1]);
    }
  }.bind(this));
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert - O(n) worst case
 * retrieve - O(n) worst case
 * remove - O(n) worst case
 * resize - O(n^2)
 */


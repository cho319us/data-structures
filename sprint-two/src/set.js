var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};
/*
set = {
  _storage: { Susan Sarandon : 'Susan Sarandon' }
}
*/
var setPrototype = {};

setPrototype.add = function(item) {
  // if item doesn't exist in storage
  if (!this._storage[item]) {
    // add item property to storage
    this._storage[item] = item;
  }
};

// return boolean
setPrototype.contains = function(item) {
  // if the storage has item property, then return true else return false
  return this._storage.hasOwnProperty(item);
};

setPrototype.remove = function(item) {
  // if item exist in storage, then delete item
  if (this._storage[item]) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add - O(1)
 * contains - O(1)
 * remove - O(1)
 */

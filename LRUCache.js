var ListNode = function (key, value) {
  this.key = key;
  this.value = value;
  this.prev = null;
  this.next = null;
};
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cache_capacity = capacity;
  this.cache_hashMap = {}; // key and node object
  //dummy nodes with no values or keys and not added to hashmap
  this.head = new ListNode();
  this.tail = new ListNode();
  //connect head or tail
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let result = -1;
  if (this.cache_hashMap[key] !== undefined) {
    //when ever i get a key successfully, remove from the DLL and add at start
    result = this.cache_hashMap[key].value;
    this.remove(this.cache_hashMap[key]);
    this.add(this.cache_hashMap[key]);
  }
  return result;
};
//methods for adding to front of the DLL, and removing it from the existing position
LRUCache.prototype.add = function (node) {
  //add to front
  const head_next = this.head.next;
  this.head.next = node;
  node.prev = this.head;
  node.next = head_next;
  head_next.prev = node;
};

//remove item from DLL in which ever position it is right now
LRUCache.prototype.remove = function (node) {
  //only logic removal of a node from the pointer list of DLL, not cleaning memory
  const next_node = node.next;
  const prev_node = node.prev;

  prev_node.next = next_node;
  next_node.prev = prev_node;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const currentNode = this.cache_hashMap[key];
  if (currentNode !== undefined) {
    //updating a value should move the item to the front of DLL
    currentNode.value = value;
    this.remove(currentNode);
    this.add(currentNode);
  } else {
    //its a new node, and hence we have to check the capacity
    if (this.cache_capacity <= Object.keys(this.cache_hashMap).length) {
      //already reached capacity remove
      delete this.cache_hashMap[this.tail.prev.key];
      this.remove(this.tail.prev);
    }
    const newNode = new ListNode(key, value);
    this.cache_hashMap[key] = newNode;
    this.add(newNode);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

var cache = new LRUCache(2);
cache.put(1, 0);
cache.put(2, 2);
cache.get(1);
cache.put(3, 3);

console.log(cache.get(1));

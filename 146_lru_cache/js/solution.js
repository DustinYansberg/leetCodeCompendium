// https://leetcode.com/problems/lru-cache/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * 146. LRU Cache
*! Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
*! 
*! Implement the LRUCache class:
*! 
*! LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
*! int get(int key) Return the value of the key if the key exists, otherwise return -1.
*! void put(int key, int value) Update the value of the key if the key exists. Otherwise, add 
*! the key-value pair to the cache. If the number of keys exceeds the capacity from this 
*! operation, evict the least recently used key.
*! 
*! The functions get and put must each run in O(1) average time complexity.

 

** Example 1:
** 
** Input
** ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
** [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
** Output
** [null, null, null, 1, null, -1, null, -1, 3, 4]
** 
** Explanation
** LRUCache lRUCache = new LRUCache(2);
** lRUCache.put(1, 1); // cache is {1=1}
** lRUCache.put(2, 2); // cache is {1=1, 2=2}
** lRUCache.get(1);    // return 1
** lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
** lRUCache.get(2);    // returns -1 (not found)
** lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
** lRUCache.get(1);    // return -1 (not found)
** lRUCache.get(3);    // return 3
** lRUCache.get(4);    // return 4
 

*? Constraints:
*? 
*? 1 <= capacity <= 3000
*? 0 <= key <= 10^4
*? 0 <= value <= 10^5
*? At most 2 * 10^5 calls will be made to get and put.
 */

class DLLNode {
  constructor(key, val, next, pred) {
    this.val = val;
    this.pred = pred;
    this.next = next;
    this.key = key;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  // keep track of count
  //
  this.map = new Map();
  this.capacity = capacity;
  this.head = null;
  this.tail = null;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) return -1;

  const node = this.map.get(key);

  if (node.key === this.head.key) {
    return this.head.val;
  }

  let pred = node.pred;
  let next = node.next;
  pred.next = next;

  if (!next) {
    this.tail = pred;
  } else {
    next.pred = pred;
  }

  node.pred = null;
  this.head.pred = node;
  node.next = this.head;
  this.head = node;

  return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const node = DLLNode(key, value, null, null);
  if (!this.map.has(key)) {
    if (this.map.size === 0) {
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.pred = node;
    }
    this.head = node;
  } else {
    // move kvp to head
    const curr = this.map.get(key);
    const pred = curr.pred;
    const next = curr.next;
    if (pred) {
      pred.next = next;
      next.pred = pred;
      curr.pred = null;
      this.head.pred = curr;
      curr.next = this.head;
      this.head = curr;
    }
  }

  this.map.set(key, node);

  if (this.map.size > this.capacity) {
    this.map.delete(this.tail.key);
    this.tail = this.tail.pred;
    this.tail.next = null;
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

'use strict';

var _use = require('../struct/stack/use.js');

var _queue = require('../struct/queue');

var _linked_list = require('../struct/linked_list');

var _linked_list2 = _interopRequireDefault(_linked_list);

var _extend = require('../struct/set/extend');

var _extend2 = _interopRequireDefault(_extend);

var _hash_table = require('../struct/hash_table');

var _hash_table2 = _interopRequireDefault(_hash_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log((0, _use.baseConverter)(100, 2));

// 优先队列
// let priorityQueue = new PriorityQueue();
// priorityQueue.enqueue('wen', 2);
// priorityQueue.enqueue('li', 1);
// priorityQueue.enqueue('hui', 3);
// priorityQueue.print()

// 单向链表
/** 
let linkedList = new LinkedList();
linkedList.append('liwenhui1');
linkedList.append('liwenhui2');
linkedList.append('liwenhui3');
linkedList.print();
const index2 = linkedList.indexOf('liwenhui2');
console.log('查找1', index2);
const delete2 = linkedList.remove('liwenhui2');
console.log('删除1',delete2);
console.log(linkedList.length);
linkedList.print();

linkedList.insert(1, 'insert2');
console.log('插入1');
linkedList.print();
console.log(linkedList.length);
**/

// 集合测试
var setA = new _extend2.default([1, 2, 3, 4, 5]);
var setB = new _extend2.default();
setB.add(2);
setB.add(3);
setB.add(4);
setB.add(2);

// 并集
var unionAB = setA.union(setB);
// 交集
var intersectionAB = setA.intersection(setB);
// 差集
var differenceAB = setA.difference(setB);
// 子集
var isSubsetA = setB.subset(setA);
console.log("setA:", setA, "setB:", setB);
console.log(" unionAB:", unionAB, "intersectionAB:", intersectionAB);
console.log(" differenceAB:", differenceAB, "isSubsetA:", isSubsetA);

// hash
var hash = new _hash_table2.default();
hash.put('Mindy', 'liwenhui@qq.com');
hash.put('Paul', '1234233324@qq.com');
console.log(hash.get('Mindy'));
console.log(hash);
var hash1 = new _hash_table.LinkedHashTable();
hash1.put('Mindy', 'liwenhui@qq.com');
hash1.put('Paul', '1234233324@qq.com');
console.log(hash1.get('Mindy'));
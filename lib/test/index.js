'use strict';

var _use = require('../struct/stack/use.js');

var _queue = require('../struct/queue');

var _linked_list = require('../struct/linked_list');

var _linked_list2 = _interopRequireDefault(_linked_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log((0, _use.baseConverter)(100, 2));

// 优先队列
// let priorityQueue = new PriorityQueue();
// priorityQueue.enqueue('wen', 2);
// priorityQueue.enqueue('li', 1);
// priorityQueue.enqueue('hui', 3);
// priorityQueue.print()

// 单向链表
var linkedList = new _linked_list2.default();
linkedList.append('liwenhui1');
linkedList.append('liwenhui2');
linkedList.append('liwenhui3');
linkedList.print();
var index2 = linkedList.indexOf('liwenhui2');
console.log('查找1', index2);
var delete2 = linkedList.remove('liwenhui2');
console.log('删除1', delete2);
console.log(linkedList.length);
linkedList.print();

linkedList.insert(1, 'insert2');
console.log('插入1');
linkedList.print();
console.log(linkedList.length);
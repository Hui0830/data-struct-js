import { baseConverter } from '../struct/stack/use.js';
import { PriorityQueue } from '../struct/queue';
import LinkedList from '../struct/linked_list';

console.log(baseConverter(100, 2));

// 优先队列
// let priorityQueue = new PriorityQueue();
// priorityQueue.enqueue('wen', 2);
// priorityQueue.enqueue('li', 1);
// priorityQueue.enqueue('hui', 3);
// priorityQueue.print()

// 单向链表
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



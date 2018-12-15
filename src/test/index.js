import { baseConverter } from '../struct/stack/use.js';
import { PriorityQueue } from '../struct/queue';
import LinkedList from '../struct/linked_list';
import Set from '../struct/set/extend';
import HashTable,{LinkedHashTable} from '../struct/hash_table';

console.log(baseConverter(100, 2));

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
let setA = new Set([1,2,3,4,5]);
let setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);
setB.add(2);

// 并集
let unionAB = setA.union(setB);
// 交集
let intersectionAB = setA.intersection(setB);
// 差集
let differenceAB = setA.difference(setB);
// 子集
let isSubsetA = setB.subset(setA);
console.log("setA:",setA,"setB:",setB);
console.log(" unionAB:",unionAB,"intersectionAB:",intersectionAB);
console.log(" differenceAB:",differenceAB,"isSubsetA:",isSubsetA);

// hash
const hash = new HashTable();
hash.put('Mindy', 'liwenhui@qq.com');
hash.put('Paul', '1234233324@qq.com');
console.log(hash.get('Mindy'));
console.log(hash);
const hash1 = new LinkedHashTable();
hash1.put('Mindy', 'liwenhui@qq.com');
hash1.put('Paul', '1234233324@qq.com');
console.log(hash1.get('Mindy'));


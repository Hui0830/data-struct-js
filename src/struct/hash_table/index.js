import LinkedList from "../linked_list";

// 散列函数
const loseHashCode = (key) => {
    let hash = 0;
    for(let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
    }
    return hash % 37;
}
// 更好的散列函数
const djb2HashCode = (key) => {
    let hash = 5381;
    for(let i = 0; i < key.length; i++) {
        hash = hash * 33 + key.charCodeAt(i);
    }
    return hash % 1013;
}
// 普通散列表（未处理冲突）
export default class HashTable {
    constructor() {
        this.table = []
    }

    put(key, value) {
        var position = loseHashCode(key);
        console.log(position);
        this.table[position] = value;
    }

    get(key) {
        return this.table[loseHashCode(key)];
    }

    remove(key) {
        this.table[loseHashCode(key)] = undefined;
    }
}
// 经冲突处理（分离链接）
export class LinkedHashTable {
    constructor() {
        this.table = [];
    }

    // 定义辅助类形成key-value形式以存储入链表
    ValuePair(key, value) {
        this.key = key;
        this.value = value;

        this.toString = () => {
            return `[${this.key}-${this.value}]`;
        }
    }

    // 在每个散列位置以链表形式存储
    put(key, value) {
        const position = loseHashCode(key);
        if(this.table[position] === undefined){
            this.table[position] = new LinkedList();
        }
        this.table[position].append(new this.ValuePair(key, value));
    }

    get(key) {
        const position = loseHashCode(key);
        // 存在遍历链表来寻找键/值
        if(this.table[position] !== undefined) {
            let current = this.table[position].getHead();
            while(current.next) {
                if(current.element.key ==key) {
                    return current.element.value;
                }
                current = current.next;
            }
            // 检查元素在链表第一个或最后一个节点的情况
            if(current.element.key ==key) {
                return current.element.value;
            }
        }
        return undefined;
    }

    remove(key) {
        const position = loseHashCode(key);
        if(this.table[position] !== undefined) {
            let current = this.table[position].getHead();
            while(current.next) {
                if(current.element.key === key){
                    this.table[position].remove(current.element);
                    if(this.table[position].isEmpty()){
                        this.table[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }
            // 检查头尾节点
            if(current.element.key === key){
                this.table[position].remove(current.element);
                if(this.table[position].isEmpty()){
                    this.table[position] = undefined;
                }
                return true;
            }
        }
        return false
    }
}


// 线性探查：当想向表中某个位置加入一个元素时，如果索引为index的位置已经被占据了，就尝试index+1,还被占了就index+2以此类推。

export class LineHashTable {
    constructor() {
        this.table = []
    }
    // 定义辅助类形成key-value形式以存储入链表
    ValuePair(key, value) {
        this.key = key;
        this.value = value;

        this.toString = () => {
            return `[${this.key}-${this.value}]`;
        }
    }

    put(key, value) {
        const position = loseHashCode(key);
        if(this.table[position] === undefined) {
            this.table[position] = new this.ValuePair(key, value);
        } else {
            let index = ++position;
            while(this.table[position] !== undefined) {
                index++;
            }
            this.table[index] = new this.ValuePair(key, value);
        }
    }

    get(key) {
        const position = loseHashCode(key);
        if(this.table[position] !== undefined) {
            if(this.table[position].key === key) {
                return this.table[position].value;
            } else {
                let index = ++position;
                while(this.table[index] === undefined || this.table[index].key !== key) {
                    index++;
                }
                if(this.table[index].key === key) {
                    return this.table[index].value;
                }
            }
        }
        return undefined;
    }

    remove(key) {
        const position = loseHashCode(key);
        if(this.table[position] !== undefined) {
            if(this.table[position].key === key) {
                this.table[position] = undefined;
            } else {
                let index = ++position;
                while(this.table[index] === undefined || this.table[index].key !== key) {
                    index++;
                }
                if(this.table[index].key === key) {
                    this.table[index] = undefined;
                }
            }
        }
        return undefined;
    }
}
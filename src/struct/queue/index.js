export default class Queue {
    constructor() {
        this.items = [];
    }

    // 添加
    enqueue(element) {
        this.items.push(element)
    }
    // 移除
    dequeue() {
        return this.items.shift();
    }
    // 查看
    front() {
        return this.items[0];
    }
    // 检查为空
    isEmpty() {
        return this.items.length === 0;
    }
    // 大小
    size() {
        return this.items.length
    }
    // 清空
    clear() {
        this.items = [];
    }
    // 打印
    print() {
        return this.items.toString();
    }
}

// 优先队列
export class PriorityQueue {
    constructor() {
        this.items = []
    }

    enqueue(element, priority) {
        let queueElement = {
            element,
            priority
        }
        let added = false;
        this.items.forEach((item, i) => {
            if(queueElement.priority < item.priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                return
            }
        })
        added || this.items.push(queueElement);
    }
    // 移除
    dequeue() {
        return this.items.shift();
    }
    // 查看
    front() {
        return this.items[0];
    }
    // 检查为空
    isEmpty() {
        return this.items.length === 0;
    }
    // 大小
    size() {
        return this.items.length
    }
    // 清空
    clear() {
        this.items = [];
    }
    print() {
        this.items.forEach(item => {
            console.log(`${item.element} - ${item.priority}`)
        })
    }
}
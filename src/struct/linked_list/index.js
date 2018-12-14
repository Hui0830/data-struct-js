export default  class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    Node(element) {
        this.element = element;
        this.next = null;
    }
    // 添加
    append(element) {
        let node = new this.Node(element), current;
        if(this.head === null){
            this.head = node;
        } else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }
            // 找到最后一项添加
            current.next = node;
        }
        this.length ++ ;

    }
    // 插入
    insert(position, element) {
        if(position > -1 && position < this.length) {
            let node = new this.Node(element),
                current = this.head,
                previous,
                index = 0;
            if(position === 0) {
                this.head = node;
                node.next = current;
            } else {
                while(index++ < position){
                    previous = current;
                    current = current.next;
                };
                node.next = current;
                previous.next = node;
            }
            this.length++;
            return true;
        }
        return false
    }
    // 通过索引删除
    removeAt(position) {
        // 检查越界
        if(position > -1 && position < this.length) {
            let current = this.head,
                previous,
                index = 0;
            // 移除第一项
            if(position === 0) {
                this.head = current.next;
            } else {
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                // 找到指定位置，将其上一个项的指针指向其下一项
                previous.next = current.next;
            }
            this.length --;
            return current.element;
        } else {
            return null;
        }
        
    }
    // 删除
    remove(element) {
        let index = this.indexOf(element);
        return this.removeAt(index);
    }
    // 查找索引
    indexOf(element) {
        let current = this.head,
            index = 0;
        while(current) {
            if(element === current.element){
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }
    // 是否为空
    isEmpty() {
        return this.length === 0
    }
    // 获取头元素
    getHead() {
        return this.head
    }
    toString() {
        let current = this.head,
            string = '';
        while(current) {
            string += `${current.element}${current.next ? '->' : ''}`;
            current = current.next;
        }
        return string;
    }
    size() {
        return this.length;
    }
    // 打印
    print() {
        console.log(this.toString());
    }
}
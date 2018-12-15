export class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
        this.tail = null;//最后一个项
    }

    Node(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }

    insert(position, element) {
        if(position >= 0 && position <= this.length) {
            let node = new this.Node(element),
                current = this.head,
                previous,
                index = 0;
            if(position === 0) {
                // r如果链表为空
                if(!this.head){
                    this.head = node;
                    this.tail = node;
                }
                node.next = current;
                current.prev = node;
                this.head = node;

            } else if (position === this.length) {
                // 为最后一项
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            } else {
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }
            this.length++;
            return true;
        }
        return false;
    }

    removeAt(position) {
        if(position > -1 && position < this.length) {
            let current = this.head,
                previous,
                index = 0;
            // 移除第一项
            if(position === 0) {
                this.head = current.next;
                // 如果只有一项
                if(this.length === 1) {
                    this.tail = null;
                } else {
                    this.head.prev = null;
                }
            } else if (position === this.length-1) {
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = null;
            } else {
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                current.next.prev = previous;
            }
            this.length++;
            return current.element;
        }
        return null;
    }
}
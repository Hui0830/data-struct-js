"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DoubleLinkedList = exports.DoubleLinkedList = function () {
    function DoubleLinkedList() {
        _classCallCheck(this, DoubleLinkedList);

        this.head = null;
        this.length = 0;
        this.tail = null; //最后一个项
    }

    _createClass(DoubleLinkedList, [{
        key: "Node",
        value: function Node(element) {
            this.element = element;
            this.next = null;
            this.prev = null;
        }
    }, {
        key: "insert",
        value: function insert(position, element) {
            if (position >= 0 && position <= this.length) {
                var node = new this.Node(element),
                    current = this.head,
                    previous = void 0,
                    index = 0;
                if (position === 0) {
                    // r如果链表为空
                    if (!this.head) {
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
                    while (index++ < position) {
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
    }, {
        key: "removeAt",
        value: function removeAt(position) {
            if (position > -1 && position < this.length) {
                var current = this.head,
                    previous = void 0,
                    index = 0;
                // 移除第一项
                if (position === 0) {
                    this.head = current.next;
                    // 如果只有一项
                    if (this.length === 1) {
                        this.tail = null;
                    } else {
                        this.head.prev = null;
                    }
                } else if (position === this.length - 1) {
                    current = this.tail;
                    this.tail = current.prev;
                    this.tail.next = null;
                } else {
                    while (index++ < position) {
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
    }]);

    return DoubleLinkedList;
}();
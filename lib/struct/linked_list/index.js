'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LinkedList = function () {
    function LinkedList() {
        _classCallCheck(this, LinkedList);

        this.length = 0;
        this.head = null;
    }

    _createClass(LinkedList, [{
        key: 'Node',
        value: function Node(element) {
            this.element = element;
            this.next = null;
        }
        // 添加

    }, {
        key: 'append',
        value: function append(element) {
            var node = new this.Node(element),
                current = void 0;
            if (this.head === null) {
                this.head = node;
            } else {
                current = this.head;
                while (current.next) {
                    current = current.next;
                }
                // 找到最后一项添加
                current.next = node;
            }
            this.length++;
        }
        // 插入

    }, {
        key: 'insert',
        value: function insert(position, element) {
            if (position > -1 && position < this.length) {
                var node = new this.Node(element),
                    current = this.head,
                    previous = void 0,
                    index = 0;
                if (position === 0) {
                    this.head = node;
                    node.next = current;
                } else {
                    while (index++ < position) {
                        previous = current;
                        current = current.next;
                    };
                    node.next = current;
                    previous.next = node;
                }
                this.length++;
                return true;
            }
            return false;
        }
        // 通过索引删除

    }, {
        key: 'removeAt',
        value: function removeAt(position) {
            // 检查越界
            if (position > -1 && position < this.length) {
                var current = this.head,
                    previous = void 0,
                    index = 0;
                // 移除第一项
                if (position === 0) {
                    this.head = current.next;
                } else {
                    while (index++ < position) {
                        previous = current;
                        current = current.next;
                    }
                    // 找到指定位置，将其上一个项的指针指向其下一项
                    previous.next = current.next;
                }
                this.length--;
                return current.element;
            } else {
                return null;
            }
        }
        // 删除

    }, {
        key: 'remove',
        value: function remove(element) {
            var index = this.indexOf(element);
            return this.removeAt(index);
        }
        // 查找索引

    }, {
        key: 'indexOf',
        value: function indexOf(element) {
            var current = this.head,
                index = 0;
            while (current) {
                if (element === current.element) {
                    return index;
                }
                index++;
                current = current.next;
            }
            return -1;
        }
        // 是否为空

    }, {
        key: 'isEmpty',
        value: function isEmpty() {
            return this.length === 0;
        }
        // 获取头元素

    }, {
        key: 'getHead',
        value: function getHead() {
            return this.head;
        }
    }, {
        key: 'toString',
        value: function toString() {
            var current = this.head,
                string = '';
            while (current) {
                string += '' + current.element + (current.next ? '->' : '');
                current = current.next;
            }
            return string;
        }
    }, {
        key: 'size',
        value: function size() {
            return this.length;
        }
        // 打印

    }, {
        key: 'print',
        value: function print() {
            console.log(this.toString());
        }
    }]);

    return LinkedList;
}();

exports.default = LinkedList;
module.exports = exports.default;
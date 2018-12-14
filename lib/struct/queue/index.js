"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = function () {
    function Queue() {
        _classCallCheck(this, Queue);

        this.items = [];
    }

    // 添加


    _createClass(Queue, [{
        key: "enqueue",
        value: function enqueue(element) {
            this.items.push(element);
        }
        // 移除

    }, {
        key: "dequeue",
        value: function dequeue() {
            return this.items.shift();
        }
        // 查看

    }, {
        key: "front",
        value: function front() {
            return this.items[0];
        }
        // 检查为空

    }, {
        key: "isEmpty",
        value: function isEmpty() {
            return this.items.length === 0;
        }
        // 大小

    }, {
        key: "size",
        value: function size() {
            return this.items.length;
        }
        // 清空

    }, {
        key: "clear",
        value: function clear() {
            this.items = [];
        }
        // 打印

    }, {
        key: "print",
        value: function print() {
            return this.items.toString();
        }
    }]);

    return Queue;
}();

// 优先队列


exports.default = Queue;

var PriorityQueue = exports.PriorityQueue = function () {
    function PriorityQueue() {
        _classCallCheck(this, PriorityQueue);

        this.items = [];
    }

    _createClass(PriorityQueue, [{
        key: "enqueue",
        value: function enqueue(element, priority) {
            var _this = this;

            var queueElement = {
                element: element,
                priority: priority
            };
            var added = false;
            this.items.forEach(function (item, i) {
                if (queueElement.priority < item.priority) {
                    _this.items.splice(i, 0, queueElement);
                    added = true;
                    return;
                }
            });
            added || this.items.push(queueElement);
        }
        // 移除

    }, {
        key: "dequeue",
        value: function dequeue() {
            return this.items.shift();
        }
        // 查看

    }, {
        key: "front",
        value: function front() {
            return this.items[0];
        }
        // 检查为空

    }, {
        key: "isEmpty",
        value: function isEmpty() {
            return this.items.length === 0;
        }
        // 大小

    }, {
        key: "size",
        value: function size() {
            return this.items.length;
        }
        // 清空

    }, {
        key: "clear",
        value: function clear() {
            this.items = [];
        }
    }, {
        key: "print",
        value: function print() {
            this.items.forEach(function (item) {
                console.log(item.element + " - " + item.priority);
            });
        }
    }]);

    return PriorityQueue;
}();
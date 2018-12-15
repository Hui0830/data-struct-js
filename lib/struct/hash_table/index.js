"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LinkedHashTable = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _linked_list = require("../linked_list");

var _linked_list2 = _interopRequireDefault(_linked_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 散列函数
var loseHashCode = function loseHashCode(key) {
    var hash = 0;
    for (var i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
    }
    return hash % 37;
};
// 普通散列表（未处理冲突）

var HashTable = function () {
    function HashTable() {
        _classCallCheck(this, HashTable);

        this.table = [];
    }

    _createClass(HashTable, [{
        key: "put",
        value: function put(key, value) {
            var position = loseHashCode(key);
            console.log(position);
            this.table[position] = value;
        }
    }, {
        key: "get",
        value: function get(key) {
            return this.table[loseHashCode(key)];
        }
    }, {
        key: "remove",
        value: function remove(key) {
            this.table[loseHashCode(key)] = undefined;
        }
    }]);

    return HashTable;
}();
// 经冲突处理（分离链接）


exports.default = HashTable;

var LinkedHashTable = exports.LinkedHashTable = function () {
    function LinkedHashTable() {
        _classCallCheck(this, LinkedHashTable);

        this.table = [];
    }

    // 定义辅助类形成key-value形式以存储入链表


    _createClass(LinkedHashTable, [{
        key: "ValuePair",
        value: function ValuePair(key, value) {
            var _this = this;

            this.key = key;
            this.value = value;

            this.toString = function () {
                return "[" + _this.key + "-" + _this.value + "]";
            };
        }

        // 在每个散列位置以链表形式存储

    }, {
        key: "put",
        value: function put(key, value) {
            var position = loseHashCode(key);
            if (this.table[position] === undefined) {
                this.table[position] = new _linked_list2.default();
            }
            this.table[position].append(new this.ValuePair(key, value));
        }
    }, {
        key: "get",
        value: function get(key) {
            var position = loseHashCode(key);
            // 存在遍历链表来寻找键/值
            if (this.table[position] !== undefined) {
                var current = this.table[position].getHead();
                while (current.next) {
                    if (current.element.key == key) {
                        return current.element.value;
                    }
                    current = current.next;
                }
                // 检查元素在链表第一个或最后一个节点的情况
                if (current.element.key == key) {
                    return current.element.value;
                }
            }
            return undefined;
        }
    }, {
        key: "remove",
        value: function remove(key) {
            var position = loseHashCode(key);
            if (this.table[position] !== undefined) {
                var current = this.table[position].getHead();
                while (current.next) {
                    if (current.element.key === key) {
                        this.table[position].remove(current.element);
                        if (this.table[position].isEmpty()) {
                            this.table[position] = undefined;
                        }
                        return true;
                    }
                    current = current.next;
                }
                // 检查头尾节点
                if (current.element.key === key) {
                    this.table[position].remove(current.element);
                    if (this.table[position].isEmpty()) {
                        this.table[position] = undefined;
                    }
                    return true;
                }
            }
            return false;
        }
    }]);

    return LinkedHashTable;
}();
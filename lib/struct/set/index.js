"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Set = function () {
    function Set(array) {
        var _this = this;

        _classCallCheck(this, Set);

        this.items = {};
        array && array.map(function (item) {
            _this.items[item] = item;
        });
    }

    _createClass(Set, [{
        key: "has",
        value: function has(value) {
            return this.items.hasOwnProperty(value);
        }
    }, {
        key: "add",
        value: function add(value) {
            if (!this.has(value)) {
                this.items[value] = value;
                return true;
            }
            return false;
        }
    }, {
        key: "remove",
        value: function remove(value) {
            if (this.has(value)) {
                delete this.items[value];
                return true;
            }
            return false;
        }
    }, {
        key: "size",
        value: function size() {
            return Object.keys(this.items).length;
        }
    }, {
        key: "values",
        value: function values() {
            var _this2 = this;

            return Object.keys(this.items).map(function (key) {
                return _this2.items[key];
            });
        }
    }, {
        key: "clear",
        value: function clear() {
            this.items = {};
            return true;
        }
    }]);

    return Set;
}();

exports.default = Set;
module.exports = exports.default;
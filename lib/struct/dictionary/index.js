"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dictionary = function () {
    function Dictionary() {
        var _this = this;

        _classCallCheck(this, Dictionary);

        this.keys = Object.keys(this.items);
        this.size = keys.length;

        this.items = {};

        for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
            arg[_key] = arguments[_key];
        }

        arg && arg.forEach(function (item) {
            return _this.items = _extends({}, item);
        });
    }

    _createClass(Dictionary, [{
        key: "has",
        value: function has(key) {
            return key in this.items;
        }
    }, {
        key: "set",
        value: function set(key, value) {
            this.items[key] = value;
        }
    }, {
        key: "delete",
        value: function _delete(key) {
            if (this.items.has(key)) {
                delete this.items[key];
                return true;
            }
            return false;
        }
    }, {
        key: "get",
        value: function get(key) {
            return this.has(key) ? this.items[key] : undefined;
        }
    }, {
        key: "values",
        value: function values() {
            var values = [];
            for (var key in this.items) {
                this.has(key) && values.push(this.items[key]);
            }
            return values;
        }
    }, {
        key: "clear",
        value: function clear() {
            this.items = {};
            return true;
        }
    }]);

    return Dictionary;
}();

exports.default = Dictionary;
module.exports = exports.default;
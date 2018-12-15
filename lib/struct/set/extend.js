'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 并集
_index2.default.prototype.union = function (otherSet) {
    var unionSet = new _index2.default();
    console.log(this);
    this.values().forEach(function (item) {
        return unionSet.add(item);
    });
    otherSet.values().forEach(function (item) {
        return unionSet.add(item);
    });
    return unionSet;
};

// 交集

_index2.default.prototype.intersection = function (otherSet) {
    var intersectionSet = new _index2.default();
    this.values().forEach(function (item) {
        otherSet.has(item) && intersectionSet.add(item);
    });

    return intersectionSet;
};

// 差集
_index2.default.prototype.difference = function (otherSet) {
    var differenceSet = new _index2.default();
    this.values().forEach(function (item) {
        otherSet.has(item) || differenceSet.add(item);
    });
    return differenceSet;
};

// 子集
_index2.default.prototype.subset = function (otherSet) {
    if (this.size() > otherSet.size()) {
        return false;
    } else {
        var values = this.values();
        for (var i = 0; i < values.length; i++) {
            if (!otherSet.has(values[i])) {
                return false;
            }
        }
        return true;
    }
};

exports.default = _index2.default;
module.exports = exports.default;
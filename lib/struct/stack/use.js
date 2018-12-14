'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.baseConverter = undefined;

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseConverter = exports.baseConverter = function baseConverter(decNumber, base) {
    var remStack = new _index2.default(),
        digits = '0123456789ABCDEF';
    var rem = void 0,
        baseString = '';

    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    };

    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }
    return baseString;
};
// window.addEventListener('load',())




function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// - Noel Delgado | @pixelia_me
var nodes = [].slice.call(document.querySelectorAll('li'), 0);
var directions = {
0: 'top',
1: 'right',
2: 'bottom',
3: 'left'
};
var classNames = ['in', 'out'].map(function (p) {
return Object.values(directions).map(function (d) {
return "".concat(p, "-").concat(d);
});
}).reduce(function (a, b) {
return a.concat(b);
});

var getDirectionKey = function getDirectionKey(ev, node) {
var _node$getBoundingClie = node.getBoundingClientRect(),
width = _node$getBoundingClie.width,
height = _node$getBoundingClie.height,
top = _node$getBoundingClie.top,
left = _node$getBoundingClie.left;

var l = ev.pageX - (left + window.pageXOffset);
var t = ev.pageY - (top + window.pageYOffset);
var x = l - width / 2 * (width > height ? height / width : 1);
var y = t - height / 2 * (height > width ? width / height : 1);
return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
};

var Item = /*#__PURE__*/function () {
function Item(element) {
var _this = this;

_classCallCheck(this, Item);

this.element = element;
this.element.addEventListener('mouseover', function (ev) {
return _this.update(ev, 'in');
});
this.element.addEventListener('mouseout', function (ev) {
return _this.update(ev, 'out');
});
}

_createClass(Item, [{
key: "update",
value: function update(ev, prefix) {
var _this$element$classLi;

(_this$element$classLi = this.element.classList).remove.apply(_this$element$classLi, _toConsumableArray(classNames));

this.element.classList.add("".concat(prefix, "-").concat(directions[getDirectionKey(ev, this.element)]));
}
}]);

return Item;
}();

nodes.forEach(function (node) {
return new Item(node);
});

// import SwupScriptsPlugin from '@swup/scripts-plugin';

//  src="/node_modules/swup/dist/swup.min.js"




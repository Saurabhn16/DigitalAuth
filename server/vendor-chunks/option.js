/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/option";
exports.ids = ["vendor-chunks/option"];
exports.modules = {

/***/ "(ssr)/./node_modules/option/index.js":
/*!**************************************!*\
  !*** ./node_modules/option/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("exports.none = Object.create({\n    value: function() {\n        throw new Error('Called value on none');\n    },\n    isNone: function() {\n        return true;\n    },\n    isSome: function() {\n        return false;\n    },\n    map: function() {\n        return exports.none;\n    },\n    flatMap: function() {\n        return exports.none;\n    },\n    filter: function() {\n        return exports.none;\n    },\n    toArray: function() {\n        return [];\n    },\n    orElse: callOrReturn,\n    valueOrElse: callOrReturn\n});\n\nfunction callOrReturn(value) {\n    if (typeof(value) == \"function\") {\n        return value();\n    } else {\n        return value;\n    }\n}\n\nexports.some = function(value) {\n    return new Some(value);\n};\n\nvar Some = function(value) {\n    this._value = value;\n};\n\nSome.prototype.value = function() {\n    return this._value;\n};\n\nSome.prototype.isNone = function() {\n    return false;\n};\n\nSome.prototype.isSome = function() {\n    return true;\n};\n\nSome.prototype.map = function(func) {\n    return new Some(func(this._value));\n};\n\nSome.prototype.flatMap = function(func) {\n    return func(this._value);\n};\n\nSome.prototype.filter = function(predicate) {\n    return predicate(this._value) ? this : exports.none;\n};\n\nSome.prototype.toArray = function() {\n    return [this._value];\n};\n\nSome.prototype.orElse = function(value) {\n    return this;\n};\n\nSome.prototype.valueOrElse = function(value) {\n    return this._value;\n};\n\nexports.isOption = function(value) {\n    return value === exports.none || value instanceof Some;\n};\n\nexports.fromNullable = function(value) {\n    if (value == null) {\n        return exports.none;\n    }\n    return new Some(value);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvb3B0aW9uL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktZWRpdG9yanMtYXBwLy4vbm9kZV9tb2R1bGVzL29wdGlvbi9pbmRleC5qcz85NzFiIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMubm9uZSA9IE9iamVjdC5jcmVhdGUoe1xuICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYWxsZWQgdmFsdWUgb24gbm9uZScpO1xuICAgIH0sXG4gICAgaXNOb25lOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBpc1NvbWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICBtYXA6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZXhwb3J0cy5ub25lO1xuICAgIH0sXG4gICAgZmxhdE1hcDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBleHBvcnRzLm5vbmU7XG4gICAgfSxcbiAgICBmaWx0ZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZXhwb3J0cy5ub25lO1xuICAgIH0sXG4gICAgdG9BcnJheTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9LFxuICAgIG9yRWxzZTogY2FsbE9yUmV0dXJuLFxuICAgIHZhbHVlT3JFbHNlOiBjYWxsT3JSZXR1cm5cbn0pO1xuXG5mdW5jdGlvbiBjYWxsT3JSZXR1cm4odmFsdWUpIHtcbiAgICBpZiAodHlwZW9mKHZhbHVlKSA9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbn1cblxuZXhwb3J0cy5zb21lID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gbmV3IFNvbWUodmFsdWUpO1xufTtcblxudmFyIFNvbWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG59O1xuXG5Tb21lLnByb3RvdHlwZS52YWx1ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbn07XG5cblNvbWUucHJvdG90eXBlLmlzTm9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBmYWxzZTtcbn07XG5cblNvbWUucHJvdG90eXBlLmlzU29tZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0cnVlO1xufTtcblxuU29tZS5wcm90b3R5cGUubWFwID0gZnVuY3Rpb24oZnVuYykge1xuICAgIHJldHVybiBuZXcgU29tZShmdW5jKHRoaXMuX3ZhbHVlKSk7XG59O1xuXG5Tb21lLnByb3RvdHlwZS5mbGF0TWFwID0gZnVuY3Rpb24oZnVuYykge1xuICAgIHJldHVybiBmdW5jKHRoaXMuX3ZhbHVlKTtcbn07XG5cblNvbWUucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uKHByZWRpY2F0ZSkge1xuICAgIHJldHVybiBwcmVkaWNhdGUodGhpcy5fdmFsdWUpID8gdGhpcyA6IGV4cG9ydHMubm9uZTtcbn07XG5cblNvbWUucHJvdG90eXBlLnRvQXJyYXkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gW3RoaXMuX3ZhbHVlXTtcbn07XG5cblNvbWUucHJvdG90eXBlLm9yRWxzZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXM7XG59O1xuXG5Tb21lLnByb3RvdHlwZS52YWx1ZU9yRWxzZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xufTtcblxuZXhwb3J0cy5pc09wdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBleHBvcnRzLm5vbmUgfHwgdmFsdWUgaW5zdGFuY2VvZiBTb21lO1xufTtcblxuZXhwb3J0cy5mcm9tTnVsbGFibGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBleHBvcnRzLm5vbmU7XG4gICAgfVxuICAgIHJldHVybiBuZXcgU29tZSh2YWx1ZSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/option/index.js\n");

/***/ })

};
;
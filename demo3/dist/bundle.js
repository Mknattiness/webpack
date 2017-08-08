/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foo__ = __webpack_require__(1);
// 加载都是 import
//  三种加载方式
// 导出都是 export
//  三种导出方式

// 只加载模块中 export default 的成员
// 如果没有 export default 的成员，则是 undefined
// import foo from './foo'
// console.log(foo)

// 第二种加载方式：
// 对于非 export default 导出的成员，必须通过解构赋值的方式来加载才可以
// 也就是说你需要按需加载才能拿到 export 导出的成员
// import { a, b, c, d } from './foo'

// console.log(a, b, c, d)

// 第三种加载方式：
// 加载所有 export 导出的成员，包括 export default 成员

console.log(__WEBPACK_IMPORTED_MODULE_0__foo__)


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return c; });
// export default function () {
//   console.log('hello')
// }

// module.exports = function () {
//   console.log('hello')
// }

// export const a = 1
// export const b = 2
// export const c = 3

const a = 1
const b = 2
const c = 3



const d = 4
/* harmony export (immutable) */ __webpack_exports__["d"] = d;


// 错误的写法：不支持
// export 导出的成员必须引用到内部的一个成员变量/常亮
// export 123

// 错误的写法：不支持
// const e = 5
// export e

// 这是错误的写法：不支持
// export {
//   a: a,
//   b: b,
//   c: c
// }

// export default function () {
//   console.log('hello')
// }

// export default 只能有一次
// export default 123

const str = 'hello world'

// default 相当于起的默认名字
// 这里相当于把 str 的值赋值给了 default
/* harmony default export */ __webpack_exports__["default"] = (str);


/***/ })
/******/ ]);
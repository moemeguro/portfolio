/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub.js */ \"./src/js/sub.js\");\n\n\n// import 文を使って sub.js ファイルを読み込む。\n\n\n// sub.jsに定義されたJavaScriptを実行する。\n(0,_sub_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n// メニュー\nvar menu = document.getElementById('menu');\nvar button = document.getElementById('menu-button');\nvar isOpen = false;\nfunction updateAriaAttribute() {\n  var expanded = isOpen ? 'true' : 'false';\n  var hidden = isOpen ? 'false' : 'true';\n  button.setAttribute('aria-expanded', expanded);\n  menu.setAttribute('aria-hidden', hidden);\n}\nfunction openMenu() {\n  isOpen = true;\n  updateAriaAttribute();\n}\nfunction closeMenu() {\n  isOpen = false;\n  updateAriaAttribute();\n}\nfunction togglemenu() {\n  if (isOpen) {\n    closeMenu();\n  } else {\n    openMenu();\n  }\n}\nbutton.addEventListener('click', function () {\n  togglemenu();\n});\nvar links = document.querySelectorAll('.header__link');\nlinks.forEach(function (link) {\n  link.addEventListener('click', function (event) {\n    closeMenu();\n  });\n});\n\n//# sourceURL=webpack://github/./src/js/index.js?");

/***/ }),

/***/ "./src/js/sub.js":
/*!***********************!*\
  !*** ./src/js/sub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ hello)\n/* harmony export */ });\n\n\n// export文を使ってhello関数を定義する。\nfunction hello() {\n  console.log(\"hello\");\n}\nconsole.log(\"sub.js\");\n\n//# sourceURL=webpack://github/./src/js/sub.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SquarespaceSDK"] = factory();
	else
		root["SquarespaceSDK"] = factory();
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@sqs/cookie-cutter/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@sqs/cookie-cutter/index.js ***!
  \**************************************************/
/***/ ((module) => {

eval("var SPLIT_COOKIE_KEY_VALUE = /^([^=]+)=([^;]*)$/;\nvar exports = module.exports = function (doc, shouldEscapeCookie) {\n    if (!doc) doc = {};\n    if (typeof doc === 'string') doc = { cookie: doc };\n    if (doc.cookie === undefined) doc.cookie = '';\n    if (shouldEscapeCookie !== false) shouldEscapeCookie = true;\n\n    var identity = function (str) { return str; }\n    var _escape = shouldEscapeCookie ? escape : identity;\n    var _unescape = shouldEscapeCookie ? unescape : identity;\n    \n    var self = {};\n    self.get = function (key) {\n        var splat = doc.cookie.split(/;\\s*/);\n        for (var i = 0; i < splat.length; i++) {\n            var splitCookie = (splat[i]||'').match(SPLIT_COOKIE_KEY_VALUE) || [];\n            var k = _unescape(splitCookie[1] || '');\n            if (k === key) return _unescape(splitCookie[2] || '');\n        }\n        return undefined;\n    };\n    \n    self.set = function (key, value, opts) {\n        if (!opts) opts = {};\n        var s = _escape(key) + '=' + _escape(value);\n        if (opts.expires) s += '; expires=' + opts.expires;\n        if (opts.path) s += '; path=' + _escape(opts.path);\n        if (opts.domain) s += '; domain=' + _escape(opts.domain);\n        if (opts.secure) s += '; secure';\n        doc.cookie = s;\n        return s;\n    };\n    return self;\n};\n\nif (typeof document !== 'undefined') {\n    var cookie = exports(document);\n    exports.get = cookie.get;\n    exports.set = cookie.set;\n}\n\n\n//# sourceURL=webpack://SquarespaceSDK/./node_modules/@sqs/cookie-cutter/index.js?");

/***/ }),

/***/ "./build-babel/index.js":
/*!******************************!*\
  !*** ./build-babel/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\nconst userProfile = __webpack_require__(/*! ./userProfile */ \"./build-babel/userProfile/index.js\");\n\nexports.default = {\n  userProfile\n};\n\n//# sourceURL=webpack://SquarespaceSDK/./build-babel/index.js?");

/***/ }),

/***/ "./build-babel/requests.js":
/*!*********************************!*\
  !*** ./build-babel/requests.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.HttpError = exports.get = exports.post = void 0;\n\nconst post = async (url, data, options = {}) => {\n  const response = await fetch(url, Object.assign(Object.assign({\n    method: 'POST'\n  }, options), {\n    body: JSON.stringify(data)\n  }));\n\n  if (response.status >= 400) {\n    throw new HttpError(response.status, await response.text());\n  }\n\n  return response.json();\n};\n\nexports.post = post;\n\nconst get = async (url, options = {}) => {\n  const response = await fetch(url, Object.assign({\n    method: 'GET'\n  }, options));\n\n  if (response.status >= 400) {\n    throw new HttpError(response.status, await response.text());\n  }\n\n  return response.json();\n};\n\nexports.get = get;\n\nclass HttpError {\n  constructor(status, message) {\n    this.status = status;\n    this.message = message;\n\n    this.getStatus = () => this.status;\n\n    this.getMessage = () => this.message;\n  }\n\n}\n\nexports.HttpError = HttpError;\n\n//# sourceURL=webpack://SquarespaceSDK/./build-babel/requests.js?");

/***/ }),

/***/ "./build-babel/userProfile/index.js":
/*!******************************************!*\
  !*** ./build-babel/userProfile/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.get = void 0;\n\nconst Cookie = __webpack_require__(/*! @sqs/cookie-cutter */ \"./node_modules/@sqs/cookie-cutter/index.js\");\n\nconst requests_1 = __webpack_require__(/*! ../requests */ \"./build-babel/requests.js\");\n\nconst SITE_USER_CRUMB = 'siteUserCrumb';\nconst SITE_USER_XSRF_TOKEN = 'X-SiteUser-XSRF-Token';\nconst USER_PROFILE_URI = '/api/extensions/user-profile';\n\nconst get = async () => {\n  const siteUserXSRFToken = Cookie.get(SITE_USER_CRUMB);\n\n  if (siteUserXSRFToken) {\n    try {\n      return await requests_1.get(USER_PROFILE_URI, {\n        headers: {\n          [SITE_USER_XSRF_TOKEN]: siteUserXSRFToken\n        }\n      });\n    } catch (error) {\n      if (error instanceof requests_1.HttpError) {\n        const httpError = error;\n\n        if (httpError.getStatus() === 401 || httpError.getStatus() === 403) {\n          return Promise.resolve(undefined);\n        }\n      }\n\n      return Promise.reject(new Error('Encountered an unexpected error.'));\n    }\n  }\n\n  return Promise.resolve(undefined);\n};\n\nexports.get = get;\n\n//# sourceURL=webpack://SquarespaceSDK/./build-babel/userProfile/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./build-babel/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});

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

/***/ "./build-tsc-cjs/index.js":
/*!********************************!*\
  !*** ./build-tsc-cjs/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.userProfile = exports.shoppingCart = exports.page = void 0;\n\nvar page = __webpack_require__(/*! ./page */ \"./build-tsc-cjs/page/index.js\");\n\nexports.page = page;\n\nvar shoppingCart = __webpack_require__(/*! ./shoppingCart */ \"./build-tsc-cjs/shoppingCart/index.js\");\n\nexports.shoppingCart = shoppingCart;\n\nvar userProfile = __webpack_require__(/*! ./userProfile */ \"./build-tsc-cjs/userProfile/index.js\");\n\nexports.userProfile = userProfile;\n\n//# sourceURL=webpack://SquarespaceSDK/./build-tsc-cjs/index.js?");

/***/ }),

/***/ "./build-tsc-cjs/page/details/index.js":
/*!*********************************************!*\
  !*** ./build-tsc-cjs/page/details/index.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {\n  function adopt(value) {\n    return value instanceof P ? value : new P(function (resolve) {\n      resolve(value);\n    });\n  }\n\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function step(result) {\n      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);\n    }\n\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\n\nvar __generator = this && this.__generator || function (thisArg, body) {\n  var _ = {\n    label: 0,\n    sent: function () {\n      if (t[0] & 1) throw t[1];\n      return t[1];\n    },\n    trys: [],\n    ops: []\n  },\n      f,\n      y,\n      t,\n      g;\n  return g = {\n    next: verb(0),\n    \"throw\": verb(1),\n    \"return\": verb(2)\n  }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function () {\n    return this;\n  }), g;\n\n  function verb(n) {\n    return function (v) {\n      return step([n, v]);\n    };\n  }\n\n  function step(op) {\n    if (f) throw new TypeError(\"Generator is already executing.\");\n\n    while (_) try {\n      if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n      if (y = 0, t) op = [op[0] & 2, t.value];\n\n      switch (op[0]) {\n        case 0:\n        case 1:\n          t = op;\n          break;\n\n        case 4:\n          _.label++;\n          return {\n            value: op[1],\n            done: false\n          };\n\n        case 5:\n          _.label++;\n          y = op[1];\n          op = [0];\n          continue;\n\n        case 7:\n          op = _.ops.pop();\n\n          _.trys.pop();\n\n          continue;\n\n        default:\n          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {\n            _ = 0;\n            continue;\n          }\n\n          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {\n            _.label = op[1];\n            break;\n          }\n\n          if (op[0] === 6 && _.label < t[1]) {\n            _.label = t[1];\n            t = op;\n            break;\n          }\n\n          if (t && _.label < t[2]) {\n            _.label = t[2];\n\n            _.ops.push(op);\n\n            break;\n          }\n\n          if (t[2]) _.ops.pop();\n\n          _.trys.pop();\n\n          continue;\n      }\n\n      op = body.call(thisArg, _);\n    } catch (e) {\n      op = [6, e];\n      y = 0;\n    } finally {\n      f = t = 0;\n    }\n\n    if (op[0] & 5) throw op[1];\n    return {\n      value: op[0] ? op[1] : void 0,\n      done: true\n    };\n  }\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.getDetails = void 0;\n\nvar types_1 = __webpack_require__(/*! ./types */ \"./build-tsc-cjs/page/details/types.js\");\n\nvar squarespaceContext_1 = __webpack_require__(/*! ../../squarespaceContext */ \"./build-tsc-cjs/squarespaceContext.js\");\n\nvar getDetails = function () {\n  return __awaiter(void 0, void 0, void 0, function () {\n    var context, type, product;\n    return __generator(this, function (_a) {\n      context = squarespaceContext_1.getContext();\n\n      if (!context) {\n        Promise.reject(new Error('Not a valid Squarespace page.'));\n      }\n\n      type = getPageType(context);\n      product = type === types_1.PageType.Product ? {\n        id: context.item.id\n      } : undefined;\n      return [2\n      /*return*/\n      , Promise.resolve({\n        website: {\n          id: context.website.id\n        },\n        type: type,\n        product: product\n      })];\n    });\n  });\n};\n\nexports.getDetails = getDetails;\n\nvar getPageType = function (context) {\n  if (context.item && context.collection.type === 13) {\n    return types_1.PageType.Product;\n  }\n\n  if (context.collection.type === 13) {\n    return types_1.PageType.ProductCollection;\n  }\n\n  return types_1.PageType.Other;\n};\n\n//# sourceURL=webpack://SquarespaceSDK/./build-tsc-cjs/page/details/index.js?");

/***/ }),

/***/ "./build-tsc-cjs/page/details/types.js":
/*!*********************************************!*\
  !*** ./build-tsc-cjs/page/details/types.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.PageType = void 0;\nvar PageType;\n\n(function (PageType) {\n  PageType[\"Product\"] = \"Product\";\n  PageType[\"ProductCollection\"] = \"ProductCollection\";\n  PageType[\"Other\"] = \"Other\";\n})(PageType = exports.PageType || (exports.PageType = {}));\n\n;\n\n//# sourceURL=webpack://SquarespaceSDK/./build-tsc-cjs/page/details/types.js?");

/***/ }),

/***/ "./build-tsc-cjs/page/hooks/index.js":
/*!*******************************************!*\
  !*** ./build-tsc-cjs/page/hooks/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar _a;\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.createHook = void 0;\n\nvar types_1 = __webpack_require__(/*! ./types */ \"./build-tsc-cjs/page/hooks/types.js\");\n\n__webpack_require__(/*! ./style.module.css */ \"./build-tsc-cjs/page/hooks/style.module.css\");\n\nvar createPageOverlay = function () {\n  var overlay = document.createElement('div'); // overlay.className = style.overlay;\n\n  document.body.append(overlay);\n  return {\n    hooks: [{\n      element: overlay\n    }]\n  };\n};\n\nvar strategies = (_a = {}, _a[types_1.HookType.PageOverlay] = createPageOverlay, _a);\n\nvar createHook = function (type) {\n  if (strategies[type]) {\n    return strategies[type]();\n  }\n\n  throw new Error('Unsupported HookType!');\n};\n\nexports.createHook = createHook;\n\n//# sourceURL=webpack://SquarespaceSDK/./build-tsc-cjs/page/hooks/index.js?");

/***/ }),

/***/ "./build-tsc-cjs/page/hooks/types.js":
/*!*******************************************!*\
  !*** ./build-tsc-cjs/page/hooks/types.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.HookType = void 0;\nvar HookType;\n\n(function (HookType) {\n  HookType[HookType[\"PageOverlay\"] = 0] = \"PageOverlay\";\n})(HookType = exports.HookType || (exports.HookType = {}));\n\n;\n\n//# sourceURL=webpack://SquarespaceSDK/./build-tsc-cjs/page/hooks/types.js?");

/***/ }),

/***/ "./build-tsc-cjs/page/index.js":
/*!*************************************!*\
  !*** ./build-tsc-cjs/page/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.createHook = exports.getDetails = void 0;\n\nvar details_1 = __webpack_require__(/*! ./details */ \"./build-tsc-cjs/page/details/index.js\");\n\nObject.defineProperty(exports, \"getDetails\", ({\n  enumerable: true,\n  get: function () {\n    return details_1.getDetails;\n  }\n}));\n\nvar hooks_1 = __webpack_require__(/*! ./hooks */ \"./build-tsc-cjs/page/hooks/index.js\");\n\nObject.defineProperty(exports, \"createHook\", ({\n  enumerable: true,\n  get: function () {\n    return hooks_1.createHook;\n  }\n}));\n\n//# sourceURL=webpack://SquarespaceSDK/./build-tsc-cjs/page/index.js?");

/***/ }),

/***/ "./build-tsc-cjs/requests.js":
/*!***********************************!*\
  !*** ./build-tsc-cjs/requests.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\n\nvar __assign = this && this.__assign || function () {\n  __assign = Object.assign || function (t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n      s = arguments[i];\n\n      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\n    }\n\n    return t;\n  };\n\n  return __assign.apply(this, arguments);\n};\n\nvar __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {\n  function adopt(value) {\n    return value instanceof P ? value : new P(function (resolve) {\n      resolve(value);\n    });\n  }\n\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function step(result) {\n      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);\n    }\n\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\n\nvar __generator = this && this.__generator || function (thisArg, body) {\n  var _ = {\n    label: 0,\n    sent: function () {\n      if (t[0] & 1) throw t[1];\n      return t[1];\n    },\n    trys: [],\n    ops: []\n  },\n      f,\n      y,\n      t,\n      g;\n  return g = {\n    next: verb(0),\n    \"throw\": verb(1),\n    \"return\": verb(2)\n  }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function () {\n    return this;\n  }), g;\n\n  function verb(n) {\n    return function (v) {\n      return step([n, v]);\n    };\n  }\n\n  function step(op) {\n    if (f) throw new TypeError(\"Generator is already executing.\");\n\n    while (_) try {\n      if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n      if (y = 0, t) op = [op[0] & 2, t.value];\n\n      switch (op[0]) {\n        case 0:\n        case 1:\n          t = op;\n          break;\n\n        case 4:\n          _.label++;\n          return {\n            value: op[1],\n            done: false\n          };\n\n        case 5:\n          _.label++;\n          y = op[1];\n          op = [0];\n          continue;\n\n        case 7:\n          op = _.ops.pop();\n\n          _.trys.pop();\n\n          continue;\n\n        default:\n          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {\n            _ = 0;\n            continue;\n          }\n\n          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {\n            _.label = op[1];\n            break;\n          }\n\n          if (op[0] === 6 && _.label < t[1]) {\n            _.label = t[1];\n            t = op;\n            break;\n          }\n\n          if (t && _.label < t[2]) {\n            _.label = t[2];\n\n            _.ops.push(op);\n\n            break;\n          }\n\n          if (t[2]) _.ops.pop();\n\n          _.trys.pop();\n\n          continue;\n      }\n\n      op = body.call(thisArg, _);\n    } catch (e) {\n      op = [6, e];\n      y = 0;\n    } finally {\n      f = t = 0;\n    }\n\n    if (op[0] & 5) throw op[1];\n    return {\n      value: op[0] ? op[1] : void 0,\n      done: true\n    };\n  }\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.HttpError = exports.get = exports.post = void 0;\n\nvar post = function (url, data, options) {\n  if (options === void 0) {\n    options = {};\n  }\n\n  return __awaiter(void 0, void 0, void 0, function () {\n    var response, _a, _b;\n\n    return __generator(this, function (_c) {\n      switch (_c.label) {\n        case 0:\n          return [4\n          /*yield*/\n          , fetch(url, __assign(__assign({\n            method: 'POST'\n          }, options), {\n            body: JSON.stringify(data)\n          }))];\n\n        case 1:\n          response = _c.sent();\n          if (!(response.status >= 400)) return [3\n          /*break*/\n          , 3];\n          _a = HttpError.bind;\n          _b = [void 0, response.status];\n          return [4\n          /*yield*/\n          , response.text()];\n\n        case 2:\n          throw new (_a.apply(HttpError, _b.concat([_c.sent()])))();\n\n        case 3:\n          return [2\n          /*return*/\n          , response.json()];\n      }\n    });\n  });\n};\n\nexports.post = post;\n\nvar get = function (url, options) {\n  if (options === void 0) {\n    options = {};\n  }\n\n  return __awaiter(void 0, void 0, void 0, function () {\n    var response, _a, _b;\n\n    return __generator(this, function (_c) {\n      switch (_c.label) {\n        case 0:\n          return [4\n          /*yield*/\n          , fetch(url, __assign({\n            method: 'GET'\n          }, options))];\n\n        case 1:\n          response = _c.sent();\n          if (!(response.status >= 400)) return [3\n          /*break*/\n          , 3];\n          _a = HttpError.bind;\n          _b = [void 0, response.status];\n          return [4\n          /*yield*/\n          , response.text()];\n\n        case 2:\n          throw new (_a.apply(HttpError, _b.concat([_c.sent()])))();\n\n        case 3:\n          return [2\n          /*return*/\n          , response.json()];\n      }\n    });\n  });\n};\n\nexports.get = get;\n\nvar HttpError =\n/** @class */\nfunction () {\n  function HttpError(status, message) {\n    var _this = this;\n\n    this.status = status;\n    this.message = message;\n\n    this.getStatus = function () {\n      return _this.status;\n    };\n\n    this.getMessage = function () {\n      return _this.message;\n    };\n  }\n\n  return HttpError;\n}();\n\nexports.HttpError = HttpError;\n\n//# sourceURL=webpack://SquarespaceSDK/./build-tsc-cjs/requests.js?");

/***/ }),

/***/ "./build-tsc-cjs/shoppingCart/index.js":
/*!*********************************************!*\
  !*** ./build-tsc-cjs/shoppingCart/index.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {\n  function adopt(value) {\n    return value instanceof P ? value : new P(function (resolve) {\n      resolve(value);\n    });\n  }\n\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function step(result) {\n      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);\n    }\n\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\n\nvar __generator = this && this.__generator || function (thisArg, body) {\n  var _ = {\n    label: 0,\n    sent: function () {\n      if (t[0] & 1) throw t[1];\n      return t[1];\n    },\n    trys: [],\n    ops: []\n  },\n      f,\n      y,\n      t,\n      g;\n  return g = {\n    next: verb(0),\n    \"throw\": verb(1),\n    \"return\": verb(2)\n  }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function () {\n    return this;\n  }), g;\n\n  function verb(n) {\n    return function (v) {\n      return step([n, v]);\n    };\n  }\n\n  function step(op) {\n    if (f) throw new TypeError(\"Generator is already executing.\");\n\n    while (_) try {\n      if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n      if (y = 0, t) op = [op[0] & 2, t.value];\n\n      switch (op[0]) {\n        case 0:\n        case 1:\n          t = op;\n          break;\n\n        case 4:\n          _.label++;\n          return {\n            value: op[1],\n            done: false\n          };\n\n        case 5:\n          _.label++;\n          y = op[1];\n          op = [0];\n          continue;\n\n        case 7:\n          op = _.ops.pop();\n\n          _.trys.pop();\n\n          continue;\n\n        default:\n          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {\n            _ = 0;\n            continue;\n          }\n\n          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {\n            _.label = op[1];\n            break;\n          }\n\n          if (op[0] === 6 && _.label < t[1]) {\n            _.label = t[1];\n            t = op;\n            break;\n          }\n\n          if (t && _.label < t[2]) {\n            _.label = t[2];\n\n            _.ops.push(op);\n\n            break;\n          }\n\n          if (t[2]) _.ops.pop();\n\n          _.trys.pop();\n\n          continue;\n      }\n\n      op = body.call(thisArg, _);\n    } catch (e) {\n      op = [6, e];\n      y = 0;\n    } finally {\n      f = t = 0;\n    }\n\n    if (op[0] & 5) throw op[1];\n    return {\n      value: op[0] ? op[1] : void 0,\n      done: true\n    };\n  }\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.get = void 0;\n\nvar transform_1 = __webpack_require__(/*! ./transform */ \"./build-tsc-cjs/shoppingCart/transform.js\");\n\nvar requests_1 = __webpack_require__(/*! ../requests */ \"./build-tsc-cjs/requests.js\");\n\nvar SHOPPING_CART_URI = '/api/commerce/cart';\n\nvar get = function () {\n  return __awaiter(void 0, void 0, void 0, function () {\n    var _a, error_1;\n\n    return __generator(this, function (_b) {\n      switch (_b.label) {\n        case 0:\n          _b.trys.push([0, 2,, 3]);\n\n          _a = transform_1.transformShoppingCart;\n          return [4\n          /*yield*/\n          , requests_1.get(SHOPPING_CART_URI)];\n\n        case 1:\n          return [2\n          /*return*/\n          , _a.apply(void 0, [_b.sent()])];\n\n        case 2:\n          error_1 = _b.sent();\n          throw new Error('Encountered an unexpected error.');\n\n        case 3:\n          return [2\n          /*return*/\n          ];\n      }\n    });\n  });\n};\n\nexports.get = get;\n\n//# sourceURL=webpack://SquarespaceSDK/./build-tsc-cjs/shoppingCart/index.js?");

/***/ }),

/***/ "./build-tsc-cjs/shoppingCart/transform.js":
/*!*************************************************!*\
  !*** ./build-tsc-cjs/shoppingCart/transform.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.transformShoppingCart = void 0;\n\nvar transformMoney = function (money) {\n  return {\n    value: money.value,\n    currency: money.currencyCode\n  };\n};\n\nvar transformCartItem = function (item) {\n  return {\n    productId: item.productId,\n    productName: item.productName,\n    sku: item.sku,\n    variantId: item.variantId,\n    quantity: item.quantity,\n    price: transformMoney(item.unitPrice)\n  };\n};\n\nvar transformShoppingCart = function (cart) {\n  return {\n    items: cart.items.map(transformCartItem),\n    subtotal: transformMoney(cart.subtotal)\n  };\n};\n\nexports.transformShoppingCart = transformShoppingCart;\n\n//# sourceURL=webpack://SquarespaceSDK/./build-tsc-cjs/shoppingCart/transform.js?");

/***/ }),

/***/ "./build-tsc-cjs/squarespaceContext.js":
/*!*********************************************!*\
  !*** ./build-tsc-cjs/squarespaceContext.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.getContext = void 0;\n\nvar getContext = function () {\n  var _a; //@ts-ignore\n\n\n  var context = (_a = window.Static) === null || _a === void 0 ? void 0 : _a.SQUARESPACE_CONTEXT;\n  return context;\n};\n\nexports.getContext = getContext;\n\n//# sourceURL=webpack://SquarespaceSDK/./build-tsc-cjs/squarespaceContext.js?");

/***/ }),

/***/ "./build-tsc-cjs/userProfile/index.js":
/*!********************************************!*\
  !*** ./build-tsc-cjs/userProfile/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {\n  function adopt(value) {\n    return value instanceof P ? value : new P(function (resolve) {\n      resolve(value);\n    });\n  }\n\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function step(result) {\n      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);\n    }\n\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n};\n\nvar __generator = this && this.__generator || function (thisArg, body) {\n  var _ = {\n    label: 0,\n    sent: function () {\n      if (t[0] & 1) throw t[1];\n      return t[1];\n    },\n    trys: [],\n    ops: []\n  },\n      f,\n      y,\n      t,\n      g;\n  return g = {\n    next: verb(0),\n    \"throw\": verb(1),\n    \"return\": verb(2)\n  }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function () {\n    return this;\n  }), g;\n\n  function verb(n) {\n    return function (v) {\n      return step([n, v]);\n    };\n  }\n\n  function step(op) {\n    if (f) throw new TypeError(\"Generator is already executing.\");\n\n    while (_) try {\n      if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n      if (y = 0, t) op = [op[0] & 2, t.value];\n\n      switch (op[0]) {\n        case 0:\n        case 1:\n          t = op;\n          break;\n\n        case 4:\n          _.label++;\n          return {\n            value: op[1],\n            done: false\n          };\n\n        case 5:\n          _.label++;\n          y = op[1];\n          op = [0];\n          continue;\n\n        case 7:\n          op = _.ops.pop();\n\n          _.trys.pop();\n\n          continue;\n\n        default:\n          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {\n            _ = 0;\n            continue;\n          }\n\n          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {\n            _.label = op[1];\n            break;\n          }\n\n          if (op[0] === 6 && _.label < t[1]) {\n            _.label = t[1];\n            t = op;\n            break;\n          }\n\n          if (t && _.label < t[2]) {\n            _.label = t[2];\n\n            _.ops.push(op);\n\n            break;\n          }\n\n          if (t[2]) _.ops.pop();\n\n          _.trys.pop();\n\n          continue;\n      }\n\n      op = body.call(thisArg, _);\n    } catch (e) {\n      op = [6, e];\n      y = 0;\n    } finally {\n      f = t = 0;\n    }\n\n    if (op[0] & 5) throw op[1];\n    return {\n      value: op[0] ? op[1] : void 0,\n      done: true\n    };\n  }\n};\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.get = void 0;\n\nvar Cookie = __webpack_require__(/*! @sqs/cookie-cutter */ \"./node_modules/@sqs/cookie-cutter/index.js\");\n\nvar requests_1 = __webpack_require__(/*! ../requests */ \"./build-tsc-cjs/requests.js\");\n\nvar SITE_USER_CRUMB = 'siteUserCrumb';\nvar SITE_USER_XSRF_TOKEN = 'X-SiteUser-XSRF-Token';\nvar USER_PROFILE_URI = '/api/extensions/user-profile';\n\nvar get = function () {\n  return __awaiter(void 0, void 0, void 0, function () {\n    var siteUserXSRFToken, error_1, httpError;\n\n    var _a;\n\n    return __generator(this, function (_b) {\n      switch (_b.label) {\n        case 0:\n          siteUserXSRFToken = Cookie.get(SITE_USER_CRUMB);\n          if (!siteUserXSRFToken) return [3\n          /*break*/\n          , 4];\n          _b.label = 1;\n\n        case 1:\n          _b.trys.push([1, 3,, 4]);\n\n          return [4\n          /*yield*/\n          , requests_1.get(USER_PROFILE_URI, {\n            headers: (_a = {}, _a[SITE_USER_XSRF_TOKEN] = siteUserXSRFToken, _a)\n          })];\n\n        case 2:\n          return [2\n          /*return*/\n          , _b.sent()];\n\n        case 3:\n          error_1 = _b.sent();\n\n          if (error_1 instanceof requests_1.HttpError) {\n            httpError = error_1;\n\n            if (httpError.getStatus() === 401 || httpError.getStatus() === 403) {\n              return [2\n              /*return*/\n              , Promise.resolve(undefined)];\n            }\n          }\n\n          return [2\n          /*return*/\n          , Promise.reject(new Error('Encountered an unexpected error.'))];\n\n        case 4:\n          return [2\n          /*return*/\n          , Promise.resolve(undefined)];\n      }\n    });\n  });\n};\n\nexports.get = get;\n\n//# sourceURL=webpack://SquarespaceSDK/./build-tsc-cjs/userProfile/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./build-tsc-cjs/page/hooks/style.module.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./build-tsc-cjs/page/hooks/style.module.css ***!
  \*********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"._BJmNYVjiriUkgMQ_rG7 {\\n  position: fixed;\\n  z-index: 99;\\n}\", \"\"]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"overlay\": \"_BJmNYVjiriUkgMQ_rG7\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://SquarespaceSDK/./build-tsc-cjs/page/hooks/style.module.css?./node_modules/css-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B1%5D.use%5B1%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://SquarespaceSDK/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./build-tsc-cjs/page/hooks/style.module.css":
/*!***************************************************!*\
  !*** ./build-tsc-cjs/page/hooks/style.module.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_style_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./style.module.css */ \"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./build-tsc-cjs/page/hooks/style.module.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_style_module_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_style_module_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_style_module_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_style_module_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://SquarespaceSDK/./build-tsc-cjs/page/hooks/style.module.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://SquarespaceSDK/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://SquarespaceSDK/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://SquarespaceSDK/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://SquarespaceSDK/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://SquarespaceSDK/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://SquarespaceSDK/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./build-tsc-cjs/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});

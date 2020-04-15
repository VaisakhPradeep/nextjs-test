webpackHotUpdate("static\\development\\pages\\account\\profile.js",{

/***/ "./components/Accordion.js":
/*!*********************************!*\
  !*** ./components/Accordion.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "D:\\jewel-barrie-nextjs\\ciel-ecommerce\\web\\components\\Accordion.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Accordion = function Accordion(_ref) {
  var children = _ref.children,
      title = _ref.title;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      accordionState = _useState[0],
      setState = _useState[1];

  var toggleAccordion = function toggleAccordion() {
    accordionState === 'open' ? setState('') : setState('open');
  };

  return __jsx("div", {
    className: "cl-accordion ".concat(accordionState),
    onClick: function onClick() {
      return toggleAccordion();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "accordion-head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "cl-heading-s",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, title)), __jsx("div", {
    className: "accordion-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Accordion);

/***/ })

})
//# sourceMappingURL=profile.js.e72890ffb1b0d8a239bf.hot-update.js.map
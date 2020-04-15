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
var accordionOpen = false;

var Accordion = function Accordion(_ref) {
  var children = _ref.children,
      title = _ref.title,
      toggleAccodion = _ref.toggleAccodion;
  return __jsx("div", {
    className: 'cl-accordion',
    onClick: function onClick() {
      return toggleAccordion();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "accordion-head",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, title)), children);
};

var toggleAccordion = function toggleAccordion() {
  var className = 'cl-accordion';
  accordionOpen = !accordionOpen;
  accordionOpen ? className = 'cl-accordion open' : className = 'cl-accordion'; // return(className);

  console.log(className);
};

/* harmony default export */ __webpack_exports__["default"] = (Accordion);

/***/ })

})
//# sourceMappingURL=profile.js.90e1d9040b1b09f66dab.hot-update.js.map
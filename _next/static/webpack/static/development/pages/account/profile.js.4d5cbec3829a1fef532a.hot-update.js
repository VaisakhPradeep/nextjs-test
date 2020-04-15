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

/***/ }),

/***/ "./pages/account/profile.js":
/*!**********************************!*\
  !*** ./pages/account/profile.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layouts_AccountLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layouts/AccountLayout */ "./components/layouts/AccountLayout.js");
/* harmony import */ var _components_containers_BodyContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/containers/BodyContainer */ "./components/containers/BodyContainer.js");
/* harmony import */ var _components_Accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Accordion */ "./components/Accordion.js");
var _this = undefined,
    _jsxFileName = "D:\\jewel-barrie-nextjs\\ciel-ecommerce\\web\\pages\\account\\profile.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Account = function Account() {
  return __jsx(_components_layouts_AccountLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(_components_containers_BodyContainer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: "body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row justify-content-center mt-md-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-sm-4 col-md-3",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "col-sm-8 col-md-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, __jsx(_components_Accordion__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "PERSONAL INFORMATION",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 25
    }
  }, "Content"), __jsx("hr", {
    className: "cl-separator",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }), __jsx(_components_Accordion__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "CREDENTIALS",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, "Content"), __jsx("hr", {
    className: "cl-separator",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }), __jsx(_components_Accordion__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "ADDRESSES",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }, "Content"), __jsx("hr", {
    className: "cl-separator",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  }), __jsx(_components_Accordion__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "PAYMENT DETAILS",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, "Content"), __jsx("hr", {
    className: "cl-separator",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Account);

/***/ })

})
//# sourceMappingURL=profile.js.4d5cbec3829a1fef532a.hot-update.js.map
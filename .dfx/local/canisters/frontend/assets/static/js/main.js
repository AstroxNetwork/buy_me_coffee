(window["webpackChunkbuy_me_coffee"] = window["webpackChunkbuy_me_coffee"] || []).push([["main"],{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _pages_Layout_MainLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Layout/MainLayout */ "./src/pages/Layout/MainLayout.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.4.3_ae75bc417ac79cbd267eecc96dd519d8/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.4.3_ae75bc417ac79cbd267eecc96dd519d8/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/.pnpm/react-refresh@0.9.0/node_modules/react-refresh/runtime.js */ "./node_modules/.pnpm/react-refresh@0.9.0/node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _jsxFileName = "/Users/ghostcorn/dev/buy_me_coffee/src/App.tsx",
    _this = undefined;





var App = function App() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_pages_Layout_MainLayout__WEBPACK_IMPORTED_MODULE_1__.MainLayout, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 29
  }, _this);
};

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

__webpack_require__.$Refresh$.register(_c, "App");

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          false
        ) {}

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              false
            ) {}
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "./src/canisters/buymecoffee/index.js":
/*!********************************************!*\
  !*** ./src/canisters/buymecoffee/index.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "idlFactory": function() { return /* binding */ idlFactory; },
/* harmony export */   "init": function() { return /* binding */ init; }
/* harmony export */ });
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.4.3_ae75bc417ac79cbd267eecc96dd519d8/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.4.3_ae75bc417ac79cbd267eecc96dd519d8/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/.pnpm/react-refresh@0.9.0/node_modules/react-refresh/runtime.js */ "./node_modules/.pnpm/react-refresh@0.9.0/node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var idlFactory = function idlFactory(_ref) {
  var IDL = _ref.IDL;
  var Wallet = IDL.Text;
  var PeopleUpdate = IDL.Record({
    'name': IDL.Text,
    'wallet': Wallet
  });
  var ID = IDL.Principal;
  var People = IDL.Record({
    'id': ID,
    'name': IDL.Text,
    'wallet': Wallet
  });
  var Error = IDL.Variant({
    'WrongCaller': IDL.Null,
    'NotFound': IDL.Null,
    'NotAuthorized': IDL.Null,
    'AlreadyExists': IDL.Null
  });
  var Result = IDL.Variant({
    'ok': People,
    'err': Error
  });
  var Result_1 = IDL.Variant({
    'ok': IDL.Bool,
    'err': Error
  });
  var BuyMeCoffee = IDL.Service({
    'create': IDL.Func([PeopleUpdate], [Result], []),
    'delete': IDL.Func([], [Result_1], []),
    'ping': IDL.Func([], [IDL.Principal], []),
    'read': IDL.Func([], [Result], ['query']),
    'update': IDL.Func([PeopleUpdate], [Result], [])
  });
  return BuyMeCoffee;
};
var init = function init(_ref2) {
  var IDL = _ref2.IDL;
  return [];
};

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          false
        ) {}

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              false
            ) {}
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "./src/components/LoginModal.tsx":
/*!***************************************!*\
  !*** ./src/components/LoginModal.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModal": function() { return /* binding */ LoginModal; }
/* harmony export */ });
/* harmony import */ var _douyinfe_semi_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @douyinfe/semi-icons */ "./node_modules/.pnpm/@douyinfe+semi-icons@2.1.5_react@17.0.2/node_modules/@douyinfe/semi-icons/lib/es/index.js");
/* harmony import */ var _douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @douyinfe/semi-ui */ "./node_modules/.pnpm/@douyinfe+semi-ui@2.1.5_d5c215a71cdc3853e6673ca67dc4c091/node_modules/@douyinfe/semi-ui/lib/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.4.3_ae75bc417ac79cbd267eecc96dd519d8/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.4.3_ae75bc417ac79cbd267eecc96dd519d8/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/.pnpm/react-refresh@0.9.0/node_modules/react-refresh/runtime.js */ "./node_modules/.pnpm/react-refresh@0.9.0/node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _jsxFileName = "/Users/ghostcorn/dev/buy_me_coffee/src/components/LoginModal.tsx",
    _this = undefined;




var LoginModal = function LoginModal(_ref) {
  var logout = _ref.logout,
      setModalVisible = _ref.setModalVisible,
      modalVisible = _ref.modalVisible,
      principal = _ref.principal,
      wallet = _ref.wallet,
      name = _ref.name;
  var btnStyle = {
    // width: 240,
    margin: '4px 0px 20px',
    padding: '30px 120px'
  };

  var footer = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    style: {
      textAlign: 'center'
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
      type: "danger",
      theme: "solid",
      onClick: logout,
      style: btnStyle,
      children: "Logging out"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
      type: "primary",
      theme: "borderless",
      onClick: function onClick() {
        return setModalVisible(false);
      },
      style: btnStyle,
      children: "Next time"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, _this);

  var data = [{
    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_douyinfe_semi_icons__WEBPACK_IMPORTED_MODULE_0__.IconUserCircle, {
      style: {
        fontSize: 48,
        color: 'var(--semi-color-text-1)'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, _this),
    title: 'You Principal ID is :',
    content: principal
  }, {
    icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_douyinfe_semi_icons__WEBPACK_IMPORTED_MODULE_0__.IconMoneyExchangeStroked, {
      style: {
        fontSize: 48,
        color: 'var(--semi-color-text-1)'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }, _this),
    title: 'Your Wallet Address is ',
    content: wallet
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    header: null,
    visible: modalVisible,
    onOk: logout,
    onCancel: function onCancel() {
      setModalVisible(false);
    },
    footer: footer,
    style: {
      width: '100%',
      padding: '0 20px',
      maxWidth: 440
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
      style: {
        textAlign: 'center',
        fontSize: 24,
        margin: 40,
        color: 'var(--semi-color-text-1)'
      },
      children: name !== null && name !== void 0 ? name : 'Unknown Name'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_1__.List, {
      dataSource: data,
      split: false,
      renderItem: function renderItem(item) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
          header: item.icon,
          main: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h6", {
              style: {
                margin: 0,
                fontSize: 16,
                color: 'var(--semi-color-text-1)'
              },
              children: item.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
              style: {
                marginTop: 4,
                color: 'var(--semi-color-text-1)',
                wordBreak: 'break-all'
              },
              children: item.content
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, _this);
};
_c = LoginModal;

var _c;

__webpack_require__.$Refresh$.register(_c, "LoginModal");

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          false
        ) {}

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              false
            ) {}
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "./src/models/app.ts":
/*!***************************!*\
  !*** ./src/models/app.ts ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appModel": function() { return /* binding */ appModel; }
/* harmony export */ });
/* harmony import */ var _modern_js_runtime_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modern-js/runtime/model */ "./node_modules/.pnpm/@modern-js-reduck+store@1.0.1/node_modules/@modern-js-reduck/store/dist/js/treeshaking/model/model.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.4.3_ae75bc417ac79cbd267eecc96dd519d8/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.4.3_ae75bc417ac79cbd267eecc96dd519d8/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/.pnpm/react-refresh@0.9.0/node_modules/react-refresh/runtime.js */ "./node_modules/.pnpm/react-refresh@0.9.0/node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);


var appModel = (0,_modern_js_runtime_model__WEBPACK_IMPORTED_MODULE_0__["default"])('appModel').define({
  state: {
    actor: undefined,
    principal: 'unknown',
    wallet: 'unknown',
    name: undefined,
    isAuth: false
  }
});

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          false
        ) {}

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              false
            ) {}
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "./src/pages/Dashboard/index.tsx":
/*!***************************************!*\
  !*** ./src/pages/Dashboard/index.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dashboard": function() { return /* binding */ Dashboard; }
/* harmony export */ });
/* harmony import */ var _Users_ghostcorn_dev_buy_me_coffee_node_modules_pnpm_babel_runtime_7_16_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.16.5/node_modules/@babel/runtime/regenerator */ "./node_modules/.pnpm/@babel+runtime@7.16.5/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_ghostcorn_dev_buy_me_coffee_node_modules_pnpm_babel_runtime_7_16_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_ghostcorn_dev_buy_me_coffee_node_modules_pnpm_babel_runtime_7_16_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modern_js_runtime_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modern-js/runtime/model */ "./node_modules/.pnpm/@modern-js-reduck+react@1.0.1_react@17.0.2/node_modules/@modern-js-reduck/react/dist/js/treeshaking/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _models_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/app */ "./src/models/app.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.4.3_ae75bc417ac79cbd267eecc96dd519d8/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.4.3_ae75bc417ac79cbd267eecc96dd519d8/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/.pnpm/react-refresh@0.9.0/node_modules/react-refresh/runtime.js */ "./node_modules/.pnpm/react-refresh@0.9.0/node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _jsxFileName = "/Users/ghostcorn/dev/buy_me_coffee/src/pages/Dashboard/index.tsx",
    _this = undefined,
    _s2 = __webpack_require__.$Refresh$.signature();



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Dashboard = function Dashboard() {
  _s2();

  var _useModel = (0,_modern_js_runtime_model__WEBPACK_IMPORTED_MODULE_4__.useModel)(_models_app__WEBPACK_IMPORTED_MODULE_2__.appModel),
      _useModel2 = _slicedToArray(_useModel, 1),
      state = _useModel2[0];

  var actor = state.actor;

  var getAllPeople = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_Users_ghostcorn_dev_buy_me_coffee_node_modules_pnpm_babel_runtime_7_16_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _Users_ghostcorn_dev_buy_me_coffee_node_modules_pnpm_babel_runtime_7_16_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              actor === null || actor === void 0 ? void 0 : actor.ping();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getAllPeople() {
      return _ref.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    _asyncToGenerator( /*#__PURE__*/_Users_ghostcorn_dev_buy_me_coffee_node_modules_pnpm_babel_runtime_7_16_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      return _Users_ghostcorn_dev_buy_me_coffee_node_modules_pnpm_babel_runtime_7_16_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return getAllPeople();

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }, [actor]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    style: {
      borderRadius: '10px',
      border: '1px solid var(--semi-color-border)',
      flex: 1,
      padding: '32px'
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
      children: "list"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, _this);
};

_s2(Dashboard, "EcIT5Q+UQvCRElYDBtRQQQRq+fU=", false, function () {
  return [_modern_js_runtime_model__WEBPACK_IMPORTED_MODULE_4__.useModel];
});

_c = Dashboard;

var _c;

__webpack_require__.$Refresh$.register(_c, "Dashboard");

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          false
        ) {}

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              false
            ) {}
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "./src/pages/Empty/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/Empty/index.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyPage": function() { return /* binding */ EmptyPage; }
/* harmony export */ });
/* harmony import */ var _douyinfe_semi_illustrations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @douyinfe/semi-illustrations */ "./node_modules/.pnpm/@douyinfe+semi-illustrations@2.1.5_react@17.0.2/node_modules/@douyinfe/semi-illustrations/lib/es/index.js");
/* harmony import */ var _douyinfe_semi_illustrations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_douyinfe_semi_illustrations__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @douyinfe/semi-ui */ "./node_modules/.pnpm/@douyinfe+semi-ui@2.1.5_d5c215a71cdc3853e6673ca67dc4c091/node_modules/@douyinfe/semi-ui/lib/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.4.3_ae75bc417ac79cbd267eecc96dd519d8/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.4.3_ae75bc417ac79cbd267eecc96dd519d8/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/.pnpm/react-refresh@0.9.0/node_modules/react-refresh/runtime.js */ "./node_modules/.pnpm/react-refresh@0.9.0/node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _jsxFileName = "/Users/ghostcorn/dev/buy_me_coffee/src/pages/Empty/index.tsx",
    _this = undefined;




var EmptyPage = function EmptyPage(_ref) {
  var login = _ref.login;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_1__.Empty, {
    image: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_douyinfe_semi_illustrations__WEBPACK_IMPORTED_MODULE_0__.IllustrationNoContent, {
      style: {
        width: 150,
        height: 150
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 12
    }, _this),
    style: {
      marginTop: 64
    },
    darkModeImage: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_douyinfe_semi_illustrations__WEBPACK_IMPORTED_MODULE_0__.IllustrationNoContentDark, {
      style: {
        width: 150,
        height: 150
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this),
    title: "Something Awesome Is Here",
    description: "Hop in to get started",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      style: {
        textAlign: 'center'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
        style: {
          marginTop: 32,
          padding: '32px 80px',
          fontSize: 20,
          borderRadius: 32
        },
        theme: "solid",
        size: "large",
        type: "primary",
        onClick: login,
        children: "Sign In With ME"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 3
  }, _this);
};
_c = EmptyPage;

var _c;

__webpack_require__.$Refresh$.register(_c, "EmptyPage");

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          false
        ) {}

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              false
            ) {}
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "./src/pages/Layout/MainLayout.tsx":
/*!*****************************************!*\
  !*** ./src/pages/Layout/MainLayout.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainLayout": function() { return /* binding */ MainLayout; }
/* harmony export */ });
/* harmony import */ var _Users_ghostcorn_dev_buy_me_coffee_node_modules_pnpm_babel_runtime_7_16_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.16.5/node_modules/@babel/runtime/regenerator */ "./node_modules/.pnpm/@babel+runtime@7.16.5/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_ghostcorn_dev_buy_me_coffee_node_modules_pnpm_babel_runtime_7_16_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_ghostcorn_dev_buy_me_coffee_node_modules_pnpm_babel_runtime_7_16_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _astrox_connection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @astrox/connection */ "./node_modules/.pnpm/@astrox+connection@0.0.31/node_modules/@astrox/connection/lib/esm/index.js");
/* harmony import */ var _astrox_connection_lib_cjs_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @astrox/connection/lib/cjs/types */ "./node_modules/.pnpm/@astrox+connection@0.0.31/node_modules/@astrox/connection/lib/cjs/types/index.js");
/* harmony import */ var _douyinfe_semi_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @douyinfe/semi-icons */ "./node_modules/.pnpm/@douyinfe+semi-icons@2.1.5_react@17.0.2/node_modules/@douyinfe/semi-icons/lib/es/index.js");
/* harmony import */ var _douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @douyinfe/semi-ui */ "./node_modules/.pnpm/@douyinfe+semi-ui@2.1.5_d5c215a71cdc3853e6673ca67dc4c091/node_modules/@douyinfe/semi-ui/lib/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _modern_js_runtime_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @modern-js/runtime/router */ "./node_modules/.pnpm/react-router@5.2.1_react@17.0.2/node_modules/react-router/esm/react-router.js");
/* harmony import */ var _modern_js_runtime_model__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @modern-js/runtime/model */ "./node_modules/.pnpm/@modern-js-reduck+react@1.0.1_react@17.0.2/node_modules/@modern-js-reduck/react/dist/js/treeshaking/index.js");
/* harmony import */ var _components_LoginModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/LoginModal */ "./src/components/LoginModal.tsx");
/* harmony import */ var _Register__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Register */ "./src/pages/Register/index.tsx");
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Dashboard */ "./src/pages/Dashboard/index.tsx");
/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Empty */ "./src/pages/Empty/index.tsx");
/* harmony import */ var _canisters_buymecoffee__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/canisters/buymecoffee */ "./src/canisters/buymecoffee/index.js");
/* harmony import */ var _models_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/models/app */ "./src/models/app.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js */ "./node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.4.3_ae75bc417ac79cbd267eecc96dd519d8/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.4.3_ae75bc417ac79cbd267eecc96dd519d8/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/.pnpm/react-refresh@0.9.0/node_modules/react-refresh/runtime.js */ "./node_modules/.pnpm/react-refresh@0.9.0/node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _jsxFileName = "/Users/ghostcorn/dev/buy_me_coffee/src/pages/Layout/MainLayout.tsx",
    _this = undefined,
    _s2 = __webpack_require__.$Refresh$.signature();



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var Header = _douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_4__.Layout.Header,
    Footer = _douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_4__.Layout.Footer,
    Content = _douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_4__.Layout.Content;
var Title = _douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_4__.Typography.Title;
var MainLayout = function MainLayout(children) {
  _s2();

  var _document = document,
      body = _document.body;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)('unknown'),
      _useState2 = _slicedToArray(_useState, 2),
      principal = _useState2[0],
      setPrincipal = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)('unknown'),
      _useState4 = _slicedToArray(_useState3, 2),
      wallet = _useState4[0],
      setWallet = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isAuth = _useState6[0],
      setIsAuth = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(undefined),
      _useState8 = _slicedToArray(_useState7, 2),
      name = _useState8[0],
      setName = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(window.ic),
      _useState10 = _slicedToArray(_useState9, 2),
      ic = _useState10[0],
      setIC = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(!body.hasAttribute('theme-mode')),
      _useState12 = _slicedToArray(_useState11, 2),
      isLight = _useState12[0],
      setIsLight = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false),
      _useState14 = _slicedToArray(_useState13, 2),
      modalVisible = _useState14[0],
      setModalVisible = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(undefined),
      _useState16 = _slicedToArray(_useState15, 2),
      actor = _useState16[0],
      setActor = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(undefined),
      _useState18 = _slicedToArray(_useState17, 2),
      people = _useState18[0],
      setPeople = _useState18[1];

  var history = (0,_modern_js_runtime_router__WEBPACK_IMPORTED_MODULE_13__.useHistory)();

  var _useModel = (0,_modern_js_runtime_model__WEBPACK_IMPORTED_MODULE_14__.useModel)(_models_app__WEBPACK_IMPORTED_MODULE_11__.appModel),
      _useModel2 = _slicedToArray(_useModel, 2),
      state = _useModel2[0],
      actions = _useModel2[1];

  var login = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_Users_ghostcorn_dev_buy_me_coffee_node_modules_pnpm_babel_runtime_7_16_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _Users_ghostcorn_dev_buy_me_coffee_node_modules_pnpm_babel_runtime_7_16_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _astrox_connection__WEBPACK_IMPORTED_MODULE_1__.IC.connect({
                walletProviderUrl: 'http://localhost:8080/transaction',
                // "https://63k2f-nyaaa-aaaah-aakla-cai.raw.ic0.app/transaction",
                identityProvider: 'http://localhost:8080/login#authorize',
                // 'https://63k2f-nyaaa-aaaah-aakla-cai.raw.ic0.app/login#authorize',
                permissions: [_astrox_connection_lib_cjs_types__WEBPACK_IMPORTED_MODULE_2__.PermissionsType.identity, _astrox_connection_lib_cjs_types__WEBPACK_IMPORTED_MODULE_2__.PermissionsType.wallet],
                onAuthenticated: function onAuthenticated(icInstance) {
                  var _window$ic, _thisIC$wallet, _thisIC$wallet2;

                  var thisIC = (_window$ic = window.ic) !== null && _window$ic !== void 0 ? _window$ic : icInstance;
                  setPrincipal(thisIC.principal.toText());
                  setWallet((_thisIC$wallet = thisIC.wallet) !== null && _thisIC$wallet !== void 0 ? _thisIC$wallet : 'unknown');
                  setIsAuth(true);
                  actions.setPrincipal(thisIC.principal.toText());
                  actions.setWallet((_thisIC$wallet2 = thisIC.wallet) !== null && _thisIC$wallet2 !== void 0 ? _thisIC$wallet2 : 'unknown');
                  actions.setIsAuth(true);
                  setIC(thisIC);
                  var thisActor = icInstance.createActor(_canisters_buymecoffee__WEBPACK_IMPORTED_MODULE_10__.idlFactory, 'q3fc5-haaaa-aaaaa-aaahq-cai');
                  setActor(thisActor);
                  actions.setActor(thisActor);
                }
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function login() {
      return _ref.apply(this, arguments);
    };
  }();

  var logout = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_Users_ghostcorn_dev_buy_me_coffee_node_modules_pnpm_babel_runtime_7_16_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
      return _Users_ghostcorn_dev_buy_me_coffee_node_modules_pnpm_babel_runtime_7_16_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return ic.disconnect();

            case 2:
              setDefault();
              history.push('/empty');

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function logout() {
      return _ref2.apply(this, arguments);
    };
  }();

  var setDefault = function setDefault() {
    setPrincipal('unknown');
    setWallet('unknown');
    setIsAuth(false);
    setName(undefined);
    actions.setPrincipal('unknown');
    actions.setWallet('unknown');
    actions.setIsAuth(false);
    setPeople(undefined);
    setModalVisible(false);
  };

  var switchMode = function switchMode() {
    if (body.hasAttribute('theme-mode')) {
      body.removeAttribute('theme-mode');
      setIsLight(true);
    } else {
      body.setAttribute('theme-mode', 'dark');
      setIsLight(false);
    }
  };

  var getPeople = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_Users_ghostcorn_dev_buy_me_coffee_node_modules_pnpm_babel_runtime_7_16_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
      var result;
      return _Users_ghostcorn_dev_buy_me_coffee_node_modules_pnpm_babel_runtime_7_16_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return actor === null || actor === void 0 ? void 0 : actor.read();

            case 3:
              result = _context3.sent;

              if (!(result !== undefined && result.ok !== undefined)) {
                _context3.next = 9;
                break;
              }

              setPeople(result.ok);
              return _context3.abrupt("return", result.ok);

            case 9:
              setPeople(undefined);
              return _context3.abrupt("return", undefined);

            case 11:
              _context3.next = 16;
              break;

            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](0);
              throw _context3.t0;

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 13]]);
    }));

    return function getPeople() {
      return _ref3.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    if (sessionStorage.getItem('ic-delegation') !== null) {
      console.log('asdfasfasd');

      _asyncToGenerator( /*#__PURE__*/_Users_ghostcorn_dev_buy_me_coffee_node_modules_pnpm_babel_runtime_7_16_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4() {
        return _Users_ghostcorn_dev_buy_me_coffee_node_modules_pnpm_babel_runtime_7_16_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log('hjjjj');
                _context4.next = 3;
                return login();

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    } else {
      console.log('123123123');
      history.push('/empty');
    }

    console.log('4564564564'); // console.log('lllll');
    // setDefault();
    // console.log('456');
    // history.push('/empty');
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    if (actor !== undefined) {
      if (isAuth) {
        if (!people) {
          _asyncToGenerator( /*#__PURE__*/_Users_ghostcorn_dev_buy_me_coffee_node_modules_pnpm_babel_runtime_7_16_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5() {
            var result;
            return _Users_ghostcorn_dev_buy_me_coffee_node_modules_pnpm_babel_runtime_7_16_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return getPeople();

                  case 2:
                    result = _context5.sent;

                    if (!result) {
                      history.push('/register');
                    } else {
                      actions.setPrincipal(result.id.toText());
                      actions.setWallet(result.wallet);
                      actions.setName(result.name);
                      setName(result.name);
                      history.push('/dashboard');
                    }

                  case 4:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }))();
        } else {
          console.log('234234234234');
          actions.setPrincipal(people.id.toText());
          actions.setWallet(people.wallet);
          actions.setName(people.name);
          setName(people.name);
          history.push('/dashboard');
        }
      }
    }
  }, [actor]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_4__.Layout, {
    style: {
      position: 'fixed',
      height: '100%',
      width: '100%',
      padding: 0,
      margin: 0
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(Header, {
      style: {
        backgroundColor: 'var(--semi-color-bg-1)'
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_4__.Nav, {
          mode: "horizontal",
          defaultSelectedKeys: ['Home'],
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_4__.Nav.Header, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_douyinfe_semi_icons__WEBPACK_IMPORTED_MODULE_3__.IconSemiLogo, {
              style: {
                fontSize: 36
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_4__.Nav.Item, {
            itemKey: "Home",
            text: "\u9996\u9875",
            icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_douyinfe_semi_icons__WEBPACK_IMPORTED_MODULE_3__.IconHome, {
              size: "large"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 201,
              columnNumber: 21
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_4__.Nav.Footer, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
              theme: "borderless",
              icon: isLight ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_douyinfe_semi_icons__WEBPACK_IMPORTED_MODULE_3__.IconSun, {
                size: "large"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 29
              }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_douyinfe_semi_icons__WEBPACK_IMPORTED_MODULE_3__.IconMoon, {
                size: "large"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 56
              }, _this),
              style: {
                color: 'var(--semi-color-text-2)',
                marginRight: '12px'
              },
              onClick: switchMode
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
              onClick: isAuth ? function () {
                return setModalVisible(true);
              } : login,
              children: isAuth ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_4__.Avatar, {
                color: name !== undefined ? 'blue' : 'orange',
                size: "small",
                children: name !== undefined ? name.substring(0, 2).toUpperCase() : 'NA'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 217,
                columnNumber: 19
              }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_douyinfe_semi_icons__WEBPACK_IMPORTED_MODULE_3__.IconUser, {
                size: "small"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 225,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(Content, {
      style: {
        padding: '24px',
        backgroundColor: 'var(--semi-color-bg-0)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'flex-start'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_modern_js_runtime_router__WEBPACK_IMPORTED_MODULE_13__.Switch, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_modern_js_runtime_router__WEBPACK_IMPORTED_MODULE_13__.Route, {
          exact: true,
          path: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_Dashboard__WEBPACK_IMPORTED_MODULE_8__.Dashboard, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 243,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_modern_js_runtime_router__WEBPACK_IMPORTED_MODULE_13__.Route, {
          path: "/empty",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_Empty__WEBPACK_IMPORTED_MODULE_9__.EmptyPage, {
            login: login
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 246,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_modern_js_runtime_router__WEBPACK_IMPORTED_MODULE_13__.Route, {
          path: "/dashboard",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_Dashboard__WEBPACK_IMPORTED_MODULE_8__.Dashboard, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_modern_js_runtime_router__WEBPACK_IMPORTED_MODULE_13__.Route, {
          path: "/register",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_Register__WEBPACK_IMPORTED_MODULE_7__.Register, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 252,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_modern_js_runtime_router__WEBPACK_IMPORTED_MODULE_13__.Route, {
          path: "*",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("div", {
            children: "404"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 255,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_LoginModal__WEBPACK_IMPORTED_MODULE_6__.LoginModal, {
        logout: logout,
        setModalVisible: setModalVisible,
        modalVisible: modalVisible,
        name: name,
        principal: principal,
        wallet: wallet
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(Footer, {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
        color: 'var(--semi-color-text-2)',
        backgroundColor: 'rgba(var(--semi-grey-0), 1)'
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("span", {
        style: {
          display: 'flex',
          alignItems: 'center'
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_douyinfe_semi_icons__WEBPACK_IMPORTED_MODULE_3__.IconCode, {
          size: "large",
          style: {
            marginRight: '8px'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("span", {
          children: "Copyright \xA9 2021 AstroX.Network. All Rights Reserved. "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("span", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("span", {
          style: {
            marginRight: '24px'
          },
          children: "Github"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)("span", {
          children: "Twitter"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 184,
    columnNumber: 5
  }, _this);
};

_s2(MainLayout, "jBCHkTEDLehSiagoscfKc9lEbJM=", false, function () {
  return [_modern_js_runtime_router__WEBPACK_IMPORTED_MODULE_13__.useHistory, _modern_js_runtime_model__WEBPACK_IMPORTED_MODULE_14__.useModel];
});

_c = MainLayout;

var _c;

__webpack_require__.$Refresh$.register(_c, "MainLayout");

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          false
        ) {}

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              false
            ) {}
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "./src/pages/Register/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/Register/index.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Register": function() { return /* binding */ Register; }
/* harmony export */ });
/* harmony import */ var _Users_ghostcorn_dev_buy_me_coffee_node_modules_pnpm_babel_runtime_7_16_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/.pnpm/@babel+runtime@7.16.5/node_modules/@babel/runtime/regenerator */ "./node_modules/.pnpm/@babel+runtime@7.16.5/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_ghostcorn_dev_buy_me_coffee_node_modules_pnpm_babel_runtime_7_16_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_ghostcorn_dev_buy_me_coffee_node_modules_pnpm_babel_runtime_7_16_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @douyinfe/semi-ui */ "./node_modules/.pnpm/@douyinfe+semi-ui@2.1.5_d5c215a71cdc3853e6673ca67dc4c091/node_modules/@douyinfe/semi-ui/lib/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _modern_js_runtime_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modern-js/runtime/model */ "./node_modules/.pnpm/@modern-js-reduck+react@1.0.1_react@17.0.2/node_modules/@modern-js-reduck/react/dist/js/treeshaking/index.js");
/* harmony import */ var _models_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/app */ "./src/models/app.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/.pnpm/react@17.0.2/node_modules/react/jsx-dev-runtime.js");
/* provided dependency */ var console = __webpack_require__(/*! ./node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js */ "./node_modules/.pnpm/console-browserify@1.2.0/node_modules/console-browserify/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.4.3_ae75bc417ac79cbd267eecc96dd519d8/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.4.3_ae75bc417ac79cbd267eecc96dd519d8/node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/.pnpm/react-refresh@0.9.0/node_modules/react-refresh/runtime.js */ "./node_modules/.pnpm/react-refresh@0.9.0/node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.id);

var _jsxFileName = "/Users/ghostcorn/dev/buy_me_coffee/src/pages/Register/index.tsx",
    _this = undefined,
    _s2 = __webpack_require__.$Refresh$.signature();



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var Register = function Register() {
  _s2();

  var _useModel = (0,_modern_js_runtime_model__WEBPACK_IMPORTED_MODULE_5__.useModel)(_models_app__WEBPACK_IMPORTED_MODULE_3__.appModel),
      _useModel2 = _slicedToArray(_useModel, 1),
      state = _useModel2[0];

  var actor = state.actor,
      wallet = state.wallet,
      principal = state.principal;

  var registerPeople = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_Users_ghostcorn_dev_buy_me_coffee_node_modules_pnpm_babel_runtime_7_16_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(values) {
      var result;
      return _Users_ghostcorn_dev_buy_me_coffee_node_modules_pnpm_babel_runtime_7_16_5_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return actor === null || actor === void 0 ? void 0 : actor.create({
                name: values.name,
                wallet: values.wallet
              });

            case 2:
              result = _context.sent;
              console.log({
                result: result
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function registerPeople(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      walletFormApi = _useState2[0],
      setWalletFormApi = _useState2[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_1__.Typography.Title, {
      children: "Name Yourself"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_1__.Form, {
      onSubmit: function onSubmit(values) {
        return registerPeople(values);
      },
      initValues: {
        wallet: wallet,
        principal: principal
      },
      style: {
        width: '100%'
      },
      getFormApi: function getFormApi(formApi) {
        setWalletFormApi(formApi);
      },
      children: function children(_ref2) {
        var formState = _ref2.formState,
            values = _ref2.values,
            formApi = _ref2.formApi;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
            field: "name",
            label: "Name",
            style: {
              width: '100%',
              maxWidth: 400
            },
            disabled: false,
            required: true,
            placeholder: "Enter your name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
            field: "principal",
            label: "Principal ID",
            style: {
              width: '100%',
              maxWidth: 400
            },
            disabled: true,
            placeholder: "Your Principal ID"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
            field: "wallet",
            label: "Wallet",
            style: {
              width: '100%',
              maxWidth: 400
            },
            disabled: true,
            placeholder: "Your Wallet Address"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_1__.Form.Checkbox, {
            field: "agree",
            noLabel: true,
            children: "I have read and agree to the terms of service"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_douyinfe_semi_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {
              disabled: !values.agree,
              htmlType: "submit",
              type: "tertiary",
              children: "Sign Me Up"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, _this)]
        }, void 0, true);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s2(Register, "dR+LVyMShNxs7FEZ5v/ZwRelxxo=", false, function () {
  return [_modern_js_runtime_model__WEBPACK_IMPORTED_MODULE_5__.useModel];
});

_c = Register;

var _c;

__webpack_require__.$Refresh$.register(_c, "Register");

const currentExports = __react_refresh_utils__.getModuleExports(module.id);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.id);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          false
        ) {}

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.id].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              false
            ) {}
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1640092964709
      var cssReload = __webpack_require__(/*! ./node_modules/.pnpm/mini-css-extract-plugin@2.4.5_webpack@5.65.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/.pnpm/mini-css-extract-plugin@2.4.5_webpack@5.65.0/node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),

/***/ "?9f2f":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "?fbbb":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ "?4c6f":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (function() {

/* (ignored) */

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_pnpm_astrox_connection_0_0_31_node_modules_astrox_connection_lib_cjs_typ-e57cb2"], function() { return __webpack_exec__("./node_modules/.pnpm/@modern-js+hmr-client@1.1.1_typescript@4.5.4/node_modules/@modern-js/hmr-client/dist/js/node/index.js?&host=localhost&path=/_modern_js_hmr_ws&port=8081"), __webpack_exec__("./node_modules/.pnpm/webpack@5.65.0/node_modules/webpack/hot/dev-server.js"), __webpack_exec__("./node_modules/.pnpm/@pmmmwh+react-refresh-webpack-plugin@0.4.3_ae75bc417ac79cbd267eecc96dd519d8/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js"), __webpack_exec__("./node_modules/.pnpm/core-js@3.20.0/node_modules/core-js/index.js"), __webpack_exec__("./node_modules/.pnpm/regenerator-runtime@0.13.9/node_modules/regenerator-runtime/runtime.js"), __webpack_exec__("./node_modules/.modern-js/main/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map